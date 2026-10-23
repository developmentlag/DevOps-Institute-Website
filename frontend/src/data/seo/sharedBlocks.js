/** Factual blocks repeated because the facts are the same. Suburb pages add their own commute and FAQs. */

export function devopsShared() {
  return [
    {
      h2: "Which batch modes can you join?",
      paragraphs: [
        "Weekday batches and weekend batches both run at the Chandivali campus. The classroom mode is onsite at Lodha Supremus. The course schema also lists a blended mode, which means classroom labs plus online contact, not a second campus in your suburb. The weekly clock is not printed. Call 083695 18569 and name the batch you can reach.",
      ],
    },
    {
      h2: "What does the DevOps curriculum include?",
      paragraphs: [
        "The DevOps course covers Linux and Git, CI/CD with Jenkins, Docker, Kubernetes, Ansible, Terraform, GitOps with ArgoCD, and monitoring with Prometheus and Grafana. Read the full module list on the DevOps course syllabus and the running course at the DevOps course page. This suburb page does not replace that syllabus.",
      ],
    },
    {
      h2: "What placement support is published?",
      paragraphs: [
        "DevOps Institute publishes 450+ placed, 100% Placement and 360° Placement Assurance, with 350+ hiring partners and a published outcome range of 5–35 LPA. The support the site describes is resume reviews, mock interviews and career guidance. Hiring-company names are not listed. One fresher story, Rajeswari Singh, records 6.5 LPA. The placement page keeps those lines together.",
      ],
    },
    {
      h2: "Which affiliations can this page name?",
      paragraphs: [
        "The institute publishes the line “In Collaboration With IIT, Microsoft.” TODO: add the certificate or official page for that collaboration. TODO: do not add NASSCOM, IBM, Govt. of India (MEITY) or IIT Patna until a proof link is in the repository. Those names are allowed only with proof, and the proof is not here, so this page does not claim them.",
      ],
    },
  ];
}

export function cloudShared(focus) {
  const focusLine = {
    cloud: "The cloud track is AWS, Microsoft Azure and Google Cloud, taught as hands-on labs rather than a slide deck.",
    aws: "This page focuses on AWS: IAM, EC2, S3, VPC, RDS, CloudWatch and CloudFormation, as listed on the AWS course.",
    azure: "This page focuses on Microsoft Azure: virtual machines, virtual networks, Entra ID, AKS and Azure DevOps, as listed on the Azure course.",
    kubernetes: "This page focuses on Docker and Kubernetes: images, pods, deployments, ingress and Helm, as listed on the Kubernetes course.",
  }[focus];
  return [
    {
      h2: "Which batch modes can you join?",
      paragraphs: [
        "Weekday and weekend batches run at Lodha Supremus in Chandivali. Classroom study is onsite. Blended mode on the schema adds online contact to those labs. It does not move the class into your suburb. Call 083695 18569 for the open batch.",
      ],
    },
    {
      h2: "What will you practise?",
      paragraphs: [
        `${focusLine} The longer DevOps toolchain, when you want it, is Git, Jenkins, Docker, Kubernetes, Terraform and monitoring. Use the cloud computing course page for the three clouds together, and the DevOps course page when pipelines are the point.`,
      ],
    },
    {
      h2: "What placement support is published?",
      paragraphs: [
        "The institute publishes 450+ placed, 100% Placement and 360° Placement Assurance for its training, plus resume support, mock interviews and career guidance. There is no separate cloud-only total on this site. Company names are not published. The placement page is the longer note.",
      ],
    },
    {
      h2: "Which affiliations can this page name?",
      paragraphs: [
        "Published collaboration line: “In Collaboration With IIT, Microsoft.” TODO: add proof. NASSCOM, IBM, Govt. of India (MEITY) and IIT Patna are not claimed here, because no proof link is stored in the repository.",
      ],
    },
  ];
}
