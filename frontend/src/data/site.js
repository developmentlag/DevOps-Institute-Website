export const SITE_ORIGIN = "https://www.devopsinstitute.co.in";

// In the browser, canonicals and JSON-LD follow the live origin. Prerender
// runs without a window, so those URLs use the public site origin.
export function getSiteOrigin() {
  if (typeof window !== "undefined") {
    const forced = window.__DOI_SITE_ORIGIN__;
    if (typeof forced === "string" && forced) return forced.replace(/\/$/, "");
    if (window.location && window.location.origin) return window.location.origin;
  }
  return SITE_ORIGIN;
}

export const BUSINESS_NAME = "DevOps Institute - AWS, Azure & GCP Course";
export const PROVIDER_NAME = "DevOps Institute";
export const ADDRESS =
  "Lodha Supremus, B 1307, Saki Vihar Rd, Tunga Village, Chandivali, Powai, Mumbai, Maharashtra 400072";
export const PHONE = "083695 18569";
export const PHONE_TEL = "tel:08369518569";
export const INSTAGRAM_URL = "https://www.instagram.com/devopsinstituteinmumbai/";
export const INSTAGRAM_HANDLE = "@devopsinstituteinmumbai";

export const LAST_UPDATED_LABEL = "October 2026";
export const LAST_UPDATED_ISO = "2026-10-23";

export const THANE_ORIGIN = "https://devopsinstitutemumbai.co.in";
export const THANE_HOME = "https://devopsinstitutemumbai.co.in/";
export const VASHI_URL = "https://devopsinstitutemumbai.co.in/devops-institute-vashi-navi-mumbai/";
export const GHATKOPAR_URL = "https://devopsinstitutemumbai.co.in/devops-institute-ghatkopar/";
export const DATA_INSTITUTE_URL = "https://datainstitute.in/";
export const THANE_PHONE = "084510 86339";
export const GHATKOPAR_PHONE = "088282 24247";
export const THANE_ADDRESS =
  "2nd Floor, Awfis, Kalpataru Prime, Neheru Nagar, Wagle Industrial Estate, Thane West, Thane, Maharashtra 400604";
export const VASHI_ADDRESS =
  "Cyberone, opp. CIDCO Exhibition Centre, Sector 30, Vashi, Navi Mumbai, Maharashtra 400703";
export const GHATKOPAR_ADDRESS =
  "RCity Offices, Lal Bahadur Shastri Marg, adjoining RCity Mall, Ghatkopar West, Mumbai, Maharashtra 400086";

export const PLACED_LABEL = "450+ placed";
export const PLACEMENT_LABEL = "100% Placement";
export const ASSURANCE_LABEL = "360° Placement Assurance";
export const HIRING_PARTNERS_LABEL = "350+ hiring partners";
export const SALARY_RANGE_LABEL = "5–35 LPA";
export const AFFILIATION_LINE =
  "DevOps Institute is affiliated with NASSCOM, IBM, Govt. of India (MEITY) and IIT Patna, and works in collaboration with IIT and Microsoft.";

export const WHATSAPP_NUMBER = "918369518569";
export const WHATSAPP_MESSAGE =
  "Hi! I'm interested in the DevOps classroom training in Powai, Mumbai. Please share batch timings, fees and placement details.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const CAMPUS_PHOTOS = [
  {
    src: "/campus/campus-branded-1.jpg",
    alt: "Full DevOps classroom batch training on live cloud labs at DevOps Institute, Chandivali, Powai, Mumbai",
    caption: "Live classroom batch in Powai, Mumbai",
    width: 960,
    height: 1200,
  },
  {
    src: "/campus/campus-branded-2.jpg",
    alt: "Students in a hands-on DevOps and cloud lab session at the Powai campus in Mumbai",
    caption: "Hands-on cloud & DevOps lab session",
    width: 960,
    height: 1200,
  },
  {
    src: "/campus/campus-classroom.webp",
    alt: "Students working on real cloud labs in the DevOps Institute classroom at Lodha Supremus, Chandivali, Powai",
    caption: "Practical lab-first training",
    width: 675,
    height: 1200,
  },
  {
    src: "/campus/campus-team.webp",
    alt: "A batch of DevOps Institute students and trainers at the Chandivali, Powai campus in Mumbai",
    caption: "Our latest DevOps & cloud batch",
    width: 1200,
    height: 675,
  },
];

export const CAMPUS_REELS = [
  { src: "/videos/reel-1.mp4", poster: "/videos/reel-1.jpg", title: "Inside our Powai classroom" },
  { src: "/videos/reel-2.mp4", poster: "/videos/reel-2.jpg", title: "Live lab & training session" },
  { src: "/videos/reel-3.mp4", poster: "/videos/reel-3.jpg", title: "Student life on campus" },
];

// Official Google Business Profile listing URL
export const GOOGLE_BUSINESS_PROFILE_URLS = [
  "https://share.google/lYg4hHYl2lYj3b976",
];

