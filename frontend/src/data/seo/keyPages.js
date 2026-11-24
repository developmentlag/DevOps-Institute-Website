/** Key pages named in llms.txt. Catalog and suburb URLs stay canonical for their own intent. */

const AWS_LINKS = [
  { href: "/courses/aws", label: "AWS course catalog" },
  { href: "/aws-course-in-mumbai", label: "AWS course in Mumbai" },
  { href: "/aws-course-in-powai", label: "AWS course in Powai" },
  { href: "/courses/devops", label: "DevOps course catalog" },
  { href: "/devops-course", label: "DevOps course syllabus and career guide" },
  { href: "/azure-devops-course", label: "Azure DevOps and AZ-900 page" },
  { href: "/kubernetes-docker-course", label: "Kubernetes and Docker course" },
  { href: "/free-demo-powai", label: "Free demo class in Powai" },
  { href: "/placements", label: "Placements" },
  { href: "/contact", label: "Contact and campus directions" },
];

const AZURE_LINKS = [
  { href: "/courses/azure", label: "Azure course catalog" },
  { href: "/azure-course-in-mumbai", label: "Azure course in Mumbai" },
  { href: "/aws-devops-course", label: "AWS Cloud and DevOps course" },
  { href: "/kubernetes-docker-course", label: "Kubernetes and Docker course" },
  { href: "/courses/devops", label: "DevOps course catalog" },
  { href: "/free-demo-powai", label: "Free demo class in Powai" },
  { href: "/placements", label: "Placements" },
  { href: "/reviews", label: "Reviews" },
  { href: "/contact", label: "Contact and campus directions" },
];

const KUBE_LINKS = [
  { href: "/courses/kubernetes-docker", label: "Kubernetes and Docker catalog" },
  { href: "/kubernetes-course-in-mumbai", label: "Kubernetes course in Mumbai" },
  { href: "/kubernetes-and-docker-training-in-mumbai", label: "Kubernetes and Docker training in Mumbai" },
  { href: "/docker-course-in-mumbai", label: "Docker course in Mumbai" },
  { href: "/aws-devops-course", label: "AWS Cloud and DevOps course" },
  { href: "/azure-devops-course", label: "Azure DevOps and AZ-900 page" },
  { href: "/courses/devops", label: "DevOps course catalog" },
  { href: "/free-demo-powai", label: "Free demo class in Powai" },
  { href: "/placements", label: "Placements" },
  { href: "/contact", label: "Contact and campus directions" },
];

const OPENSHIFT_LINKS = [
  { href: "/courses/kubernetes-docker", label: "Kubernetes and Docker course catalog" },
  { href: "/kubernetes-course-in-mumbai", label: "Kubernetes course in Mumbai" },
  { href: "/kubernetes-and-docker-training-in-mumbai", label: "Kubernetes and Docker training in Mumbai" },
  { href: "/trainers", label: "Trainer profiles and expertise" },
  { href: "/courses/devops", label: "DevOps course catalog" },
  { href: "/contact", label: "Contact and campus directions" },
];

const DEMO_LINKS = [
  { href: "/contact", label: "Contact and campus directions" },
  { href: "/aws-devops-course", label: "AWS Cloud and DevOps course" },
  { href: "/azure-devops-course", label: "Azure DevOps and AZ-900 page" },
  { href: "/kubernetes-docker-course", label: "Kubernetes and Docker course" },
  { href: "/courses", label: "All courses" },
  { href: "/placements", label: "Placements" },
  { href: "/reviews", label: "Reviews" },
  { href: "/devops-course-in-powai", label: "DevOps course in Powai" },
  { href: "/faqs", label: "FAQs" },
];

