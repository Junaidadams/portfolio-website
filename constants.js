import tridentImage from "./src/projects/trident.png";
import junaidImage from "./src/projects/junaid.png";
import oneToTenImage from "./src/projects/1210.png";
import weatherImage from "./src/projects/weather.png";
import nikeImage from "./src/projects/nike.png";
import newsletterclubImage from "./src/projects/newsletterclub.png";

import capybaraImage from "/favourites/capybara.png";

import githubIcon from "./src/contacticons/github.png";
import emailIcon from "./src/contacticons/email.png";
import linkedinIcon from "./src/contacticons/linkedin.png";

import goodNight from "/favourites/goodnight.mp3";
import onceInParis from "/favourites/onceinparis.mp3";
import lofiStudy from "/favourites/lofistudy.mp3";
import tokyoCafe from "/favourites/tokyocafe.mp3";
import lofiChillMedium from "/favourites/lofichill.mp3";
import coverlessBook from "/favourites/coverlessbook.mp3";

import goodNightVariant from "/favourites/fass.webp";
import onceInParisVariant from "/favourites/onceinparis.png";
import lofiStudyVariant from "/favourites/fass.webp";
import tokyoCafeVariant from "/favourites/tokyocafe.jpg";
import lofiChillMediumVariant from "/favourites/lofichill.webp";
import coverlessBookVariant from "/favourites/coverlessbook.jpg";

import html from "/src/svg/html.svg";
import bootstrap from "/src/svg/bootstrap.svg";
import django from "/src/svg/django.svg";
import express from "/src/svg/express.svg";
import flask from "/src/svg/flask.svg";
import mongodb from "/src/svg/mongodb.svg";
import mysql from "/src/svg/mysql.svg";
import nextjs from "/src/svg/nextjs.svg";
import node from "/src/svg/node.svg";
import passportjs from "/src/svg/passportjs.svg";
import reactjs from "/src/svg/reactjs.svg";
import tailwind from "/src/svg/tailwind.svg";
import threejs from "/src/svg/threejs.svg";
import vite from "/src/svg/vite.svg";
import cors from "/src/svg/cors.png";
import css from "/src/svg/css.svg";

export const favourites = {
  songs: [
    {
      name: "Good Night",
      artist: "FASSounds",
      genre: "Lofi",
      albumArt: goodNightVariant,
      album: "Singles",
      audioSrc: goodNight,
    },
    {
      name: "Once In Paris",
      artist: "Pumpupthemind",
      genre: "Chillhop",
      albumArt: onceInParisVariant,
      album: "Singles",
      audioSrc: onceInParis,
    },
    {
      name: "Lofi Study",
      artist: "FASSounds",
      genre: "Lofi",
      albumArt: lofiStudyVariant,
      album: "Singles",
      audioSrc: lofiStudy,
    },
    {
      name: "Tokyo Cafe",
      artist: "TVARI",
      genre: "Chillhop",
      albumArt: tokyoCafeVariant,
      album: "Singles",
      audioSrc: tokyoCafe,
    },
    {
      name: "Lofi Chill (Medium Version)",
      artist: "BoDleasons",
      genre: "Lofi",
      albumArt: lofiChillMediumVariant,
      album: "Singles",
      audioSrc: lofiChillMedium,
    },
    {
      name: "Coverless Book",
      artist: "MYAUDIOVISION",
      genre: "Lofi",
      albumArt: coverlessBookVariant,
      album: "Singles",
      audioSrc: coverlessBook,
    },
  ],
  animals: [
    {
      name: "Capybara",
      species: "Rodent",
      image: capybaraImage,
      fact: "The capybara is the world's largest living rodent. Capybaras are proficient swimmers, swimming with only their nostrils, eyes, and ears above the surface. They are also known to swim underwater, sometimes for considerable distances.",
      occupation: "Swimmer",
    },
  ],
  games: [
    {
      name: "Smash Ultimate",
      genre: "Platform Fighter",
      platform: "Nintendo Switch",
    },
    {
      name: "The Legend of Zelda: Twilight Princess",
      genre: "Action/RPG",
      platform: "Nintendo Wii",
    },
  ],
};