export const GOOGLE_REVIEWS_STATS = {
  ratingValue: "4.7",
  reviewCount: "130",
  ratingCount: "130",
  bestRating: "5",
  worstRating: "1",
  label: "4.7/5 Rating",
  // Enabled with verified Google Business Profile link in GOOGLE_BUSINESS_PROFILE_URLS
  enableSchemaRating: true,
};


export const TESTIMONIALS = [
  {
    name: "Rajeswari Singh",
    role: "Placed at 6.5 LPA",
    company: "2025 Vasai College Graduate",
    quote:
      "I wasted more than a year on online courses where you learn on your own with no support. At DevOps Institute, you learn from mentors in the classroom. Labs are top-notch with real CI/CD pipelines and Terraform scripts. Got a package of 6.5 LPA as a fresher!",
    rating: 5,
  },
  {
    name: "Raj Lad",
    role: "Cloud & DevOps Trainee",
    company: "DevOps & Kubernetes Track",
    quote:
      "The learning vibe is genuinely inspiring. Classes were interactive, energetic, and full of live examples. Even tough concepts like Helm Charts and Infrastructure as Code became manageable. They also guide you beyond the course for interviews and certifications.",
    rating: 5,
  },
  {
    name: "Umesh Sonawane",
    role: "Working IT Professional",
    company: "Career Shift to DevOps",
    quote:
      "Being a working IT professional, I wanted to upskill. DevOps Institute offered flexible batches and weekend support, which helped a lot. Training was in-depth and focused on real-world implementation with personal feedback and interview preparation.",
    rating: 5,
  },
  {
    name: "Sneha P.",
    role: "Cloud Support Engineer",
    company: "AWS & Azure Track",
    quote:
      "I joined the weekend batch while working. Trainers explained AWS, Docker and Kubernetes with live labs, not slides. Doubts get solved on the spot and the classroom energy is great.",
    rating: 5,
  },
];

export const HERO_STATS = [
  { value: "4.7 ★", label: "Google Reviews (5+ Yrs)" },
  { value: "4 Months", label: "To become job-ready" },
  { value: "100%", label: "Classroom + placement support" },
  { value: "Weekend", label: "& weekday batches" },
];

const MAP_QUERY = "Lodha Supremus, B 1307, Saki Vihar Rd, Chandivali, Powai, Mumbai, Maharashtra 400072";
export const MAP_EMBED_URL = `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
export const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(MAP_QUERY)}`;

export const NEARBY_AREAS = [
  "Chandivali",
  "Powai",
  "Saki Vihar Road",
  "Tunga Village",
  "Andheri East",
  "Hiranandani",
  "Saki Naka",
  "Kanjurmarg",
  "Ghatkopar",
  "Vikhroli",
];

