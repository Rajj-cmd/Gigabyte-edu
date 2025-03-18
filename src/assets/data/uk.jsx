// Use placeholder image for all universities instead of importing non-existent files
const placeholderImage = "https://images.unsplash.com/photo-1592280771190-3e2e4d571952?ixlib=rb-4.0.3";

export const ukUniversities = [
  {
    "name": "London Metropolitan University",
    "location": "London, England, UK",
    "tuition": 14000,
    "livingCost": 18000,
    "description": "A diverse and career-focused university in the heart of London, known for its strong emphasis on employability and practical learning.",
    "ranking": "National Tier",
    "type": "Public",
    "images": [placeholderImage],
    "programs": ["Business", "Law", "Computer Science", "Health Sciences"],
    "features": ["Diverse Student Body", "Strong Industry Links", "Modern Campus", "Practical Learning"]
  },
  {
    "name": "London South Bank University",
    "location": "London, England, UK",
    "tuition": 15000,
    "livingCost": 19000,
    "description": "A career-oriented university in central London, known for its strong connections with industries and professional accreditations.",
    "ranking": "National Tier",
    "type": "Public",
    "images": [placeholderImage],
    "programs": ["Engineering", "Business", "Health Sciences", "Law"],
    "features": ["Industry Partnerships", "Research Excellence", "Work Placement Opportunities", "Urban Campus"]
  },
  {
    "name": "Brunel University London",
    "location": "London, England, UK",
    "tuition": 18500,
    "livingCost": 20000,
    "description": "A leading London university with a strong focus on innovation, research, and employability, particularly in engineering and business.",
    "ranking": "412",
    "type": "Public",
    "images": [placeholderImage],
    "programs": ["Engineering", "Business", "Law", "Psychology"],
    "features": ["Innovation Hub", "Cutting-Edge Research", "Strong Industry Links", "Modern Campus"]
  },
  {
    "name": "University of Westminster",
    "location": "London, England, UK",
    "tuition": 16000,
    "livingCost": 22000,
    "description": "A globally engaged university in central London, known for its strong creative and professional programs, as well as a focus on employability.",
    "ranking": "701-750",
    "type": "Public",
    "images": [placeholderImage],
    "programs": ["Media & Communications", "Business", "Law", "Fashion"],
    "features": ["Central London Location", "Creative Excellence", "Industry Collaboration", "Global Network"]
  },
  {
    "name": "University of Wolverhampton",
    "location": "Wolverhampton, England, UK",
    "tuition": 13500,
    "livingCost": 17000,
    "description": "A career-focused university with a commitment to providing high-quality education, particularly in business, healthcare, and engineering.",
    "ranking": "National Tier",
    "type": "Public",
    "images": [placeholderImage],
    "programs": ["Business", "Engineering", "Health Sciences", "Computing"],
    "features": ["Strong Career Support", "Modern Facilities", "Diverse Student Community", "Research Excellence"]
  },
  {
    "name": "University of East London",
    "location": "London, England, UK",
    "tuition": 14000,
    "livingCost": 19000,
    "description": "A progressive university in East London, dedicated to preparing students for the global job market through practical education and strong industry ties.",
    "ranking": "National Tier",
    "type": "Public",
    "images": [placeholderImage],
    "programs": ["Business", "Psychology", "Engineering", "Sports Science"],
    "features": ["Diverse Campus", "Career-Oriented Programs", "Entrepreneurial Focus", "Modern Facilities"]
  },
  {
    "name": "Middlesex University London",
    "location": "London, England, UK",
    "tuition": 14500,
    "livingCost": 18500,
    "description": "A modern university with a strong focus on employability, offering innovative programs in business, technology, and the creative industries.",
    "ranking": "701-750",
    "type": "Public",
    "images": [placeholderImage],
    "programs": ["Business", "Computer Science", "Art & Design", "Law"],
    "features": ["Diverse Student Community", "Strong Industry Links", "Modern Campus", "Employability Focus"]
  },
  {
    "name": "Kingston University London",
    "location": "London, England, UK",
    "tuition": 16000,
    "livingCost": 20000,
    "description": "A career-driven university offering strong programs in business, engineering, and the creative arts, with a focus on innovation and entrepreneurship.",
    "ranking": "601-650",
    "type": "Public",
    "images": [placeholderImage],
    "programs": ["Engineering", "Business", "Art & Design", "Health Sciences"],
    "features": ["Entrepreneurial Focus", "Industry Engagement", "Modern Facilities", "Diverse Student Population"]
  },
  {
    "name": "University of Greenwich",
    "location": "London, England, UK",
    "tuition": 15000,
    "livingCost": 19000,
    "description": "A historic university with a stunning riverside campus, offering strong programs in business, engineering, and social sciences.",
    "ranking": "751-800",
    "type": "Public",
    "images": [placeholderImage],
    "programs": ["Business", "Engineering", "Social Sciences", "Computing"],
    "features": ["Scenic Campus", "Strong Research Focus", "Industry Partnerships", "Diverse Student Body"]
  },
  {
    "name": "University of West London",
    "location": "London, England, UK",
    "tuition": 14250,
    "livingCost": 18000,
    "description": "A career-focused university known for its strong connections with industries, particularly in business, media, and hospitality management.",
    "ranking": "National Tier",
    "type": "Public",
    "images": [placeholderImage],
    "programs": ["Digital Media", "Design", "Fashion", "Animation"],
    "features": ["Creative Hub", "Industry Collaborations", "Cutting-Edge Technology", "Small Class Sizes"]
  },
  {
    "name": "Regent’s University London",
    "location": "London, England, UK",
    "tuition": 22000,
    "livingCost": 25000,
    "description": "A prestigious private university in central London, known for its international outlook and strong programs in business, fashion, and psychology.",
    "ranking": "National Tier",
    "type": "Private",
    "images": [placeholderImage],
    "programs": ["Business", "Fashion", "Psychology", "International Relations"],
    "features": ["Exclusive Campus", "International Student Body", "Small Class Sizes", "London Location"]
  }
].map(university => ({
  ...university,
  images: [placeholderImage]  // This ensures all universities have the same placeholder
}));
