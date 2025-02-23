import algomacampus from '../images/Canada/Algoma University - Brampton/campus.jpg';
import bcitcampus from '../images/Canada/British Columbia Institute of Technology - Burnaby (BCIT)/campus.jpg';
import ibtcampus from '../images/Canada/IBT College/campus.jpg';

import niagaracampus from '../images/Canada/Niagara College - Niagara-on-the-Lake/campus.jpg';
import reginacampus from '../images/Canada/University of Regina/campus.jpg';
import usaskcampus from '../images/Canada/University of Saskatchewan (USASK)/campus.jpg';

import fraservalleycampus from '../images/Canada/University of the Fraser Valley (UFV)/campus.jpg';
import yorkvillecampus from '../images/Canada/Yorkville University - Vancouver/campus.jpg';

export const canadianUniversities = [
  {
    name: "University of Regina",
    location: "Regina, Saskatchewan, Canada",
    tuition: 22000,
    livingCost: 12000,
    description: "A comprehensive university known for its experiential learning and research opportunities.",
    ranking: "801-1000",
    type: "Public",
    images: [algomacampus],
    programs: ["Business Administration", "Engineering", "Social Work", "Media Studies"],
    features: ["Experiential Learning", "Research Focus", "Affordable Living", "Community Engagement"]
  },
  {
    name: "Niagara College - Niagara-on-the-Lake",
    location: "Niagara-on-the-Lake, Ontario, Canada",
    tuition: 16000,
    livingCost: 14000,
    description: "Known for its strong focus on applied arts, technology, and wine studies.",
    ranking: "N/A (College)",
    type: "Public",
    images: [niagaracampus],
    programs: ["Hospitality Management", "Wine Business", "Culinary Arts", "Film Production"],
    features: ["Hands-On Learning", "Wine Research Center", "Industry Partnerships", "Scenic Location"]
  },
  {
    name: "British Columbia Institute of Technology - Burnaby (BCIT)",
    location: "Burnaby, British Columbia, Canada",
    tuition: 18000,
    livingCost: 15000,
    description: "A leading polytechnic institution known for its practical, career-focused education.",
    ranking: "N/A (Polytechnic)",
    type: "Public",
    images: [bcitcampus],
    programs: ["Engineering Technology", "Business Management", "Health Sciences", "Computing"],
    features: ["Industry-Relevant Programs", "Co-op Opportunities", "Modern Facilities", "Strong Alumni Network"]
  },
  {
    name: "IBT College",
    location: "Toronto, Ontario, Canada",
    tuition: 14000,
    livingCost: 18000,
    description: "A private career college offering specialized programs in business, technology, and healthcare.",
    ranking: "N/A (Private College)",
    type: "Private",
    images: [ibtcampus],
    programs: ["Business Administration", "Information Technology", "Healthcare Management", "Digital Marketing"],
    features: ["Career-Focused Programs", "Small Class Sizes", "Industry Connections", "Urban Location"]
  },
  {
    name: "University of the Fraser Valley (UFV)",
    location: "Abbotsford, British Columbia, Canada",
    tuition: 19000,
    livingCost: 13000,
    description: "A dynamic university offering a mix of academic and vocational programs.",
    ranking: "N/A (Regional University)",
    type: "Public",
    images: [fraservalleycampus],
    programs: ["Agriculture", "Criminology", "Business Administration", "Fine Arts"],
    features: ["Affordable Tuition", "Community Focus", "Hands-On Learning", "Scenic Campus"]
  },
  {
    name: "Algoma University - Brampton",
    location: "Brampton, Ontario, Canada",
    tuition: 20000,
    livingCost: 15000,
    description: "A small, student-focused university offering personalized education.",
    ranking: "N/A (Regional University)",
    type: "Public",
    images: [algomacampus],
    programs: ["Business Administration", "Computer Science", "Social Work", "Psychology"],
    features: ["Small Class Sizes", "Personalized Learning", "Urban Campus", "Diverse Community"]
  },
  {
    name: "University of Saskatchewan (USASK)",
    location: "Saskatoon, Saskatchewan, Canada",
    tuition: 23000,
    livingCost: 14000,
    description: "A leading research university known for its agriculture, health, and environmental programs.",
    ranking: "465",
    type: "Public",
    images: [usaskcampus],
    programs: ["Agriculture", "Medicine", "Engineering", "Environmental Studies"],
    features: ["Research Excellence", "Agriculture Focus", "Modern Facilities", "Community Engagement"]
  },
  {
    name: "Yorkville University - Vancouver",
    location: "Vancouver, British Columbia, Canada",
    tuition: 21000,
    livingCost: 20000,
    description: "A private university offering flexible programs in business, counseling, and creative arts.",
    ranking: "N/A (Private University)",
    type: "Private",
    images: [yorkvillecampus],
    programs: ["Business Administration", "Counseling Psychology", "Creative Arts", "Project Management"],
    features: ["Flexible Learning", "Small Class Sizes", "Industry-Relevant Programs", "Urban Campus"]
  }
];