export const KEY_PAGES = {
  "/devsecops-course-in-mumbai": {
    showMap: false,
    crumbs: [
      { name: "Home", href: "/" },
      { name: "Courses", href: "/courses" },
      { name: "DevSecOps Training in Mumbai", href: "/devsecops-course-in-mumbai" },
    ],
    links: [
      { href: "/courses/devops", label: "DevOps course catalog" },
      { href: "/devops-course-syllabus", label: "DevOps course syllabus" },
      { href: "/cicd-gitops-training-mumbai", label: "CI/CD and GitOps training in Mumbai" },
      { href: "/devops-course-in-mumbai", label: "DevOps course in Mumbai" },
    ],
    answer:
      "DevSecOps brings security checks into the software delivery workflow. DevOps Institute's published DevOps curriculum includes Git, Jenkins CI/CD, Docker, Kubernetes, Terraform, ArgoCD GitOps and basic pipeline security. The catalogue does not list a separate DevSecOps course or a detailed security-tool syllabus. Call 083695 18569 to confirm the current batch scope.",
    sections: [
      {
        h2: "What DevSecOps topics are published?",
        paragraphs: [
          "The DevOps curriculum includes a basic look at pipeline security alongside Git, Jenkins, Docker, Kubernetes, Ansible, Terraform, ArgoCD, Prometheus and Grafana. This gives learners a delivery workflow in which security can be considered as code moves through source control, build, container and deployment stages. The public course pages do not name a dedicated DevSecOps track, security scanner, compliance framework or security certification.",
          "Treat this page as a guide to the security foundations mentioned in the broader DevOps course, not as confirmation of a standalone security-engineering syllabus. If you need a specific scanner, threat-modelling lab or compliance module, ask the campus whether it is part of the current batch before enrolling.",
        ],
      },
      {
        h2: "Who may benefit from DevSecOps foundations?",
        paragraphs: [
          "Developers, QA engineers, system administrators and DevOps learners who already work with delivery pipelines may want to understand where security checks fit. Start with Git and CI/CD fundamentals, then connect container and infrastructure changes to the deployment workflow. The related courses are taught at the Powai campus in Chandivali, with weekday and weekend batches published.",
          "The institute's placement figures apply to the institute overall, not to a separate DevSecOps cohort. It publishes 450+ placed and 5 Tier-1 Interviews Assured + Dedicated Placement Support. The site does not publish DevSecOps-specific placement outcomes or a list of security employers.",
        ],
      },
    ],
    faqs: [
      { q: "Is there a separate DevSecOps course in Mumbai?", a: "The public catalogue lists a DevOps course with basic pipeline-security content, but not a separate DevSecOps course. Confirm the current syllabus by calling 083695 18569." },
      { q: "Which security tools are included?", a: "The published syllabus mentions basic pipeline security but does not name a specific security scanner or tool. Ask the campus about the current batch syllabus." },
      { q: "Does this course award a security certification?", a: "No DevSecOps or security certification awarded by the institute is listed on the course pages." },
      { q: "Where can I see the related toolchain?", a: "The DevOps syllabus and course catalog list Git, Jenkins, Docker, Kubernetes, Terraform, ArgoCD and monitoring topics." },
    ],
  },
  "/career-switch-to-devops": {
    showMap: false,
    crumbs: [
      { name: "Home", href: "/" },
      { name: "Guides", href: "/sitemap" },
      { name: "Career Switch to DevOps", href: "/career-switch-to-devops" },
    ],
    links: [
      { href: "/devops-course-for-working-professionals", label: "DevOps course for working professionals" },
      { href: "/devops-course-for-freshers", label: "DevOps course for freshers" },
      { href: "/devops-course-eligibility", label: "DevOps course eligibility" },
      { href: "/devops-course", label: "DevOps course syllabus and career guide" },
    ],
    answer:
      "A DevOps career switch can build on work in IT support, QA, networking or system administration. The published course starts with Linux and Git, then moves through Jenkins, Docker, Kubernetes, Ansible, Terraform, GitOps and monitoring. Weekday and weekend batches are available at the Powai campus. Call 083695 18569 for current details.",
    sections: [
      {
        h2: "How can an IT professional plan a move into DevOps?",
        paragraphs: [
          "Start from the work you already understand. Support and system administrators can connect troubleshooting and server operations to Linux, automation and monitoring. QA professionals can connect repeatable tests to Git and CI/CD. Networking experience can help when learning cloud networks and Kubernetes service exposure. These are useful bridges, not prerequisites: the published entry point is basic computer skills, and the course begins with Linux and Git.",
          "The tool sequence published by the institute continues with Jenkins, Docker, Kubernetes, Ansible, Terraform, ArgoCD, Prometheus and Grafana. The four-month duration applies to the flagship classroom program. The site does not promise a fixed promotion timeline, salary increase or job outcome for a career switch.",
        ],
      },
      {
        h2: "Can you study while staying in your current job?",
        paragraphs: [
          "Weekday and weekend batches are published at Lodha Supremus, Chandivali, Powai. Weekend attendance is a common fit for working learners, but exact days, session times and seat availability change by batch; confirm them directly. The working-professionals page includes the published learner stories and the support the institute describes.",
          "Placement support includes resume help, mock interviews and career guidance, alongside the institute-wide figures of 450+ placed and 5 Tier-1 Interviews Assured + Dedicated Placement Support. These are not a promise of a role or a separate outcome statistic for career changers. Compare the curriculum with your current skills and ask about the current batch before making a transition plan.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need prior DevOps experience to switch careers?", a: "No prior DevOps experience is listed as an entry requirement. The published eligibility is basic computer skills, and Linux and Git are taught first." },
      { q: "Can QA or IT support professionals learn DevOps?", a: "The course audience includes QA, support and system-administration professionals moving toward automation. The same published curriculum applies." },
      { q: "Are weekend batches available?", a: "Yes. Weekday and weekend batches are published. Call 083695 18569 for current times and availability." },
      { q: "Will every learner receive a DevOps job?", a: "No individual job outcome is published. The institute describes placement support and publishes its overall placement figures." },
    ],
  },
  "/devops-projects-for-freshers": {
    showMap: false,
    crumbs: [
      { name: "Home", href: "/" },
      { name: "Guides", href: "/sitemap" },
      { name: "DevOps Projects for Freshers", href: "/devops-projects-for-freshers" },
    ],
    links: [
      { href: "/devops-course-for-freshers", label: "DevOps course for freshers" },
      { href: "/devops-course-syllabus", label: "DevOps course syllabus" },
      { href: "/courses/kubernetes-docker", label: "Kubernetes and Docker course" },
      { href: "/courses/devops", label: "DevOps course catalog" },
    ],
    answer:
      "Freshers can practise DevOps by building small, explainable workflows with Linux, Git, Jenkins, Docker, Kubernetes and Terraform. The examples on this page are practice ideas based on tools in the published curriculum, not a promised project list. DevOps Institute starts with Linux and Git. Call 083695 18569 for course details.",
    sections: [
      {
        h2: "What are useful DevOps project ideas for a fresher?",
        paragraphs: [
          "Begin with a small application and keep each project narrow enough to explain. Put its source in Git and document how to run it. Add a Jenkins pipeline that builds and tests a change. Package the application in Docker and use Compose to run a multi-service stack. These exercises connect to tools listed in the DevOps and Kubernetes course pages; they are suggested practice, not a claim about a fixed institute project brief.",
          "For a next step, deploy the container to Kubernetes and practise updating or rolling back a deployment. Use Terraform to describe a small cloud resource setup, then add a GitOps workflow as a separate exercise. The published curriculum names Kubernetes operations, Terraform, ArgoCD GitOps and Prometheus/Grafana monitoring. It does not publish a required project repository, grading rubric or an exact project count.",
        ],
      },
      {
        h2: "How should freshers present a project?",
        paragraphs: [
          "Explain the problem, the architecture, the steps another person can repeat, and what failed during testing. Show the Git history and pipeline result, then describe how the application is packaged and deployed. Avoid listing tools that your project does not actually use. A small project you can debug and explain is more useful in a conversation than a long list of unverified technologies.",
          "The course page welcomes fresh graduates and starts with Linux and Git, so prior DevOps projects are not stated as an eligibility requirement. The institute publishes project and capstone work as part of its broader learning and interview support, but the site does not promise that any example on this guide is assigned to every batch.",
        ],
      },
    ],
    faqs: [
      { q: "Do I need a project before joining a DevOps course?", a: "No prior DevOps project is listed as an entry requirement. The published eligibility is basic computer skills, with Linux and Git taught first." },
      { q: "Are these exact projects part of the course syllabus?", a: "They are practice ideas based on the published tools and outcomes, not a promise of specific assigned projects. Ask the campus for the current batch's project brief." },
      { q: "Which tools should a beginner start with?", a: "The published course order starts with Linux and Git, then progresses through CI/CD, Docker, Kubernetes and infrastructure tools." },
      { q: "Where can I read the official module list?", a: "Use the DevOps course syllabus and the course catalog for the institute's published modules and tools." },
    ],
  },
  "/devops-course-eligibility": {
    showMap: false,
    crumbs: [
      { name: "Home", href: "/" },
      { name: "Guides", href: "/sitemap" },
      { name: "DevOps Course Eligibility", href: "/devops-course-eligibility" },
    ],
    links: [
      { href: "/devops-course-for-freshers", label: "DevOps course for freshers" },
      { href: "/devops-course-for-working-professionals", label: "DevOps course for working professionals" },
      { href: "/devops-course", label: "DevOps course syllabus and career guide" },
      { href: "/faqs", label: "Frequently asked questions" },
    ],
    answer:
      "The published eligibility for the DevOps course is basic computer skills. The site does not state a required degree or prior DevOps job experience; Linux and Git are taught at the start. Freshers and working professionals are both named audiences. Call 083695 18569 to confirm any batch-specific requirements.",
    sections: [
      {
        h2: "Which education or experience is required?",
        paragraphs: [
          "The public eligibility line is basic computer skills. The course pages mention students, fresh graduates, developers, system administrators, QA and working IT professionals. They do not publish a mandatory BSc, BCA, engineering or computer-science degree, nor a minimum number of years in IT. That means this website does not support a degree-based restriction; confirm any admission or batch-specific conditions with the campus.",
          "The site also does not require prior DevOps experience. Linux and Git come first, before Jenkins, Docker, Kubernetes and the rest of the toolchain. If you are new to command-line work, mention that when you enquire so the team can explain the starting pace and current batch options.",
        ],
      },
      {
        h2: "Can non-IT graduates or working professionals join?",
        paragraphs: [
          "The course information names fresh graduates and working professionals, and the published starting point is basic computer skills. It does not publish a separate eligibility rule for a particular degree stream. A non-IT graduate should therefore ask the institute to confirm their situation rather than treating an assumed degree list as official policy.",
          "Weekday and weekend batches are available at the Powai campus. The course duration, exact timings and current seat availability should be confirmed for the batch you plan to attend. Eligibility is not a promise of a job; the published placement support and outcomes apply to the institute as stated on its placement pages.",
        ],
      },
    ],
    faqs: [
      { q: "Is a BSc, BCA or engineering degree mandatory?", a: "The site does not publish a mandatory degree or a degree-specific admission rule. The stated eligibility is basic computer skills; confirm current requirements with the campus." },
      { q: "Can a non-IT graduate learn DevOps?", a: "The public pages do not list a degree-stream restriction. They state basic computer skills and teach Linux and Git first. Ask the institute to confirm your individual eligibility." },
      { q: "Do I need coding or prior DevOps experience?", a: "No prior DevOps job is listed as required. The course begins with Linux and Git; ask the campus what level of programming familiarity the current batch expects." },
      { q: "Are freshers and working professionals both eligible?", a: "Both are named audiences on the course pages. Weekday and weekend batches are published." },
    ],
  },
  "/cicd-gitops-training-mumbai": {
    showMap: false,
    crumbs: [
      { name: "Home", href: "/" },
      { name: "Courses", href: "/courses" },
      { name: "CI/CD and GitOps Training in Mumbai", href: "/cicd-gitops-training-mumbai" },
    ],
    links: [
      { href: "/courses/devops", label: "DevOps course catalog" },
      { href: "/devops-course-syllabus", label: "DevOps course syllabus" },
      { href: "/devops-course-in-mumbai", label: "DevOps course in Mumbai" },
      { href: "/devsecops-course-in-mumbai", label: "DevSecOps learning path in Mumbai" },
    ],
    answer:
      "The published DevOps curriculum connects Git and Jenkins CI/CD with Docker, Kubernetes and GitOps workflows using ArgoCD. DevOps Institute teaches this toolchain at its Chandivali, Powai campus. The catalogue does not list a separate CI/CD or GitOps-only course. Call 083695 18569 for batch details.",
    sections: [
      {
        h2: "How do CI/CD and GitOps fit together?",
        paragraphs: [
          "CI/CD automates steps such as building and testing a change before delivery. The DevOps course names Git and Jenkins in its pipeline work. GitOps adds a declarative deployment workflow: ArgoCD is the named tool for GitOps, alongside Kubernetes and container topics. In a combined learning path, the concepts connect source changes, pipeline activity and cluster deployment rather than treating each tool as an isolated command list.",
          "The published toolchain includes Linux, Git, Jenkins, Docker, Kubernetes, Ansible, Terraform, ArgoCD, Prometheus and Grafana, with a basic look at pipeline security. The public syllabus does not publish a separate GitOps timetable, a particular ArgoCD lab count or a vendor certification for this track.",
        ],
      },
      {
        h2: "Who is this training relevant to?",
        paragraphs: [
          "Developers who want repeatable releases, QA engineers who want automated checks, and operations staff moving toward deployment automation may find the sequence relevant. Basic computer skills are the published eligibility, and foundational Linux and Git topics precede the pipeline and cluster work.",
          "The course is taught at Lodha Supremus, Chandivali, Powai, with weekday and weekend batches published. If you need a standalone Jenkins or ArgoCD course, ask the campus whether one is currently offered; the public catalogue describes these topics as part of the wider DevOps course.",
        ],
      },
    ],
    faqs: [
      { q: "Is CI/CD and GitOps a separate course?", a: "The public catalogue includes Jenkins CI/CD and ArgoCD GitOps in the DevOps curriculum, but does not list a separate course for either topic." },
      { q: "Which GitOps tool is named?", a: "ArgoCD is the GitOps tool named in the published DevOps curriculum." },
      { q: "Are Kubernetes and Docker part of the learning path?", a: "Yes. Docker and Kubernetes are listed alongside Jenkins, Terraform, ArgoCD and monitoring in the broader toolchain." },
      { q: "Where are classes held?", a: "At Lodha Supremus in Chandivali, Powai, Mumbai. Call 083695 18569 to confirm batch availability." },
    ],
  },
  "/cloud-engineer-course-in-mumbai": {
    showMap: false,
    crumbs: [
      { name: "Home", href: "/" },
      { name: "Courses", href: "/courses" },
      { name: "Cloud Engineer Course in Mumbai", href: "/cloud-engineer-course-in-mumbai" },
    ],
    links: [
      { href: "/cloud-computing-course", label: "Cloud computing course guide" },
      { href: "/cloud-computing-course-in-mumbai", label: "Cloud computing course in Mumbai" },
      { href: "/courses/aws", label: "AWS course catalog" },
      { href: "/courses/azure", label: "Azure course catalog" },
      { href: "/courses/gcp", label: "GCP course catalog" },
      { href: "/devops-course", label: "DevOps course syllabus and career guide" },
    ],
    answer:
      "A cloud engineer learning path can start with AWS, Azure or Google Cloud fundamentals, then add infrastructure, containers and deployment skills. DevOps Institute lists separate cloud courses and a broader DevOps course in Mumbai, taught at Lodha Supremus, Powai. Call 083695 18569 to choose a current batch.",
    sections: [
      {
        h2: "What should a cloud engineer learn?",
        paragraphs: [
          "Cloud engineering work depends on platform fundamentals: identity, compute, storage, networking and operations. The AWS course lists IAM, EC2, S3, VPC, RDS and CloudWatch. Azure lists virtual machines, virtual networks, Entra ID, storage, App Service, AKS and Azure DevOps pipelines. GCP lists Compute Engine, Cloud Storage, VPC, IAM, GKE, Cloud Build and monitoring topics. These are the platforms and services named in the course catalogue.",
          "Infrastructure as code, Git, containers and CI/CD help extend that foundation toward repeatable delivery. Terraform appears in the Linux and Terraform course and the wider DevOps toolchain; Docker, Kubernetes and pipelines also have published course content. The institute does not advertise one separate course called Cloud Engineer, so use the course pages to select a platform or combined path.",
        ],
      },
      {
        h2: "Which learning path fits your starting point?",
        paragraphs: [
          "If cloud consoles and networking are new, begin with a cloud course and learn one platform's identity, network and compute basics. If you already manage cloud resources and need automation, compare the Linux and Terraform or DevOps pages. If container operations are the gap, review the Kubernetes and Docker course. The site does not prescribe one universal order for every learner.",
          "Classes run at the Chandivali, Powai campus, with weekday and weekend batches published. The overall institute placement figures are 450+ placed and 5 Tier-1 Interviews Assured + Dedicated Placement Support; the site does not publish a separate cloud-engineer placement total or promise a particular job title.",
        ],
      },
    ],
    faqs: [
      { q: "Does DevOps Institute offer a course specifically named Cloud Engineer?", a: "The public catalogue lists cloud computing and vendor courses in AWS, Azure and GCP, not a course titled Cloud Engineer. Ask the campus to match a current course to your goal." },
      { q: "Which cloud platforms are covered?", a: "The site lists AWS, Microsoft Azure and Google Cloud courses, each with its own published service topics." },
      { q: "Should I learn DevOps with cloud?", a: "The broader DevOps course adds Git, pipelines, containers, Terraform, GitOps and monitoring. Choose based on whether your main gap is cloud fundamentals or delivery automation." },
      { q: "Are cloud-engineer placement results published separately?", a: "No separate cloud-engineer total is published. The institute's overall placement figures are stated on its placement pages." },
    ],
  },
  "/devops-interview-preparation": {
    showMap: false,
    crumbs: [
      { name: "Home", href: "/" },
      { name: "Guides", href: "/sitemap" },
      { name: "DevOps Interview Preparation", href: "/devops-interview-preparation" },
    ],
    links: [
      { href: "/devops-course-syllabus", label: "DevOps course syllabus" },
      { href: "/devops-course-for-freshers", label: "DevOps course for freshers" },
      { href: "/devops-course-for-working-professionals", label: "DevOps course for working professionals" },
      { href: "/placements", label: "Published placement support and outcomes" },
    ],
    answer:
      "DevOps interview preparation is stronger when you can explain a working pipeline, container, deployment and infrastructure change. DevOps Institute lists mock interviews, resume support and career guidance as placement activities, alongside its practical curriculum. It does not publish a fixed question bank or interview-round promise. Call 083695 18569.",
    sections: [
      {
        h2: "What should you be ready to explain?",
        paragraphs: [
          "Use the published toolchain to prepare a clear project story: how Git tracks a change, how Jenkins builds and tests it, how Docker packages the application, and how Kubernetes deploys or rolls it back. Be prepared to explain where Terraform or Ansible fits, how ArgoCD relates to GitOps, and what Prometheus or Grafana helps you observe. These topics come from the course pages; they are not a promise of specific interview questions.",
          "For each project, describe the goal, the sequence of changes, an issue you had to troubleshoot and what you learned. Do not claim production experience or certification you do not have. The DevOps course starts from Linux and Git, so freshers can build their explanation from the foundational labs rather than pretending to have held an operations role.",
        ],
      },
      {
        h2: "What interview support does the institute publish?",
        paragraphs: [
          "The institute names resume support, mock interviews and career guidance among its placement-support activities. It publishes 450+ placed and 5 Tier-1 Interviews Assured + Dedicated Placement Support. The site does not publish a fixed interview question bank, number of mock rounds, employer-specific interview schedule or a promise that a learner will receive an offer.",
          "Ask which mock-interview activities apply to your batch and what attendance, capstone or clearance conditions apply to the interview assurance. The published policy references 80% attendance, capstone projects and mock-interview clearance. The classroom is at Lodha Supremus, Chandivali, Powai; weekday and weekend batches are available.",
        ],
      },
    ],
    faqs: [
      { q: "Does the institute provide DevOps mock interviews?", a: "Mock interviews are among the placement-support activities the institute publishes. Confirm the current batch process and requirements with the campus." },
      { q: "Are exact interview questions or rounds published?", a: "No fixed question bank or number of interview rounds is published. Prepare to explain the tools and projects you have actually practised." },
      { q: "What are the conditions for interview assurance?", a: "The published policy references 80% attendance, capstone projects and mock-interview clearance. Ask the campus for current terms." },
      { q: "Can freshers prepare for DevOps interviews?", a: "Yes. Freshers are a named audience, and the course starts with Linux and Git before progressing to pipelines and infrastructure tools." },
    ],
  },
  "/platform-engineering-career-guide": {
    showMap: false,
    crumbs: [
      { name: "Home", href: "/" },
      { name: "Guides", href: "/sitemap" },
      { name: "Platform Engineering Career Guide", href: "/platform-engineering-career-guide" },
    ],
    links: [
      { href: "/devops-course", label: "DevOps course syllabus and career guide" },
      { href: "/devops-course-syllabus", label: "DevOps course syllabus" },
      { href: "/kubernetes-course-in-mumbai", label: "Kubernetes course in Mumbai" },
      { href: "/terraform-course-in-mumbai", label: "Terraform course in Mumbai" },
      { href: "/cicd-gitops-training-mumbai", label: "CI/CD and GitOps training in Mumbai" },
    ],
    answer:
      "Platform engineering builds on skills such as Kubernetes, infrastructure as code, CI/CD, GitOps and observability. DevOps Institute's published curriculum includes these foundations across its DevOps and cloud courses in Powai. The site does not list a separate platform-engineering course or promise a specific career outcome. Call 083695 18569.",
    sections: [
      {
        h2: "Which skills connect to platform engineering?",
        paragraphs: [
          "A platform engineer helps make infrastructure and delivery workflows repeatable for application teams. The published DevOps toolchain offers relevant foundations: Linux and Git, Jenkins CI/CD, Docker, Kubernetes, Ansible, Terraform, ArgoCD GitOps, Prometheus and Grafana. Those tools give learners context for containers, automation, declarative changes and service visibility. This is a skills map, not a claim that the institute runs a dedicated internal-platform engineering lab.",
          "Cloud courses add provider concepts such as identity, networking, compute and managed Kubernetes services. The practical path depends on the work you already know: strengthen cloud fundamentals if account operations are new, or focus on containers and infrastructure as code if you already support workloads. The site does not publish a formal platform-engineer job ladder or required certification.",
        ],
      },
      {
        h2: "How can you prepare for a platform role?",
        paragraphs: [
          "Build a demonstrable workflow using the tools you have actually practised. Explain how infrastructure is described, how an application is packaged, how a deployment is updated and how its health is observed. A platform story should make the developer-facing benefit clear, not just list Kubernetes commands. The DevOps syllabus and course pages provide the published scope for these foundations.",
          "The relevant courses are taught at Lodha Supremus, Chandivali, Powai. Weekday and weekend batches are published. The institute's placement support applies as published, but there is no separate platform-engineering placement statistic or assured platform-engineer role on the site. Confirm course fit and current labs with the campus.",
        ],
      },
    ],
    faqs: [
      { q: "Does DevOps Institute offer a dedicated platform-engineering course?", a: "The public catalogue lists DevOps, cloud, Kubernetes and Terraform courses, but not a separate platform-engineering course." },
      { q: "Which platform-engineering foundations are in the curriculum?", a: "The published DevOps toolchain includes Kubernetes, Terraform, Jenkins, GitOps with ArgoCD, Docker and Prometheus/Grafana monitoring." },
      { q: "Is platform engineering the same as DevOps?", a: "They overlap in automation, infrastructure and delivery practices, but the site does not publish a formal comparison or a standalone platform-engineering syllabus." },
      { q: "Does training assure a platform-engineering job?", a: "No. The site publishes institute-wide placement support, not a platform-engineer-specific job assurance or placement total." },
    ],
  },
  "/openshift-administrator-course-in-mumbai": {
    showMap: false,
    crumbs: [
      { name: "Home", href: "/" },
      { name: "Courses", href: "/courses" },
      { name: "OpenShift Administrator Training in Mumbai", href: "/openshift-administrator-course-in-mumbai" },
    ],
    links: OPENSHIFT_LINKS,
    answer:
      "OpenShift administrators work with container platforms, Kubernetes workloads, access controls and application operations. DevOps Institute's published Mumbai course is Kubernetes and Docker training at Lodha Supremus, Chandivali, Powai. Its catalogue does not list a dedicated OpenShift course or OpenShift-specific syllabus, so confirm the current lab scope before enrolling. Call 083695 18569.",
    sections: [
      {
        h2: "What does an OpenShift administrator need to understand?",
        paragraphs: [
          "An OpenShift administrator needs a working grasp of container images, Kubernetes workloads, cluster access, networking and persistent storage, along with the ability to investigate an application that is not healthy. Those foundations help you reason about deployments, services, ingress, Helm and role-based access control. OpenShift also has product-specific administration concepts; familiarity with Kubernetes alone should not be presented as complete OpenShift training.",
          "The current course catalogue at DevOps Institute lists Kubernetes and Docker training, not a separate Red Hat OpenShift Administrator course. It does not publish an OpenShift syllabus, version, lab environment or Red Hat certification preparation. This page is a skills guide and a route to the related Kubernetes course, not a promise that those OpenShift-specific labs are included.",
        ],
      },
      {
        h2: "How does the Kubernetes course relate to OpenShift?",
        paragraphs: [
          "The published Kubernetes and Docker course starts with Docker architecture, images, containers, Dockerfiles and Compose. It then covers Kubernetes pods, deployments, services, ConfigMaps, Secrets, ingress, persistent volumes, Helm, autoscaling and RBAC. Those are useful container and orchestration foundations for someone moving toward platform administration, but they are not a substitute for learning the OpenShift console, command-line tools or product-specific operations.",
          "The classroom is at Lodha Supremus, B 1307, Saki Vihar Road, Chandivali, Powai, Mumbai 400072. Weekday and weekend batches are published for the campus. Ask the team whether a current batch includes any OpenShift-specific demonstrations before treating it as OpenShift administrator training. The curriculum page only confirms the Kubernetes and Docker topics listed above.",
        ],
      },
      {
        h2: "Who should consider this learning path?",
        paragraphs: [
          "Developers packaging applications, system administrators modernising infrastructure, and cloud or DevOps engineers who need stronger cluster fundamentals may find the Kubernetes and Docker course relevant. It is also a practical starting point if your next role mentions Kubernetes and you want to understand workloads, access and service exposure before specialising in a vendor platform.",
          "A mentor profile on the trainers page lists OpenShift among the mentor's areas of expertise. The site does not assign that mentor to a particular class, so ask who will teach the batch and what platform its labs use. For Red Hat exam preparation or a dedicated OpenShift administration syllabus, confirm those details directly rather than assuming they are part of the published course.",
        ],
      },
    ],
    faqs: [
      {
        q: "Does DevOps Institute offer a dedicated OpenShift administrator course?",
        a: "The public course catalogue lists Kubernetes and Docker training, but does not list a dedicated OpenShift course. Call 083695 18569 to confirm whether the current batch includes any OpenShift-specific material.",
      },
      {
        q: "Will Kubernetes training prepare me to administer OpenShift?",
        a: "It teaches related foundations including Docker, Kubernetes workloads, ingress, storage, Helm and RBAC. OpenShift has additional product-specific administration, which the published syllabus does not cover.",
      },
      {
        q: "Does the course prepare students for a Red Hat OpenShift certification?",
        a: "The course catalogue does not publish Red Hat OpenShift certification preparation or an OpenShift exam syllabus. Confirm the current scope with the campus before enrolling.",
      },
      {
        q: "Where is the related Kubernetes course held?",
        a: "At Lodha Supremus in Chandivali, Powai, Mumbai. Weekday and weekend batches are published; call 083695 18569 for current details.",
      },
    ],
  },
  "/aws-devops-course": {
    classroomFirst: true,
    showMap: false,
    schemaTeaches: [
      "IAM, EC2, S3 and VPC on AWS",
      "CI/CD pipelines that deploy to AWS",
      "Terraform beside the AWS console",
      "Docker and Kubernetes in the same four-month classroom",
    ],
    crumbs: [
      { name: "Home", href: "/" },
      { name: "Courses", href: "/courses" },
      { name: "AWS Cloud & DevOps Engineering Course in Mumbai (Powai Campus)", href: "/aws-devops-course" },
    ],
    links: AWS_LINKS,
    answer:
      "The Powai classroom teaches AWS account work in the same four-month sitting as Git, containers and pipelines at Lodha Supremus. This page is the sequence. The service catalog remains on the AWS course page. Call 083695 18569 and name weekday or weekend.",
    sections: [
      {
        h2: "Why this page is not the AWS catalog",
        paragraphs: [
          "Read the address before you read the labs. The AWS course catalog lives at /courses/aws and keeps the published service list: IAM, EC2, EBS, load balancing, S3, VPC subnets, route tables, NAT, security groups, RDS, DynamoDB, CloudWatch, CloudTrail and a sample application deployed on AWS from end to end. The Mumbai and Powai AWS pages answer a different question, which is how a learner reaches Lodha Supremus from the wider city or from the lake side. This page, /aws-devops-course, does not replace those URLs. It explains the order in which that same AWS work sits beside Git, a pipeline, containers and Terraform inside the published four-month classroom.",
          "Treat the catalog as the inventory and this page as the timetable. If a counsellor, a friend or a search result sends you here for a suburb commute, go back to the Powai or Mumbai AWS page. If you already know the campus is in Chandivali and you want to know when the account is considered ready for a pipeline, stay. Both pages describe one institute and one room. They are split so a crawler and a person can tell a service list from a sequence.",
        ],
      },
      {
        h2: "Where AWS sits inside the four-month classroom",
        paragraphs: [
          "The published program runs for four months at Lodha Supremus, B 1307, Saki Vihar Road, Tunga Village, Chandivali, Powai, Mumbai 400072. Weekday batches and weekend batches both use that room. About 80% of a session is spent in labs, which is the figure already printed on the about page. The shared intro on this site also calls the work 100% practical classroom training. Those two lines describe the same habit: you are not collected in a hall to watch a long slide deck and then sent home to try AWS alone.",
          "Linux and Git come early because an AWS account without a repository is a console you cannot explain later. The DevOps catalog names Jenkins for pipelines, Docker and Kubernetes for runtime, Ansible for configuration, Terraform for infrastructure as code, and Prometheus with Grafana for the dashboards. This page does not invent a second toolchain. It says which of those tools are allowed to touch the AWS account only after you can draw the network and name the identity that would deploy.",
        ],
      },
      {
        h2: "The account boundary you build before any server",
        paragraphs: [
          "The first AWS lab that matters on this path is not a random instance. It is identity. IAM users, groups and permissions are how the classroom stops every learner from sharing one root key. You should be able to say who may launch a machine, who may only read a bucket, and who may not open the billing console. That sentence is the difference between a screenshot of the AWS home page and an account a pipeline could later use.",
          "CloudTrail sits beside that identity work because a change you cannot see is a change you cannot defend in a mock interview. The catalog already lists CloudTrail with CloudWatch. Here the point is narrower: before the class moves on to compute, you should be able to find an event that proves a permission was used. Mentors at the Powai campus are working practitioners. The trainers page names them and does not assign a person to your batch. Ask 083695 18569 who is in the room for the sitting you would join.",
        ],
      },
      {
        h2: "Compute, storage and the network as one drawing",
        paragraphs: [
          "EC2, EBS and a load balancer are the compute half of the published AWS outcomes. S3 with versioning is the object store. RDS is the relational database for the sample application, and DynamoDB is named so a key-value store is not a surprise when it appears in a diagram. None of those services is the page. The page is the VPC you draw around them: subnets, route tables, NAT and security groups, until you can explain what may talk to what without pointing at a slide.",
          "A private subnet that can reach outward through NAT, and a security group that is the door on the instance, is the network story the catalog already promises. This sequence asks you to keep that drawing on paper beside the console so the later pipeline has a destination. If the drawing is missing, deploying a sample application end to end is a click-path you will not remember. The outcome the AWS course already publishes is that end-to-end sample, plus CloudWatch alarms and basic cost controls. Cost controls here means the alarms and the habit of looking, not a fee and not a price list.",
        ],
      },
      {
        h2: "When a pipeline is allowed to deploy",
        paragraphs: [
          "Jenkins is the CI tool named on the DevOps course. The AWS catalog separately says learners deploy applications and CI/CD pipelines on AWS. Put those two lines together and you get the moment this page exists to describe. A pipeline may build from Git only after the branch story is boring. It may deploy into the account only after the identity and the VPC exist. The classroom does not start with a magic button that creates a production estate.",
          "Containers enter the same sitting. Docker images and Kubernetes workloads are taught in the DevOps program and have their own catalog at /courses/kubernetes-docker plus a containerization page at /kubernetes-docker-course. On the AWS path, the container is the artifact the pipeline promotes. You should be able to say which build produced the image, which identity pushed it, and which service in the VPC received it. If you can only say that AWS is a cloud, you are still on the catalog, not on this sequence.",
        ],
      },
      {
        h2: "Terraform beside the console, not instead of it",
        paragraphs: [
          "Terraform is already on the DevOps skill list and on the Linux and Terraform course. Learners on this AWS path still click the console first, because a module you have never seen in the portal becomes fiction inside a plan file. HCL comes after the VPC, the instance and the bucket are familiar. The published point of infrastructure as code is that the sample estate can be described and stood up again, not that the console is forbidden.",
          "State, variables and a module boundary are discussed only as far as the existing Terraform course already goes. This page does not publish a private module registry, a remote-state product choice beyond what the syllabus already implies, or a claim that every Mumbai employer uses one layout. You leave with a story: console first, then a description of the same network, then a pipeline that could apply a change. That story is what mock interviews at this campus are built to rehearse. The placement lines the site already prints are 450+ placed, 5 Tier-1 Interviews Assured + Dedicated Placement Support, with 350+ hiring partners.",
        ],
      },
      {
        h2: "Who should open the catalog first",
        paragraphs: [
          "Open /courses/aws first if you need the audience list. The catalog already says the AWS course is for fresh graduates, system administrators, developers who want to deploy, and working professionals preparing for AWS certification exams. This page does not add a pass rate, a voucher, or a certificate that DevOps Institute awards. The key facts on every page already say labs overlap exam topics and that this site does not name a certificate the institute awards.",
          "Open this page if you are choosing between a cloud-only sitting and the four-month DevOps path that includes AWS. The comparison guide at /devops-vs-cloud-computing-course is still the place for that choice in the abstract. Here the choice is concrete: AWS labs at Lodha Supremus are the same labs either way, and the DevOps path is the one that refuses to leave them as a disconnected console tour. Weekend batches exist for people already in a job. Weekday batches exist for people who can sit during the day. The seat is a phone question, not a form that confirms itself.",
        ],
      },
      {
        h2: "What a Powai sitting actually feels like",
        paragraphs: [
          "You come to Chandivali, not to a suburb page that merely mentions Chandivali. Saki Naka metro is the last-mile reference the Saki Naka page already uses. This page will not redraw that commute. Once you are in the room, the work is an account, a drawing, a repository and a pipeline, in that order, across the four months. A missed lab is not replaced by a recording policy this site has not published. About 80% hands-on means the hour is mostly the console and the editor.",
          "The mentors you may meet are the people on /trainers. Yogesh Devpura, Sirin Ali, Ninad Samudre, Amit Mishra, Arshad Mitha, Priyanka Gawada, Ankit Shukla, Mehar Nafis and Armugharaj Nadar are named there with employers only when a profile states one. An employer on a card is not an endorsement of this institute. Do not arrive expecting a particular mentor until the campus confirms the batch. The phone is 083695 18569.",
        ],
      },
      {
        h2: "Placement words this page will repeat, and the ones it will not",
        paragraphs: [
          "Repeat only what the placements page already allows. 450+ placed, 5 Tier-1 Interviews Assured + Dedicated Placement Support are published phrases. 350+ hiring partners is published. Four testimonial names exist on the site, and only Rajeswari Singh’s card records a placed outcome. This page will not invent the other names, the employer list, or a salary table. Company, role and a consented photo are not published for the rest of that 450+ figure. Read /placements before you treat a total as a personal offer.",
          "Mock interviews, resume reviews and career guidance are the support the guides already describe. They are practice, not a promise that a particular company will call. Sister campuses in Thane, Vashi and Ghatkopar are on https://devopsinstitutemumbai.co.in/ and are not a second Powai room. If your ride is to Thane West or to Vashi, use that site. If your ride is to Lodha Supremus, the AWS sequence in this classroom is the one on this URL.",
        ],
      },
      {
        h2: "Affiliations, reviews and the demo hour",
        paragraphs: [
          "The affiliation sentence this institute prints names NASSCOM, IBM, the Government of India through MEITY, and IIT Patna, and a collaboration with IIT and Microsoft. The names stay in words. This page does not add logos, and it does not say those bodies sit your exam or hire you. Reviews on the site are a 4.7 rating from 130 Google reviews, plus the stories already quoted. Dates for those Google reviews are not stored here.",
          "Book the room before you book the batch. /free-demo-powai is the hour in the lab, and /contact is the address, the map and the enquiry form. Course Fees Starting at ₹12,500/month (Easy EMI Options Available) Ask for the full fee structure on the phone. Bring the catalog questions to the demo if you want the service list repeated in the room, and bring sequence questions here if you want to know when Terraform is allowed to describe the VPC you already clicked.",
        ],
      },
      {
        h2: "Monitoring and the story you tell after the sample deploys",
        paragraphs: [
          "CloudWatch alarms are already an AWS course outcome, next to basic cost controls. On this sequence they come after the sample application is actually deployed, because an alarm with nothing to watch is a screenshot. You should be able to name the metric you chose, the threshold that would wake you, and the identity that was allowed to create the alarm. CloudTrail remains the record of who changed the account. Prometheus and Grafana stay on the DevOps skill list for the cluster and host view. This page does not merge those dashboards into CloudWatch or pretend one product replaced the other.",
          "The interview version of that lab is short. You deployed a sample application end to end on AWS, you can draw the VPC it lived in, you can say which pipeline run produced it, and you can show an alarm that would have fired if the instance went quiet. That is the whole story this URL is willing to coach. It is not a salary table and it is not a list of employers. If the counsellor’s sentence grows past those four beats, ask them to point at the page that already printed the extra claim. If they cannot, the extra claim is not one this classroom has published.",
        ],
      },
      {
        h2: "A practical week without an invented hour grid",
        paragraphs: [
          "No weekly timetable is published, so this page will not invent Monday-to-Friday hours. What it will say is the order that should survive whatever grid the next batch uses. Early sittings are Linux, Git and the AWS account boundary. Middle sittings are the VPC drawing, compute, storage and the sample application. Later sittings are the pipeline, the container artifact and Terraform describing the network you already built. Monitoring closes the loop. If a batch swaps two neighbouring labs, the dependency still holds: do not automate an account you cannot explain.",
          "People who work in Andheri, Saki Naka or the western suburbs already have area pages for the ride. This sequence does not change because the train was late. It changes only if you pick the cloud computing course instead of the DevOps course, and even then the AWS catalog labs are the same services. Say which course you are asking about when you call 083695 18569, and say whether the sitting has to be a weekend. The campus can answer seat and start date. This page can answer order. If you want the room before that call becomes an enrolment, the demo hour is the shorter visit, and it still happens at Lodha Supremus rather than on a video the site has not published.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is this the same as the AWS course page?",
        a: "No. /courses/aws is the service catalog. /aws-course-in-mumbai and /aws-course-in-powai are local pages. This URL is the four-month sequence that places those AWS labs beside Git, pipelines, containers and Terraform.",
      },
      {
        q: "Which AWS services are actually in the lab?",
        a: "The catalog already lists IAM, EC2, EBS, load balancing, S3, VPC, RDS, DynamoDB, CloudWatch, CloudTrail and an end-to-end sample application. This page does not add services that list does not name.",
      },
      {
        q: "Do you award an AWS certificate?",
        a: "No certificate name is published as something DevOps Institute awards. Labs overlap exam topics. A pass rate and an exam voucher are not published.",
      },
      {
        q: "Where is the classroom?",
        a: "Lodha Supremus, B 1307, Saki Vihar Road, Tunga Village, Chandivali, Powai, Mumbai 400072. Thane, Vashi and Ghatkopar stay on https://devopsinstitutemumbai.co.in/.",
      },
      {
        q: "How long is the batch?",
        a: "The published program is four months, with weekday and weekend batches in the same Powai room. A weekly hour grid is not printed.",
      },
      {
        q: "What placement lines can I repeat?",
        a: "450+ placed, 5 Tier-1 Interviews Assured + Dedicated Placement Support and 350+ hiring partners. Individual offers beyond the stories already on the site are not invented here.",
      },
      {
        q: "When should I use the demo page?",
        a: "Use /free-demo-powai to see the lab hour. Use /contact for the map and the form. Use this page to understand the AWS sequence before you ask for a seat.",
      },
      {
        q: "Are fees listed here?",
        a: "No. This page does not print a fee. Call 083695 18569 and ask for the batch you can actually attend.",
      },
    ],
  },
  "/azure-devops-course": {
    classroomFirst: true,
    showMap: false,
    schemaTeaches: [
      "Azure portal, Entra ID, virtual machines and virtual networks",
      "Azure DevOps pipelines",
      "AKS fundamentals beside the Azure account",
      "Fundamentals topics learners associate with AZ-900",
    ],
    crumbs: [
      { name: "Home", href: "/" },
      { name: "Courses", href: "/courses" },
      { name: "Microsoft Azure Cloud & Azure DevOps Training in Mumbai", href: "/azure-devops-course" },
    ],
    links: AZURE_LINKS,
    answer:
      "Azure portal labs and Azure DevOps pipelines share one Powai classroom at Lodha Supremus, inside the published four-month batch. AZ-900 is the fundamentals exam learners ask about, not a credential this page awards. Call 083695 18569 to ask which sitting is open.",
    sections: [
      {
        h2: "What this URL covers that the Azure catalog does not",
        paragraphs: [
          "The Azure catalog is /courses/azure. It already lists the portal and CLI, Microsoft Entra ID, virtual machines, virtual networks and network security groups, storage accounts, App Service, Azure Kubernetes Service fundamentals, Azure DevOps pipelines and Azure Monitor. The Mumbai Azure page is the local page for learners who need the Chandivali classroom described from the city. This URL is the join between those portal labs and the pipeline product Microsoft names Azure DevOps, plus a plain answer for people who arrive asking about AZ-900.",
          "Keep the catalog if you want the inventory in one place. Keep the Mumbai page if you want the local commute story. Stay here if your question is how a resource group, an identity and a pipeline share one sitting at Lodha Supremus, or what this institute will and will not say about the fundamentals exam. The pages link to each other so they do not pretend to be three courses in three buildings. There is one Powai room.",
        ],
      },
      {
        h2: "AZ-900 as a question, not as a badge we hand out",
        paragraphs: [
          "Learners ask about AZ-900 because it is the Microsoft fundamentals exam: cloud concepts, core Azure services, security and identity, and a first look at governance and cost. The Powai labs already touch the portal, Entra ID, virtual machines, networks and storage, which are the parts of that map a classroom can practise. The key facts on this site say labs overlap exam topics and that DevOps Institute does not name a certificate it awards. This page repeats that limit. It does not publish a pass rate, a voucher, an exam seat, or a claim that finishing the batch is the same as holding the Microsoft credential.",
          "Cost appears in the fundamentals map as a concept, which is why people expect a price conversation. This page will not quote Azure prices and will not quote a course fee. Basic cost controls on the AWS side of the institute are alarms and the habit of looking. On Azure, the same habit is reading what the portal shows you about a resource you created, then asking the mentor why it exists. The fee for your seat is a question for 083695 18569.",
        ],
      },
      {
        h2: "Identity and the resource group come before the pipeline",
        paragraphs: [
          "Entra ID users, groups and roles are the published identity outcome. A pipeline in Azure DevOps that deploys with a vague owner is not a lab this classroom treats as finished. You should be able to say which identity created the resource group, which role can change it, and which role can only read it. That is the same discipline as the IAM story on the AWS path, told in Microsoft’s directory rather than in AWS IAM.",
          "Virtual machines, availability choices, virtual networks, subnets and network security groups are the infrastructure block the catalog already promises. App Service is the simpler host for a web workload. AKS is named so a cluster is not a surprise, and the container page on this domain is where image-to-Helm detail lives. Here, AKS is the destination a pipeline might reach after the network is explainable. Azure Monitor and Log Analytics are how you show the workload after it is deployed, which is the monitoring outcome already on the Azure course.",
        ],
      },
      {
        h2: "Azure DevOps pipelines inside the four-month batch",
        paragraphs: [
          "The catalog line is specific: build-and-release pipelines in Azure DevOps. This page puts that line on a clock. The four-month program at the Powai campus also teaches Git, Jenkins, Docker, Kubernetes and Terraform, because the flagship path is a DevOps course and not an Azure-only product tour. Azure DevOps is the Microsoft pipeline you practise when the account is Azure. Jenkins remains the pipeline named on the DevOps catalog. You should ask the campus which pipeline tool the next batch spends the longer lab on, instead of assuming both are equal hours. A weekly hour grid is not published.",
          "A release that targets a resource group you have never drawn is a form you filled in. A release that targets a resource group whose network you can sketch is the lab. The published outcome is that you can build the pipeline and explain it. Weekend sittings exist for people who already work. Weekday sittings exist for people who can be in Chandivali during the day. Both are in the same room at Lodha Supremus.",
        ],
      },
      {
        h2: "How this differs from the AWS sequence",
        paragraphs: [
          "The AWS sequence on /aws-devops-course is the same four-month idea told against IAM, VPC and a Jenkins-or-console deploy into AWS. This page is the Microsoft account: Entra ID, a virtual network, App Service or AKS, and Azure DevOps. Choosing both stories in one batch is normal, because the institute teaches AWS, Azure and GCP in the Powai classroom. Choosing this URL as your reading order means you want the Microsoft names first.",
          "GCP keeps its own catalog at /courses/gcp. This page will not fold Compute Engine and GKE into the Azure lab in order to look broader. If you need all three clouds as a map, the cloud computing course is the hub. If you need Azure DevOps as a product you can click, stay here and then open the catalog for the full skill list. Cannibalising those URLs would mean pasting the same module table onto this page. The table stays on /courses/azure.",
        ],
      },
      {
        h2: "A learner’s hour in Chandivali",
        paragraphs: [
          "About 80% of a session is lab time. The room is the Powai campus, not a Thane address and not a Vashi address. Sister campuses remain on https://devopsinstitutemumbai.co.in/ with their own phone, 084510 86339, as printed for Thane and Vashi. Ghatkopar is on that same sister site. Publishing those doors here is a redirect, not a claim that the Azure lab moves to RCity when the train is bad.",
          "You will be asked to leave a trace: a resource group name you can defend, a role assignment you can justify, a pipeline run you can find again. Mentors are the named practitioners on the trainers page. The card does not mean that employer endorses the institute, and it does not mean that person teaches every weekend. Call and ask. The Powai phone is 083695 18569.",
        ],
      },
      {
        h2: "Reviews, placement lines and affiliations",
        paragraphs: [
          "Google reviews published on this site are 4.7 from 130. The longer quotes already on the homepage are not retyped here as if they were new. Placement language stays inside the published set: 450+ placed, 5 Tier-1 Interviews Assured + Dedicated Placement Support, 350+ hiring partners. The placements page explains why only a few names are listed. This Azure page will not add a company logo wall.",
          "Affiliations stay in words: NASSCOM, IBM, the Government of India through MEITY, IIT Patna, and a collaboration with IIT and Microsoft. None of those names is a shortcut around the portal lab. None of them is printed here as the body that issues AZ-900. If a sentence you read elsewhere upgrades those affiliations into an exam result, it is not a sentence from this page.",
        ],
      },
      {
        h2: "What to do before you ask for a seat",
        paragraphs: [
          "Read the catalog if any service name above is unfamiliar. Read /free-demo-powai if you want the room before the invoice conversation. Read /contact if you want the map. Fees stay off this page on purpose. The demo hour is not a hidden price list either. Bring one concrete question: which batch still has a seat, and does that batch spend its pipeline lab in Azure DevOps.",
          "If you are a working administrator in a Microsoft estate, the catalog already lists you as someone the Azure course is for. If you are a fresher, the same catalog says the path is career-focused and does not pretend you already run a tenant. Either way the classroom is Chandivali. The sequence on this URL is how the portal and the pipeline share the four months.",
        ],
      },
      {
        h2: "Storage, App Service and the small host",
        paragraphs: [
          "Azure Storage accounts are on the catalog so a learner can put blobs and files somewhere that is not the virtual machine’s disk. App Service is the published way to host a web workload without becoming a cluster administrator on day one. Treat App Service as the small host: you still need a resource group, an identity and a way to deploy, but you do not need AKS to prove you can ship a site. The pipeline lab can target App Service first and AKS later, if the batch’s hours allow it. This page will not invent which one gets more days.",
          "A fresher who has never opened the portal should do the storage account and the App Service deploy before they touch a cluster. A working administrator who already lives in a tenant can move faster, but the classroom still wants the same explanation: which identity deployed, which network the app can reach, and where the logs went. Azure Monitor is that last clause. Log Analytics is the place the catalog says those logs can land. Quoting a storage price or an App Service plan price is not part of the lab and is not part of this page.",
        ],
      },
      {
        h2: "AKS only as far as the Azure catalog goes",
        paragraphs: [
          "Azure Kubernetes Service is listed as fundamentals, not as a second container course. Pods, ingress, Helm and RBAC stay on /kubernetes-docker-course so this page does not copy them. What belongs here is the Azure-shaped edge: the cluster lives in a resource group, the identity that created it is an Entra ID story, and the virtual network around it is the same network discipline as the virtual machine lab. If you cannot say which subnet the cluster uses, you are not done with the Azure side even if the Helm release is green.",
          "Learners who want only containers should not start on this URL. Learners who want only AZ-900 vocabulary should still open the catalog, because the exam map is wider than AKS and this institute has not published an exam workshop. The honest overlap is portal fluency, identity, core services and a first pipeline. Anything past that is the four-month DevOps path, not a weekend badge.",
        ],
      },
      {
        h2: "Governance you can practise without a price list",
        paragraphs: [
          "Fundamentals material asks people to talk about governance: regions, resource groups, tags, locks, and the idea that cost is visible. You can practise the first four in the Powai lab. Tags and resource groups are names you choose and then have to live with. Locks are how you stop a cleanup script from deleting the lab you still need. Regions are a map, and the classroom should make you say why a resource was created in the region you picked. Cost visibility means you can find the blade that shows spend. It does not mean this page will quote a number, convert it, or compare it with a fee.",
          "Policy and management-group design beyond that sketch are not a published module on the Azure catalog, so this page will not add them to sound complete. If your employer uses a landing zone with many subscriptions, bring that as a question to the demo, not as an assumption that the batch reproduces your tenant. The lab tenant is the classroom’s. Your production tenant stays at work.",
        ],
      },
      {
        h2: "A reading order for someone who already lives in Microsoft tools",
        paragraphs: [
          "Start with /courses/azure so the skill names are familiar. Then read this page once, slowly, and mark the sentence that says AZ-900 is not a credential we hand out. Then read /kubernetes-docker-course only if the batch you want includes the cluster weeks. Then read /placements so the 450+ figure has a boundary around it. Book /free-demo-powai if you still need the room. The Mumbai Azure page is optional unless you are comparing commutes.",
          "When you call, lead with the constraint that actually binds you. Weekend only. Azure DevOps rather than Jenkins for the longer pipeline lab. A start date before a notice period ends. The person on 083695 18569 can match those constraints to a sitting or tell you none matches. This page cannot see the register. It can only keep the public story stable so the phone call is about a seat and not about a contradiction between two URLs.",
        ],
      },
      {
        h2: "What a finished Azure explanation sounds like",
        paragraphs: [
          "A finished explanation from this classroom is specific and short. You created a resource group in a region you can name. You signed in as an Entra ID user whose role was not the global shortcut. You placed a virtual machine or an App Service app on a virtual network you can sketch, with a network security group that you can justify. You ran a pipeline in Azure DevOps that deployed that app again, and you found the run later. You opened Azure Monitor far enough to show that the app was alive. If AKS was in your batch, you can say which subnet it used and then point to the container page for the objects inside the cluster.",
          "That explanation does not include a Microsoft score report, a fee, or a hiring partner’s name. It does include the four-month context: this work shared a room with Linux, Git and the rest of the DevOps toolchain, at Lodha Supremus, with weekday and weekend batches as the published modes. About 80% of each session is lab. If your explanation is only the phrase cloud computing, you read the wrong page. If it matches the beats above, you read this one carefully enough to talk to the campus. Bring that explanation to the demo if you want a mentor to correct it before you rely on it.",
        ],
      },
    ],
    faqs: [
      {
        q: "Do you award AZ-900?",
        a: "No. AZ-900 is the fundamentals exam learners ask about. Labs overlap portal, identity, compute, network and storage topics. DevOps Institute does not publish a pass rate or a certificate it awards.",
      },
      {
        q: "Where is the Azure module list?",
        a: "On /courses/azure. This page is the sequence and the AZ-900 boundary. /azure-course-in-mumbai is the local page.",
      },
      {
        q: "Is Azure DevOps the same product as the DevOps course?",
        a: "Azure DevOps is Microsoft’s pipeline product. The DevOps course is the four-month classroom, which also names Jenkins, Docker, Kubernetes and Terraform. Ask which pipeline tool the next batch labs for longer.",
      },
      {
        q: "Does this page list fees?",
        a: "Course fees start at ₹12,500/month. Call 083695 18569 for the full fee structure.",
      },
      {
        q: "Which placement figures are published?",
        a: "450+ placed, 5 Tier-1 Interviews Assured + Dedicated Placement Support and 350+ hiring partners. Read /placements for the limit on named stories.",
      },
      {
        q: "Can I take this lab in Thane?",
        a: "This page is the Powai classroom at Lodha Supremus. Thane, Vashi and Ghatkopar are on https://devopsinstitutemumbai.co.in/.",
      },
      {
        q: "What should the demo hour show me?",
        a: "The lab room and the format. Book it from /free-demo-powai. The map and the form are on /contact.",
      },
      {
        q: "Who teaches the batch?",
        a: "The trainers page lists the mentors. It does not assign one of them to your sitting. Ask on 083695 18569.",
      },
    ],
  },
  "/kubernetes-docker-course": {
    classroomFirst: true,
    showMap: false,
    schemaTeaches: [
      "Dockerfiles, images and Compose",
      "Pods, deployments, services and ingress",
      "Helm, volumes and RBAC",
      "How containers fit the four-month Powai classroom",
    ],
    crumbs: [
      { name: "Home", href: "/" },
      { name: "Courses", href: "/courses" },
      { name: "Kubernetes & Docker Containerization Course in Mumbai (CKA-Aligned)", href: "/kubernetes-docker-course" },
    ],
    links: KUBE_LINKS,
    answer:
      "Docker images, Compose stacks, Kubernetes workloads and Helm releases are practised in the Powai classroom at Lodha Supremus, as part of the four-month batch. The catalog page lists the modules. This page is the lab order. Call 083695 18569 before you travel.",
    sections: [
      {
        h2: "Four container URLs, and the one job of this page",
        paragraphs: [
          "The institute already has a container catalog at /courses/kubernetes-docker, a Mumbai Kubernetes page, a Mumbai training page at /kubernetes-and-docker-training-in-mumbai, and a Docker page at /docker-course-in-mumbai. Those URLs keep their jobs. The catalog holds the module list: images, Dockerfiles, multi-stage builds, Compose, pods, deployments, services, ConfigMaps, Secrets, ingress, volumes, Helm, autoscaling and RBAC. The city pages answer local intent. This URL is the lab order inside the Powai classroom: what you can do with an image before you are allowed near a cluster, and what the cluster lab is for once the image exists.",
          "Pasting the same module table here would make the catalog useless. Sending a commute question to this page would make the Mumbai pages useless. Use the related links when your question changes. Stay here when you want the bench order at Lodha Supremus. The room is still Chandivali, on Saki Vihar Road, and the program that holds these labs is still the published four-month batch with weekday and weekend sittings.",
        ],
      },
      {
        h2: "The image has to exist before the cluster does",
        paragraphs: [
          "Docker architecture, a Dockerfile you can read, and a multi-stage build you can justify are the start. A container that only runs on the instructor’s laptop is not the outcome the catalog prints. The printed outcome is a production-minded Dockerfile and a multi-service stack you can start with Compose. Compose is the rehearsal: several processes, a network between them, and a way to say which port is published. If Compose is fuzzy, Kubernetes will be a wall of objects.",
          "Bring a small application you understand. The classroom is not a place that hides the process behind a button labelled deploy. You should be able to point at a layer in the image and say why it is there. That habit is what later lets a pipeline, on the AWS page or the Azure page, promote an artifact instead of a folder of source code. Linux is assumed as the shell the DevOps course already starts with. This page does not reopen the whole Linux catalog.",
        ],
      },
      {
        h2: "Pods, services and ingress as a story you can draw",
        paragraphs: [
          "A pod is the running unit. A deployment is how you ask for copies and how you roll back. A service is how other pods find them. Ingress is how a request from outside reaches the service, including the TLS story the catalog already names. ConfigMaps and Secrets are how configuration stays out of the image. Persistent volumes and storage classes are how data survives a reschedule. Those sentences are the catalog, retold as a drawing you should be able to make from memory after the lab, not as a glossary to memorise on the train.",
          "Autoscaling is on the skill list so you meet the idea that replica count can follow load. RBAC is on the skill list so cluster access is an identity problem and not a shared admin file. This page does not publish a managed-cluster vendor as the only place you may practise, and it does not claim a CKA or CKAD pass rate. The catalog already says some engineers arrive preparing for those exams. The site still does not name a certificate the institute awards.",
        ],
      },
      {
        h2: "Helm after you can do the work without it",
        paragraphs: [
          "Helm is how the catalog says you package a release. Using Helm on the first afternoon, before you have applied a deployment by hand, hides the objects you will have to debug later. The lab order on this page is deliberate: manifests you can read, then a chart that generates those manifests, then a release you can upgrade and roll back. If the chart is the only artifact you can discuss, the lab stopped too early.",
          "The same order protects the interview story. A mock interview at this campus is there to rehearse what you built. You should be able to say what broke when a probe failed, what the service selector missed, or why a secret was not mounted. Those are classroom failures, not production outages borrowed from an employer. The placement phrases stay the published ones: 450+ placed, 5 Tier-1 Interviews Assured + Dedicated Placement Support, 350+ hiring partners.",
        ],
      },
      {
        h2: "How containers meet the cloud pages",
        paragraphs: [
          "On the AWS sequence, the image is what a pipeline deploys after the VPC exists. On the Azure page, AKS is the cluster service named in the Azure catalog, and the image-to-Helm detail stays here so that page does not swallow this one. You can take the four-month batch and meet both the account and the cluster. You should not expect this URL to reteach IAM or Entra ID. Open the cloud page when the question is the account. Open this one when the question is the runtime.",
          "Git remains the source of the manifest. A cluster change that nobody committed is a lab the next person cannot repeat. That is why the DevOps course starts from Linux and Git before it asks you to orchestrate. This page assumes that order and will not advertise a container-only shortcut the site has not published.",
        ],
      },
      {
        h2: "The room, the mentors and the other campuses",
        paragraphs: [
          "About 80% of a session is hands-on. The photo on this page is the Powai classroom, with the same call, WhatsApp and demo buttons as the other classroom pages. Key facts and the map sit at the end of every page. Thane, Vashi and Ghatkopar are not extra labs hiding under this URL. They are on https://devopsinstitutemumbai.co.in/. If that door is closer, use it. If you want this lab order, you want Lodha Supremus.",
          "Mentors are listed on /trainers with LinkedIn links and employers only where a profile states one. Meeting a name on the teaser is not a roster. Armugharaj Nadar’s card, for example, is a senior cloud platform engineer profile, not a promise he leads the container week. Ask the campus. Phone 083695 18569. Reviews you can cite are 4.7 from 130 Google reviews.",
        ],
      },
      {
        h2: "Affiliations and what a finished lab looks like",
        paragraphs: [
          "NASSCOM, IBM, the Government of India through MEITY, IIT Patna, and a collaboration with IIT and Microsoft are the affiliation words the site already uses. They do not replace a working ingress. A finished container lab, in the words the catalog already prints, is an image you can build, a Compose stack you can run, a workload you can roll back, an ingress you can explain, and a Helm release with RBAC that is not the cluster-admin shortcut.",
          "Course fees start at ₹12,500/month. The demo hour at /free-demo-powai is how you see the benches before you decide. /contact holds the directions. Bring a question about weekday versus weekend, not a request for a price hidden in the HTML. After you enrol, the lab order above is the one this URL is willing to be judged against.",
        ],
      },
      {
        h2: "Who should not use this page as their only reading",
        paragraphs: [
          "If you need every suburb’s commute, you are in the wrong place. The area pages exist for that. If you need the printable DevOps syllabus across Linux, Git, cloud, containers, Terraform and pipelines, open /devops-course-syllabus. If you need only Docker, the Docker course page is the narrower reading. This page is the combined containerization order for people who already accept they are coming to Powai for the four-month classroom.",
          "Fresh graduates and working administrators are both in the catalog’s audience. The difference is the hour you can travel, not a different cluster. Say that hour when you call. A demo class can show the room. It cannot compress the four months into one evening, and this page will not pretend that it does.",
        ],
      },
      {
        h2: "What a failed rollout is for",
        paragraphs: [
          "A lab that only shows the happy path teaches you to click until the icon is green. The container order at Powai should include a rollout you break on purpose. Change a selector so the service stops matching the pods. Point a probe at a path the process does not serve. Mount a secret under the wrong key. Then fix it and say, in one breath, which object was wrong. That breath is the difference between a person who has used Kubernetes and a person who has a screenshot of a dashboard.",
          "Write the failure down in the repository, not only in a chat message. The next sitting should be able to see the commit that broke the lab and the commit that repaired it. Git is doing the job the DevOps course already assigned it. This page is not a Git tutorial. It is a reminder that a cluster without history is a demo you cannot defend a week later. Mock interviews reuse that defence. They do not invent a company that watched you do it.",
        ],
      },
      {
        h2: "Cluster networking is not the VPC",
        paragraphs: [
          "People mix the two drawings. The VPC, subnet and security group live on the AWS page and, in Microsoft terms, on the virtual network of the Azure page. The cluster has its own drawing: pod addresses, a service address, and an ingress that is the front door. You should be able to say which drawing you are pointing at. Traffic that never leaves the cluster is not a security-group story. Traffic that enters from the internet is both an ingress story and a cloud-network story. Practise saying the boundary out loud before you add Helm.",
          "Ingress and TLS are already named in the catalog outcomes. This lab order asks you to terminate or route that TLS only after the service behind it answers without TLS, so you know the failure is the door and not the process. Certificates, issuers and the exact controller image are details the catalog does not pin to one vendor. The classroom should not pretend it did. You leave able to explain a request’s path. You do not leave with an unpublished product endorsement.",
        ],
      },
      {
        h2: "What the Docker-only page still owns",
        paragraphs: [
          "/docker-course-in-mumbai remains the page for someone who wants images, Dockerfiles and Compose without the cluster. If that is the whole of your question, go there and do not treat this URL as a longer copy. This page assumes you will cross into pods. It still spends real time on the image, because a cluster cannot repair a bad build. Multi-stage builds are how you keep a compiler out of the runtime image. That sentence is worth a lab of its own, and it belongs in the Docker half even for people who are impatient for Helm.",
          "Compose remains the bridge, not a legacy aside. A two-service Compose file teaches dependencies and published ports with less machinery than a deployment and a service. Skipping it to look advanced is how learners arrive at Kubernetes unable to say which process needs which port. The Powai room would rather you look slow for an afternoon than lost for a month. The four-month length is what makes that choice possible. A single demo hour is not.",
        ],
      },
      {
        h2: "How to talk about this lab without borrowing claims",
        paragraphs: [
          "Say you built images, ran a Compose stack, deployed to a cluster, exposed it, packaged a release with Helm and limited access with RBAC. Those verbs match the catalog. Do not add a client name, a production incident from your employer, or a certificate number. Do not convert 450+ placed into a personal probability. The placements page already warns that most of those stories are not individually published. Your lab story is yours because you did it in Chandivali, not because a logo wall says so.",
          "Volumes are the part people skip and then regret. A pod that writes into its own filesystem loses that write when it is rescheduled. A persistent volume and a storage class, which the catalog already names, are how the lab makes the data outlive the pod. You should attach one, delete the pod, and show the file is still there. That single check is more useful than a paragraph of storage theory. It also stops you from confusing the volume with the Docker layer cache on your laptop. They fail in different ways, and the Powai lab should make you meet both failures while a mentor is still in the room.",
          "Affiliations stay the same words used elsewhere: NASSCOM, IBM, Government of India MEITY, IIT Patna, and a collaboration with IIT and Microsoft. They are context for the institute, not a feature of your ingress. When you are ready to see the benches, use the demo page. When you are ready to ask for a seat, call 083695 18569 and name containers as the work you came for, plus the weekday or weekend limit you actually have.",
          "One more boundary keeps this page from colliding with the syllabus guide. /devops-course-syllabus is allowed to list every module, tool and project in the four-month program, including Linux, Git, cloud, containers, Terraform and the pipeline. This URL refuses that width. If a sentence here starts teaching Bash, IAM or Entra ID in full, it has wandered. The container lab assumes those weeks happened or will happen. Your job on this page is the image, the broken rollout, the volume that survives, and the Helm release you can still explain after the chart is put away. That narrower job is why the catalog, the Mumbai pages and this lab order can all stay indexed without pretending to be copies. If you still want a single afternoon in the room before you choose, book the Powai demo and say containers when you arrive. The phone remains 083695 18569, and the map at the end of the page is the same Lodha Supremus pin the contact page uses. Bring a question about volumes if that is the part you usually skip.",
        ],
      },
    ],
    faqs: [
      {
        q: "Which page has the module list?",
        a: "The catalog at /courses/kubernetes-docker. City pages cover Mumbai intent. This URL is the lab order in the Powai classroom.",
      },
      {
        q: "Do you include Compose and Helm?",
        a: "Yes. Compose comes before the cluster. Helm comes after you can apply a deployment by hand. Both are already on the catalog skill list.",
      },
      {
        q: "Is CKA included as a certificate you issue?",
        a: "No. Some learners prepare for CKA or CKAD. This site does not name a certificate DevOps Institute awards and does not print a pass rate.",
      },
      {
        q: "Where do the classes run?",
        a: "Lodha Supremus, Chandivali, Powai. Other campuses are on https://devopsinstitutemumbai.co.in/.",
      },
      {
        q: "How does this relate to the AWS page?",
        a: "The AWS page is the account and the pipeline. This page is the image and the cluster. The four-month batch can include both.",
      },
      {
        q: "What placement lines are safe to repeat?",
        a: "450+ placed, 5 Tier-1 Interviews Assured + Dedicated Placement Support and 350+ hiring partners. Named stories stay on the placements page.",
      },
      {
        q: "Can I see the lab before I join?",
        a: "Yes. Book /free-demo-powai. Directions and the form are on /contact.",
      },
      {
        q: "Are course fees on this page?",
        a: "No. Call 083695 18569 for the fee of the batch you can attend.",
      },
    ],
  },
  "/free-demo-powai": {
    classroomFirst: true,
    showMap: false,
    crumbs: [
      { name: "Home", href: "/" },
      { name: "Contact", href: "/contact" },
      { name: "Book Your Free Live DevOps & Cloud Demo Class in Powai, Mumbai", href: "/free-demo-powai" },
    ],
    links: DEMO_LINKS,
    answer:
      "A free demo class at Lodha Supremus in Chandivali, Powai is a classroom hour, not the full four-month batch and not a fee sheet. You see the lab room, meet the format, and ask about weekday or weekend seats. Call 083695 18569 to book.",
    sections: [
      {
        h2: "What the demo hour is for",
        paragraphs: [
          "This page exists because people search for a free demo class in Powai and then land on a contact form that answers a wider question. /contact is the address, the phone, the map and the enquiry form. /free-demo-powai is the visit itself: one hour in the Chandivali classroom so you can see the benches, hear how a lab is run, and decide whether the four-month batch is even the right next step. It is not a compressed version of the AWS, Azure or Kubernetes courses. It is not an interview. It is not a fee negotiation written into the page.",
          "Book it by calling 083695 18569 or by using the enquiry form on this page. Say you want the demo hour, and say whether you can come on a weekday or only on a weekend. The campus confirms the sitting. A form submission is a request, not a confirmed chair. WhatsApp uses the same Powai number. Thane, Vashi and Ghatkopar bookings belong on https://devopsinstitutemumbai.co.in/, not on this URL.",
        ],
      },
      {
        h2: "What you should see in the room",
        paragraphs: [
          "The classroom photo on this page is the Powai batch room, the same one the other classroom pages use. In the hour, look at whether people are on machines or watching a long deck. The about page already says about 80% of a session is lab. A demo should feel like that habit, even though one hour cannot finish a VPC, a pipeline or a cluster. You are checking the room and the teaching style, not collecting a project.",
          "You can ask which track the next batch is emphasising. The AWS sequence, the Azure DevOps and AZ-900 reading, and the Docker-to-Helm order each have their own page so the demo does not have to recite every module. If a name on the mentor teaser matters to you, ask whether that person is in the upcoming batch. The trainers page does not pre-assign mentors. An employer printed on a card is not an endorsement.",
        ],
      },
      {
        h2: "What the hour will not decide",
        paragraphs: [
          "Course Fees Starting at ₹12,500/month (Easy EMI Options Available) Ask on the call for the full fee structure. Do not treat a demo as a place where a price was supposed to be hidden in the HTML. Placement figures you may hear repeated are only the published ones: 450+ placed, 5 Tier-1 Interviews Assured + Dedicated Placement Support and 350+ hiring partners. The placements page is where those lines are unpacked, including the limit on how many alumni names the site actually holds.",
          "A demo does not enrol you. It does not reserve a seat in a batch that is already full. It does not move the campus to your suburb. Area pages describe the ride to Lodha Supremus. This page assumes you are willing to come to Chandivali for the hour. If you are not, say so before you travel. Saki Vihar Road is the address: Lodha Supremus, B 1307, Tunga Village, Powai, Mumbai 400072.",
        ],
      },
      {
        h2: "How to arrive, and what to bring",
        paragraphs: [
          "Use the map at the bottom of the page for directions, and use /contact if you want the same map next to the full address block. Bring a notebook and a laptop if you have one. The hour is easier if you can look at a console or a terminal when a mentor points at one. You do not need an AWS or Azure account prepared in advance for a first visit. You do need a question that is specific enough to answer in the room.",
          "Good questions are about the next start, the weekday versus weekend choice, and which of the three reading pages matches the work you want. Weaker questions are requests for a certificate the institute has not said it awards, or for a pass rate that is not published. Affiliations you can ask to hear in words are NASSCOM, IBM, the Government of India through MEITY, IIT Patna, and the collaboration with IIT and Microsoft. Reviews you can check yourself are the 4.7 rating from 130 Google reviews linked from the reviews page.",
        ],
      },
      {
        h2: "After the demo",
        paragraphs: [
          "If the room is what you wanted, the next reading is the course page that matches the work, then /placements, then a call to ask whether a seat is open. If the room is not what you wanted, you have spent an hour instead of four months. That is the point of a demo. The enquiry form stores the details you type. The privacy policy explains how those details are handled.",
          "Sister-campus visitors should leave this URL. Powai visitors should keep it. The main navigation still has Contact and the footer lists the course pages, so you can move without searching again. Call 083695 18569 if the hour you were given no longer works. The campus would rather move the visit than host an empty chair.",
        ],
      },
    ],
    faqs: [
      {
        q: "Is the demo class free?",
        a: "Yes. The visit described on this page is a free demo class. The four-month course is a paid batch, and the published starting point is Course Fees Starting at ₹12,500/month (Easy EMI Options Available), and the full fee structure is shared on request.",
      },
      {
        q: "How do I book?",
        a: "Call 083695 18569, use WhatsApp on the same number, or send the form on this page. The campus confirms the hour. A form alone is a request.",
      },
      {
        q: "How is this different from the contact page?",
        a: "/contact is the address, map and enquiry form for any question. This page is specifically the demo hour in the Powai classroom.",
      },
      {
        q: "Will I finish a project in the demo?",
        a: "No. One hour can show the lab habit. It cannot replace the four-month batch or the AWS, Azure or Kubernetes sequences.",
      },
      {
        q: "Which campus is this?",
        a: "Lodha Supremus, Chandivali, Powai. Thane, Vashi and Ghatkopar use https://devopsinstitutemumbai.co.in/.",
      },
      {
        q: "Can I ask about placements during the visit?",
        a: "You can ask. The figures the site publishes are 450+ placed, 5 Tier-1 Interviews Assured + Dedicated Placement Support and 350+ hiring partners. Read /placements for the detail.",
      },
      {
        q: "Do I need a laptop?",
        a: "Bring one if you have it. The hour is easier when you can follow a console or a terminal. An account is not required before the first visit.",
      },
      {
        q: "Who will I meet?",
        a: "Whoever the campus assigns to that hour. Mentor names live on /trainers and are not a roster for every demo.",
      },
    ],
  },
};

const ADDITIONAL_SEO_FAQS = {
  "/devsecops-course-in-mumbai": [
    { q: "What does DevSecOps add to a delivery pipeline?", a: "It brings security considerations into source, build, container and deployment steps. The published course mentions basic pipeline security, without a detailed tool syllabus." },
    { q: "Is Jenkins part of the DevSecOps learning path?", a: "Jenkins is listed in the wider DevOps curriculum for CI/CD. The public pages do not specify a separate security integration lab." },
    { q: "Does the curriculum include container security?", a: "Docker and Kubernetes are in the curriculum, but the public syllabus does not detail container-scanning exercises or name a scanner." },
    { q: "Are compliance frameworks covered?", a: "No specific compliance framework is named in the published course description. Ask for the current batch syllabus if you need a particular framework." },
    { q: "Who should study DevSecOps fundamentals?", a: "Developers, QA, operations and DevOps learners who want to understand how security fits into delivery workflows may find the topic relevant." },
    { q: "Do I need security experience first?", a: "The public course entry requirement is basic computer skills. The curriculum starts with Linux and Git; no separate security experience prerequisite is published." },
    { q: "Is a security certification included?", a: "No security certification issued by the institute is named in the public course information." },
    { q: "How is DevSecOps different from cyber security training?", a: "This page covers basic security in a DevOps delivery workflow. The separate cyber security catalog describes broader defensive security topics." },
    { q: "Where are the related DevOps classes held?", a: "The classroom is at Lodha Supremus, Chandivali, Powai, Mumbai. Call 083695 18569 for current batch details." },
    { q: "Are weekend batches available?", a: "Weekday and weekend batches are published for the campus. Confirm the current schedule and whether the relevant pipeline topics are in your batch." },
    { q: "Does this page publish DevSecOps placement results?", a: "No. The published placement figures apply to the institute overall, not to a separate DevSecOps cohort." },
    { q: "What should I ask before enrolling?", a: "Ask which pipeline-security topics and tools the current batch covers, since the public syllabus only states basic pipeline security." },
  ],
  "/career-switch-to-devops": [
    { q: "Can a system administrator move into DevOps?", a: "System administrators are a named audience. Linux, automation, cloud and deployment topics can build on operations experience." },
    { q: "Can someone from networking switch to DevOps?", a: "Networking experience can help with cloud networking and cluster service concepts. The course begins with Linux and Git and teaches the broader toolchain." },
    { q: "Can QA professionals transition into DevOps?", a: "QA professionals are named among learners moving toward automation. Git and CI/CD provide a connection to repeatable build and test workflows." },
    { q: "Should I learn Linux before Jenkins?", a: "The published course sequence begins with Linux and Git before progressing to Jenkins and later tools." },
    { q: "Which tools are part of the switch path?", a: "The published DevOps toolchain includes Linux, Git, Jenkins, Docker, Kubernetes, Ansible, Terraform, ArgoCD, Prometheus and Grafana." },
    { q: "How long does a DevOps career switch take?", a: "The flagship classroom program is published as four months. The site does not promise a job-change timeline after training." },
    { q: "Can I study while working full time?", a: "Weekend batches are published for working professionals. Confirm batch days, session times and seat availability directly." },
    { q: "Do I need to resign before joining?", a: "The institute publishes weekday and weekend options; it does not require resignation on the public eligibility pages. Confirm a schedule that fits your work." },
    { q: "Will my previous IT experience count?", a: "Existing operations, QA or networking experience can help you connect new tools to familiar work. The course follows its published curriculum for all learners." },
    { q: "Does the institute provide interview support?", a: "Resume support, mock interviews and career guidance are listed as placement-support activities. Ask which activities apply to your batch." },
    { q: "Are salary increases published for career changers?", a: "The site does not publish a separate salary-change figure for career switchers. Placement figures on the site are institute-wide." },
    { q: "Where can I check course entry requirements?", a: "The eligibility guide states the published requirement and explains what the site does not specify about degrees or prior experience." },
  ],
  "/devops-projects-for-freshers": [
    { q: "What is a beginner-friendly first DevOps project?", a: "Start with a small application in Git and document how to run it. Then add a simple build-and-test pipeline as a separate exercise." },
    { q: "Can I build a project with Jenkins and Docker?", a: "Yes, as a practice idea: use Jenkins to build and test a change, then package the application in Docker. These tools appear in the published curriculum." },
    { q: "What Kubernetes project can a fresher try?", a: "Practise deploying a containerized application and updating or rolling back its deployment. Kubernetes is in the published course, but this is a suggested exercise." },
    { q: "Can Terraform be used in a fresher project?", a: "You can practise describing a small cloud resource setup with Terraform, which is listed in the course curriculum. Use a disposable account and review provider costs." },
    { q: "Should a project include monitoring?", a: "A later practice step can add basic metrics and dashboards with Prometheus and Grafana, both named in the broader curriculum." },
    { q: "How many projects should a fresher complete?", a: "The site does not prescribe a project count. Prefer projects you can run, troubleshoot and explain clearly." },
    { q: "Are these project examples assigned by the institute?", a: "No fixed assignment list is published here. The examples are suggestions based on curriculum tools; ask the campus for the current capstone brief." },
    { q: "Do I need cloud credits for every project?", a: "Not every practice idea needs a cloud account. Ask about lab access and any account requirements before creating paid cloud resources." },
    { q: "What should I include in a project README?", a: "Explain the goal, prerequisites, run steps, architecture and how to verify the result. Document limitations rather than claiming tools the project does not use." },
    { q: "Can I use a GitHub repository as my portfolio?", a: "A repository can make your work easier to review if it contains clear setup instructions and no credentials. The institute does not require a particular hosting service." },
    { q: "Are projects part of fresher interview preparation?", a: "The institute lists project work and mock interviews among its learning and placement-support activities. Confirm current batch details." },
    { q: "Do I need prior DevOps experience to build these?", a: "No prior DevOps job experience is listed as required. The course begins with Linux and Git fundamentals." },
  ],
  "/devops-course-eligibility": [
    { q: "What is the minimum eligibility for the DevOps course?", a: "Basic computer skills are the published entry requirement. Contact the campus to confirm any current batch-specific admission process." },
    { q: "Is a computer-science degree required?", a: "The public pages do not state a mandatory computer-science degree or a degree-stream restriction." },
    { q: "Can BSc or BCA graduates apply?", a: "The site does not publish a degree-specific restriction. BSc and BCA applicants should confirm any individual admission conditions with the campus." },
    { q: "Can engineering graduates join?", a: "The public eligibility statement is basic computer skills, and it does not name a required or excluded engineering branch. Confirm current requirements directly." },
    { q: "Can a non-IT graduate learn DevOps?", a: "The site does not publish a degree-stream exclusion. It names fresh graduates and starts with Linux and Git; ask the institute to confirm your situation." },
    { q: "Is coding experience needed before the course?", a: "The published entry line is basic computer skills. A coding prerequisite is not specified; ask the campus if you are concerned about the current batch pace." },
    { q: "Do I need to know Linux already?", a: "Linux is taught as part of the learning path, so prior Linux experience is not listed as an entry requirement." },
    { q: "Do I need to know Git before joining?", a: "Git is covered in the course foundations. The site does not list previous Git experience as a requirement." },
    { q: "Is there an entrance test?", a: "An entrance test is not described on the public course pages. Contact the campus to confirm current admissions steps." },
    { q: "Is there an age limit?", a: "The public pages do not state an age limit. Ask the institute if you need confirmation for a particular learner." },
    { q: "Can working professionals join?", a: "Yes. Working professionals are a named course audience, and weekday and weekend batches are published." },
    { q: "Does meeting eligibility ensure a job after training?", a: "Eligibility describes the course starting point. Placement support and institute-wide outcomes are separate and do not state an individual job outcome." },
  ],
  "/cicd-gitops-training-mumbai": [
    { q: "What is the difference between CI/CD and GitOps?", a: "CI/CD automates build, test and delivery steps. GitOps uses version-controlled desired state for deployment workflows; ArgoCD is the named GitOps tool in the curriculum." },
    { q: "Is Jenkins included in the CI/CD curriculum?", a: "Yes. Jenkins is named for CI/CD pipeline automation in the DevOps course." },
    { q: "Is ArgoCD included in the GitOps curriculum?", a: "ArgoCD is named as the GitOps tool in the published DevOps toolchain." },
    { q: "Do Jenkins and ArgoCD do the same job?", a: "They are listed for different parts of the delivery toolchain: Jenkins for CI/CD pipelines and ArgoCD for GitOps workflows." },
    { q: "Is Git required before learning CI/CD?", a: "The course starts with Linux and Git foundations before moving into pipeline and deployment tools." },
    { q: "Are Docker and Kubernetes part of the workflow?", a: "Yes. Both are listed in the broader curriculum alongside Jenkins, Terraform and ArgoCD." },
    { q: "Does the course include pipeline security?", a: "The published DevOps curriculum includes a basic look at pipeline security. It does not publish a detailed scanner or security-tool list." },
    { q: "Is there a separate GitOps-only course?", a: "The catalog includes GitOps with ArgoCD in the DevOps curriculum, but does not list a separate GitOps-only course." },
    { q: "Are there CI/CD certification exams included?", a: "No CI/CD or GitOps certification awarded by the institute is named in the public course information." },
    { q: "Who should study CI/CD and GitOps?", a: "Developers, QA engineers and operations staff interested in repeatable builds and deployments may find the topics useful." },
    { q: "Are labs available in Powai?", a: "The courses are taught at Lodha Supremus, Chandivali, Powai. Ask which pipeline and GitOps labs are scheduled for the next batch." },
    { q: "Can I take only Jenkins training?", a: "The public catalog presents Jenkins within the wider DevOps course, not as a separate Jenkins-only course. Confirm current offerings with the campus." },
  ],
  "/cloud-engineer-course-in-mumbai": [
    { q: "Which AWS services are in the published course?", a: "The AWS course lists IAM, EC2, S3, VPC, RDS and CloudWatch, with additional services described on its course page." },
    { q: "What Azure topics are listed?", a: "The Azure course lists virtual machines, virtual networks, Entra ID, storage, App Service, AKS and Azure DevOps pipelines." },
    { q: "What GCP topics are listed?", a: "The GCP course includes Compute Engine, Cloud Storage, VPC, IAM, GKE, Cloud Build and monitoring topics." },
    { q: "Should I learn AWS, Azure or GCP first?", a: "Choose based on your goals and existing experience. The site offers separate courses and does not prescribe one universal starting cloud." },
    { q: "Is Terraform useful for a cloud engineer?", a: "Terraform is listed in the Linux and Terraform course and the broader DevOps toolchain as infrastructure-as-code training." },
    { q: "Does the cloud path include Kubernetes?", a: "Managed Kubernetes appears in the Azure and GCP course descriptions; the standalone Kubernetes and Docker course covers cluster foundations." },
    { q: "Is there a separate course named Cloud Engineer?", a: "The public catalog lists cloud computing and vendor courses, not a course titled Cloud Engineer. Ask the campus to map your goal to current courses." },
    { q: "Do I need cloud experience to join?", a: "The cloud course descriptions begin with fundamentals. Confirm the entry expectations for the specific platform and batch you choose." },
    { q: "Does a cloud engineer need programming?", a: "The public course pages do not define a programming prerequisite. They focus on cloud services and related infrastructure skills; contact the campus for guidance." },
    { q: "Are weekday and weekend classes available?", a: "Weekday and weekend batches are published at the Chandivali, Powai campus. Confirm the current schedule by phone." },
    { q: "Is there a cloud-engineer-specific placement figure?", a: "No separate cloud-engineer placement total is published. The institute-wide placement information is available on its placement pages." },
    { q: "Where can I compare cloud and DevOps courses?", a: "The cloud computing course guide and DevOps course guide explain the published course paths and link to their catalogs." },
  ],
  "/devops-interview-preparation": [
    { q: "Which DevOps topics should I revise for an interview?", a: "Review Linux, Git, Jenkins, Docker, Kubernetes, Ansible, Terraform, ArgoCD, Prometheus and Grafana as listed in the published toolchain." },
    { q: "How should I explain a CI/CD pipeline?", a: "Describe how a source change moves through build, test and delivery steps, using only tools and stages you have actually practised." },
    { q: "What should I say about a failed deployment?", a: "Explain the symptom, how you inspected logs or metrics, the change you made and how you checked the result. Use a real practice example." },
    { q: "Do freshers need production experience?", a: "The course welcomes freshers and teaches foundational tools. Do not claim production experience you do not have; explain your lab work accurately." },
    { q: "Does the institute conduct mock interviews?", a: "Mock interviews are listed among the placement-support activities. Ask the campus how they are scheduled for the current batch." },
    { q: "How many mock rounds are included?", a: "The public pages do not specify a fixed number of mock rounds. Confirm the process and terms with the campus." },
    { q: "Are company-specific questions available?", a: "The institute does not publish an employer-specific question bank or interview schedule." },
    { q: "What are the interview-assurance conditions?", a: "The published policy references 80% attendance, capstone projects and mock-interview clearance. Ask the campus for current terms." },
    { q: "Should I list every course tool on my resume?", a: "List skills you can demonstrate and explain. The course tool list is not proof of experience with every tool." },
    { q: "Does the course provide resume support?", a: "Resume support is named among the institute's placement activities. Ask which review activities are available in your batch." },
    { q: "Can working professionals prepare while employed?", a: "Weekend batches are published, and interview preparation is among the support activities. Confirm current schedules and details." },
    { q: "Where can I read the project and module syllabus?", a: "Use the DevOps course syllabus and the course catalog for the published modules and project outcomes." },
  ],
  "/platform-engineering-career-guide": [
    { q: "What does a platform engineer work on?", a: "Platform engineering commonly focuses on reusable infrastructure and delivery workflows for application teams. This page maps related skills from the published curriculum." },
    { q: "Is Kubernetes part of platform engineering?", a: "Kubernetes is a core platform foundation and is included in the published Kubernetes and DevOps course topics." },
    { q: "Why is Terraform relevant to platform roles?", a: "Terraform is listed for infrastructure as code, which helps teams describe and repeat infrastructure changes." },
    { q: "How does GitOps fit platform engineering?", a: "GitOps uses version-controlled desired state in deployment workflows. ArgoCD is the named GitOps tool in the DevOps curriculum." },
    { q: "Is observability useful for platform teams?", a: "The curriculum includes Prometheus and Grafana for monitoring, dashboards and alerts, which help teams understand workload health." },
    { q: "Is platform engineering the same as SRE?", a: "They can overlap around operations and reliability, but the site does not publish a formal comparison or a dedicated platform-engineering syllabus." },
    { q: "Does the institute offer a platform-engineering course?", a: "The catalog lists DevOps, cloud, Kubernetes and Terraform courses, but not a separate platform-engineering course." },
    { q: "Can a system administrator move toward platform engineering?", a: "The DevOps curriculum names administrators modernising infrastructure as an audience. Linux, automation, Kubernetes and infrastructure as code are relevant foundations." },
    { q: "What project can demonstrate platform skills?", a: "A practice project could describe infrastructure, deploy an application, manage its desired state and expose basic health signals using tools you have actually learned." },
    { q: "Does training secure a platform-engineering job?", a: "The site publishes institute-wide placement support, not a platform-engineer-specific job outcome. Avoid assuming a particular role." },
    { q: "Which course should I start with?", a: "Choose by your gap: cloud fundamentals, Kubernetes operations, Terraform or the broader DevOps toolchain. The course pages describe each published scope." },
    { q: "Are platform engineering certifications included?", a: "No platform-engineering certification awarded by the institute is listed in the public course catalog." },
  ],
  "/openshift-administrator-course-in-mumbai": [
    { q: "What is OpenShift used for?", a: "OpenShift is a platform for building and operating containerized workloads. This site does not publish a dedicated OpenShift syllabus." },
    { q: "Does the Kubernetes course cover OpenShift administration?", a: "It covers Kubernetes and Docker foundations, but its published syllabus does not include OpenShift-specific administration." },
    { q: "Is the OpenShift command line taught?", a: "The public course list names kubectl and Kubernetes tools, but does not list the OpenShift command-line tool. Confirm current labs with the campus." },
    { q: "Are OpenShift routes and projects part of the course?", a: "Those OpenShift-specific syllabus items are not listed on the published course page. Ask the campus before enrolling for that scope." },
    { q: "Does the institute prepare learners for Red Hat exams?", a: "The public catalog does not list Red Hat OpenShift certification preparation or an exam syllabus." },
    { q: "What Kubernetes skills transfer to OpenShift?", a: "Container images, workloads, services, access control, networking and storage are useful foundations; OpenShift also has product-specific administration." },
    { q: "Should I know Docker before learning Kubernetes?", a: "The published Kubernetes and Docker course starts with Docker fundamentals and then progresses to Kubernetes." },
    { q: "Is Helm included in the related course?", a: "Yes. Helm charts are listed in the Kubernetes and Docker course topics." },
    { q: "Does the course teach cluster access controls?", a: "Kubernetes RBAC is listed in the course. The syllabus does not claim OpenShift-specific access-control labs." },
    { q: "Is an OpenShift lab environment provided?", a: "The public course pages do not specify an OpenShift lab environment. Confirm this directly with the campus." },
    { q: "Which audience is the Kubernetes path for?", a: "The course names developers, DevOps and cloud engineers, system administrators and learners preparing for CKA or CKAD exams." },
    { q: "Where is the related Kubernetes training held?", a: "The class is at Lodha Supremus, Chandivali, Powai, Mumbai. Call 083695 18569 for current batch details." },
  ],
};

for (const [path, faqs] of Object.entries(ADDITIONAL_SEO_FAQS)) {
  const page = KEY_PAGES[path];
  if (!page || !page.faqs) {
    throw new Error(`FAQ additions reference a missing key page: ${path}`);
  }
  page.faqs.push(...faqs);
}
