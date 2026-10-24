/** National-intent DevOps course pillar. Tool explanations follow the published syllabus. */

export const DEVOPS_PILLAR = {
  answer:
    "DevOps Institute in Chandivali, Powai offers a classroom DevOps course with 100% Placement support, weekday and weekend batches, and a published four-month path to job-ready labs. The syllabus runs from Linux and Git through Jenkins, Docker, Kubernetes, Terraform and monitoring. Call 083695 18569.",
  sections: [
    {
      h2: "What is DevOps, in the sense this course teaches?",
      paragraphs: [
        "DevOps, as this campus teaches it, is the set of habits that take a change from a laptop to a running system without a heroic weekend. A developer commits code. A pipeline builds it, tests it and packages it. A container runs the same package in more than one place. A cluster keeps that container available. Infrastructure for the cluster is described in files, not in a folder of screenshots. Logs and dashboards tell you when the result is unhealthy. The DevOps course on this site is that sequence, practised in a classroom at Lodha Supremus, not a glossary.",
        "The course page lists the toolchain in plain words: Linux and Git, CI/CD with Jenkins, Docker, Kubernetes, Ansible, Terraform, ArgoCD, Prometheus and Grafana, plus a basic look at pipeline security. It also says the class is for developers who want to own release, administrators moving into DevOps, freshers aiming at engineer roles, and QA or support people moving into automation. You do not need a prior DevOps job. You need basic computer skills, which is the eligibility line published on the FAQ page.",
        "The national search is for a DevOps course. The local search is for a DevOps course in Mumbai. Both are answered by the same classroom. If you want the city map, open the Mumbai hub. If you want the placement story, open the placement page. This page stays on the subject: what the course is, how long it runs, who it fits, and which exams it prepares you to attempt.",
      ],
    },
    {
      h2: "What is the full DevOps syllabus?",
      paragraphs: [
        "Linux comes first because the tools above it assume a shell. The Linux and Terraform course on this site shows the depth available: files, users, permissions, processes, packages, systemd, SSH, networking and Bash. The DevOps course treats that as the foundation rather than as a separate career. You should be able to read a log, change a permission and connect with SSH before a pipeline failure feels like magic.",
        "Git and GitHub are the next foundation. The DevOps course names them explicitly. A pipeline is only as trustworthy as the commit that started it. You learn to branch, review and tag so that Jenkins is building a known revision. The published project shape is a path from a Git commit through Jenkins, Docker and Kubernetes into a monitored deployment.",
        "Jenkins is the CI/CD tool named on the course. Continuous integration means the build runs when the code changes. Continuous delivery means the artefact is ready to deploy, and continuous deployment means the deploy itself is automated. The course does not publish a Jenkins plugin list beyond that role. What it does publish is the outcome: you build a complete pipeline from commit to deployment.",
        "Docker is how the artefact stays the same between a laptop and a server. The Kubernetes and Docker course goes deeper: images, Dockerfiles, multi-stage builds, Compose, registries. Inside the DevOps course, Docker is the packaging step the pipeline calls. Kubernetes is the scheduler that runs the result: pods, deployments, services, and the operational ideas covered again on the Kubernetes page, including ingress, Helm and RBAC.",
        "Ansible is the configuration-management tool on the skill list. Terraform is the infrastructure-as-code tool. They are not duplicates. Ansible typically configures machines that already exist. Terraform typically declares networks, machines and storage so they can be created and destroyed from a file. The Linux and Terraform course covers HCL, state, workspaces, remote backends and modules aimed at AWS and Azure. The DevOps course includes Terraform so the pipeline has somewhere real to land.",
        "ArgoCD is the GitOps tool on the list. GitOps means the cluster's desired state lives in Git, and a controller reconciles the cluster toward that state. Jenkins may build the image. ArgoCD may roll the manifest. The site names both, so the course is not a single-tool advertisement. Prometheus and Grafana are the monitoring pair: metrics are collected, dashboards and alerts make them visible. The outcome line says you set up dashboards and alerts, and you work through production-style incident and release scenarios.",
        "Cloud is not missing. The institute teaches AWS, Azure and GCP as their own courses, and the flagship description says the four-month classroom covers AWS, Azure, GCP, Docker, Kubernetes, Terraform and CI/CD. A DevOps engineer who cannot open a cloud console will stall on the first real ticket. Use the cloud pillar if you want those three platforms described at the same length as this toolchain.",
      ],
    },
    {
      h2: "How long is the DevOps course, and what does a week look like?",
      paragraphs: [
        "The public duration is four months to become job-ready. The flagship course schema publishes a workload of PT160H, which is 160 hours, and a schedule duration of P4M with a weekly repeat. Individual tool courses on the site publish a shorter PT40H workload. This page will not invent a Monday-to-Friday hour grid on top of those figures. Weekday batches and weekend batches are both published. Blended mode is published as onsite plus online contact. The duration page repeats this without adding a fake timetable.",
        "About 80% of every session is hands-on, according to the About page. That is the closest published figure to a lab-hour claim. It is a proportion of a session, not a promise of a particular number of cloud credits. If you need the weekly clock for leave approval at work, call 083695 18569.",
      ],
    },
    {
      h2: "Who is eligible: freshers and working professionals?",
      paragraphs: [
        "Freshers are explicitly invited. The FAQ says students, fresh graduates, developers, system administrators and working IT professionals can join, and that Linux and Git come first so prior DevOps experience is not required. A fresher should expect the early weeks to feel like an operating-system course that happens to lead to a cluster. That is a feature. People who skip the shell usually stall on Docker networking later.",
        "Working professionals get a different constraint: time. The site says weekend batches exist so a job can continue, and testimonials describe weekend attendance and interview preparation. Umesh Sonawane's published note talks about flexible batches during a career shift. Sneha P. describes a weekend batch while working. Those are two stories already on the site, not a class list. Read the freshers page and the working-professionals page for the two ways of joining the same syllabus.",
      ],
    },
    {
      h2: "Which certifications does the course prepare you to attempt?",
      paragraphs: [
        "The site ties exam preparation to specific courses. AWS is described for people preparing for AWS certification exams. Azure mentions administrator or DevOps certifications. Kubernetes and Docker mention CKA and CKAD domains and practice labs. Terraform is taught as Infrastructure as Code on AWS and Azure, which is the skill the Terraform Associate exam also cares about, but this site does not name that exam on the Linux and Terraform page, so this pillar will not pretend it does. What is fair to say: the classroom prepares you for AWS, Azure, CKA and Terraform-shaped work because those tools are in the labs.",
        "It is not fair to say the institute awards those certificates. Vendor exams are sat with the vendor. A course completion document is also not described in the repository, so this page does not invent a certificate title. TODO: add the official completion certificate name if the institute issues one.",
      ],
    },
    {
      h2: "What does the site actually say about DevOps salary in India and Mumbai?",
      paragraphs: [
        "Two figures are already published, and this page will not add a third. The institute's public facts include a 5–35 LPA salary range. One named fresher, Rajeswari Singh, a 2025 Vasai college graduate, says she was placed at 6.5 LPA after classroom labs. Those numbers are outcomes the site has chosen to print. They are not a survey of the Indian market, and they are not a prediction for the next batch.",
        "Salary still depends on facts this website does not hold: your previous pay, your city, your interview performance, and the employer's band. Mumbai roles often pay differently from fully remote roles, but this site does not publish a Mumbai-versus-India table. The salary page explains that limit. Use the placement page for the process, and use the phone for counselling about your own background.",
      ],
    },
    {
      h2: "What does a career roadmap look like after this course?",
      paragraphs: [
        "The roadmap page lines the tools up in the order the curriculum already uses. A fresher leaves with Linux, Git, one or more clouds, containers, a cluster, Terraform and a pipeline story they can demo. A working administrator leaves with a way to automate the estate they already run. The job titles the course pages name are DevOps engineer, cloud engineer and related support-to-cloud moves. The site does not publish a year-by-year promotion ladder, and it should not. Interviews in Mumbai still ask for a project narrative: what you built, what broke, what you measured.",
        "That narrative is why the outcomes are written as verbs. Build a pipeline. Containerise an application. Provision with Terraform. Alert with Prometheus and Grafana. Walk an incident. If your portfolio cannot show those verbs, the roadmap is unfinished regardless of how many videos you have watched.",
      ],
    },
    {
      h2: "How does the classroom compare with online study?",
      paragraphs: [
        "The homepage contrast, echoed by Rajeswari Singh's story, is between studying alone online and learning with mentors in a room. The campus position is classroom-first: real cloud accounts, doubts answered in the session, weekday or weekend attendance. The schema also lists a blended mode, so online contact exists beside the room. A pure self-paced product is not offered on this campus. If you want videos and no cohort, this is the wrong institute, and the buyer's guide says so without naming anyone else.",
        "Online-only study can still teach Git. What the Powai classroom adds, according to the published stories, is lab access, a timetable and interview practice. Whether that trade is worth it depends on your discipline and your commute. Suburb pages exist so you can judge the commute before you judge the pedagogy.",
      ],
    },
    {
      h2: "How do the modules connect in a single project?",
      paragraphs: [
        "Treat the syllabus as one system, not eight souvenirs. A commit in Git should trigger Jenkins. Jenkins should build an image with the Dockerfile you wrote. The image should run on Kubernetes the same way it ran in Docker Compose. Terraform should be able to create the network and the cluster, or at least the cloud pieces the cluster needs. Ansible may set the host before Kubernetes takes over. ArgoCD may watch the manifest repository so a merge, not a manual kubectl apply, is what changes production. Prometheus should scrape the result, and Grafana should show whether the deploy helped.",
        "That single story is already the published outcome list: a pipeline from commit to deployment, a containerised application, infrastructure from Terraform, dashboards and alerts, and a production-style incident. The syllabus page turns the same story into a table with a TODO in the hours column. Use the table when you want a checklist. Use this page when you want the reason the checklist is ordered this way.",
        "If a module hour is missing, do not invent it in your notes and then quote the site. Call 083695 18569 and ask the counsellor for the current session plan. The four-month and 160-hour figures are the only durations this domain publishes for the flagship program.",
      ],
    },
    {
      h2: "What should you read next on this site?",
      paragraphs: [
        "Read the Mumbai hub if the remaining question is how you will reach Chandivali. Read the fees page if the remaining question is money: it explains what can change a fee and then tells you to call, because no number is printed. Read the buyer's guide if you are still deciding whether a classroom course is the right shape. It scores this institute only against a checklist, and it names no other training company.",
        "Read the reviews page for the four student stories and the 4.7 rating from 130 Google reviews already shown on the site. Read the placements page for how 450+ placed, 100% Placement and 360° Placement Assurance are worded, and for the alumni names the site actually has. Read the trainers page for the named mentors, their current employers and LinkedIn profiles.",
      ],
    },
    {
      h2: "Where do you take the course if you live in Mumbai?",
      paragraphs: [
        "At DevOps Institute, Lodha Supremus, B 1307, Saki Vihar Road, Tunga Village, Chandivali, Powai, Mumbai 400072. Phone 083695 18569. Metro Line 1, Saki Naka station, is the rail landmark. The Mumbai hub links every suburb page this domain is willing to publish. Thane, Vashi, Navi Mumbai and Ghatkopar belong to https://devopsinstitutemumbai.co.in/ and are not rewritten here.",
        "DevOps Institute is affiliated with NASSCOM, IBM, Govt. of India (MEITY) and IIT Patna, and works in collaboration with IIT and Microsoft. The names are written out in words. This page does not show affiliation logos.",
      ],
    },
  ],
  faqs: [
    { q: "What is a DevOps course?", a: "On this site it is the classroom toolchain: Linux, Git, Jenkins, Docker, Kubernetes, Ansible, Terraform, ArgoCD, Prometheus and Grafana, taught with labs at the Powai campus." },
    { q: "How long is the DevOps course?", a: "Four months is the published time to become job-ready. The flagship schema also publishes a 160-hour workload. Weekly clock times are not printed." },
    { q: "Can a fresher join?", a: "Yes. Basic computer skills are enough. Linux and Git are taught first." },
    { q: "Can someone with a job join?", a: "Yes. Weekend batches are published for working professionals, and weekday batches exist as well." },
    { q: "Does the course include placement support?", a: "Yes. The institute publishes 450+ placed, 100% Placement and 360° Placement Assurance, with resume support, mock interviews and career guidance." },
    { q: "Which certifications are mentioned?", a: "AWS certification prep, Azure certification prep, and CKA or CKAD-style labs are mentioned on the relevant course pages. The institute does not say it awards those vendor certificates." },
    { q: "Where is the Mumbai campus?", a: "Lodha Supremus, B 1307, Saki Vihar Road, Chandivali, Powai, Mumbai 400072. Call 083695 18569." },
    { q: "Where is the printable syllabus?", a: "On the DevOps course syllabus page, which lists modules, tools and published projects and can be printed from the browser." },
  ],
};
