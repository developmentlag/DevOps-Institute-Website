import { PROVIDER_NAME, getSiteOrigin } from "@/data/site";

/**
 * Public mentors for the Powai campus.
 * Included when the source row is verified, high, or medium-high.
 * Rows marked slug-only or unknown are omitted (including the unresolved Mujahed profile).
 * Ankit is published as "Ankit S." because the surname was not verified.
 * Employer names are the mentor's other job, written as text, not an endorsement.
 */

export const MENTORS = [
  {
    slug: "yogesh-devpura",
    name: "Yogesh Devpura",
    headline: "DevOps Architect. Mentor at DevOps Institute.",
    jobTitle: "DevOps Architect",
    employer: "Simple Logic IT Pvt Ltd",
    experience: "18+ years",
    expertise: ["AWS", "Kubernetes (EKS)", "CI/CD", "Cloud transformation"],
    linkedin: "https://www.linkedin.com/in/yogesh-devpura-baa8366",
    detail:
      "DevOps Architect at Simple Logic IT Pvt Ltd in Mumbai, with about 18 years in AWS, Kubernetes on EKS, CI/CD automation and cloud transformation. Earlier roles on the profile: VP Lead DevOps and Architect at ICICI Securities, Lead DevOps at SS&C, and Manager DevOps at Reliance Jio.",
  },
  {
    slug: "sirin-ali",
    name: "Sirin Ali",
    headline: "Cloud subject-matter expert and Microsoft Certified Trainer. Mentor at DevOps Institute.",
    jobTitle: "Subject Matter Expert",
    employer: "CloudThat",
    experience: "11+ years",
    expertise: ["Azure", "Kubernetes", "Terraform", "Ansible", "DevOps automation"],
    linkedin: "https://www.linkedin.com/in/sirin-ali/",
    detail:
      "Subject Matter Expert at CloudThat, and a Microsoft Certified Trainer. 11+ years in Azure, Kubernetes, DevOps automation, Terraform and Ansible. Credentials named on the profile include CKA, Terraform Associate and Azure DevOps Engineer Expert. The profile also records the name Sirin Kausar Isak Ali.",
  },
  {
    slug: "ninad-samudre",
    name: "Ninad Samudre",
    headline: "DevOps Tech Lead and Kubernetes trainer. Mentor at DevOps Institute.",
    jobTitle: "DevOps Tech Lead",
    employer: "CloudThat",
    expertise: ["Docker", "Kubernetes", "CI/CD", "CKA", "CKAD"],
    linkedin: "https://www.linkedin.com/in/ninad-samudre-19439b1a5/",
    detail:
      "DevOps Tech Lead at CloudThat, previously a Kubernetes subject-matter expert at the same company. Trains Docker and Kubernetes, including CI/CD on Kubernetes. Credentials named on the profile: CKA, CKAD, Microsoft Certified Trainer and HPE Certified Instructor.",
  },
  {
    slug: "amit-mishra",
    name: "Amit Mishra",
    headline: "Delivery Solution Architect for multi-cloud and data platforms. Mentor at DevOps Institute.",
    jobTitle: "Delivery Solution Architect",
    employer: "Databricks",
    experience: "18+ years",
    expertise: ["AWS", "Azure", "GCP", "Cloud migration", "Data platforms", "MLOps"],
    linkedin: "https://www.linkedin.com/in/amit-mishra-aa77477b/",
    detail:
      "Delivery Solution Architect at Databricks, with about 18 years in multi-cloud and hybrid architecture across AWS, Azure and GCP, including cloud migration, data platforms and MLOps. Earlier companies named on the profile include Cloudera, Deloitte and Accenture. This is an architecture and data role, not a DevOps job title.",
  },
  {
    slug: "arshad-mitha",
    name: "Arshad Mitha",
    headline: "General Manager, with cloud administration and DevOps practice. Mentor at DevOps Institute.",
    jobTitle: "General Manager",
    employer: "Mathcoms",
    expertise: ["Project management", "AWS", "Azure", "VMware", "Jenkins", "Terraform", "Git"],
    linkedin: "https://www.linkedin.com/in/arshadmitha/",
    detail:
      "General Manager at Mathcoms. The profile summary also covers project management and cloud administration with AWS, Azure, VMware, Jenkins, Terraform and Git.",
  },
  {
    slug: "priyanka-gawada",
    name: "Priyanka Gawada",
    headline: "Technology Trainer for Java, AWS, DevOps and Python. Mentor at DevOps Institute.",
    jobTitle: "Technology Trainer",
    employer: "Mastek",
    expertise: ["Java", "AWS", "DevOps", "Jenkins", "Python"],
    linkedin: "https://www.linkedin.com/in/priyanka-gawada-09106618/",
    detail:
      "Technology Trainer (Specialist II) at Mastek in Navi Mumbai. Trains Java full stack, AWS, DevOps with Jenkins, and Python, and holds the AWS Developer Associate certification.",
  },
  {
    slug: "ankit-s",
    name: "Ankit S.",
    headline: "DevSecOps and SRE engineer. Mentor at DevOps Institute.",
    jobTitle: "Lead Module DevOps SRE Engineer",
    employer: "Wipro",
    experience: "9+ years",
    expertise: ["Kubernetes", "Argo CD", "Helm", "Terraform", "AWS", "DevSecOps", "Observability"],
    linkedin: "https://www.linkedin.com/in/ankitshukla11/",
    detail:
      "Lead Module DevOps SRE Engineer at Wipro. The profile headline is DevSecOps and SRE engineer, and it also describes him as an AI-driven trainer. About 9.8 years in total, across Kubernetes on EKS, Argo CD, Helm, Terraform, AWS, CI/CD, and observability with OpenTelemetry and Grafana. Earlier: Senior DevOps Engineer at Paytm, and a role at Jio. The card uses the name shown on the profile, Ankit S.",
  },
  {
    slug: "mehar-nafis",
    name: "Mehar Nafis",
    headline: "GenAI and cloud architect. Mentor at DevOps Institute.",
    jobTitle: "GenAI Solution Architect",
    employer: "Frontier Business Systems Pvt. Ltd.",
    expertise: ["Generative AI", "Cloud architecture", "AWS", "Azure"],
    linkedin: "https://www.linkedin.com/in/meharnafis/",
    detail:
      "GenAI Solution Architect at Frontier Business Systems Pvt. Ltd., working on generative AI solution architecture on AWS and Azure. He holds Microsoft Certified: Azure AI Engineer Associate (February 2025). The role is GenAI and cloud architecture, not a DevOps job title.",
  },
  {
    slug: "armugharaj-nadar",
    name: "Armugharaj Nadar",
    headline: "Senior DevOps and cloud platform engineer. Mentor at DevOps Institute.",
    jobTitle: "Senior DevOps Engineer and Senior Cloud Platform Engineer",
    employer: "Zeidler Group",
    experience: "12+ years",
    expertise: ["AWS", "Terraform", "Ansible", "Docker", "Kubernetes", "CI/CD", "FinOps"],
    linkedin: "https://www.linkedin.com/in/senior-devops-engineer/",
    detail:
      "Senior Cloud Platform Engineer and Senior DevOps Engineer at Zeidler Group, based in Navi Mumbai. Earlier: Senior Engineer DevOps (Manager) at Reliance Jio in Mumbai. The profile states 12+ years in DevOps and about 13 years in total, covering AWS, Terraform, CloudFormation, Ansible, Docker, Kubernetes, Jenkins and Bitbucket CI/CD, Prometheus, CloudWatch, WAF, GuardDuty, FinOps and AIOps. AWS Certified Solutions Architect (SAA-C03) is listed with the profile.",
  },
];

export function mentorInitials(name) {
  return name
    .split(/\s+/)
    .map((part) => part.replace(/[^A-Za-z]/g, ""))
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

export function buildMentorPersonSchemas() {
  const origin = getSiteOrigin();
  return MENTORS.map((mentor) => ({
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${origin}/trainers#${mentor.slug}`,
    name: mentor.name,
    jobTitle: mentor.jobTitle,
    worksFor: { "@type": "Organization", name: mentor.employer },
    sameAs: [mentor.linkedin],
    knowsAbout: mentor.expertise,
    affiliation: {
      "@type": "EducationalOrganization",
      "@id": `${origin}/#institute`,
      name: PROVIDER_NAME,
      url: origin,
    },
    url: `${origin}/trainers#${mentor.slug}`,
  }));
}
