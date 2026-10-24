import { PROVIDER_NAME, getSiteOrigin } from "@/data/site";

/**
 * Public mentors for the Powai campus.
 * Facts follow the LinkedIn profile table. Mujahed stays off the page.
 * Employer names are plain text, not logos and not endorsements.
 * Years use the profile About claim when one exists, otherwise the counted
 * experience rounded down. Mehar Nafis has no year figure.
 */

export const MENTORS = [
  {
    slug: "yogesh-devpura-baa8366",
    name: "Yogesh Devpura",
    headline: "DevOps Architect, 18+ years. Mentor at DevOps Institute.",
    jobTitle: "DevOps Architect",
    former: "Formerly VP, Lead DevOps & Architect at ICICI Securities",
    experience: "18+ years",
    expertise: ["Kubernetes", "ArgoCD", "GitOps", "Terraform", "CI/CD", "AWS"],
    linkedin: "https://www.linkedin.com/in/yogesh-devpura-baa8366",
    detail:
      "DevOps Architect with 18+ years in cloud and IT services. Formerly VP, Lead DevOps & Architect at ICICI Securities. The profile highlights Kubernetes, ArgoCD, GitOps, Terraform, CI/CD, AWS, Prometheus, Grafana, release management and incident response. No current employer is stated.",
  },
  {
    slug: "sirin-ali",
    name: "Sirin Ali",
    headline: "Microsoft Certified Trainer and cloud subject-matter expert. Mentor at DevOps Institute.",
    jobTitle: "Subject Matter Expert",
    employer: "CloudThat",
    experience: "13+ years",
    expertise: ["Kubernetes", "OpenShift", "Docker", "Azure", "Ansible", "Terraform"],
    linkedin: "https://www.linkedin.com/in/sirin-ali/",
    detail:
      "Subject Matter Expert at CloudThat and a Microsoft Certified Trainer. 13+ years across Kubernetes, OpenShift, Docker, Azure, Azure DevOps, Ansible, Terraform and CI/CD.",
  },
  {
    slug: "ninad-samudre-19439b1a5",
    name: "Ninad Samudre",
    headline: "DevOps Tech Lead and Kubernetes trainer. Mentor at DevOps Institute.",
    jobTitle: "DevOps Tech Lead",
    employer: "CloudThat",
    experience: "10+ years",
    expertise: ["Docker", "Kubernetes", "Amazon EKS", "Cybersecurity", "DevOps"],
    linkedin: "https://www.linkedin.com/in/ninad-samudre-19439b1a5/",
    detail:
      "DevOps Tech Lead at CloudThat. 10+ years. Microsoft Certified Trainer and HPE Certified Instructor, with CKA and CKAD on the profile headline. Trains Docker, Kubernetes, Amazon EKS and cybersecurity.",
  },
  {
    slug: "amit-mishra-aa77477b",
    name: "Amit Mishra",
    headline: "Multi-cloud and hybrid solution architect. Mentor at DevOps Institute.",
    jobTitle: "Delivery Solution Architect",
    employer: "Databricks",
    experience: "18+ years",
    expertise: ["AWS", "Azure", "GCP", "Data platforms", "Cloud migration"],
    linkedin: "https://www.linkedin.com/in/amit-mishra-aa77477b/",
    detail:
      "Delivery Solution Architect at Databricks. 18+ years in multi-cloud and hybrid architecture across AWS, Azure and GCP, including Cloudera, data platforms and cloud migration. This is an architecture and data role, not a DevOps job title.",
  },
  {
    slug: "arshadmitha",
    name: "Arshad Mitha",
    headline: "Project and delivery leader with cloud and DevOps experience. Mentor at DevOps Institute.",
    jobTitle: "Project Manager",
    employer: "Mathcoms",
    experience: "9+ years",
    expertise: ["Project management", "Cloud administration", "DevOps", "VMware", "Agile"],
    linkedin: "https://www.linkedin.com/in/arshadmitha/",
    detail:
      "Project Manager at Mathcoms. A project and delivery leader with cloud and DevOps experience, including VMware, Citrix, Agile delivery and vendor negotiation. 9+ years. The profile headline also lists PMP and PRINCE2.",
  },
  {
    slug: "priyanka-gawada-09106618",
    name: "Priyanka Gawada",
    headline: "Technology trainer for full-stack development, AWS and DevOps. Mentor at DevOps Institute.",
    jobTitle: "Specialist II, Technology Training",
    employer: "Mastek",
    experience: "18+ years",
    expertise: ["Full-stack Java", "AWS", "DevOps", "Spring Boot", "MEAN/MERN"],
    linkedin: "https://www.linkedin.com/in/priyanka-gawada-09106618/",
    detail:
      "Specialist II, Technology Training, at Mastek. 18+ years. Trains full-stack Java, MEAN and MERN, AWS, DevOps and Spring Boot. The profile headline lists AWS Certified.",
  },
  {
    slug: "ankitshukla11",
    name: "Ankit Shukla",
    headline: "DevSecOps and SRE engineer. Mentor at DevOps Institute.",
    jobTitle: "Lead Module Engineer DevOps SRE",
    employer: "Wipro",
    experience: "9+ years",
    expertise: ["DevSecOps", "SRE", "AWS", "Kubernetes", "Terraform", "CI/CD"],
    linkedin: "https://www.linkedin.com/in/ankitshukla11/",
    detail:
      "Lead Module Engineer, DevOps SRE, at Wipro. 9+ years in DevSecOps and site reliability, including Python, CI/CD, AWS, Kubernetes, Terraform, Ansible, and Prometheus and Grafana. The profile describes him as an AI-driven trainer.",
  },
  {
    slug: "meharnafis",
    name: "Mehar Nafis",
    headline: "AI/ML solution architect. Mentor at DevOps Institute.",
    jobTitle: "Solution Architect, AI/ML",
    employer: "Frontier Business Systems",
    expertise: ["AI/ML", "DevOps", "Terraform", "Kubernetes", "Ansible", "CI/CD"],
    linkedin: "https://www.linkedin.com/in/meharnafis/",
    detail:
      "Solution Architect for AI/ML at Frontier Business Systems. The profile headline also lists DevOps and corporate training and consulting. Skills include Terraform, Kubernetes, Ansible and CI/CD. No year count is shown.",
  },
  {
    slug: "senior-devops-engineer",
    name: "Armugharaj Nadar",
    headline: "Senior Cloud Platform Engineer. Mentor at DevOps Institute.",
    jobTitle: "Senior Cloud Platform Engineer",
    employer: "Zeidler Group",
    experience: "12+ years",
    expertise: ["AWS", "Terraform", "Cloud-native platforms", "DevOps"],
    linkedin: "https://www.linkedin.com/in/senior-devops-engineer/",
    detail:
      "Senior Cloud Platform Engineer (Sr Associate) at Zeidler Group, and a Senior DevOps Engineer. 12+ years with Terraform, AWS, cloud-native platforms and DevOps.",
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
  return MENTORS.map((mentor) => {
    const person = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${origin}/trainers#${mentor.slug}`,
      name: mentor.name,
      jobTitle: mentor.jobTitle,
      image: `${origin}/mentors/${mentor.slug}.jpg`,
      sameAs: [mentor.linkedin],
      knowsAbout: mentor.expertise,
      affiliation: {
        "@type": "EducationalOrganization",
        "@id": `${origin}/#institute`,
        name: PROVIDER_NAME,
        url: origin,
      },
      url: `${origin}/trainers#${mentor.slug}`,
    };
    if (mentor.employer) {
      person.worksFor = { "@type": "Organization", name: mentor.employer };
    }
    return person;
  });
}
