# DevOps Institute — Website Source (Handoff for Developer)

Local training-institute website for **DevOps Institute - AWS, Azure & GCP Course**, Powai/Chandivali, Mumbai.

Stack: **React (frontend)** + **FastAPI (backend)** + **MongoDB**.
The site is mostly a static marketing site; the only dynamic piece is the **student enquiry form** (`POST /api/enquiries`) which stores leads in MongoDB.

---

## Folder structure
```
frontend/     React app (UI, all pages, campus photos + videos, SEO)
backend/      FastAPI app (enquiry API + MongoDB)
design_guidelines.json   Theme/colour/typography reference
```
Real media lives in:
- `frontend/public/campus/`  — campus photos
- `frontend/public/videos/`  — Instagram reels + poster images

---

## 1) Frontend (React)

### Requirements
- Node.js 18+ and Yarn

### Configure
Create `frontend/.env`:
```
REACT_APP_BACKEND_URL=https://api.YOURDOMAIN.com
```
(Point this at wherever the backend/API is hosted. It must be reachable over HTTPS.)

### Install & build
```bash
cd frontend
yarn install
yarn build          # outputs a static site in frontend/build
```
Host the `frontend/build` folder on any static host / web server (Nginx, Netlify, Vercel, S3+CloudFront, etc.).

> Note: All backend API routes are prefixed with `/api`. If you host frontend and backend on the same domain, proxy `/api/*` to the FastAPI service.

---

## 2) Backend (FastAPI + MongoDB)

### Requirements
- Python 3.11+
- A MongoDB database (Atlas or self-hosted)

### Configure
Create `backend/.env`:
```
MONGO_URL=mongodb+srv://USER:PASS@your-cluster/...
DB_NAME=devops_institute
CORS_ORIGINS=https://YOURDOMAIN.com
```

### Install & run
```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --host 0.0.0.0 --port 8001
```
Put it behind Nginx/Gunicorn for production and expose it at the URL you set in `REACT_APP_BACKEND_URL`.

### API
- `GET  /api/health`      health check
- `POST /api/enquiries`   accepts `{ name, phone, email, course, message, source }` and stores the lead

---

## 3) Business details (already baked into the site)
- **Name:** DevOps Institute - AWS, Azure & GCP Course
- **Address:** Lodha Supremus, B 1307, Saki Vihar Rd, Tunga Village, Chandivali, Powai, Mumbai, Maharashtra 400072
- **Phone:** 083695 18569
- **WhatsApp:** +91 8369518569
- **Instagram:** https://www.instagram.com/devopsinstituteinmumbai/

To change any of these, edit `frontend/src/data/site.js` (single source of truth) and rebuild.

---

## 4) SEO notes
- Per-page meta titles/descriptions are set via `frontend/src/components/Seo.jsx`.
- JSON-LD (LocalBusiness / EducationalOrganization / Course / FAQ) is generated in `frontend/src/data/site.js`.
- Static SEO files: `frontend/public/robots.txt`, `frontend/public/sitemap.xml`, `frontend/public/llms.txt` — update the domain URLs inside these after go-live.
