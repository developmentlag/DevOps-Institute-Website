import { WHATSAPP_NUMBER } from "@/data/site";

export const DEMO_BOOKING_PATH = "/free-demo-powai";
export const DEMO_WHATSAPP_URL =
  "https://wa.me/918369518569?text=Hi%20DevOps%20Institute%20Powai%2C%20I%20want%20to%20book%20a%20Free%20Demo%20Class.";
export const GOOGLE_REVIEWS_BADGE = "Rated 4.7★ by Mumbai & Thane Students on Google";

export const DEMO_TRACKS = ["AI & Cloud DevOps", "AWS DevOps", "Azure DevOps", "Kubernetes"];
export const DEMO_STATUSES = ["Student", "Fresher", "Working Professional"];
export const DEMO_SLOTS = ["This Weekend", "Weekday Counselling"];

const whatsappFor = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

const awsFaqs = [
  {
    q: "What is the fee for the AWS Cloud & DevOps course in Mumbai?",
    a: "Our program offers flexible installment and EMI plans starting at ₹12,500/month. You can book a free counselling session at our Powai campus for the complete fee breakdown.",
  },
  {
    q: "Do I need coding experience before joining the AWS course?",
    a: "No prior software development experience is required. We start from Linux, networking, and basic scripting fundamentals before moving into AWS architecture and Terraform automation.",
  },
  {
    q: "Does this course prepare me for AWS Certifications?",
    a: "Yes. The syllabus covers 100% of the exam blueprints for AWS Certified Cloud Practitioner (CLF-C02) and AWS Certified Solutions Architect – Associate (SAA-C03), including practice mock tests.",
  },
  {
    q: "How does the 5 Tier-1 Interviews Assured process work?",
    a: "Once you complete 80% of classroom/lab sessions, finish 3 capstone AWS projects, and clear our internal technical mock interview, our placement cell schedules a minimum of 5 interviews with verified Tier-1 IT companies and product startups in Mumbai, Pune, and Bangalore.",
  },
];

const azureFaqs = [
  {
    q: "Is this course suitable for beginners starting with AZ-900?",
    a: "Yes. We begin with Azure Fundamentals (AZ-900) concepts and progress step-by-step into Azure Administration (AZ-104) and Azure DevOps (AZ-400), making it ideal for both freshers and Windows/Linux system administrators.",
  },
  {
    q: "Are live Azure lab accounts provided during training?",
    a: "Yes, students perform live deployments on Azure Portal, Azure DevOps, and AKS during every lab session under instructor guidance.",
  },
  {
    q: "What are the fees and EMI options for the Azure DevOps program?",
    a: "Fees start at ₹12,500/month with zero-cost installment options. Contact our Powai academic counsellors or book a free demo class for the full brochure.",
  },
];

const kubernetesFaqs = [
  {
    q: "Does this course help me clear the Certified Kubernetes Administrator (CKA) exam?",
    a: "Yes, our lab exercises directly map to CKA domains including cluster architecture, workloads & scheduling, services & networking, storage, and troubleshooting.",
  },
  {
    q: "Can I take this as part of the full DevOps Engineer track?",
    a: "Yes! Kubernetes & Docker are core pillars of our 4-month AI & Cloud DevOps program (EMI starting at ₹12,500/month with 5 Tier-1 Interviews Assured), or can be taken as an accelerated specialization track.",
  },
];

