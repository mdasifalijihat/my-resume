// src/data/projectsData.js
import gardenTips from "../../../assets/gardenTips.jpg";
import productImg from "../../../assets/product0-electronic.jpg";
import hotelImg from "../../../assets/hotes.jpeg";
export const projectsData = [
  {
    id: 1,
    title: "Garden Tips BD",
    image: { gardenTips },
    tech: "React, Tailwind, Firebase",
    description:
      "A gardening community and resource hub where users can share tips, browse guides, and connect with other gardeners.",
    liveLink: "https://garden-tips-bd.netlify.app/",
    githubLink: "https://github.com/mdasifalijihat",
    challenges:
      "Implementing community features and ensuring mobile responsiveness.",
    futurePlan: "Add user badges, advanced search filters, and real-time chat.",
  },
  {
    id: 2,
    title: "Product Query Hub",
    image: { productImg },
    tech: "MERN Stack, JWT, Firebase",
    description:
      "A product recommendation platform where users can post queries and receive suggestions from the community.",
    liveLink: "https://productqueryhub.netlify.app/",
    githubLink: "https://github.com/mdasifalijihat",
    challenges:
      "Setting up secure authentication and efficient database queries.",
    futurePlan: "Integrate AI-based recommendations and user analytics.",
  },
  {
    id: 3,
    title: "Hotel Management System",
    image: { hotelImg },
    tech: "MERN Stack",
    description:
      "A hotel room booking and management system with user authentication and admin panel.",
    liveLink: "https://hotel-management-system-bd.netlify.app/",
    githubLink: "https://github.com/mdasifalijihat",
    challenges: "Implementing backend APIs and user authentication flow.",
    futurePlan: "Integrate online payment gateway and booking history.",
  },
];
