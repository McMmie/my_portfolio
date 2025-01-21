import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    zuyu,
    activista,
    airbnb,
    musicApi,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Cyber Security Analyst",
      icon: web,
    },
    {
      title: "Python Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Front End Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Front-end Intern",
      company_name: "Zuyu",
      icon: zuyu,
      iconBg: "#383E56",
      date: "May 2024 - July 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "AirBnB Clone",
      description:
        "A web-based platform that enables users to book accommodations worldwide. Utilizes a robust backend system to handle real-time booking, secure payment processing, and user authentication.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mySQL",
          color: "green-text-gradient",
        },
        {
          name: "Flask",
          color: "pink-text-gradient",
        },
        {
          name: "RESTful API",
          color: "blue-text-gradient",
        },
      ],
      image: airbnb,
      source_code_link: "https://github.com/McMmie/AirBnB_clone_v4",
    },
    {
      name: "ACTIvista",
      description:
        "A cutting-edge web application designed to optimize daily activity management. The app that is user-friendly with the integration of different APIs to manage all of one’s schedules and tasks in one place.",
      tags: [
        {
          name: "Javascript",
          color: "pink-text-gradient",
        },
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "SQLit3",
          color: "green-text-gradient",
        },

        {
          name: "HTML & CSS",
          color: "pink-text-gradient"
        },
      ],
      image: activista,
      source_code_link: "https://github.com/McMmie/Activista",
    },
    {
      name: "Music API",
      description:
        "Music Lyrics and Data API This is a simple API built with Node.js, Express, and MongoDB to manage music lyrics and data. It includes user authentication to ensure only logged-in users can post new content.",
      tags: [
        {
          name: "NodeJS",
          color: "blue-text-gradient",
        },
        {
          name: "ExpressJS",
          color: "green-text-gradient",
        },
        {
          name: "MongoDB",
          color: "pink-text-gradient",
        },
      ],
      image: musicApi,
      source_code_link: "https://github.com/McMmie/music-api",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, zuyu };