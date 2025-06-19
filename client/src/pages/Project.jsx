import React from 'react';
import Footer from "../components/common/Footer";
import { FaArrowRight } from "react-icons/fa";
import HighlightText from "../components/core/HomePage/HighlightText";

// High-quality 4K image URLs
const pythonAIChatbot = "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=3540&auto=format&fit=crop";
const eLearningPlatform = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=3540&auto=format&fit=crop";
const bankingSystem = "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=3540&auto=format&fit=crop";
const communityReview = "https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=3540&auto=format&fit=crop";
const financeTracker = "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?q=80&w=3540&auto=format&fit=crop";
const recipePlatform = "https://images.unsplash.com/photo-1549590143-d5855148a9d5?q=80&w=3540&auto=format&fit=crop";
const fitnessTracker = "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=3540&auto=format&fit=crop";
const travelPlanner = "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=3540&auto=format&fit=crop";
const marketplace = "https://images.unsplash.com/photo-1572584642822-6f8de0243c93?q=80&w=3540&auto=format&fit=crop";

const pythonProjects = [
  {
    title: "AI-Powered Mental Health Bot",
    description: "An advanced chatbot leveraging natural language processing to provide personalized mental health support, mood tracking, and guided meditation sessions.",
    image: pythonAIChatbot,
    technologies: ["Python", "TensorFlow", "NLP", "Flask"],
    difficulty: "Advanced"
  },
  {
    title: "Secure Banking System",
    description: "A comprehensive banking application with biometric authentication, OTP verification, transaction monitoring, and military-grade encryption for data protection.",
    image: bankingSystem,
    technologies: ["Python", "Django", "PostgreSQL", "JWT"],
    difficulty: "Intermediate"
  },
  {
    title: "Personal Finance Tracker",
    description: "An intelligent finance management tool with expense categorization, budget forecasting, visual analytics, and custom alerts for financial goals.",
    image: financeTracker,
    technologies: ["Python", "Pandas", "Matplotlib", "SQLite"],
    difficulty: "Beginner-Friendly"
  }
];

const jsProjects = [
  {
    title: "E-learning Platform",
    description: "A feature-rich educational platform with interactive courses, real-time video conferencing, progress tracking, and personalized learning paths.",
    image: eLearningPlatform,
    technologies: ["React", "Node.js", "MongoDB", "WebRTC"],
    difficulty: "Advanced"
  },
  {
    title: "Community Review Website",
    description: "A dynamic community platform where users can share authentic reviews, create discussion threads, and receive personalized recommendations based on interests.",
    image: communityReview,
    technologies: ["JavaScript", "Express", "MongoDB", "Firebase"],
    difficulty: "Intermediate"
  },
  {
    title: "Recipe Sharing Platform",
    description: "A culinary discovery platform featuring ingredient scanning, nutritional analysis, meal planning, and an AI-powered recommendation system for personalized recipes.",
    image: recipePlatform,
    technologies: ["React", "Node.js", "GraphQL", "AWS"],
    difficulty: "Intermediate"
  }
];

const javaProjects = [
  {
    title: "Fitness Tracker",
    description: "A comprehensive health application that monitors workouts, analyzes performance metrics, creates custom fitness plans, and integrates with wearable devices.",
    image: fitnessTracker,
    technologies: ["Java", "Spring Boot", "MySQL", "Android SDK"],
    difficulty: "Intermediate"
  },
  {
    title: "Travel Itinerary Planner",
    description: "An intelligent travel companion app offering personalized trip planning, real-time updates, budget management, and location-based experiences.",
    image: travelPlanner,
    technologies: ["Java", "Spring", "Hibernate", "MongoDB"],
    difficulty: "Advanced"
  },
  {
    title: "Online Marketplace",
    description: "A secure e-commerce platform with virtual product trials, AI-powered recommendation engine, secure payment processing, and integrated seller analytics.",
    image: marketplace,
    technologies: ["Java", "Spring Boot", "PostgreSQL", "React"],
    difficulty: "Advanced"
  }
];