export const contactInformation = [
  {
    key: "1",
    name: "Linked-In",
    displayAddress: "",
    address: "https://www.linkedin.com/in/junaid-adams-30b848211/",
    icon: linkedinIcon,
  },
  {
    key: "2",
    name: "E-mail",
    displayAddress: "junaidadams117@gmail.com",

    address: "mailto:junaidadams117@gmail.com",
    icon: emailIcon,
  },
  {
    key: "3",
    name: "Github",
    displayAddress: "",

    address: "https://github.com/Junaidadams",
    icon: githubIcon,
  },
];

export const projects = [
  {
    key: "1",
    name: "The Newsletter Club",
    shortDesc:
      "A full-stack newsletter growth platform, aimed at collaboration between newsletter owners.",
    longDesc:
      "An exclusive platform for newsletter owners to find and collaborate with other newsletter creators. The website features a comprehensive directory to search by category, monetization type, subscriber count, and more. This has been my first freelance project of this scale, and it was a delight to build from beginning to end.",
    img: newsletterclubImage,
    bgColor: "#7c3aed ",
    link: "https://thenewsletterclub.co",
    github: "",
    tags: ["Vite", "Express"],
  },
  {
    key: "2",
    name: "Trident Distributions",
    shortDesc:
      "A beautifully designed e-commerce website with account creation and a persistant local storage cart system.",
    longDesc:
      "A streamlined e-commerce site with account creation and a persistent local storage cart system was created using Next.js, Tailwind CSS, and Sanity.io. Next.js optimizes performance, Tailwind CSS improves visual aesthetics, and Sanity.io provides a reliable content management system for smooth backend operations.",
    img: tridentImage,
    bgColor: "#07080b",
    link: "",
    github: "www.example.com",
    tags: ["NextJs", "CMS"],
  },
  {
    key: "3",
    name: "Weather Application",
    shortDesc:
      "A responsive weather web application capable of displaying weather information for an inputted city.",
    longDesc:
      "A highly responsive weather web application has been developed with the capability to showcase detailed weather information for a user-inputted city. The application ensures a user-friendly experience by providing comprehensive weather details with accuracy and efficiency.",
    img: weatherImage,
    bgColor: "#a396e9",

    link: "https://codesandbox.io/p/sandbox/weather-app-fpv85k",
    github: "www.example.com",
    tags: ["Vite", "API"],
  },
  {
    key: "4",
    name: "Junaid Adams - Past Portfolio",
    shortDesc:
      "A previous version of my portfolio. Modern asthetics with a softer, personal touch.",
    longDesc:
      "A past version of my portfolio, distinguished by its modern aesthetics and infused with a softer, more personal touch, was crafted to reflect a balance between contemporary design elements. The deliberate incorporation of a personal touch aimed to create a unique and inviting online presence, catering to a visually appealing and engaging user experience.",
    img: junaidImage,
    bgColor: "#f5f5f5",

    link: "",
    github: "www.example.com",
    tags: ["Vite", "ThreeJS"],
  },
  {
    key: "5",
    name: "One to Ten",
    shortDesc:
      "A sleek, minimalist quiz game where all answers range from one to ten. Perfect for quick entertainment and challenging your quick-thinking skills!",
    longDesc:
      "Introducing a quiz game where all answers range from one to ten. Designed with a minimalist, sleek interface, it offers simple and engaging gameplay. Perfect for passing the time, this game provides an enjoyable way to challenge your quick-thinking skills. Dive in and have fun whenever you have a few moments to spare!",
    img: oneToTenImage,
    bgColor: "#182421",

    link: "https://www.1210.co.za",
    github: "www.example.com",
    tags: ["Vite"],
  },
  {
    key: "6",
    name: "Nike Mock Website",
    shortDesc:
      "A sleek Nike mock website made using Vite, with a mobile-first responsive design.",
    longDesc:
      "A sleek Nike mock website website made using Vite showcasing responsive design. This project was built during my time at School of IT and tought me what goes into making real-world product pages.",
    img: nikeImage,
    bgColor: "#fff",
    link: "",
    github: "www.example.com",
    tags: ["Vite", "Tailwind"],
  },
];