export const COURSES = [
  {
    slug: "aws",
    icon: "cloud",
    name: "AWS Course",
    shortName: "AWS",
    tagline: "Amazon Web Services Cloud Training with Placement",
    cardDesc:
      "A practical AWS course in Mumbai with placement support covering IAM, EC2, S3, VPC, monitoring and live cloud labs.",
    metaTitle: "AWS Course in Mumbai with Placement | Powai",
    metaDescription:
      "AWS course in Mumbai with placement support. IAM, EC2, S3 and VPC labs at the Chandivali, Powai campus. Call 083695 18569.",
    h1: "AWS Course in Mumbai with Placement — Practical Cloud Training in Powai",
    intro:
      "Our AWS course in Mumbai is built around doing, not just watching. At our Chandivali campus in Powai, you work on real AWS accounts: designing networks, launching servers, securing access and deploying applications the way working cloud engineers do with complete placement guidance. If you are searching for an AWS course near Chandivali or AWS training in Powai that focuses on career-relevant skills, this program is designed for you.",
    whoFor: [
      "Students and fresh graduates starting a cloud computing career",
      "System administrators and IT support engineers moving to cloud roles",
      "Software developers who want to deploy and run applications on AWS",
      "Working professionals preparing for AWS certification exams",
    ],
    skills: [
      "Cloud fundamentals and AWS global infrastructure",
      "Identity and Access Management (IAM)",
      "EC2 instances, EBS volumes and load balancing",
      "S3 storage, versioning and static website hosting",
      "VPC design: subnets, route tables, NAT and security groups",
      "RDS databases and DynamoDB basics",
      "Monitoring and alerting with CloudWatch and CloudTrail",
      "Deploying applications and CI/CD pipelines on AWS",
    ],
    outcomes: [
      "Design and secure a virtual private cloud (VPC) from scratch",
      "Launch, connect and manage EC2 workloads confidently",
      "Store and serve data with S3 and RDS",
      "Set up CloudWatch alarms and basic cost controls",
      "Deploy a complete sample application on AWS end to end",
    ],
    tools: ["AWS Management Console", "AWS CLI", "EC2", "S3", "VPC", "IAM", "RDS", "CloudWatch", "CloudFormation"],
    faqs: [
      {
        q: "Is this AWS course available near Chandivali and Powai?",
        a: `Yes. The AWS course runs at our campus: ${ADDRESS}. We are easy to reach from Chandivali, Powai, Saki Vihar Road, Andheri East and Hiranandani.`,
      },
      {
        q: "Do I need prior cloud experience to join AWS training?",
        a: "No. The course starts with cloud fundamentals and builds up step by step, so beginners and working professionals can both follow comfortably.",
      },
      {
        q: "Does the AWS course include hands-on labs?",
        a: "Yes. Every module includes guided labs on real AWS services such as EC2, S3, VPC, IAM and CloudWatch, so you practise what you learn.",
      },
      {
        q: `How do I enrol for the AWS course in Mumbai?`,
        a: `Call us on ${PHONE} or submit the enquiry form on this page. Our counsellor will share the syllabus, batch timings and fee details.`,
      },
    ],
  },
  {
    slug: "azure",
    icon: "cloudy",
    name: "Microsoft Azure Course",
    shortName: "Azure",
    tagline: "Microsoft Azure Cloud & DevOps Training",
    cardDesc:
      "Azure training in Powai covering virtual machines, networking, identity, AKS and Azure DevOps pipelines with hands-on labs.",
    metaTitle: "Azure Course in Mumbai with Placement | Powai",
    metaDescription:
      "Azure course in Mumbai with placement support. VMs, VNet, Entra ID and AKS labs at the Chandivali, Powai campus. Call 083695 18569.",
    h1: "Azure Course in Mumbai — Microsoft Azure Training in Powai",
    intro:
      "This Azure course in Mumbai takes you from cloud basics to running real workloads on Microsoft Azure. Training happens at our Chandivali, Powai campus with live lab sessions on virtual machines, networking, identity and DevOps pipelines. For learners looking for Azure training in Powai or a cloud computing course in Mumbai with genuine hands-on practice, this program delivers exactly that.",
    whoFor: [
      "IT professionals working in Microsoft-based environments",
      "System administrators moving to Azure infrastructure roles",
      "Freshers who want a career-focused cloud training path",
      "Engineers preparing for Azure administrator or DevOps certifications",
    ],
    skills: [
      "Azure fundamentals, portal and CLI",
      "Identity management with Microsoft Entra ID",
      "Azure Virtual Machines and availability options",
      "Virtual Networks, subnets and network security groups",
      "Azure Storage accounts and data services",
      "App Service deployments",
      "Azure Kubernetes Service (AKS) fundamentals",
      "CI/CD with Azure DevOps pipelines and Azure Monitor",
    ],
    outcomes: [
      "Provision and manage Azure virtual machines and networks",
      "Control access with Entra ID users, groups and roles",
      "Deploy applications to App Service and AKS",
      "Build build-and-release pipelines in Azure DevOps",
      "Monitor workloads with Azure Monitor and Log Analytics",
    ],
    tools: ["Azure Portal", "Azure CLI", "Entra ID", "Azure VMs", "Virtual Network", "Azure Storage", "AKS", "Azure DevOps", "Azure Monitor"],
    faqs: [
      {
        q: "Where can I attend Azure training in Powai?",
        a: `Azure classes run at our campus: ${ADDRESS}, close to Saki Vihar Road and Tunga Village, convenient for Powai, Chandivali and Andheri East learners.`,
      },
      {
        q: "Is the Azure course suitable for beginners?",
        a: "Yes. We begin with Azure fundamentals and the portal, then progress to virtual machines, networking, AKS and DevOps at a steady pace.",
      },
      {
        q: "Will I practise on real Azure services?",
        a: "Yes. Labs use real Azure subscriptions so you work directly with VMs, networks, storage and pipelines rather than simulations.",
      },
      {
        q: "How do I get the Azure course fees and batch details?",
        a: `Call ${PHONE} or send an enquiry through the form on this page and our team will share the current schedule and fees.`,
      },
    ],
  },
  {
    slug: "gcp",
    icon: "cloudCog",
    name: "Google Cloud (GCP) Course",
    shortName: "GCP",
    tagline: "Google Cloud Platform Training",
    cardDesc:
      "GCP course in Mumbai covering Compute Engine, GKE, networking, Cloud Build and monitoring through guided, practical labs.",
    metaTitle: "GCP Course in Mumbai with Placement | Powai",
    metaDescription:
      "GCP course in Mumbai with placement support. Compute Engine, GKE and Cloud Build labs at the Chandivali, Powai campus. Call 083695 18569.",
    h1: "GCP Course in Mumbai — Google Cloud Training in Powai",
    intro:
      "Our GCP course in Mumbai helps you build real Google Cloud skills through practical sessions at our Chandivali, Powai campus. From Compute Engine and Cloud Storage to GKE and CI/CD with Cloud Build, you learn by doing. If you are comparing options for Google Cloud training in Powai or a cloud course near Chandivali, this hands-on program is built around job-ready skills.",
    whoFor: [
      "Students and graduates exploring a career in cloud computing",
      "Developers deploying applications on Google Cloud",
      "DevOps engineers adding GCP to a multi-cloud skill set",
      "Professionals preparing for Google Cloud certifications",
    ],
    skills: [
      "GCP fundamentals, console and gcloud CLI",
      "Identity and Access Management (IAM)",
      "Compute Engine virtual machines",
      "VPC networks, subnets and firewall rules",
      "Cloud Storage and data services",
      "Google Kubernetes Engine (GKE)",
      "CI/CD with Cloud Build",
      "Operations with Cloud Monitoring and Logging",
    ],
    outcomes: [
      "Launch and manage Compute Engine instances",
      "Design secure VPC networks with firewall rules",
      "Deploy containerised applications to GKE",
      "Automate builds and deployments with Cloud Build",
      "Observe production workloads with Cloud Monitoring",
    ],
    tools: ["Google Cloud Console", "gcloud CLI", "Compute Engine", "VPC", "Cloud Storage", "GKE", "Cloud Build", "Cloud Monitoring"],
    faqs: [
      {
        q: "Do you offer Google Cloud training in Powai?",
        a: `Yes. GCP classes run at our campus: ${ADDRESS}, easily reachable from Powai, Chandivali, Hiranandani and Andheri East.`,
      },
      {
        q: "Is GCP covered along with AWS and Azure at the institute?",
        a: "Yes. DevOps Institute offers multi-cloud training across AWS, Azure and GCP, and you can combine GCP with Kubernetes and DevOps modules.",
      },
      {
        q: "Does the GCP course include Kubernetes on GKE?",
        a: "Yes. The course covers Google Kubernetes Engine, including deploying and managing containerised applications on clusters.",
      },
      {
        q: "How can I join the GCP course in Mumbai?",
        a: `Call ${PHONE} or fill in the enquiry form on this page. We will share the syllabus, upcoming batches and fees.`,
      },
    ],
  },
  {
    slug: "devops",
    icon: "gitBranch",
    name: "DevOps Course",
    shortName: "DevOps",
    tagline: "End-to-End DevOps & CI/CD Training with 100% Placement",
    cardDesc:
      "A practical DevOps course in Mumbai with 100% placement support covering Git, Jenkins, Docker, Kubernetes, Terraform and CI/CD pipelines.",
    metaTitle: "DevOps Course with Placement | Powai Campus",
    metaDescription:
      "DevOps course in Mumbai with placement support. Git, Jenkins, Docker, Kubernetes and Terraform labs in Powai. Call 083695 18569.",
    h1: "DevOps Course in Mumbai with Placement — Practical DevOps Training in Powai",
    intro:
      "This DevOps course in Mumbai teaches the complete modern toolchain: version control, CI/CD pipelines, containers, orchestration, infrastructure as code and monitoring with dedicated placement support. Classes run at our campus near Saki Vihar Road in Chandivali, Powai, with every concept backed by a lab. For anyone searching for practical DevOps training in Mumbai or a DevOps course with placement in Powai, this program is built around production-style workflows.",
    whoFor: [
      "Developers who want to own build, release and deployment",
      "System administrators moving into DevOps engineering",
      "Freshers targeting DevOps and cloud engineer roles",
      "QA and support engineers expanding into automation",
    ],
    skills: [
      "Linux and Git foundations for DevOps",
      "CI/CD pipelines with Jenkins",
      "Docker containers and Kubernetes orchestration",
      "Configuration management with Ansible",
      "Infrastructure as Code with Terraform",
      "GitOps workflows with ArgoCD",
      "Monitoring with Prometheus and Grafana",
      "DevSecOps and pipeline security basics",
    ],
    outcomes: [
      "Build a complete CI/CD pipeline from commit to deployment",
      "Containerise applications and deploy them to Kubernetes",
      "Provision infrastructure using Terraform",
      "Set up dashboards and alerts with Prometheus and Grafana",
      "Work through production-style incident and release scenarios",
    ],
    tools: ["Git", "GitHub", "Jenkins", "Docker", "Kubernetes", "Ansible", "Terraform", "ArgoCD", "Prometheus", "Grafana"],
    faqs: [
      {
        q: "Who can join a DevOps course?",
        a: "Anyone with basic computer skills can join. Freshers, developers, system administrators and IT professionals all benefit, and we start with Linux and Git fundamentals before moving to advanced tools.",
      },
      {
        q: "Is this DevOps course available near Saki Vihar Road?",
        a: `Yes. Training takes place at ${ADDRESS}, right on Saki Vihar Road near Tunga Village, convenient for Chandivali, Powai and Andheri East.`,
      },
      {
        q: "Does the DevOps course include real projects?",
        a: "Yes. You build end-to-end pipelines that take code from Git through Jenkins, Docker and Kubernetes into a monitored deployment.",
      },
      {
        q: "How do I get the DevOps course syllabus and fees?",
        a: `Call ${PHONE} or submit the enquiry form and our counsellor will share the full syllabus, batch options and fee structure.`,
      },
    ],
  },
  {
    slug: "kubernetes-docker",
    icon: "container",
    name: "Kubernetes & Docker Course",
    shortName: "Kubernetes & Docker",
    tagline: "Containers & Orchestration Masterclass",
    cardDesc:
      "Kubernetes course in Mumbai with Docker training in Powai: images, compose, pods, deployments, ingress, Helm and cluster operations.",
    metaTitle: "Kubernetes & Docker Course in Mumbai | Powai",
    metaDescription:
      "Kubernetes and Docker course in Mumbai. Images, pods, ingress and Helm labs at the Chandivali, Powai campus. Call 083695 18569.",
    h1: "Kubernetes & Docker Course in Mumbai — Docker Training in Powai",
    intro:
      "Containers run the modern internet, and this course teaches them properly. Starting with Docker images and Docker Compose, you progress to Kubernetes clusters, deployments, services, ingress and Helm at our Chandivali, Powai campus. It is a focused Kubernetes course in Mumbai for engineers who want hands-on Docker training in Powai rather than slide-based theory.",
    whoFor: [
      "Developers packaging applications as containers",
      "DevOps and cloud engineers managing clusters",
      "System administrators modernising infrastructure skills",
      "Engineers preparing for CKA or CKAD certification exams",
    ],
    skills: [
      "Docker architecture, images and containers",
      "Writing efficient Dockerfiles and multi-stage builds",
      "Multi-container apps with Docker Compose",
      "Kubernetes architecture: pods, deployments and services",
      "ConfigMaps, Secrets and environment management",
      "Ingress controllers and cluster networking",
      "Persistent volumes and storage classes",
      "Helm charts, autoscaling and RBAC security",
    ],
    outcomes: [
      "Containerise any application with production-ready Dockerfiles",
      "Run multi-service stacks locally with Docker Compose",
      "Deploy, scale and roll back applications on Kubernetes",
      "Expose services securely with ingress and TLS",
      "Package releases with Helm and manage cluster access with RBAC",
    ],
    tools: ["Docker", "Docker Compose", "Kubernetes", "kubectl", "Helm", "Ingress-NGINX", "Minikube", "Container Registry"],
    faqs: [
      {
        q: "What tools are covered in Kubernetes and Docker training?",
        a: "You work with Docker, Docker Compose, Kubernetes, kubectl, Helm, ingress controllers, persistent volumes, RBAC and container registries, all through hands-on labs.",
      },
      {
        q: "Do I need to know Docker before learning Kubernetes?",
        a: "No. The course starts with Docker from the basics and builds up to Kubernetes, so both skills are covered in sequence.",
      },
      {
        q: "Where is the Kubernetes course held in Mumbai?",
        a: `At our campus: ${ADDRESS}, near Chandivali and Saki Vihar Road, easy to reach from Powai, Andheri East and Kanjurmarg.`,
      },
      {
        q: "Does the course help with CKA or CKAD preparation?",
        a: "Yes. The curriculum covers the core exam domains and includes practice labs similar to certification scenarios.",
      },
    ],
  },
  {
    slug: "linux-terraform",
    icon: "terminal",
    name: "Linux & Terraform Course",
    shortName: "Linux & Terraform",
    tagline: "Linux Administration & Infrastructure as Code",
    cardDesc:
      "Linux administration and Terraform training in Mumbai: shell, scripting, users, networking, HCL, state and multi-cloud provisioning.",
    metaTitle: "Linux & Terraform Course in Mumbai | Powai",
    metaDescription:
      "Linux and Terraform course in Mumbai. Shell, Bash and Infrastructure as Code labs at the Chandivali, Powai campus. Call 083695 18569.",
    h1: "Linux & Terraform Course in Mumbai — Cloud Infrastructure Training in Powai",
    intro:
      "Linux runs the cloud, and Terraform builds it. This combined course at our Chandivali, Powai campus takes you from confident command-line administration to provisioning real infrastructure as code across AWS and Azure. It is an ideal foundation for anyone joining cloud and DevOps classes in Mumbai who wants strong fundamentals before advanced tooling.",
    whoFor: [
      "Freshers who need strong Linux fundamentals for IT roles",
      "Support and operations engineers moving to cloud infrastructure",
      "DevOps learners who want Infrastructure as Code skills",
      "Developers who want to manage their own servers and environments",
    ],
    skills: [
      "Linux essentials, file systems and the shell",
      "Users, groups, permissions and process management",
      "Package management, services and systemd",
      "Networking, SSH and firewall basics",
      "Bash scripting for automation",
      "Terraform HCL: providers, resources and variables",
      "State management, workspaces and remote backends",
      "Reusable modules and multi-cloud provisioning",
    ],
    outcomes: [
      "Administer Linux servers confidently from the command line",
      "Automate routine tasks with Bash scripts",
      "Provision cloud infrastructure using Terraform code",
      "Manage Terraform state safely across environments",
      "Build reusable modules that deploy to AWS and Azure",
    ],
    tools: ["Linux (Ubuntu/RHEL)", "Bash", "systemd", "SSH", "Vim", "Terraform", "HCL", "Git"],
    faqs: [
      {
        q: "Why learn Linux before cloud and DevOps tools?",
        a: "Most cloud servers and DevOps tooling run on Linux. Strong Linux skills make AWS, Azure, GCP, Docker and Kubernetes far easier to master.",
      },
      {
        q: "Does the Terraform module provision real cloud infrastructure?",
        a: "Yes. You write Terraform configurations that create real resources on AWS and Azure, including networks, virtual machines and storage.",
      },
      {
        q: "Is this course available at the Powai campus?",
        a: `Yes. Classes run at ${ADDRESS}, close to Chandivali, Saki Vihar Road and Hiranandani.`,
      },
      {
        q: "How do I join the Linux & Terraform course?",
        a: `Call ${PHONE} or send the enquiry form on this page for the syllabus, batch timings and fees.`,
      },
    ],
  },
];