const ProjectCard = ({ project }) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  // Preload image to check for errors
  React.useEffect(() => {
    const img = new Image();
    img.src = project.image;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
    
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [project.image]);

  return (
    <div className="bg-richblack-800 rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.03] hover:shadow-[0px_0px_30px_5px_rgba(255,255,255,0.1)] group">
      <div className="relative overflow-hidden">
        {!imageLoaded && !imageError && (
          <div className="w-full h-52 sm:h-64 bg-richblack-700 animate-pulse flex items-center justify-center">
            <p className="text-richblack-300">Loading...</p>
          </div>
        )}
        {imageError && (
          <div className="w-full h-52 sm:h-64 bg-richblack-700 flex items-center justify-center">
            <p className="text-yellow-50">Project Image</p>
          </div>
        )}
        {imageLoaded && !imageError && (
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-52 sm:h-64 object-cover transform transition-transform duration-700 group-hover:scale-110"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-richblack-900 to-transparent opacity-0 group-hover:opacity-90 transition-all duration-300 flex items-end">
          <div className="p-6 w-full">
            <button className="flex items-center justify-center gap-2 text-yellow-50 bg-richblack-900 border border-yellow-50 hover:bg-yellow-50 hover:text-richblack-900 font-medium py-2 px-4 rounded-lg w-full transition-all duration-200">
              Explore Project <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-200" />
            </button>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-richblack-900 text-yellow-25 text-xs font-medium px-3 py-1 rounded-full shadow-md">
          {project.difficulty}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-richblack-5 group-hover:text-yellow-25 transition-colors duration-200">{project.title}</h3>
        <p className="text-richblack-300 mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-richblack-700 text-richblack-100 text-xs px-3 py-1 rounded-full hover:bg-yellow-50 hover:text-richblack-900 transition-all duration-200">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-richblack-900">
        <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 text-white py-20">
          <p className="text-center text-richblack-200 text-lg">LEARN BY BUILDING</p>
          <h1 className="text-center text-4xl font-semibold md:text-5xl">
            Hands-on <HighlightText text={"Project-Based"} /> Learning Experience
          </h1>
          <p className="text-center text-richblack-300 text-lg md:text-xl w-full max-w-[800px] mt-4">
            Build impressive projects with expert guidance and enhance your portfolio with
            real-world applications that showcase your skills to potential employers.
          </p>
          
          {/* Stats Section */}
          <div className="flex flex-wrap justify-center items-center gap-10 mt-8">
            <div className="flex flex-col items-center">
              <h2 className="text-yellow-25 font-bold text-3xl md:text-4xl">30+</h2>
              <p className="text-richblack-300">Project Categories</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-yellow-25 font-bold text-3xl md:text-4xl">100+</h2>
              <p className="text-richblack-300">Total Projects</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-yellow-25 font-bold text-3xl md:text-4xl">12k+</h2>
              <p className="text-richblack-300">Career Advancements</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Projects Section */}
      <div className="bg-richblack-900 py-16">
        <div className="relative mx-auto w-11/12 max-w-maxContent">
          {/* Python Projects */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-richblack-5">
                <HighlightText text={"Python"} /> Projects
              </h2>
              <button className="flex items-center gap-2 text-yellow-50 font-medium mt-4 md:mt-0">
                View All <FaArrowRight />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {pythonProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          {/* JavaScript Projects */}
          <div className="mb-20">
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-richblack-5">
                <HighlightText text={"JavaScript"} /> Projects
              </h2>
              <button className="flex items-center gap-2 text-yellow-50 font-medium mt-4 md:mt-0">
                View All <FaArrowRight />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jsProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>

          {/* Java Projects */}
          <div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-10">
              <h2 className="text-3xl md:text-4xl font-semibold text-richblack-5">
                <HighlightText text={"Java"} /> Projects
              </h2>
              <button className="flex items-center gap-2 text-yellow-50 font-medium mt-4 md:mt-0">
                View All <FaArrowRight />
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {javaProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-richblack-800 py-16">
        <div className="relative mx-auto w-11/12 max-w-maxContent flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-center text-richblack-5 mb-8">
            Ready to Build Your <HighlightText text={"Tech Portfolio"} />?
          </h2>
          <p className="text-center text-richblack-300 text-lg md:text-xl max-w-[800px] mb-12">
            Enroll in our project-based courses and start building impressive applications that showcase your skills to potential employers.
          </p>
          <button className="bg-yellow-50 text-richblack-900 font-semibold px-6 py-3 rounded-md hover:scale-95 transition-all duration-200">
            Explore Courses
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Projects;