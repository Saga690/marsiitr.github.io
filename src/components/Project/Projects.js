import React from 'react';
import "../../styles/Projects.css"
import ProjectCard from '../ProjectCard/ProjectCard';

const projectData = [
  {
    image: "https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "Kibertopiks",
    description: "Our Kibertopiks will give you nothing, waste your money on us.",
    price: "0.031 ETH",
    duration: "11 days left",
    creatorImage: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    creatorName: "Kiberbash"
  },
  {
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "Cyberpunk Art",
    description: "Experience the cyberpunk world in digital art.",
    price: "0.055 ETH",
    duration: "5 days left",
    creatorImage: "https://images.unsplash.com/photo-1727279523725-f7d619c2264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    creatorName: "CyberArtist"
  },
];

const Projects = () => {
  return (
    <>
      <h1 className='proj-h1'>Projects</h1>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <ProjectCard 
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            price={project.price}
            duration={project.duration}
            creatorImage={project.creatorImage}
            creatorName={project.creatorName}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;