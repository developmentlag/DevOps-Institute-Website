from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import re
import uuid
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

app = FastAPI()
api_router = APIRouter(prefix="/api")


class AttributionFields(BaseModel):
    """Marketing source captured in the browser. All optional so older forms still submit."""

    utm_source: str = Field(default="", max_length=300)
    utm_medium: str = Field(default="", max_length=300)
    utm_campaign: str = Field(default="", max_length=300)
    utm_term: str = Field(default="", max_length=300)
    utm_content: str = Field(default="", max_length=300)
    gclid: str = Field(default="", max_length=500)
    gbraid: str = Field(default="", max_length=500)
    wbraid: str = Field(default="", max_length=500)
    fbclid: str = Field(default="", max_length=500)
    referrer: str = Field(default="", max_length=500)
    landing_page: str = Field(default="", max_length=500)
    first_utm_source: str = Field(default="", max_length=300)
    first_utm_medium: str = Field(default="", max_length=300)
    first_utm_campaign: str = Field(default="", max_length=300)
    first_utm_term: str = Field(default="", max_length=300)
    first_utm_content: str = Field(default="", max_length=300)
    first_gclid: str = Field(default="", max_length=500)
    first_gbraid: str = Field(default="", max_length=500)
    first_wbraid: str = Field(default="", max_length=500)
    first_fbclid: str = Field(default="", max_length=500)
    first_referrer: str = Field(default="", max_length=500)
    first_landing_page: str = Field(default="", max_length=500)


class EnquiryCreate(AttributionFields):
    name: str = Field(min_length=2, max_length=100)
    phone: str = Field(min_length=8, max_length=20)
    email: Optional[str] = ""
    course: str = "General Enquiry"
    message: Optional[str] = ""
    source: Optional[str] = "website"


class Enquiry(AttributionFields):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: str = ""
    course: str
    message: str = ""
    source: str = "website"
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


@api_router.get("/")
async def root():
    return {"message": "DevOps Institute API"}


@api_router.get("/health")
async def health():
    return {"status": "ok"}


@api_router.post("/enquiries", response_model=Enquiry)
async def create_enquiry(input: EnquiryCreate):
    if not re.fullmatch(r"[0-9+\-\s()]{8,20}", input.phone):
        raise HTTPException(status_code=422, detail="Please enter a valid phone number")
    enquiry = Enquiry(**input.model_dump())
    await db.enquiries.insert_one(enquiry.model_dump())
    return enquiry


@api_router.get("/enquiries", response_model=List[Enquiry])
async def list_enquiries():
    return await db.enquiries.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
