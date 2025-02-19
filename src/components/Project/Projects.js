import React from 'react';
import "../../styles/Projects.css"
import ProjectCard from '../ProjectCard/ProjectCard';

const projectData = [
  {
    image: "https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "4- Legged Robot ROS Stimulation",
    description: " A URDF model of a four-legged robot and simulate its motion and behavior in both Gazebo and RViz environments.",
    duration: "11 days left",
    creatorImage: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    creatorName: "Vansh Yadav, Priyanshi Menghani, Sheetal Shende"
  },
  {
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "Cart-Pole Balance System using RL",
    description: "This project uses RL to balance a cart pole using OpenAI's Gym toolkit.",
    duration: "5 days left",
    creatorImage: "https://images.unsplash.com/photo-1727279523725-f7d619c2264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    creatorName: "Kris Keshav, Arpit Kumar Pandey, Jheel Maheshwari "
  },
  {
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "Curve Drawing Robot",
    description: "This project aims to design and develop a curve-drawing robot capable of accurately reproducing predefined curves and shapes on a given surface.",
    duration: "5 days left",
    creatorImage: "https://images.unsplash.com/photo-1727279523725-f7d619c2264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    creatorName: "Shravan Deva, Rajeev Kumawat, Prakul Balaji, Hemanga Sarma "
  },
  {
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "Line Following Robot",
    description: "A robot capable of navigating a predefined path marked by a contrasting line on a flat surface.",
    duration: "5 days left",
    creatorImage: "https://images.unsplash.com/photo-1727279523725-f7d619c2264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    creatorName: "Karthik Kuldeep, Adbhut Khatri, Yogesh Baghel"
  },
  {
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "Maze Solver using Reinforcement Learning",
    description: "This project aims to use RL techniques for autonomous maze navigation.",
    duration: "5 days left",
    creatorImage: "https://images.unsplash.com/photo-1727279523725-f7d619c2264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    creatorName: "Aman Yadav, Arpit Seth, Aman Tiwari"
  },
  {
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "ROS TurtleSim Exploration",
    description: "Explore various functionalities of ROS TurtleSim by implementing different behaviors and algorithms for the virtual turtle.",
    duration: "5 days left",
    creatorImage: "https://images.unsplash.com/photo-1727279523725-f7d619c2264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    creatorName: "Tanmay Singh Kushwaha, Madhav Ahuja"
  },
  {
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "Wall Following Robot",
    description: " It is a robot capable of autonomously navigating through indoor environments while maintaining a constant distance from adjacent walls.",
    duration: "5 days left",
    creatorImage: "https://images.unsplash.com/photo-1727279523725-f7d619c2264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    creatorName: "Ansuman Sahu, Pratik Ratan Sairujula Kolekar J vedanth "
  },
  {
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "Robotic Arm: Flipkart Grid 5.0",
    description: "Developed an autonomous robot capable of performing various tasks, such as sorting, picking, packing, and navigating complex warehouse environments.",
    duration: "5 days left",
    creatorImage: "https://images.unsplash.com/photo-1727279523725-f7d619c2264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    creatorName: "Vidhi Gupta, Ansh Rastogi, Rajeev Gupta, Mayank Dhar Dwivedi, Soumil Sinha, Jitesh Bhati, Nikhil Sharma, Rohit Kumawat, Amit Surpur, Vishal Bokhare, Sanya Jain"
  },
  {
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "E Waste Dustbin",
    description: "Segregates different types of electronic wastes automatically",
    duration: "5 days left",
    creatorImage: "https://images.unsplash.com/photo-1727279523725-f7d619c2264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    creatorName: "Jitesh Bhati, Abya Singh, Kaivalya"
  },
  {
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "Restaurant of the future",
    description: "An Autonomous Bot with LiDAR and Depth Cameras to assist restaurant personnel in the COVID-19 era by handling repetitive tasks and aiding navigation and obstacle-avoidance.",
    duration: "5 days left",
    creatorImage: "https://images.unsplash.com/photo-1727279523725-f7d619c2264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    creatorName: "Vansh goyal, Sanjeev krishnan,Abhay pratap singh"
  },
  {
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "Chitrak-2.0",
    description: "Chitrak is a dynamically stable quadruped robot designed to assist soldiers in rough terrains, carry payloads, and deliver aid in disaster zones where conventional vehicles can't operate.",
    duration: "5 days left",
    creatorImage: "https://images.unsplash.com/photo-1727279523725-f7d619c2264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    creatorName: "Dhruv Sehgal, Shubhanshu Agarwal"
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