export const OWNER_KEY_PAGES = {
  "/aws-devops-course": {
    path: "/aws-devops-course",
    subheadline:
      "Master Amazon Web Services (AWS) from Cloud Practitioner & Solutions Architect fundamentals to production AWS DevOps automation. 80% hands-on live labs, EMI starting at ₹12,500/month, and 5 Tier-1 Interviews Assured.",
    primaryLabel: "Book a Free AWS Demo Class",
    primaryHref: DEMO_BOOKING_PATH,
    secondaryLabel: "Download AWS Syllabus & Fee Structure",
    secondaryHref: whatsappFor("Download AWS Syllabus & Fee Structure"),
    teaches: [
      "Linux, Networking and Git",
      "Core AWS Infrastructure",
      "AWS Storage, Databases and Serverless",
      "Infrastructure as Code on AWS",
      "Containers and Amazon EKS",
      "AWS CI/CD and DevSecOps",
      "Cloud Monitoring and FinOps",
    ],
    sections: [
      {
        h2: "Why Learn AWS & DevOps Together in Mumbai?",
        paragraphs: [
          "Most IT job descriptions in Mumbai, Powai, and BKC no longer hire for basic cloud administration alone—companies hire engineers who can architect secure AWS infrastructure and automate deployments using CI/CD, Docker, Kubernetes (EKS), and Terraform. Our AWS Cloud & DevOps program bridges the gap between AWS certification theory and real-world production engineering.",
        ],
      },
      {
        h2: "Program Highlights & Key Facts",
        facts: [
          ["Duration", "4 Months (160+ Hours of Live Classroom & Lab Training)"],
          ["Batch Options", "Weekday & Weekend Batches at Powai, Mumbai (Near Hiranandani / Saki Naka)"],
          ["Fees & EMI", "Starting at ₹12,500/month (0% EMI available)"],
          ["Career Assurance", "5 Tier-1 Interviews Assured + 1-on-1 Mock Interviews & Resume Engineering"],
          ["Certifications Aligned", "AWS Certified Cloud Practitioner (CLF-C02), AWS Solutions Architect Associate (SAA-C03), and AWS Certified DevOps Engineer"],
        ],
      },
      {
        h2: "Complete AWS Cloud & DevOps Curriculum",
        modules: [
          ["Module 1: Linux, Networking & Git Foundations", "Shell scripting, TCP/IP, DNS, HTTP/HTTPS, Git branching workflows."],
          ["Module 2: Core AWS Infrastructure", "IAM security policies, VPC design (Subnets, NAT Gateways, Peering, Transit Gateway), EC2, Auto Scaling, Elastic Load Balancing (ALB/NLB)."],
          ["Module 3: AWS Storage, Databases & Serverless", "S3 lifecycle & encryption, EBS, EFS, RDS (Multi-AZ), DynamoDB, AWS Lambda, API Gateway."],
          ["Module 4: Infrastructure as Code on AWS", "Automating multi-tier AWS environments using Terraform and AWS CloudFormation."],
          ["Module 5: Containers & Amazon EKS", "Dockerizing microservices, Amazon ECR, deploying and scaling production clusters on Amazon EKS (Kubernetes)."],
          ["Module 6: AWS CI/CD & DevSecOps", "Building automated pipelines with GitHub Actions, Jenkins, AWS CodePipeline, SonarQube, and Trivy."],
          ["Module 7: Cloud Monitoring & FinOps", "Amazon CloudWatch, Prometheus, Grafana, AWS X-Ray, and AWS cost-optimization best practices."],
        ],
      },
      {
        h2: "Course Comparison: Why Choose DevOps Institute Powai?",
        table: {
          caption: "Course Comparison: Why Choose DevOps Institute Powai?",
          headers: ["Feature", "Self-Paced Recorded Videos", "Generic Coaching Centers", "DevOps Institute (Powai, Mumbai)"],
          rows: [
            ["Hands-On AWS Labs", "Simulated / Sandbox only", "20% Lab, 80% Slides", "80% Live AWS Production Labs"],
            ["Mentorship", "Ticket-based / None", "Freshers as trainers", "Working Cloud & DevOps Architects"],
            ["Placement Support", "Job board links only", "Unverified claims", "5 Tier-1 Interviews Assured"],
            ["Fees & Affordability", "Upfront lump sum", "Hidden exam fees", "Starts at ₹12,500/month (Easy EMI)"],
            ["Local Access", "Online only", "Distant locations", "Powai Classroom + Thane/Vashi Access"],
          ],
        },
      },
      {
        h2: "Verified Alumni Outcomes & Google Reviews",
        reviews: true,
      },
      {
        h2: "Frequently Asked Questions",
        faqs: awsFaqs,
      },
    ],
  },
  "/azure-devops-course": {
    path: "/azure-devops-course",
    subheadline:
      "Build enterprise cloud and CI/CD expertise with live Azure Labs. Aligned with AZ-900, AZ-104, and AZ-400 certifications. EMI starting at ₹12,500/month and 5 Tier-1 Interviews Assured.",
    primaryLabel: "Book a Free Azure Demo Class",
    primaryHref: DEMO_BOOKING_PATH,
    secondaryLabel: "Get Azure Curriculum PDF",
    secondaryHref: whatsappFor("Get Azure Curriculum PDF"),
    teaches: [
      "Azure Fundamentals (AZ-900)",
      "Azure Networking and Compute (AZ-104)",
      "Azure Storage and Databases",
      "Azure DevOps Boards, Repos and Pipelines (AZ-400)",
      "Azure Kubernetes Service and Containers",
      "Infrastructure as Code with Terraform and Bicep",
      "Azure Monitor, Security and Cost Governance",
    ],
    sections: [
      {
        h2: "Why Azure DevOps Skills Are in High Demand Across Mumbai Enterprises",
        paragraphs: [
          "Banking, BFSI, consulting, and enterprise IT firms across Powai, BKC, Lower Parel, and Navi Mumbai run heavily on Microsoft Azure. Mastering Azure Administration (AZ-104) combined with Azure DevOps Pipelines (AZ-400) and Azure Kubernetes Service (AKS) positions you for high-growth roles in enterprise cloud teams.",
        ],
      },
      {
        h2: "Program Highlights & Key Facts",
        facts: [
          ["Duration", "4 Months (160+ Hours Classroom + Live Azure Portal Labs)"],
          ["Location", "Powai Campus, Mumbai (Weekend & Weekday Batches)"],
          ["Fees & EMI", "Starting at ₹12,500/month"],
          ["Career Assurance", "5 Tier-1 Interviews Assured + Dedicated Placement Cell"],
          ["Certification Alignment", "Microsoft Certified: Azure Fundamentals (AZ-900), Azure Administrator (AZ-104), and DevOps Engineer Expert (AZ-400)"],
        ],
      },
      {
        h2: "Module-by-Module Azure & DevOps Syllabus",
        modules: [
          ["Module 1: Azure Fundamentals (AZ-900 Track)", "Cloud concepts, Azure subscriptions, Resource Groups, Entra ID (Azure AD), RBAC governance."],
          ["Module 2: Azure Networking & Compute (AZ-104 Track)", "Virtual Networks (VNet), Subnetting, NSGs, VNet Peering, Azure Virtual Machines, VM Scale Sets, Azure App Services."],
          ["Module 3: Azure Storage & Databases", "Blob Storage, Azure Files, Storage redundancy, Azure SQL Database, Cosmos DB."],
          ["Module 4: Azure DevOps Boards, Repos & Pipelines (AZ-400 Track)", "Agile sprints in Azure Boards, Git repositories, multi-stage YAML CI/CD pipelines, release gates, and artifact management."],
          ["Module 5: Azure Kubernetes Service (AKS) & Containers", "Docker containers, Azure Container Registry (ACR), deploying microservices on AKS, Helm charts, and Ingress controllers."],
          ["Module 6: Infrastructure as Code with Terraform & Bicep", "Provisioning repeatable Azure landing zones using Terraform and Azure Bicep."],
          ["Module 7: Azure Monitor, Security & Cost Governance", "Azure Monitor, Log Analytics, Application Insights, Azure Key Vault, and Defender for Cloud."],
        ],
      },
      {
        h2: "Frequently Asked Questions",
        faqs: azureFaqs,
      },
    ],
  },
  "/kubernetes-docker-course": {
    path: "/kubernetes-docker-course",
    subheadline:
      "Go beyond basic container tutorials. Learn to architect, secure, troubleshoot, and scale production Kubernetes clusters on AWS EKS and Azure AKS. EMI starting at ₹12,500/month.",
    primaryLabel: "Book Free Kubernetes Workshop",
    primaryHref: DEMO_BOOKING_PATH,
    secondaryLabel: "Download Lab Syllabus",
    secondaryHref: whatsappFor("Download Lab Syllabus"),
    teaches: [
      "Docker and container registries",
      "Kubernetes cluster architecture",
      "Workloads, scheduling, storage and networking",
      "Helm and GitOps with ArgoCD",
      "Cluster observability",
    ],
    sections: [
      {
        h2: "Why Production Kubernetes Mastery Sets You Apart",
        paragraphs: [
          "Every modern DevOps, SRE, and Platform Engineering interview in Mumbai tests real Kubernetes troubleshooting—not just `docker run`. This intensive hands-on program prepares you for the Certified Kubernetes Administrator (CKA) standard through real cluster administration labs.",
        ],
      },
      {
        h2: "What You Will Build in Live Labs",
        bullets: [
          "Multi-stage optimized Dockerfiles and private container registries",
          "Multi-node Kubernetes cluster architecture (Control Plane, etcd, kubelet, CNI networking)",
          "Deployments, StatefulSets, DaemonSets, ConfigMaps, Secrets, and Persistent Volumes",
          "Traffic routing with NGINX Ingress Controller, TLS certificates, and Network Policies",
          "Package management with Helm Charts and GitOps deployments using ArgoCD",
          "Cluster observability with Prometheus, Grafana, and EFK logging",
        ],
      },
      {
        h2: "Frequently Asked Questions",
        faqs: kubernetesFaqs,
      },
    ],
  },
  "/free-demo-powai": {
    path: "/free-demo-powai",
    subheadline:
      "Experience our 80% hands-on teaching methodology before you enroll. Sit in a live classroom session, inspect our production cloud labs, review verified Google student reviews, and get a personalized career roadmap.",
    teaches: [
      "Live CI/CD and Kubernetes lab walkthrough",
      "Career and profile audit",
      "Fee, EMI and interview assurance briefing",
    ],
    sections: [
      {
        h2: "What Happens in Your Free 90-Minute Demo Session?",
        steps: [
          ["Live Hands-On Cloud Lab Walkthrough", "See a real CI/CD pipeline deploy a containerized application onto AWS/Kubernetes in real time."],
          ["1-on-1 Career & Profile Audit", "Our senior DevOps architect reviews your current background (Fresher, Support, QA, SysAdmin, or Developer) and maps a 4-month transition plan."],
          ["Transparent Fee, EMI & Interview Assurance Breakdown", "Learn how our 5 Tier-1 Interviews Assured process works and explore EMI options starting at ₹12,500/month."],
          ["Campus & Student Interaction", "Tour our Powai classroom facility and read verified reviews from placed Mumbai alumni."],
        ],
      },
      {
        h2: "Powai Campus Details & Directions",
        facts: [
          ["Location", "Powai, Mumbai – 400076 (Easily accessible from Hiranandani Gardens, Saki Naka Metro, Kanjurmarg Station, Andheri East, and Ghatkopar)"],
          ["Demo Days", "Every Saturday & Sunday (11:00 AM & 3:00 PM) + Weekday Evening Counselling"],
          ["Direct Helpline / WhatsApp", "+91 83695 18569"],
        ],
      },
    ],
  },
};

export function ownerKeyPage(path) {
  return OWNER_KEY_PAGES[path] || null;
}

export function ownerFaqs(path) {
  const page = OWNER_KEY_PAGES[path];
  if (!page) return [];
  return page.sections.flatMap((section) => section.faqs || []);
}