export const COURSE_CARDS = [
  { title: "AWS", desc: "IAM, EC2, S3, VPC, monitoring and real deployments on Amazon Web Services.", to: "/courses/aws", testId: "course-card-aws" },
  { title: "Microsoft Azure", desc: "Virtual machines, networking, Entra ID, AKS and Azure DevOps pipelines.", to: "/courses/azure", testId: "course-card-azure" },
  { title: "Google Cloud (GCP)", desc: "Compute Engine, GKE, Cloud Storage and CI/CD with Cloud Build.", to: "/courses/gcp", testId: "course-card-gcp" },
  { title: "DevOps", desc: "Git, Jenkins, Docker, Kubernetes, Terraform and complete CI/CD workflows.", to: "/courses/devops", testId: "course-card-devops" },
  { title: "Kubernetes", desc: "Pods, deployments, services, ingress, Helm and cluster operations.", to: "/courses/kubernetes-docker", testId: "course-card-kubernetes" },
  { title: "Docker", desc: "Images, Dockerfiles, multi-stage builds and Docker Compose stacks.", to: "/courses/kubernetes-docker", testId: "course-card-docker" },
  { title: "Linux", desc: "Command line, users, services, networking and Bash scripting.", to: "/courses/linux-terraform", testId: "course-card-linux" },
  { title: "Terraform", desc: "Infrastructure as Code, state management and multi-cloud provisioning.", to: "/courses/linux-terraform", testId: "course-card-terraform" },
  { title: "CI/CD", desc: "Automated build, test and deployment pipelines with Jenkins and GitOps.", to: "/courses/devops", testId: "course-card-cicd" },
];

