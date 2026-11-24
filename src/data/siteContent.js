import recruitmentImage from "../assets/02_Recruitment_Placement.jpg";
import educationImage from "../assets/03_Technical_Education.jpg";
import interviewImage from "../assets/04_Interview_Preparation.jpg";
import consultancyImage from "../assets/05_Technical_Consultancy.jpg";
import laboratoryImage from "../assets/06_Testing_Laboratory.jpg";
import materialsImage from "../assets/07_Study_Materials.jpg";
import jobsImage from "../assets/08_Industrial_Job_Updates.jpg";
import resumeImage from "../assets/09_Resume_Development.jpg";
import plasticImage from "../assets/10_Plastic_Processing.jpg";
import polymerImage from "../assets/11_Polymer_Compounding.jpg";
import automotiveImage from "../assets/12_Automotive_Industry.jpg";
import packagingImage from "../assets/13_Packaging_Industry.jpg";
import testingImage from "../assets/14_Testing_Laboratories.jpg";
import manufacturingImage from "../assets/15_Manufacturing_Industry.jpg";
import polymerTrainingImage from "../assets/polymer processing.jfif";
import networkingImage from "../assets/16_Industry_Networking.png";

export const services = [
  {
    number: "01", slug: "recruitment-placement", title: "Recruitment & Placement Support",
    summary: "Candidate sourcing and recruitment coordination for plastics, polymer, automotive and allied industries.",
    image: recruitmentImage, alt: "Recruitment and placement support for technical industry roles",
    audience: "Employers, freshers and experienced technical professionals",
    items: ["Technical candidate sourcing, resume collection and screening", "Candidate database management and fresher recruitment assistance", "Experienced professional sourcing and job vacancy promotion", "Employer-candidate coordination and interview scheduling", "Shortlisting and technical or non-technical recruitment assistance"],
    roles: ["Production Engineer and Process Engineer", "Quality Engineer, QA Engineer and QC Engineer", "R&D Engineer and Polymer Testing Engineer", "Lab Technician / Lab Chemist and Maintenance Engineer", "Injection Moulding, Extrusion and Blow Moulding Operators", "Sales & Marketing Executive and Business Development Executive", "Plant Head / Production Head and Quality Head"],
    industries: ["Plastic manufacturing", "Polymer processing", "Automotive components", "Packaging", "Plastic testing laboratories", "Raw material manufacturing", "Masterbatch and compounding", "Engineering plastics"],
    cta: "Recruitment enquiry",
  },
  {
    number: "02", slug: "technical-training", title: "Technical Training & Educational Support",
    summary: "Industry-focused learning support for students pursuing plastics, polymer and allied technical courses.",
    image: educationImage, alt: "Technical education and learning support for plastics and polymer students",
    audience: "DPT (Diploma in Plastics Technology), DPMT (Diploma in Plastics Mould Technology), PGD-PPT (Post Graduate Diploma in Plastics Processing and Testing), B.Tech Polymer / Plastic Engineering and allied-course students",
    items: ["Plastic processing fundamentals, polymer science and material technology", "Injection, extrusion, blow, compression and rotational moulding", "Plastic testing, characterisation and polymer identification", "Engineering plastics, thermoplastics and thermosets", "Quality control, industrial safety and laboratory practices"],
    cta: "Explore learning resources",
  },
  {
    number: "03", slug: "interview-career-guidance", title: "Interview Preparation & Career Guidance",
    summary: "Practical interview preparation and career guidance for students and working professionals.",
    image: interviewImage, alt: "Interview preparation and career guidance for technical professionals",
    audience: "Students, freshers and working professionals",
    items: ["Polymer, plastic processing, testing laboratory, QA/QC and R&D interview preparation", "Technical questions and answers, HR preparation and mock interviews", "Resume preparation, LinkedIn profile guidance and professional communication", "Career development and interview readiness", "FTIR, DSC, TGA and Melt Flow Index (MFI/MFR/MVR)", "Tensile, flexural, Izod/Charpy impact, hardness and density testing", "Thermal and mechanical testing; ASTM, ISO and IS standards awareness"],
    cta: "Get career guidance",
  },
  {
    number: "04", slug: "technical-consultancy", title: "Technical Consultancy",
    summary: "Guidance for plastic manufacturers, testing laboratories and polymer-related businesses.",
    image: consultancyImage, alt: "Technical consultancy for polymer and plastics industry operations",
    audience: "Manufacturing units, laboratories and polymer businesses",
    items: ["Plastic testing laboratory setup, layout planning and equipment selection guidance", "Testing method development, SOP preparation and technical documentation", "Quality control systems, testing report formats and laboratory workflow improvement", "Raw material identification and polymer material selection", "BIS documentation and ISO/IEC 17025 documentation guidance", "Calibration, verification, non-conformity and CAPA records", "Quality assurance guidance"],
    industries: ["Cross-laminated tarpaulin", "Plastic films and sheets", "Polymer compounding and masterbatch", "Injection moulding and extrusion", "Packaging products", "Automotive plastic components"],
    cta: "Request technical consultancy",
  },
  {
    number: "05", slug: "laboratory-quality-support", title: "Testing Laboratory & Quality Management Support",
    summary: "Documentation and technical guidance for plastic and polymer testing laboratories.",
    image: laboratoryImage, alt: "Testing laboratory and quality management support",
    audience: "Plastic and polymer testing laboratories and quality teams",
    items: ["Standard Operating Procedures, test observation formats and report templates", "Equipment calibration registers, verification records and daily/monthly QC plans", "Sample identification and traceability formats", "Non-conforming work records, CAPA, RCA and internal-audit checklists", "Laboratory quality manual and measurement uncertainty guidance", "Method validation and verification guidance", "ASTM, ISO, IS, BIS and ISO/IEC 17025 requirements awareness"],
    cta: "Enquire about laboratory support",
  },
  {
    number: "06", slug: "study-materials", title: "Study Materials, Notes & E-books",
    summary: "Digital learning resources for examinations, entrance preparation and technical interviews.",
    image: materialsImage, alt: "Study materials, technical notes and digital learning resources",
    audience: "Students preparing for academic, entrance and technical examinations",
    items: ["Plastic processing, plastic testing and plastic material notes", "CIPET entrance preparation and previous-year question-based practice", "Semester examination preparation and technical MCQs", "Polymer science and practical laboratory knowledge", "Interview question banks, e-books and digital learning resources"],
    cta: "Explore study materials",
  },
  {
    number: "07", slug: "industrial-jobs", title: "Industrial Job Updates & Career Opportunities",
    summary: "Employment information for students and professionals across polymer and allied industries.",
    image: jobsImage, alt: "Industrial job updates and career opportunities",
    audience: "Freshers and experienced professionals",
    items: ["Fresher, experienced and CIPET placement updates", "Polymer industry, plastic manufacturing and automotive jobs", "Quality, testing laboratory, production and maintenance roles", "R&D and development opportunities", "Sales and business development positions"],
    cta: "View job updates",
  },
  {
    number: "08", slug: "resume-development", title: "Resume & Professional Profile Development",
    summary: "Support to present qualifications, technical skills and experience clearly to employers.",
    image: resumeImage, alt: "Resume and professional profile development support",
    audience: "Job seekers, students and working professionals",
    items: ["ATS-friendly resume preparation, formatting and restructuring", "Professional profile summary and technical skills presentation", "Work experience documentation", "LinkedIn profile optimisation guidance and cover letter preparation", "Job application assistance, professional email drafting and career profile improvement"],
    cta: "Improve your resume",
  },
  {
    number: "09", slug: "industrial-training", title: "Industrial Training & Skill Development Guidance",
    summary: "Guidance to help students understand industrial environments and build job-relevant knowledge.",
    image: polymerTrainingImage, alt: "Polymer processing operator at an industrial line",
    audience: "Students and freshers entering plastics and polymer industries",
    items: ["Plastic processing and manufacturing awareness", "Quality control and laboratory testing fundamentals", "Industrial documentation and process understanding", "Technical interview preparation and workplace communication", "Practical knowledge development"],
    cta: "Enquire about training",
  },
  {
    number: "10", slug: "professional-networking", title: "Industrial Networking & Professional Support",
    summary: "Connections and knowledge sharing among students, professionals, recruiters and manufacturers.",
    image: networkingImage, alt: "Plastics and polymer industry professionals sharing ideas in a manufacturing workspace",
    audience: "Students, professionals, recruiters, manufacturers and laboratories",
    items: ["Industry networking and technical knowledge sharing", "Recruitment coordination and career opportunity sharing", "Professional communication and industry information", "Collaboration enquiries"],
    cta: "Connect with CIPET GYAN",
  },
];

export const industries = [
  { title: "Plastic Processing", text: "Moulding, extrusion and polymer conversion processes.", image: plasticImage, alt: "Plastic processing industry" },
  { title: "Polymer & Compounding", text: "Polymer materials, masterbatch and compounding operations.", image: polymerImage, alt: "Polymer compounding industry" },
  { title: "Automotive Industry", text: "Plastic components and material needs across automotive supply chains.", image: automotiveImage, alt: "Automotive industry" },
  { title: "Packaging Industry", text: "Packaging materials, production and quality processes.", image: packagingImage, alt: "Packaging industry" },
  { title: "Testing Laboratories", text: "Testing, characterisation and quality management environments.", image: testingImage, alt: "Polymer testing laboratory" },
  { title: "Manufacturing Industry", text: "Technical roles across plastics and allied manufacturing.", image: manufacturingImage, alt: "Industrial manufacturing" },
];