export const frontendTechnologies = [
  {
    key: "1",
    name: "Next.js",
    shortDesc:
      "React-based framework for building server-rendered React applications.",
    img: nextjs,
    link: "https://nextjs.org/",
  },
  {
    key: "2",
    name: "React",
    shortDesc: "A JavaScript library for building user interfaces.",
    img: reactjs,
    link: "https://reactjs.org/",
  },
  {
    key: "3",
    name: "HTML",
    shortDesc:
      "The standard markup language for creating web pages and web applications.",
    img: html,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    key: "4",
    name: "Tailwind CSS",
    shortDesc:
      "A utility-first CSS framework for rapidly building custom user interfaces.",
    img: tailwind,
    link: "https://tailwindcss.com/",
  },
  {
    key: "5",
    name: "Bootstrap CSS",
    shortDesc:
      "A free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
    img: bootstrap,
    link: "https://getbootstrap.com/",
  },
  {
    key: "6",
    name: "Vite",
    shortDesc:
      "A fast build tool that provides a more optimized development experience for modern web projects.",
    img: vite,
    link: "https://vitejs.dev/",
  },
  {
    key: "7",
    name: "Three.js",
    shortDesc:
      "A JavaScript library/API used to create and display animated 3D computer graphics in a web browser.",
    img: threejs,
    link: "https://threejs.org/",
  },
  {
    key: "8",
    name: "CSS",
    shortDesc:
      "CSS is a style sheet language used for specifying the presentation and styling of a document written in a markup language such as HTML.",
    img: css,
    link: "https://en.wikipedia.org/wiki/CSS",
  },
];

export const backendTechnologies = [
  {
    key: "1",
    name: "Django",
    shortDesc:
      "A high-level Python web framework that encourages rapid development and clean, pragmatic design.",
    img: django,
    link: "https://www.djangoproject.com/",
  },
  {
    key: "2",
    name: "Flask",
    shortDesc: "A micro web framework written in Python.",
    img: flask,
    link: "https://flask.palletsprojects.com/",
  },
  {
    key: "3",
    name: "Express",
    shortDesc: "A fast, unopinionated, minimalist web framework for Node.js.",
    img: express,
    link: "https://expressjs.com/",
  },
  {
    key: "4",
    name: "Node.js",
    shortDesc:
      "An open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.",
    img: node,
    link: "https://nodejs.org/",
  },
  {
    key: "5",
    name: "MongoDB",
    shortDesc:
      "A document-oriented NoSQL database used for high volume data storage.",
    img: mongodb,
    link: "https://www.mongodb.com/",
  },
  {
    key: "6",
    name: "MySQL",
    shortDesc: "An open-source relational database management system.",
    img: mysql,
    link: "https://www.mysql.com/",
  },
  {
    key: "7",
    name: "Passport.js",
    shortDesc: "An authentication middleware for Node.js.",
    img: passportjs,
    link: "http://www.passportjs.org/",
  },
  {
    key: "8",
    name: "CORS",
    shortDesc:
      "Cross-Origin Resource Sharing (CORS) is a mechanism that uses additional HTTP headers to tell browsers to give a web application running at one origin, access to selected resources from a different origin.",
    img: cors,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
];

export const footerConstants = [
  { name: "Home", href: "/" },
  { name: "Contact", href: "#contact" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Technologies", href: "#technologies" },
  // {
  //   name: <Linkedin />,
  //   href: "https://www.linkedin.com//",
  // },
];

export const testimonials = [
  {
    testimonial:
      "Junaid was one of my best students; he is creative, ambitious, and was very easy to work with.",
    name: "Hudson Le Feuvre-Smith",
    designation: "Tutor",
    company: "School of IT",
    companyLink: "https://www.schoolofit.co.za/",
    image:
      "https://coursereport-production.imgix.net/uploads/school/logo/993/original/school-20of-20it-20logo.jpg?w=72&h=72",
  },
  {
    testimonial:
      "Junaid has always been a go getter, a innovator with a forward thinking mindset. His outlook on systems are to scale and improve them. Definitely someone who changes things for the better. It has been my utmost pleasure to work with him.",
    name: "Christine Schroeder",
    designation: "Store Manager",
    company: "Yuppiechef",
    companyLink: "https://www.yuppiechef.com/",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e1/Yuppiechef_Logo.png",
  },
  {
    testimonial:
      "From company survey - He teaches me new things everyday and is so patient and wise. He doesn't complain at all and always insists on going the extra mile.",
    name: "Anonymous",
    designation: "Store Team Member",
    company: "Yuppiechef",
    companyLink: "https://www.yuppiechef.com/",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e1/Yuppiechef_Logo.png",
  },
];
