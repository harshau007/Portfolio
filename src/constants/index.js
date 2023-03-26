import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    nodejs,
    git,
    docker,
    somaiya,
    thakur,
    ves,
    java,
    todo,
    skynet
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
      title: "Java Enthusiast",
      icon: web,
    },
    {
      title: "JavaScript Enthusiast",
      icon: mobile,
    },
    {
      title: "Python Enthusiast",
      icon: backend,
    },
    {
      title: "Backend Enthusiast",
      icon: backend,
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
      name: "Java",
      icon: java,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Student",
      company_name: "VES",
      icon: ves,
      iconBg: "#383E56",
      date: "March 2012 - April 2020",
      points: [
        "Enim incididunt dolor mollit cillum aliquip quis ex nostrud duis eiusmod. Pariatur nostrud ut sunt ullamco reprehenderit officia. Ut aliquip est dolore aliqua incididunt. Id ipsum fugiat dolore sunt consequat enim nulla sint. Esse cillum proident incididunt consequat. Do aute nisi sit incididunt officia exercitation tempor aute aute pariatur aute sint in.",
      ],
    },
    {
      title: "Student",
      company_name: "Somaiya [FYJC]",
      icon: somaiya,
      iconBg: "#E6DEDD",
      date: "November 2020 - April 2021",
      points: [
        "Dolor excepteur Lorem dolor excepteur quis pariatur id esse ea quis eu duis. Irure consequat proident ea fugiat commodo ex et. Ut aute mollit nostrud est. Dolore aute laboris exercitation cillum. Duis do adipisicing quis in velit.",
      ],
    },
    {
      title: "Student",
      company_name: "Somaiya [SYJC]",
      icon: somaiya,
      iconBg: "#383E56",
      date: "July 2021 - March 2022",
      points: [
        "Voluptate mollit occaecat aute ea dolor aute dolor duis quis enim. Cupidatat minim aliquip ex excepteur esse reprehenderit. Ad pariatur cupidatat id ut commodo. Do quis deserunt ea deserunt fugiat irure exercitation sunt exercitation in elit non. Eiusmod laborum do sit ipsum cupidatat magna id est.",
      ],
    },
    {
      title: "Student",
      company_name: "TCET [FY-CSE]",
      icon: thakur,
      iconBg: "#E6DEDD",
      date: "October 2022 - Present",
      points: [
        "Do id dolor ullamco ut deserunt eiusmod ullamco voluptate qui occaecat proident qui ipsum. Nulla anim dolor sit dolore cillum aliquip enim excepteur magna esse do non eiusmod labore. Commodo incididunt in voluptate exercitation aliquip. Veniam dolore nulla nostrud minim ea cupidatat Lorem nulla anim laborum anim.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "He's a hard worker and very passionate about his works",
      name: "Lakshay",
      designation: "Friend",
      company: "TCET",
      image: "https://i.imgur.com/83rirNN.jpg",
    },
    {
      testimonial:
        "It was easy to work with him and he was very coperative",
      name: "Aryan",
      designation: "Friend",
      company: "TCET",
      image: "https://i.imgur.com/ytAzoEJ.png",
    },
  ];
  
  const projects = [
    {
      name: "TODO List",
      description:
        "My First Project in ReactJS. In this project I learned about react and how browsers store data using caching",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
        {
          name: "react-js",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/harshau007/TODO-LIST",
    },
    {
      name: "SKYNET-HACKATHON-PROJECT",
      description:
        "My First Hackathon project in which I participated with my fellow friend and make a static website about JWT, as we were beginner we learned about HTML, CSS and Javascript",
      tags: [
        {
          name: "css",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "javascript",
          color: "pink-text-gradient",
        },
      ],
      image: skynet,
      source_code_link: "https://github.com/harshau007/SKYNET-HACKATHON-PROJECT",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  