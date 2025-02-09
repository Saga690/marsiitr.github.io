import React from 'react';
import "../../styles/Projects.css"
import ProjectCard from '../ProjectCard/ProjectCard';

const projectData = [
  {
    image: "https://images.unsplash.com/photo-1621075160523-b936ad96132a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    title: "4- Legged Robot ROS Stimulation",
    description: " A URDF model of a four-legged robot and simulate its motion and behavior in both Gazebo and RViz environments.",
    price: "0.031 ETH",
    duration: "11 days left",
    creatorImage: "https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80",
    creatorName: "Vansh Yadav, Priyanshi Menghani, Sheetal Shende"
  },
  {
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "Cart-Pole Balance System using RL",
    description: "This project uses RL to balance a cart pole using OpenAI's Gym toolkit. Challenges include state representation, algorithm selection, hyperparameter tuning, exploration-exploitation handling, and performance evaluation. Its goal is to showcase RL's effectiveness in controlling problems and providing insights into real-world applications.",
    price: "0.055 ETH",
    duration: "5 days left",
    creatorImage: "https://images.unsplash.com/photo-1727279523725-f7d619c2264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    creatorName: "Kris Keshav, Arpit Kumar Pandey, Jheel Maheshwari "
  },
  {
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "Curve Drawing Robot",
    description: "This project aims to design and develop a curve-drawing robot capable of accurately reproducing predefined curves and shapes on a given surface.",
    price: "0.055 ETH",
    duration: "5 days left",
    creatorImage: "https://images.unsplash.com/photo-1727279523725-f7d619c2264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    creatorName: "Shravan Deva, Rajeev Kumawat, Prakul Balaji, Hemanga Sarma "
  },
  {
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "Line Following Robot",
    description: "A robot capable of navigating a predefined path marked by a contrasting line on a flat surface.",
    price: "0.055 ETH",
    duration: "5 days left",
    creatorImage: "https://images.unsplash.com/photo-1727279523725-f7d619c2264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    creatorName: "Karthik Kuldeep, Adbhut Khatri, Yogesh Baghel"
  },
  {
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "Maze Solver using Reinforcement Learning",
    description: "This project aims to use RL techniques for autonomous maze navigation, addressing challenges like maze representation, algorithm selection, reward definition, and exploration-exploitation trade-offs. It demonstrates RL's effectiveness in maze solving and provides insights for autonomous pathfinding applications",
    price: "0.055 ETH",
    duration: "5 days left",
    creatorImage: "https://images.unsplash.com/photo-1727279523725-f7d619c2264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    creatorName: "Aman Yadav, Arpit Seth, Aman Tiwari"
  },
  {
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "ROS TurtleSim Exploration",
    description: "Explore various functionalities of ROS TurtleSim by implementing different behaviors and algorithms for the virtual turtle.",
    price: "0.055 ETH",
    duration: "5 days left",
    creatorImage: "https://images.unsplash.com/photo-1727279523725-f7d619c2264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    creatorName: "Tanmay Singh Kushwaha, Madhav Ahuja"
  },
  {
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "Wall Following Robot",
    description: " It is a robot capable of autonomously navigating through indoor environments while maintaining a constant distance from adjacent walls.",
    price: "0.055 ETH",
    duration: "5 days left",
    creatorImage: "https://images.unsplash.com/photo-1727279523725-f7d619c2264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    creatorName: "Ansuman Sahu, Pratik Ratan Sairujula Kolekar J vedanth "
  },
  {
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "Robotic Arm: Flipkart Grid 5.0",
    description: "Flipkart Grid 5.0 Robotics Challenge is an annual national-level competition organized by Flipkart that includes participants from top colleges across India like IIT Bombay and other IITs, BITS, Manipal Institute, etc.Teams are tasked with developing autonomous robots capable of performing various tasks, such as sorting, picking, packing, and navigating complex warehouse environments.It was a 4-5 month long competition which had three rounds. Two teams from Mars participated and qualified for the first round. One team qualified for the second round and attended the national finale at IIT Madras.",
    price: "0.055 ETH",
    duration: "5 days left",
    creatorImage: "https://images.unsplash.com/photo-1727279523725-f7d619c2264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    creatorName: "Vidhi Gupta, Ansh Rastogi, Rajeev Gupta, Mayank Dhar Dwivedi, Soumil Sinha, Jitesh Bhati, Nikhil Sharma, Rohit Kumawat, Amit Surpur, Vishal Bokhare, Sanya Jain"
  },
  {
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "e waste dustbin",
    description: "Segregates different types of electronic wastes automatically",
    price: "0.055 ETH",
    duration: "5 days left",
    creatorImage: "https://images.unsplash.com/photo-1727279523725-f7d619c2264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    creatorName: "Jitesh Bhati, Abya Singh, Kaivalya"
  },
  {
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "Restaurant of the future",
    description: "To assist the Hospitality & Service Sector in the COVID-19 Era, our team has proposed an Autonomous Bot that'll aid the restaurant personnel with their repetitive work. Our bot is equipped with LiDAR and Depth Cameras for navigation and obstacle-avoidance, powered by multiple micro-processors to drive the 3-wheeled Omni Drive around the restaurant. The bot is also capable of proper waste segregation and management using the latest AI tech. NLP based Chatbot acting as a User Interface backed with a scalable 3 Microservice Architecture at the backend and robust algorithms for navigation and task scheduling will provide the most comfortable and realistic experience for all the customers.We have designed an autnomous restaurant service bot, which can perform various functions including handling of plates, waste cleaning and segregation, taking orders from costumers etc.",
    price: "0.055 ETH",
    duration: "5 days left",
    creatorImage: "https://images.unsplash.com/photo-1727279523725-f7d619c2264b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    creatorName: "Vansh goyal, Sanjeev krishnan,Abhay pratap singh"
  },
  {
    image: "https://images.unsplash.com/photo-1504198266287-1659872e6590?ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    title: "Chitrak-2.0",
    description: "Chitrak is aimed to be a dynamically stable quadruped robot. With the hopes that it will be able to serve as a robotic cat to accompany soldiers in terrain too rough for conventional vehicles and provide aid to people during natural calamities when conventional vehicles prove to be less usable. Chitrak uses four legs for movement, allowing it to move across surfaces that would defeat wheels. Applications: Travel in rough terrains where conventional vehicles have low mobility. Carry payloads for soldiers in Combat operations for long duration. Provide aid to soldiers during combat operations without loss of human lives. Deploy food and medicines to people stuck in inaccessible areas during natural disasters.",
    price: "0.055 ETH",
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