export const WHY_CHOOSE = [
  { title: "Practical, Lab-First Training", desc: "Every concept is followed by a guided lab on real cloud services, so you build skills by doing, not just listening." },
  { title: "Multi-Cloud Expertise", desc: "Train across AWS, Azure and GCP under one roof and understand how the platforms compare in real projects." },
  { title: "Industry-Experienced Trainers", desc: "Sessions draw on mentors who work in cloud, DevOps, platform and GenAI roles. Names, employers and LinkedIn profiles are on the trainers page." },
  { title: "Weekday & Weekend Batches", desc: "Flexible batch options for college students and working professionals across Mumbai." },
  { title: "Career & Interview Guidance", desc: "Resume support, mock interviews and guidance on cloud and DevOps career paths in Mumbai's IT market." },
  { title: "Easy to Reach Campus", desc: "Located at Lodha Supremus on Saki Vihar Road, minutes from Chandivali, Powai, Andheri East and Hiranandani." },
];

export const HOME_FAQS = [
  {
    q: "Where is DevOps Institute located in Mumbai?",
    a: `${BUSINESS_NAME} is located at ${ADDRESS}. The campus is easy to reach from Chandivali, Powai, Saki Vihar Road, Andheri East and Hiranandani.`,
  },
  {
    q: "Do you offer AWS training in Powai?",
    a: `Yes. Our AWS course runs at the Powai campus (Lodha Supremus, Chandivali) and covers IAM, EC2, S3, VPC, monitoring and deployment through hands-on labs. Call ${PHONE} for batch details.`,
  },
  {
    q: "Is DevOps Institute near Chandivali and Saki Vihar Road?",
    a: "Yes. The institute is inside Lodha Supremus on Saki Vihar Road, right by Tunga Village in Chandivali, making it convenient for learners across Powai and Andheri East.",
  },
  {
    q: "Which cloud courses are available at DevOps Institute?",
    a: "We offer practical courses in AWS, Microsoft Azure, Google Cloud Platform (GCP), DevOps, Kubernetes, Docker, Linux, Terraform and CI/CD pipelines.",
  },
  {
    q: "How can I contact DevOps Institute?",
    a: `You can call us directly on ${PHONE} or visit us at ${ADDRESS}. You can also submit the enquiry form on this website and our team will call you back.`,
  },
];

