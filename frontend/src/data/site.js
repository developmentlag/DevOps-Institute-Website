export const BUSINESS_NAME = "DevOps Institute - AWS, Azure & GCP Course";
export const ADDRESS =
  "Lodha Supremus, B 1307, Saki Vihar Rd, Tunga Village, Chandivali, Powai, Mumbai, Maharashtra 400072";
export const PHONE = "083695 18569";
export const PHONE_TEL = "tel:08369518569";
export const INSTAGRAM_URL = "https://www.instagram.com/devopsinstituteinmumbai/";
export const INSTAGRAM_HANDLE = "@devopsinstituteinmumbai";

export const WHATSAPP_NUMBER = "918369518569";
export const WHATSAPP_MESSAGE =
  "Hi! I'm interested in the DevOps classroom training in Powai, Mumbai. Please share batch timings, fees and placement details.";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const CAMPUS_PHOTOS = [
  {
    src: "/campus/campus-branded-1.jpg",
    alt: "Full DevOps classroom batch training on live cloud labs at DevOps Institute, Chandivali, Powai, Mumbai",
    caption: "Live classroom batch in Powai, Mumbai",
  },
  {
    src: "/campus/campus-branded-2.jpg",
    alt: "Students in a hands-on DevOps and cloud lab session at the Powai campus in Mumbai",
    caption: "Hands-on cloud & DevOps lab session",
  },
  {
    src: "/campus/campus-classroom.webp",
    alt: "Students working on real cloud labs in the DevOps Institute classroom at Lodha Supremus, Chandivali, Powai",
    caption: "Practical lab-first training",
  },
  {
    src: "/campus/campus-team.webp",
    alt: "A batch of DevOps Institute students and trainers at the Chandivali, Powai campus in Mumbai",
    caption: "Our latest DevOps & cloud batch",
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
  ratingValue: "4.8",
  reviewCount: "132",
  bestRating: "5",
  worstRating: "1",
  label: "4.8/5 Rating",
  // Enabled with verified Google Business Profile link in GOOGLE_BUSINESS_PROFILE_URLS
  enableSchemaRating: true,
};


export const TESTIMONIALS = [
  {
    name: "Rahul S.",
    role: "DevOps Engineer",
    company: "placed via campus training",
    quote:
      "The classroom sessions were fully hands-on. I went from zero cloud knowledge to building real CI/CD pipelines, and the placement team helped me crack my first DevOps interview.",
    rating: 5,
  },
  {
    name: "Sneha P.",
    role: "Cloud Support Engineer",
    company: "AWS & Azure track",
    quote:
      "I joined the weekend batch while working. Trainers explained AWS, Docker and Kubernetes with live labs, not slides. Best decision for my cloud career in Mumbai.",
    rating: 5,
  },
  {
    name: "Amit K.",
    role: "Junior DevOps Engineer",
    company: "4-month program",
    quote:
      "Small batches and real practice on AWS, Jenkins and Terraform. The campus at Powai is easy to reach and the placement guidance was genuine and consistent.",
    rating: 5,
  },
  {
    name: "Farhan M.",
    role: "Site Reliability Trainee",
    company: "DevOps + Kubernetes",
    quote:
      "What I liked most was the classroom energy — doubts get solved on the spot. Learned Linux, Docker and Kubernetes properly and now work with production-style setups.",
    rating: 5,
  },
];

export const HERO_STATS = [
  { value: "4.8 ★", label: "Google Reviews (5+ Yrs)" },
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
    metaTitle: "AWS Course in Mumbai with Placement | AWS Cloud Training in Powai - DevOps Institute",
    metaDescription:
      "Best AWS course in Mumbai with 100% placement support. Master IAM, EC2, S3, VPC, RDS and real application deployment at DevOps Institute, Chandivali, Powai. Call 083695 18569.",
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
    metaTitle: "Azure Course in Mumbai | Azure Training in Powai, Chandivali - DevOps Institute",
    metaDescription:
      "Learn Microsoft Azure in Powai, Mumbai. Hands-on Azure course covering VMs, VNet, Entra ID, AKS and Azure DevOps at DevOps Institute, Chandivali. Call 083695 18569.",
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
    metaTitle: "GCP Course in Mumbai | Google Cloud Training in Powai, Chandivali - DevOps Institute",
    metaDescription:
      "Google Cloud training in Powai, Mumbai. Hands-on GCP course covering Compute Engine, GKE, VPC, Cloud Build and more at DevOps Institute, Chandivali. Call 083695 18569.",
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
    metaTitle: "DevOps Course in Mumbai with Placement | DevOps Training in Powai - DevOps Institute",
    metaDescription:
      "Top-rated DevOps course in Mumbai with 100% placement support & live classroom labs. Learn Git, Jenkins, Docker, Kubernetes, Terraform & AWS in Powai. Call 083695 18569.",
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
    metaTitle: "Kubernetes & Docker Course in Mumbai | Docker Training in Powai - DevOps Institute",
    metaDescription:
      "Kubernetes course in Mumbai and Docker training in Powai. Learn containers, deployments, ingress, Helm and cluster ops at DevOps Institute, Chandivali. Call 083695 18569.",
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
    metaTitle: "Linux & Terraform Course in Mumbai | Cloud Training in Powai - DevOps Institute",
    metaDescription:
      "Learn Linux administration and Terraform in Powai, Mumbai. Bash scripting, system administration and Infrastructure as Code at DevOps Institute, Chandivali. Call 083695 18569.",
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
  { title: "Industry-Experienced Trainers", desc: "Sessions are led by trainers with hands-on industry experience in cloud, DevOps and infrastructure roles." },
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

export const buildOrgSchema = () => {
  const origin = typeof window !== "undefined" ? window.location.origin : "https://devopsinstitute.co.in";
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["EducationalOrganization", "LocalBusiness"],
        "@id": `${origin}/#institute`,
        name: BUSINESS_NAME,
        alternateName: "DevOps Institute Mumbai",
        description:
          "Classroom DevOps, AWS, Azure and GCP training institute in Chandivali, Powai, Mumbai. Become a DevOps engineer in 4 months with hands-on labs, weekend batches and placement support.",
        url: origin,
        telephone: PHONE,
        image: `${origin}/campus/campus-branded-1.jpg`,
        logo: `${origin}/logo-color.png`,
        priceRange: "₹₹",
        sameAs: [
          INSTAGRAM_URL,
          ...GOOGLE_BUSINESS_PROFILE_URLS,
        ],
        ...(GOOGLE_REVIEWS_STATS.enableSchemaRating
          ? {
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: GOOGLE_REVIEWS_STATS.ratingValue,
                reviewCount: GOOGLE_REVIEWS_STATS.reviewCount,
                bestRating: GOOGLE_REVIEWS_STATS.bestRating,
                worstRating: GOOGLE_REVIEWS_STATS.worstRating,
              },
            }
          : {}),
        address: {
          "@type": "PostalAddress",
          streetAddress: "Lodha Supremus, B 1307, Saki Vihar Rd, Tunga Village",
          addressLocality: "Chandivali, Powai, Mumbai",
          addressRegion: "Maharashtra",
          postalCode: "400072",
          addressCountry: "IN",
        },
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
        areaServed: [
          "Chandivali",
          "Powai",
          "Andheri East",
          "Hiranandani",
          "Saki Naka",
          "Saki Vihar Road",
          "Kanjurmarg",
          "Ghatkopar",
          "Vikhroli",
          "Thane",
          "Navi Mumbai",
          "Mumbai",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Cloud & DevOps Courses in Mumbai",
          itemListElement: COURSES.map((c) => ({
            "@type": "Course",
            name: c.name,
            description: c.cardDesc,
            url: `${origin}/courses/${c.slug}`,
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${origin}/#website`,
        url: origin,
        name: BUSINESS_NAME,
      },
    ],
  };
};

export const buildCourseCatalogSchema = () => {
  const origin = typeof window !== "undefined" ? window.location.origin : "https://devopsinstitute.co.in";
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
  const origin = typeof window !== "undefined" ? window.location.origin : "https://devopsinstitute.co.in";
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

export const buildCourseSchema = (course) => {
  const origin = typeof window !== "undefined" ? window.location.origin : "https://devopsinstitute.co.in";
  const courseUrl = `${origin}/courses/${course.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": `${courseUrl}#course`,
    name: course.name,
    description: course.metaDescription,
    url: courseUrl,
    educationalLevel: "Beginner to Advanced",
    teaches: course.skills || [
      "Cloud Infrastructure",
      "DevOps Automation",
      "CI/CD Pipelines",
      "Containerization",
      "Infrastructure as Code",
    ],
    provider: {
      "@type": "EducationalOrganization",
      name: BUSINESS_NAME,
      sameAs: [
        origin,
        INSTAGRAM_URL,
        ...GOOGLE_BUSINESS_PROFILE_URLS,
      ],
      telephone: PHONE,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Lodha Supremus, B 1307, Saki Vihar Rd, Tunga Village",
        addressLocality: "Chandivali, Powai, Mumbai",
        addressRegion: "Maharashtra",
        postalCode: "400072",
        addressCountry: "IN",
      },
    },
    hasCourseInstance: [
      {
        "@type": "CourseInstance",
        courseMode: ["Onsite", "Online"],
        courseWorkload: "PT40H",
        location: {
          "@type": "Place",
          name: "DevOps Institute Powai Campus",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Lodha Supremus, B 1307, Saki Vihar Rd, Tunga Village, Chandivali",
            addressLocality: "Powai, Mumbai",
            addressRegion: "Maharashtra",
            postalCode: "400072",
            addressCountry: "IN",
          },
        },
      },
    ],
    offers: {
      "@type": "Offer",
      category: "Paid",
      priceCurrency: "INR",
      price: "24999",
      availability: "https://schema.org/InStock",
      url: courseUrl,
    },
    ...(GOOGLE_REVIEWS_STATS.enableSchemaRating
      ? {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: GOOGLE_REVIEWS_STATS.ratingValue,
            reviewCount: GOOGLE_REVIEWS_STATS.reviewCount,
            bestRating: GOOGLE_REVIEWS_STATS.bestRating,
            worstRating: GOOGLE_REVIEWS_STATS.worstRating,
          },
        }
      : {}),
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

