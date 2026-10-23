/** Extra sections so pillar, topic and guide articles clear the length bar without repeating a suburb template. */

function section(h2, paragraphs) {
  return { h2, paragraphs };
}

const cloudDepth = [
  section("How do the three cloud courses fit in one classroom?", [
    "DevOps Institute publishes three cloud courses and one flagship sentence that puts AWS, Azure, GCP, Docker, Kubernetes, Terraform and CI/CD in the same four-month room. That is the source of the cloud computing course on this site. It is not a fourth product with a separate campus, a separate placement total, or a separate phone number. You still call 083695 18569 at Lodha Supremus, Chandivali, Powai.",
    "Read the courses as layers. AWS is the first long console many Mumbai learners meet: identity, compute, object storage, a private network, a database, and the logs that show what the account did. Azure repeats the same kind of work with Microsoft's names: virtual machines, virtual networks, Entra ID, storage, App Service, AKS and Azure DevOps pipelines. GCP repeats it again with Compute Engine, VPC firewalls, Cloud Storage, GKE, Cloud Build and Cloud Monitoring. The repetition is the point. A person who can only click one vendor's wizard will stall on the next account.",
    "Kubernetes sits in more than one place on purpose. The Kubernetes course starts from Docker and goes to pods, deployments, services, ingress, Helm and RBAC. The GCP course names GKE. The Azure course names AKS. The DevOps course names Kubernetes as the scheduler after Jenkins and Docker. If you are choosing a first page, use the comparison guide. If you already know you want the consoles, stay on this pillar and then open the course page for the vendor you will touch first.",
  ]),
  section("What will you actually do on AWS?", [
    "The AWS course page is the checklist. It starts with cloud fundamentals and the AWS global infrastructure, then Identity and Access Management. Compute is EC2, EBS and load balancing. Storage is S3, including versioning and static website hosting. Networking is a VPC with subnets, route tables, NAT and security groups. Data is RDS and a first look at DynamoDB. Operations are CloudWatch, CloudTrail and basic cost controls. The published finish line is a sample application deployed on AWS from end to end. Tools named on the page include the console, the CLI, EC2, S3, VPC, IAM, RDS, CloudWatch and CloudFormation.",
    "Certification is named as preparation, not as an award. The course says people join while preparing for AWS certification exams, which means the labs overlap the exam topics. DevOps Institute does not print the AWS certificate. You book that exam with Amazon if you want the badge. TODO: the repository does not name which AWS exam code the current batch sits beside. Ask the campus before you pay an exam fee to a vendor.",
    "Nothing on the AWS page is a fee, a batch clock, or a hiring-company list. Those stay off this pillar as well. The placement lines that do exist are the institute lines: 450+ placed, 100% Placement and 360° Placement Assurance, with resume support, mock interviews and career guidance. They are not an AWS-only statistic.",
  ]),
  section("What will you actually do on Azure?", [
    "The Azure course uses the same shape with Microsoft's vocabulary. Virtual machines and virtual networks are the compute and network pair. Entra ID is the identity service the page names, including the older Azure AD wording so learners recognise both. Storage, App Service, AKS and Azure DevOps pipelines are the rest of the published list. You are learning to build a resource group you can explain, not to collect portal screenshots.",
    "AKS is the point where Azure and the Kubernetes course touch. If your goal is a cluster, you can start on the Kubernetes page and use Azure as the place the cluster runs, or start on Azure and meet AKS after the network and identity labs. The site does not publish a required sequence beyond the order inside each course. The flagship description is the closest thing to a combined path, and it still lives in the Powai classroom.",
    "Azure certification prep is the same kind of sentence as the AWS one: labs can support a vendor exam, and the institute is not the exam board. TODO: add the exam name if the campus wants it cited. Until then this page will not invent an AZ code.",
  ]),
  section("What will you actually do on Google Cloud?", [
    "The GCP course covers Compute Engine, Cloud Storage, VPC networks, IAM, a look at BigQuery, Google Kubernetes Engine and Cloud Build, plus Cloud Monitoring on the operations side. The page's outcome is a workload running on Google Cloud with a build path, not a tour of every product in the catalogue. BigQuery is described as fundamentals. Do not read this pillar as a data-engineering course. The sister brand for that work is Data Engineering Institute at https://datainstitute.in/, and it is a different site.",
    "GKE is the third place Kubernetes appears. A learner who only memorises kubectl without a cloud network will still get stuck when the cluster needs a subnet, a firewall or a registry. That is why the cloud pillar and the DevOps pillar link to each other instead of pretending one replaces the other.",
    "The same placement paragraph applies. There is no GCP-only placement count in the repository. Sneha P.'s published story mentions AWS, Docker and Kubernetes and the role label Cloud Support Engineer. Her employer is not named. One story is not a salary survey.",
  ]),
  section("Who is the cloud course for, and how long is it?", [
    "Each cloud course says it starts from fundamentals, so a fresher with basic computer skills is inside the published eligibility. Working professionals are inside it too: weekend batches exist, and Umesh Sonawane's published note is about flexible batches and weekend support during a career shift. The site does not publish an entrance test, a degree requirement, or a maximum age.",
    "Duration has two published numbers and you should keep both. The flagship line is four months to become job-ready, with a schema workload of 160 hours and a schedule duration of P4M. The individual cloud course schemas use a shorter 40-hour workload. This page will not collapse those into a single invented timetable. Call the campus, name the course, and ask which number applies to the batch you would join. Weekday and weekend are both published. Blended means classroom labs plus online contact, not a second address in your suburb.",
    "Module hours inside a cloud course are not printed. TODO: add them when the institute publishes a clock-time breakdown. Until then the syllabus-style claim stops at the tool list above.",
  ]),
  section("How does placement support show up for cloud roles?", [
    "The activities the site actually names are resume reviews, mock interviews, a project portfolio and career guidance. 350+ hiring partners is the published partner count. Company names are not listed. TODO: add the hiring list only from a source the institute is willing to stand behind. 5–35 LPA is the published range. Rajeswari Singh's card is the one package with a number, 6.5 LPA, for a 2025 Vasai college graduate, and it still does not name the employer.",
    "360° Placement Assurance is a published phrase. TODO: add the institute's own definition of the steps inside it. This page repeats the phrase because removing it would delete an approved claim. It does not add a stronger promise than the one already published.",
    "If you want the longer placement note, use the cloud computing course with placement page and the DevOps placement page. They separate the process from this syllabus. If you want local commute notes, use the Mumbai, Powai or Andheri cloud pages. Thane, Vashi and Ghatkopar stay on https://devopsinstitutemumbai.co.in/.",
  ]),
  section("Which certifications, affiliations and gaps should you treat carefully?", [
    "Safe affiliation line: the institute publishes “In Collaboration With IIT, Microsoft.” TODO: add the certificate or the official page before anyone treats that as documented proof. NASSCOM, IBM, Govt. of India (MEITY) and IIT Patna are allowed names only after proof is in the repository. They are not claimed here.",
    "Safe certification line: AWS, Azure and Kubernetes labs overlap vendor exam topics, including CKA or CKAD-style work on the Kubernetes course. The institute does not say it awards those certificates. TODO: name the current exam codes and whether a completion letter exists. educationalCredentialAwarded stays off the schema until that letter has a real name.",
    "Safe trainer line: classes are led by trainers with industry experience. TODO: add a name, a bio and a LinkedIn URL on the trainers page. Until then no Person schema and no instructor field. The same gap is why this pillar's byline is the organisation, not a fictional author.",
  ]),
  section("What should you open next?", [
    "Open the AWS, Azure or GCP course page for the tool list in the catalogue's own words. Open the DevOps course pillar if the pipeline, Docker, Terraform and monitoring are the gap rather than the console. Open the Mumbai hub if the remaining question is the commute to Saki Naka and Lodha Supremus. Open the fees page if the remaining question is money: it explains what can change a fee and then tells you to call, because no number is printed.",
    "Open the buyer's guide if you are still deciding whether a classroom is the right shape. It scores this campus only. It does not name another training company. Open the reviews page for the four stories and the 4.7 rating from 130 Google reviews already shown on the site. The public llms.txt file has also said 4.8 from 132. TODO: confirm the live count and keep one figure.",
    "The address, repeated so a citation has it in one place, is Lodha Supremus, B 1307, Saki Vihar Road, Tunga Village, Chandivali, Powai, Mumbai, Maharashtra 400072. Phone 083695 18569. Metro Line 1, Saki Naka station, is the rail landmark used across the local pages. Last updated October 2026.",
  ]),
];

