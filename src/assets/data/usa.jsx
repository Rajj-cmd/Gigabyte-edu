// Import all university images
import washingtonCampus from '../images/USA/Washington University of Science and Technology/campus.jpg';
import washingtonLibrary from '../images/USA/Washington University of Science and Technology/library.jpg';
import washingtonStudentLife from '../images/USA/Washington University of Science and Technology/student-life.jpg';

import csuCampus from '../images/USA/California State University/campus.jpg';
import csuLibrary from '../images/USA/California State University/library.jpg';
import csuStudentLife from '../images/USA/California State University/student-life.jpg';

import depaulCampus from '../images/USA/DePaul University/campus.jpg';
import depaulLibrary from '../images/USA/DePaul University/library.jpg';
import depaulStudentLife from '../images/USA/DePaul University/student-life.jpg';

import arkansasCampus from '../images/USA/Arkansas State University/campus.jpg';
import arkansasLibrary from '../images/USA/Arkansas State University/library.jpg';
import arkansasStudentLife from '../images/USA/Arkansas State University/student-life.jpg';

import wrightCampus from '../images/USA/Wright State University/campus.jpg';
import wrightLibrary from '../images/USA/Wright State University/library.jpg';
import wrightStudentLife from '../images/USA/Wright State University/student-life.jpg';

import weberCampus from '../images/USA/Weber State University/campus.jpg';
import weberLibrary from '../images/USA/Weber State University/library.jpg';
import weberStudentLife from '../images/USA/Weber State University/student-life.jpg';

import websterCampus from '../images/USA/Webster University/campus.jpg';
import websterLibrary from '../images/USA/Webster University/library.jpg';
import websterStudentLife from '../images/USA/Webster University/student-life.jpg';

import usfCampus from '../images/USA/University of South Florida/campus.jpg';
import usfLibrary from '../images/USA/University of South Florida/library.jpg';
import usfStudentLife from '../images/USA/University of South Florida/student-life.jpg';

import usdCampus from '../images/USA/University of South Dakota/campus.jpg';
import usdLibrary from '../images/USA/University of South Dakota/library.jpg';
import usdStudentLife from '../images/USA/University of South Dakota/student-life.jpg';

import caltechCampus from '../images/USA/California Institute of Technology (Caltech)/campus.jpg';
import caltechLibrary from '../images/USA/California Institute of Technology (Caltech)/library.jpg';
import caltechStudentLife from '../images/USA/California Institute of Technology (Caltech)/student-life.jpg';

import youngstownCampus from '../images/USA/Youngstown state university/campus.jpg';
import youngstownLibrary from '../images/USA/Youngstown state university/library.jpg';
import youngstownStudentLife from '../images/USA/Youngstown state university/student-life.jpg';

import texasCampus from '../images/USA/Texas state university/campus.jpg';
import texasLibrary from '../images/USA/Texas state university/library.jpg';
import texasStudentLife from '../images/USA/Texas state university/student-life.jpg';

import jamestownCampus from '../images/USA/University of jamestown/campus.jpg';
import jamestownLibrary from '../images/USA/University of jamestown/library.jpg';
import jamestownStudentLife from '../images/USA/University of jamestown/student-life.jpg';

import gmuCampus from '../images/USA/George Mason Uni/campus.jpg';
import gmuLibrary from '../images/USA/George Mason Uni/library.jpg';
import gmuStudentLife from '../images/USA/George Mason Uni/student-life.jpg';

import fiuCampus from '../images/USA/Florida International University/campus.jpg';
import fiuLibrary from '../images/USA/Florida International University/library.jpg';
import fiuStudentLife from '../images/USA/Florida International University/student-life.jpg';

import sdsuCampus from '../images/USA/San Diego State University/campus.jpg';
import sdsuLibrary from '../images/USA/San Diego State University/library.jpg';
import sdsuStudentLife from '../images/USA/San Diego State University/student-life.jpg';

import uabCampus from '../images/USA/University of Alabama at Birmingham/campus.jpg';
import uabLibrary from '../images/USA/University of Alabama at Birmingham/library.jpg';
import uabStudentLife from '../images/USA/University of Alabama at Birmingham/student-life.jpg';

import nauCampus from '../images/USA/Northern Arizona Uni/campus.jpg';
import nauLibrary from '../images/USA/Northern Arizona Uni/library.jpg';
import nauStudentLife from '../images/USA/Northern Arizona Uni/student-life.jpg';