export const ALL_FAQS = [
  ...HOME_FAQS,
  {
    q: "Do you offer AWS, Azure, GCP, and DevOps training?",
    a: "Yes. DevOps Institute is a multi-cloud training institute in Powai, Mumbai, offering practical courses across AWS, Microsoft Azure, Google Cloud Platform and a complete DevOps toolchain including Kubernetes, Docker, Terraform and CI/CD.",
  },
  {
    q: "Is the institute located in Lodha Supremus, Chandivali?",
    a: `Yes. Our full address is ${ADDRESS}. We are on Saki Vihar Road, near Tunga Village and the Chandivali studio area.`,
  },
  {
    q: "Who can join a DevOps course?",
    a: "Students, fresh graduates, developers, system administrators and working IT professionals can all join. We begin with Linux and Git fundamentals, so no prior DevOps experience is required.",
  },
  {
    q: "What tools are covered in Kubernetes and Docker training?",
    a: "The course covers Docker, Dockerfiles, Docker Compose, Kubernetes (pods, deployments, services), ConfigMaps and Secrets, ingress, persistent volumes, Helm charts, RBAC and container registries — all with hands-on labs.",
  },
  {
    q: "How can I visit the campus?",
    a: `Visit us at ${ADDRESS}. Use the Get Directions button on our Contact page for live navigation, or call ${PHONE} and we will guide you. The campus is close to Saki Naka metro, Andheri East and Powai.`,
  },
  {
    q: "Are weekend batches available for working professionals?",
    a: `Yes. We run both weekday and weekend batches so working professionals can attend without affecting their jobs. Call ${PHONE} for the current schedule.`,
  },
  {
    q: "Is the training practical or theory-based?",
    a: "Our training is lab-first. Each module includes guided, hands-on practice on real cloud services and tools, so you leave with skills you can demonstrate in interviews and on the job.",
  },
];