export const LENGTH_BOOST = {
  "/devops-course": [
    section("What does the four-month path leave for you to confirm by phone?", [
      "The pillar above is the published toolchain and the published duration. It is not a weekly diary. You should still ask 083695 18569 which weekday or weekend batch is actually seating, whether the flagship room already includes the three clouds, and which trainer is in that room. Those answers change with the calendar. Putting a guessed clock time on this page would be worse than the gap.",
      "Bring the syllabus page with you, including the TODO marks on module hours. A counselling conversation is how those marks become a real plan. The campus can also walk through 450+ placed, 100% Placement and 360° Placement Assurance in the institute's own words. This page will not invent the missing definition of the 360° phrase, the hiring-company list, or a fee.",
    ]),
  ],
  "/cloud-computing-course": cloudDepth,
  "/devops-course-in-mumbai-with-placement": [
    section("How should a Mumbai learner read the placement claims?", [
      "Start with the three lines the site is willing to print: 450+ placed, 100% Placement and 360° Placement Assurance. Add 350+ hiring partners and the range 5–35 LPA. Then stop. The next sentence a careless page would write is a company list or a promise that every learner lands a role. Neither sentence is in the repository. Rajeswari Singh is the fresher whose card names 6.5 LPA. Raj Lad, Umesh Sonawane and Sneha P. describe training, a career shift or a role label. Filtering them on the placements page does not create 450 records.",
      "The support activities that are named are resume reviews, mock interviews, a project portfolio and career guidance. They happen around the classroom projects: a pipeline, a cluster, Terraform, dashboards. The campus is still Lodha Supremus in Chandivali. If you live in Thane, Vashi or Ghatkopar, use https://devopsinstitutemumbai.co.in/ rather than treating this page as a second centre. Call 083695 18569 and ask what the current batch's placement process includes, then compare that answer with the TODO on this site for the official 360° definition.",
    ]),
  ],
  "/cloud-computing-course-with-placement": [
    section("What is different about placement for a cloud course?", [
      "The institute does not publish a cloud-only placement percentage. The figures you can cite are the same institute figures used on the DevOps pages: 450+ placed, 100% Placement, 360° Placement Assurance, 350+ hiring partners, 5–35 LPA. Splitting a cloud number out of that total would be an invention. Sneha P.'s weekend-batch story is the closest cloud-shaped quote, and it still does not name an employer.",
      "Use the cloud course when the work you want to show a hiring team is a network, an identity policy and a running service on AWS, Azure or GCP. Use the DevOps course when the work is the pipeline that ships that service. Many learners need both, which is why the flagship sentence lists them together. Placement support is the resume, the mock interview and the career guidance around that work. It is not a hidden fee and it is not a vendor certificate. Call 083695 18569 before you assume a batch includes all three clouds.",
    ]),
    section("Which pages keep the claim and the syllabus apart?", [
      "This page is the claim. The cloud computing course pillar is the syllabus. The Powai and Andheri cloud pages are the commute. The reviews page is the four quotes and the 4.7 rating from 130 Google reviews. Keeping them apart stops one URL from pretending it has data the others already refused to invent. TODO: hiring-company names, alumni photos, Google review dates, and the write-a-review URL beyond the stored share link https://share.google/lYg4hHYl2lYj3b976.",
    ]),
  ],
  "/devops-course-fees-mumbai": [
    section("What can change the fee, without a number on this page?", [
      "A fee can change with the course you pick, the batch you can attend, and whether you are joining one cloud or the longer DevOps room. That is the whole list this repository supports. It does not support a rupee figure, a discount code, or a comparison with another institute. If a counsellor quotes a number on the phone, that number lives in the conversation, not on this URL, until the institute chooses to publish it.",
      "EMI and scholarships are TODO. The site does not confirm that either one exists. Do not arrive expecting a plan this page invented. Ask 083695 18569 directly: what is the fee for the batch I can attend, does any instalment plan exist, and does any scholarship exist. Write the answer down. If the institute wants it public, this is the page that should receive it, still without a competitor's price beside it.",
      "The things that are public, and that should weigh as much as the fee, are the campus, the tool list, the four-month flagship duration, weekday and weekend batches, and the placement lines 450+ placed, 100% Placement and 360° Placement Assurance. A low unpublished number would not replace a missing trainer name or a missing hiring list. Those gaps are marked on the trainers page and the placements page.",
    ]),
  ],
  "/devops-course-duration": [
    section("How should you plan a month when the weekly grid is missing?", [
      "Published anchors: four months to become job-ready, 160 hours on the flagship schema, a weekly repeat, and 40 hours on the shorter course schemas. Around 80% of every session is hands-on, which is the About page's lab line. Weekday batches and weekend batches both exist. That is enough to decide whether you can show up. It is not enough to print a Monday-to-Friday diary, so this page does not.",
      "A practical plan that stays inside those facts: treat the first stretch as Linux, Git and the shell, because later tools assume them. Treat the middle as Jenkins, Docker and Kubernetes. Treat the later stretch as Terraform, Ansible, ArgoCD and the Prometheus and Grafana dashboards. The course pages already list that order. Your calendar still needs the campus to say which evenings or weekends the current batch uses. Call 083695 18569 and ask for that clock, the next start date, and whether a mid-batch transfer exists. TODO: transfer and makeup rules are not in the repository.",
      "Blended mode does not shorten the course into a video library. It is onsite labs plus online contact. Self-paced study is not offered. If four months is more time than you can give, say so on the call. The honest answer may be a shorter single-tool course rather than a compressed flagship this site has not described.",
    ]),
  ],
  "/devops-course-for-freshers": [
    section("What does a fresher walk in with, and walk out able to show?", [
      "Rajeswari Singh's published card is the fresher example: a 2025 Vasai college graduate who contrasted classroom mentors with a year of studying alone online, named labs with CI/CD and Terraform, and recorded 6.5 LPA. The employer is not named. Basic computer skills are the eligibility line. You are not expected to arrive with a DevOps job title. Linux and Git are taught first so the later tools have a shell and a commit to stand on.",
      "What you can honestly put on a resume after the published outcomes is a pipeline from a Git commit through Jenkins and Docker to Kubernetes, Terraform that describes infrastructure, and dashboards in Prometheus and Grafana. What you cannot honestly put down is a vendor certificate the institute never said it awards, a company logo from a list we do not have, or a salary above the one card and the 5–35 LPA range. 450+ placed and 100% Placement are the institute lines. They are not a promise that every fresher's first conversation becomes an offer.",
      "Weekday batches are the usual fit when you are not yet in an office all day. Weekend batches exist if you are already working. The classroom is Lodha Supremus, not a college campus in Vasai. If the commute is the objection, read the suburb page for where you live and then decide. Thane and Navi Mumbai learners should use https://devopsinstitutemumbai.co.in/.",
    ]),
  ],
  "/devops-course-for-working-professionals": [
    section("How do weekend batches fit around a job?", [
      "Umesh Sonawane's published note is the working-professional example: flexible batches, weekend support, personal feedback and interview preparation during a career shift. Sneha P. joined a weekend batch while working and names AWS, Docker and Kubernetes with live labs. Neither note lists a clock time. You still have to ask whether the current weekend batch is Saturday, Sunday, or both, and how long a session runs. TODO: that timetable is not stored here.",
      "The course does not assume you are starting from zero if you already operate systems, but it also does not skip Linux and Git for people whose day job never touched them. QA, support and administration are named on the DevOps course as backgrounds that move into automation. Bring a concrete gap to the call: the shell, the pipeline, or one cloud console. The counsellor can match that gap to a single course or to the four-month room. Fees stay on the phone.",
      "Placement support for someone who already has a job is the same published set: resume reviews, mock interviews, career guidance, 450+ placed, 100% Placement and 360° Placement Assurance. It is not a resignation plan and it is not a notice-period policy. Those are outside the site. Call 083695 18569, say you are working, and ask which batch leaves your weekday intact.",
    ]),
  ],
  "/devops-vs-cloud-computing-course": [
    section("How do you decide in one counselling call?", [
      "Say which sentence is true. If you cannot yet build a network, an identity policy or a virtual machine, start with AWS, Azure or GCP. If you can deploy something and now need the build, the cluster and the infrastructure file, start with DevOps. If the shell itself is the gap, start with Linux. The catalogue lets you add the other courses later. The flagship sentence is the option where the three clouds and the DevOps tools already share a four-month room. Ask whether that combined batch is the one with seats.",
      "Do not decide from a fee this page does not print, or from another institute's brand, which this page will not name. Decide from the tool list, the campus you can reach, and the placement lines that apply to the institute as a whole. Both tracks use weekday and weekend batches at Lodha Supremus. Both sit under 450+ placed, 100% Placement and 360° Placement Assurance. There is no second percentage for cloud.",
    ]),
  ],
  "/devops-salary-mumbai": [
    section("Which numbers are safe to repeat, and which are not?", [
      "Safe: 5–35 LPA as the published range, 6.5 LPA on Rajeswari Singh's card, 450+ placed, 350+ hiring partners. Unsafe: a median, a city percentile, a company-wise grid, or a year-by-year hike. Those studies are not in this repository, and copying one from the open web would turn this page into a claim the campus has not made. Interview answers should use the same boundary. You can say what you built. You can say the institute publishes that range. You cannot say the range is a quote for your profile.",
      "Role labels that do appear are Cloud Support Engineer on Sneha P.'s card, Cloud and DevOps Trainee on Raj Lad's card, and a career shift on Umesh Sonawane's card. They are labels, not offer letters. TODO: add consented employer, role and package rows if the institute wants a salary page that can carry more than two numbers. Until those rows exist, the honest page is this short one plus the placements list.",
    ]),
  ],
  "/devops-roadmap-2026": [
    section("What does a 2026 study order look like with only this syllabus?", [
      "Order the work the way the courses already do. Linux and Git first, so a log and a commit are ordinary. Jenkins next, so a commit produces a build. Docker next, so the build has a package. Kubernetes next, so the package runs as pods, deployments and services, with Helm when you need to repeat the install. Ansible and Terraform after that, so machines and networks are files. ArgoCD when the cluster should follow Git. Prometheus and Grafana when you need a dashboard and an alert. Cloud consoles alongside, because the cluster and the network have to live in an account.",
      "That order is a roadmap, not a calendar for 2026. The four-month flagship is the published time box if you take the combined room. A single tool course is the shorter box. Nothing here predicts which vendor exam will change its blueprint next year. TODO: if the campus adopts a 2026 exam list, name the codes on this page. Security on the pipeline is mentioned as a basic look, not as a full security course. SRE appears in the public course list as a topic name. It does not have a separate hour count here.",
    ]),
  ],
  "/best-devops-course-in-mumbai": [
    section("How do you use the checklist on a campus visit?", [
      "Take the table with you. Ask to see a lab, not a slide. Ask who teaches the batch and write the name down, because this site still has a TODO where the biography should be. Ask which of the published tools you will touch yourself: Git, Jenkins, Docker, Kubernetes, Terraform, Ansible, ArgoCD, Prometheus, Grafana. Ask how placement support shows up in the room, and compare the answer with 450+ placed, 100% Placement and 360° Placement Assurance. Ask the fee out loud and keep it off the public site until the institute publishes it.",
      "Score only what you were shown. A classroom you sat in is evidence. A trainer name you did not receive is still a gap. A Google rating of 4.7 from 130 reviews is the figure on this website, with a TODO because llms.txt has also said 4.8 from 132. Another training company's billboard is not an input. This guide does not rank one. If the visit does not answer the batch clock or the hiring list, those stay TODO rather than becoming a guessed row in the table.",
    ]),
  ],
  "/devops-course-syllabus": [
    section("How do the modules map to the course pages?", [
      "Linux and Git point at the Linux and Terraform course when you need the deeper shell: files, users, permissions, systemd, SSH and Bash. Jenkins, Docker, Kubernetes, Ansible, ArgoCD, Prometheus and Grafana point at the DevOps course outcomes. Dockerfiles, Compose, ingress and Helm also point at the Kubernetes course. Terraform's HCL, state and modules point at the Linux course again, aimed at AWS and Azure. CloudFormation, ARM and Cloud Build stay on the AWS, Azure and GCP pages. The syllabus table is the union, not a second curriculum.",
      "Hours remain TODO in every row. The only hour figures you can cite are 160 for the flagship schema and 40 for the shorter course schemas, plus the four-month job-ready line. Printing a guessed eight hours beside Linux would make this table look finished when it is not. Projects you can name are the ones in the outcomes: a pipeline, a containerised application, a Kubernetes deployment, Terraform infrastructure, dashboards, and a production-style incident. TODO: official lab titles for Ansible and ArgoCD are not stored as branded project names.",
    ]),
  ],
  "/cloud-computing-course-in-mumbai": [
    section("Which Mumbai learner should start on this page?", [
      "Start here if you searched for a cloud computing course in Mumbai and you care more about AWS, Azure and GCP than about a suburb commute. The classroom is still one address: Lodha Supremus, B 1307, Saki Vihar Road, Chandivali, Powai, 400072. Metro Line 1 to Saki Naka is the rail landmark. Powai and Andheri have their own cloud pages because those commutes are different. This page is the city page: one campus, the three consoles, weekday and weekend batches, and the institute placement lines 450+ placed, 100% Placement and 360° Placement Assurance.",
      "If your search was really for a DevOps course in Mumbai with placement, use the DevOps hub and the placement guide. If it was for fees, use the fees page and then call. Thane, Vashi and Ghatkopar are not given local cloud essays on this domain. Their pages remain on https://devopsinstitutemumbai.co.in/. Phone for this campus is 083695 18569.",
    ]),
  ],
  "/cloud-computing-course-in-powai": [
    section("What does a Powai commute look like for a cloud lab?", [
      "Powai learners are already close. Powai Lake and Hiranandani sit on the same side of the eastern suburbs as the campus, and the last mile is Saki Vihar Road into Lodha Supremus, Tunga Village, Chandivali. You are not riding to a different cloud lab. The consoles are AWS, Azure and GCP, taught as labs, with the same weekday and weekend choice as the rest of the catalogue. Placement support is the institute's published support, not a Powai-only scheme.",
      "Use the DevOps course in Powai page if the pipeline is the goal and this page if the console is the goal. Many people in Hiranandani towers are already in IT and fit the weekend batch Umesh and Sneha described, without those stories being a Powai census. TODO: batch clock times. Call 083695 18569.",
    ]),
  ],
  "/cloud-computing-course-in-andheri": [
    section("How do Andheri East and West reach the cloud classroom?", [
      "Andheri is one page on purpose. East includes SEEPZ and the Marol side. West includes Lokhandwala and Versova. Both can use Metro Line 1, which runs from Versova through Andheri toward Ghatkopar and stops at Saki Naka. From Saki Naka the campus is a short last mile to Lodha Supremus on Saki Vihar Road. There is no second cloud classroom in Andheri.",
      "The course you are commuting to is AWS, Azure and GCP, plus the option to add Docker and Kubernetes. Placement lines stay 450+ placed, 100% Placement and 360° Placement Assurance. If you work in Andheri and can only travel on weekends, say that on the call. The site publishes weekend batches and does not publish the clock. Phone 083695 18569.",
    ]),
  ],
  "/aws-course-in-powai": [
    section("What does the Powai AWS page add to the AWS course?", [
      "The catalogue page at /courses/aws is the tool list: IAM, EC2, EBS, load balancing, S3, VPC, RDS, DynamoDB, CloudWatch, CloudTrail, CloudFormation, and a sample application deployed end to end. This page adds the place: Lodha Supremus in Chandivali, for people who searched AWS course in Powai. It does not add a second syllabus or a second fee. Certification prep is mentioned on the course page. The institute does not issue the AWS certificate.",
      "Placement support is the campus support: 450+ placed, 100% Placement and 360° Placement Assurance. There is no AWS-only placement count. Combine this page with the cloud pillar if you want Azure and GCP in the same breath, or with the DevOps course if the next step is Jenkins and Terraform. Call 083695 18569 for the batch that is actually running.",
    ]),
  ],
  "/azure-course-in-mumbai": [
    section("What does an Azure learner in Mumbai practise?", [
      "Virtual machines, virtual networks, Entra ID, storage, App Service, AKS and Azure DevOps pipelines are the published Azure list. The classroom is the Powai campus even though the search is city-wide. You reach it the same way as every other course: Metro Line 1 to Saki Naka, then Saki Vihar Road. Weekday and weekend batches are both published. AKS is the bridge to the Kubernetes course. Azure DevOps pipelines are the bridge to the Jenkins conversation on the DevOps course. They are related, and they are not the same tool.",
      "No Azure fee, no AZ exam code, and no employer list are printed. TODO: add the exam code if the batch is aligned to one. Placement figures remain the institute figures, including 450+ placed and 100% Placement. Call 083695 18569.",
    ]),
  ],
  "/kubernetes-course-in-mumbai": [
    section("What does the Mumbai Kubernetes course contain?", [
      "Images, Dockerfiles, multi-stage builds, Compose, pods, deployments, services, ingress, Helm and RBAC are the published Kubernetes and Docker topics. The DevOps course uses that cluster as the place a Jenkins pipeline lands. GKE and AKS are how the cloud courses meet the same orchestrator. This page is for the person who searched Kubernetes course in Mumbai and needs the classroom address: Lodha Supremus, Chandivali, Powai, phone 083695 18569.",
      "CKA or CKAD-style labs are the certification wording already used on the course. The institute does not award the CNCF certificate. TODO: say whether the current batch schedules exam-style practice. Placement support is 450+ placed, 100% Placement and 360° Placement Assurance, with resume and mock-interview help. There is no Kubernetes-only hiring list.",
    ]),
  ],
};