import psuCampus from '../images/USA/Portland State University/campus.jpg';
import psuLibrary from '../images/USA/Portland State University/library.jpg';
import psuStudentLife from '../images/USA/Portland State University/student-life.jpg';

import ucfCampus from '../images/USA/University of Central Florida/campus.jpg';
import ucfLibrary from '../images/USA/University of Central Florida/library.jpg';
import ucfStudentLife from '../images/USA/University of Central Florida/student-life.jpg';

import untCampus from '../images/USA/University of North Texas/campus.jpg';
import untLibrary from '../images/USA/University of North Texas/library.jpg';
import untStudentLife from '../images/USA/University of North Texas/student-life.jpg';

// Then update each university's images array in the data structure:

export const universities = {
  USA: [
    {
      "name": "Washington University of Science and Technology",
      "location": "Vienna, Virginia, USA",
      "tuition": 15000,
      "livingCost": 20000,
      "description": "A private university specializing in science, technology, and business education with a focus on practical learning.",
      "ranking": "Regional",
      "type": "Private",
      "images": [
        washingtonCampus,
        washingtonLibrary,
        washingtonStudentLife
      ],
      "programs": ["Computer Science", "Business Administration", "Cybersecurity", "Data Science"],
      "features": ["STEM-Focused", "Industry Partnerships", "Career-Oriented Programs", "Small Class Sizes"]
    },
    {
      "name": "California State University",
      "location": "Multiple Campuses, California, USA",
      "tuition": 17700,
      "livingCost": 23000,
      "description": "One of the largest public university systems in the U.S., offering quality education across 23 campuses.",
      "ranking": "Varies by Campus",
      "type": "Public",
      "images": [
        csuCampus,
        csuLibrary,
        csuStudentLife
      ],
      "programs": ["Engineering", "Business", "Education", "Health Sciences"],
      "features": ["Affordable Tuition", "Diverse Programs", "Strong Industry Connections", "Research Opportunities"]
    },
    {
      "name": "DePaul University",
      "location": "Chicago, Illinois, USA",
      "tuition": 43800,
      "livingCost": 21000,
      "description": "A private Catholic university known for its strong programs in business, law, and technology, located in the heart of Chicago.",
      "ranking": "127",
      "type": "Private",
      "images": [
        depaulCampus,
        depaulLibrary,
        depaulStudentLife
      ],
      "programs": ["Business", "Law", "Computer Science", "Media Studies"],
      "features": ["Chicago Location", "Industry Partnerships", "Career-Oriented Education", "Diverse Student Body"]
    },
    {
      "name": "Arkansas State University",
      "location": "Jonesboro, Arkansas, USA",
      "tuition": 13200,
      "livingCost": 18000,
      "description": "A public research university offering a variety of undergraduate and graduate programs with a focus on applied learning.",
      "ranking": "299",
      "type": "Public",
      "images": [
        arkansasCampus,
        arkansasLibrary,
        arkansasStudentLife
      ],
      "programs": ["Agriculture", "Business", "Engineering", "Health Sciences"],
      "features": ["Affordable Education", "Research Excellence", "Vibrant Campus Life", "Diverse Programs"]
    },
    {
      "name": "Wright State University",
      "location": "Dayton, Ohio, USA",
      "tuition": 9920,
      "livingCost": 17000,
      "description": "A public university known for its strong engineering, business, and medical programs, with a focus on research and innovation.",
      "ranking": "298",
      "type": "Public",
      "images": [
        wrightCampus,
        wrightLibrary,
        wrightStudentLife
      ],
      "programs": ["Engineering", "Business", "Health Sciences", "Education"],
      "features": ["STEM-Focused", "Research Opportunities", "Diverse Student Body", "Strong Community Engagement"]
    },
    {
      "name": "Weber State University",
      "location": "Ogden, Utah, USA",
      "tuition": 8700,
      "livingCost": 15000,
      "description": "A public university offering high-quality education with a strong emphasis on practical learning and career preparation.",
      "ranking": "Regional Top 50",
      "type": "Public",
      "images": [
        weberCampus,
        weberLibrary,
        weberStudentLife
      ],
      "programs": ["Business", "Engineering", "Nursing", "Computer Science"],
      "features": ["Affordable Tuition", "Hands-On Learning", "Diverse Programs", "Small Class Sizes"]
    },
    {
      "name": "Webster University",
      "location": "St. Louis, Missouri, USA",
      "tuition": 29500,
      "livingCost": 19000,
      "description": "A private university with a global perspective, offering flexible programs designed for working professionals and international students.",
      "ranking": "Regional Top 20",
      "type": "Private",
      "images": [
        websterCampus,
        websterLibrary,
        websterStudentLife
      ],
      "programs": ["Business", "International Relations", "Psychology", "Media Studies"],
      "features": ["Global Campus Network", "Flexible Programs", "Career-Oriented Education", "Diverse Student Body"]
    },
    {
      "name": "University of South Florida",
      "location": "Tampa, Florida, USA",
      "tuition": 17324,
      "livingCost": 21000,
      "description": "A top-tier public research university offering innovative programs in business, engineering, and health sciences.",
      "ranking": "89",
      "type": "Public",
      "images": [
        usfCampus,
        usfLibrary,
        usfStudentLife
      ],
      "programs": ["Business", "Engineering", "Health Sciences", "Marine Science"],
      "features": ["Research Excellence", "Diverse Student Body", "Strong Industry Partnerships", "Tropical Campus Environment"]
    },
    {
      name: "University of South Dakota",
      location: "Vermillion, South Dakota, USA",
      tuition: 12250,
      livingCost: 18000,
      description: "A public research university known for its strong programs in law, business, and health sciences.",
      ranking: "298",
      type: "Public",
      images: [
        usdCampus,
        usdLibrary,
        usdStudentLife
      ],
      programs: ["Business", "Law", "Health Sciences", "Education"],
      features: ["Affordable Tuition", "Strong Research Programs", "Student-Centered Learning", "Vibrant Campus Life"]
    },
    {
      name: "California Institute of Technology (Caltech)",
      location: "Pasadena, California, USA",
      tuition: 60717,
      livingCost: 22000,
      description: "A world-renowned private research university specializing in science, engineering, and technology.",
      ranking: "4",
      type: "Private",
      images: [
        caltechCampus,
        caltechLibrary,
        caltechStudentLife
      ],
      programs: ["Physics", "Engineering", "Computer Science", "Mathematics"],
      features: ["STEM Focus", "Nobel Laureates", "Cutting-Edge Research", "Small Class Sizes"]
    },
    {
      name: "Youngstown State University",
      location: "Youngstown, Ohio, USA",
      tuition: 10400,
      livingCost: 16000,
      description: "A public university offering diverse academic programs with a strong emphasis on applied learning.",
      ranking: "331",
      type: "Public",
      images: [
        youngstownCampus,
        youngstownLibrary,
        youngstownStudentLife
      ],
      programs: ["Engineering", "Business", "Health Sciences", "Education"],
      features: ["Affordable Education", "Career-Focused Programs", "Diverse Student Body", "Strong Community Engagement"]
    },
    {
      name: "Texas State University",
      location: "San Marcos, Texas, USA",
      tuition: 11860,
      livingCost: 20000,
      description: "A large public university known for its research, innovation, and strong academic programs.",
      ranking: "280",
      type: "Public",
      images: [
        texasCampus,
        texasLibrary,
        texasStudentLife
      ],
      programs: ["Business", "Engineering", "Psychology", "Education"],
      features: ["Research Excellence", "Vibrant Campus Life", "Strong Alumni Network", "Beautiful Hill Country Setting"]
    },
    {
      name: "University of Jamestown",
      location: "Jamestown, North Dakota, USA",
      tuition: 23600,
      livingCost: 17000,
      description: "A private liberal arts university focused on personalized education and student success.",
      ranking: "Regional Top 50",
      type: "Private",
      images: [
        jamestownCampus,
        jamestownLibrary,
        jamestownStudentLife
      ],
      programs: ["Nursing", "Business", "Education", "Liberal Arts"],
      features: ["Small Class Sizes", "Strong Community", "Personalized Education", "Liberal Arts Tradition"]
    },
    {
      "name": "University of Central Florida",
      "location": "Orlando, Florida, USA",
      "tuition": 16630,
      "livingCost": 20000,
      "description": "One of the largest universities in the U.S., known for its strong engineering, business, and computer science programs.",
      "ranking": "124",
      "type": "Public",
      "images": [
        ucfCampus,
        ucfLibrary,
        ucfStudentLife
      ],
      "programs": ["Computer Science", "Business", "Engineering", "Hospitality Management"],
      "features": ["High Research Activity", "Large Student Body", "Innovation & Technology", "Orlando Location"]
    },
    {
      "name": "George Mason University",
      "location": "Fairfax, Virginia, USA",
      "tuition": 37310,
      "livingCost": 22000,
      "description": "A leading public research university in Virginia, known for its strong programs in economics, law, and cybersecurity.",
      "ranking": "137",
      "type": "Public",
      "images": [
        gmuCampus,
        gmuLibrary,
        gmuStudentLife
      ],
      "programs": ["Cybersecurity", "Law", "Economics", "Engineering"],
      "features": ["Research Excellence", "D.C. Proximity", "Diverse Student Body", "Strong Industry Ties"]
    },
    {
      "name": "Florida International University",
      "location": "Miami, Florida, USA",
      "tuition": 18566,
      "livingCost": 21000,
      "description": "A top-tier public research university with a strong focus on business, international relations, and engineering.",
      "ranking": "151",
      "type": "Public",
      "images": [
        fiuCampus,
        fiuLibrary,
        fiuStudentLife
      ],
      "programs": ["Business", "Engineering", "International Relations", "Marine Science"],
      "features": ["Global Perspective", "Diverse Campus", "Strong Research Focus", "Miami Location"]
    },
    {
      "name": "San Diego State University",
      "location": "San Diego, California, USA",
      "tuition": 20412,
      "livingCost": 24000,
      "description": "A top public research university known for business, engineering, and international studies.",
      "ranking": "151",
      "type": "Public",
      "images": [
        sdsuCampus,
        sdsuLibrary,
        sdsuStudentLife
      ],
      "programs": ["Business", "Engineering", "Health Sciences", "Psychology"],
      "features": ["Coastal Campus", "High Research Activity", "Diverse Programs", "Sunny Weather"]
    },
    {
      "name": "University of Alabama at Birmingham",
      "location": "Birmingham, Alabama, USA",
      "tuition": 20500,
      "livingCost": 19000,
      "description": "A research-intensive public university, highly regarded for its medical and health science programs.",
      "ranking": "142",
      "type": "Public",
      "images": [
        uabCampus,
        uabLibrary,
        uabStudentLife
      ],
      "programs": ["Medicine", "Business", "Engineering", "Public Health"],
      "features": ["Medical Research Hub", "Urban Campus", "Diverse Student Body", "Cutting-Edge Facilities"]
    },
    {
      "name": "Northern Arizona University",
      "location": "Flagstaff, Arizona, USA",
      "tuition": 16500,
      "livingCost": 18000,
      "description": "A public university offering strong programs in environmental science, education, and business.",
      "ranking": "National Tier 2",
      "type": "Public",
      "images": [
        nauCampus,
        nauLibrary,
        nauStudentLife
      ],
      "programs": ["Environmental Science", "Education", "Business", "Nursing"],
      "features": ["Mountain Campus", "Research Opportunities", "Sustainability Focus", "Small Class Sizes"]
    },
    {
      "name": "Portland State University",
      "location": "Portland, Oregon, USA",
      "tuition": 29000,
      "livingCost": 22000,
      "description": "A metropolitan public university known for its strong urban studies, engineering, and sustainability programs.",
      "ranking": "National Tier 2",
      "type": "Public",
      "images": [
        psuCampus,
        psuLibrary,
        psuStudentLife
      ],
      "programs": ["Urban Studies", "Engineering", "Business", "Sustainability"],
      "features": ["Urban Campus", "Research Excellence", "Industry Connections", "Innovative Learning"]
    },
    {
      "name": "University of North Texas",
      "location": "Denton, Texas, USA",
      "tuition": 19600,
      "livingCost": 20000,
      "description": "A public research university known for its music, business, and engineering programs.",
      "ranking": "132",
      "type": "Public",
      "images": [
        untCampus,
        untLibrary,
        untStudentLife
      ],
      "programs": ["Music", "Business", "Engineering", "Computer Science"],
      "features": ["Music Excellence", "Strong Research Focus", "Large Student Body", "Dallas Proximity"]
    }
  ]
};