const POWAI_STREET = "Lodha Supremus, B 1307, Saki Vihar Rd, Tunga Village";

export const AREA_SERVED = [
  "Chandivali",
  "Powai",
  "Andheri East",
  "Andheri West",
  "Hiranandani",
  "Saki Naka",
  "Saki Vihar Road",
  "Kanjurmarg",
  "Ghatkopar",
  "Vikhroli",
  "Bhandup",
  "Mulund",
  "Goregaon",
  "Malad",
  "Bandra",
  "BKC",
  "Kurla",
  "Sion",
  "Dadar",
  "Borivali",
  "Juhu",
  "Santacruz",
  "Thane",
  "Navi Mumbai",
  "Mumbai",
];

function powaiPostal() {
  return {
    "@type": "PostalAddress",
    streetAddress: POWAI_STREET,
    addressLocality: "Chandivali, Powai, Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400072",
    addressCountry: "IN",
  };
}

function paidOffer(url) {
  return {
    "@type": "Offer",
    category: "Paid",
    availability: "https://schema.org/InStock",
    url,
  };
}

function courseInstance(origin, duration) {
  const schedule = {
    "@type": "Schedule",
    repeatFrequency: "P1W",
  };
  if (duration) schedule.duration = duration;
  return {
    "@type": "CourseInstance",
    courseMode: ["onsite", "blended"],
    courseWorkload: duration === "P4M" ? "PT160H" : "PT40H",
    location: { "@id": `${origin}/#institute` },
    courseSchedule: schedule,
  };
}

function visibleReviewSchema() {
  if (!GOOGLE_REVIEWS_STATS.enableSchemaRating) return {};
  return {
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: GOOGLE_REVIEWS_STATS.ratingValue,
      reviewCount: GOOGLE_REVIEWS_STATS.reviewCount,
      ratingCount: GOOGLE_REVIEWS_STATS.ratingCount,
      bestRating: GOOGLE_REVIEWS_STATS.bestRating,
      worstRating: GOOGLE_REVIEWS_STATS.worstRating,
    },
    review: TESTIMONIALS.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.name },
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(t.rating),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: t.quote,
    })),
  };
}

export const buildOrgSchema = () => {
  const origin = getSiteOrigin();
  // TODO: add sameAs profiles when the URLs exist: YouTube, LinkedIn, Facebook, Justdial, Sulekha.
  const sameAs = [INSTAGRAM_URL, THANE_HOME, ...GOOGLE_BUSINESS_PROFILE_URLS];
  const memberOf = ["NASSCOM", "IBM", "Govt. of India (MEITY)", "IIT Patna"].map((name) => ({
    "@type": "Organization",
    name,
  }));
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${origin}/#organization`,
        name: PROVIDER_NAME,
        legalName: BUSINESS_NAME,
        url: origin,
        logo: `${origin}/logo-color.png`,
        telephone: PHONE,
        sameAs,
        memberOf,
        subOrganization: [
          { "@id": `${origin}/#institute` },
          { "@id": `${THANE_ORIGIN}/#campus` },
        ],
      },
      {
        "@type": ["EducationalOrganization", "School", "LocalBusiness"],
        "@id": `${origin}/#institute`,
        name: BUSINESS_NAME,
        alternateName: "DevOps Institute Mumbai",
        description:
          "Classroom DevOps, AWS, Azure and GCP training institute in Chandivali, Powai, Mumbai. Become a DevOps engineer in 4 months with hands-on labs, weekend batches and placement support. The institute publishes an IIT and Microsoft collaboration. It is affiliated with NASSCOM, IBM, Govt. of India (MEITY) and IIT Patna.",
        url: origin,
        telephone: PHONE,
        image: `${origin}/campus/campus-branded-1.jpg`,
        logo: `${origin}/logo-color.png`,
        priceRange: "₹₹",
        parentOrganization: { "@id": `${origin}/#organization` },
        sameAs,
        memberOf,
        address: powaiPostal(),
        geo: {
          "@type": "GeoCoordinates",
          latitude: 19.1076,
          longitude: 72.8983,
        },
        hasMap: MAP_DIRECTIONS_URL,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            opens: "08:00",
            closes: "21:00",
          },
        ],
        areaServed: AREA_SERVED,
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Cloud & DevOps Courses in Mumbai",
          itemListElement: COURSES.map((c) => ({
            "@type": "Course",
            name: c.name,
            description: c.cardDesc,
            url: `${origin}/courses/${c.slug}`,
            provider: {
              "@type": "EducationalOrganization",
              name: PROVIDER_NAME,
              sameAs: origin,
              url: origin,
            },
          })),
        },
      },
      {
        "@type": ["EducationalOrganization", "School"],
        "@id": `${THANE_ORIGIN}/#campus`,
        name: "DevOps Institute",
        url: THANE_HOME,
        telephone: THANE_PHONE,
        parentOrganization: { "@id": `${origin}/#organization` },
        address: {
          "@type": "PostalAddress",
          streetAddress: "2nd Floor, Awfis, Kalpataru Prime, Neheru Nagar, Wagle Industrial Estate",
          addressLocality: "Thane West, Thane",
          addressRegion: "Maharashtra",
          postalCode: "400604",
          addressCountry: "IN",
        },
        department: [
          {
            "@type": "EducationalOrganization",
            name: "DevOps Institute Vashi, Navi Mumbai",
            url: VASHI_URL,
            telephone: THANE_PHONE,
            address: {
              "@type": "PostalAddress",
              streetAddress: "Cyberone, opp. CIDCO Exhibition Centre, Sector 30",
              addressLocality: "Vashi, Navi Mumbai",
              addressRegion: "Maharashtra",
              postalCode: "400703",
              addressCountry: "IN",
            },
          },
          {
            "@type": "EducationalOrganization",
            name: "DevOps Institute Ghatkopar",
            url: GHATKOPAR_URL,
            telephone: GHATKOPAR_PHONE,
            address: {
              "@type": "PostalAddress",
              streetAddress: "RCity Offices, Lal Bahadur Shastri Marg, adjoining RCity Mall",
              addressLocality: "Ghatkopar West, Mumbai",
              addressRegion: "Maharashtra",
              postalCode: "400086",
              addressCountry: "IN",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        url: origin,
        name: BUSINESS_NAME,
        publisher: { "@id": `${origin}/#organization` },
      },
    ],
  };
};

export const buildCourseCatalogSchema = () => {
  const origin = getSiteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: COURSES.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      description: c.cardDesc,
      url: `${origin}/courses/${c.slug}`,
    })),
  };
};

export const buildBreadcrumbSchema = (items) => {
  const origin = getSiteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${origin}${item.url}`,
    })),
  };
};

export const buildFlagshipCourseSchema = () => {
  const origin = getSiteOrigin();
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${origin}/#flagship-course`,
    name: "DevOps Course in Mumbai with Placement",
    description:
      "4-month classroom DevOps training in Mumbai covering AWS, Azure, GCP, Docker, Kubernetes, Terraform & CI/CD pipelines with hands-on labs and 100% placement support.",
    url: origin,
    courseCode: "DOI-DEVOPS",
    inLanguage: "en",
    educationalLevel: "Beginner to Advanced",
    teaches: [
      "Linux & Shell Scripting",
      "AWS, Azure & Multi-Cloud Services",
      "Docker Containers & Kubernetes Orchestration",
      "Infrastructure as Code with Terraform",
      "CI/CD Pipelines with Jenkins & GitOps",
      "Monitoring with Prometheus & Grafana",
    ],
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${origin}/#institute`,
      name: PROVIDER_NAME,
      url: origin,
      sameAs: [origin, INSTAGRAM_URL, THANE_HOME, ...GOOGLE_BUSINESS_PROFILE_URLS],
      telephone: PHONE,
      address: powaiPostal(),
    },
    offers: paidOffer(origin),
    hasCourseInstance: [courseInstance(origin, "P4M")],
    ...visibleReviewSchema(),
  };
};

export const buildCourseSchema = (course) => {
  const origin = getSiteOrigin();
  const courseUrl = `${origin}/courses/${course.slug}`;
  const duration = course.slug === "devops" ? "P4M" : undefined;
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${courseUrl}#course`,
    name: course.name,
    description: course.metaDescription,
    url: courseUrl,
    courseCode: `DOI-${course.slug.toUpperCase()}`,
    inLanguage: "en",
    educationalLevel: "Beginner to Advanced",
    teaches: course.skills,
    provider: {
      "@type": "EducationalOrganization",
      "@id": `${origin}/#institute`,
      name: PROVIDER_NAME,
      url: origin,
      sameAs: [origin, INSTAGRAM_URL, THANE_HOME, ...GOOGLE_BUSINESS_PROFILE_URLS],
      telephone: PHONE,
      address: powaiPostal(),
    },
    hasCourseInstance: [courseInstance(origin, duration)],
    offers: paidOffer(courseUrl),
    ...visibleReviewSchema(),
  };
};

export const buildFaqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
