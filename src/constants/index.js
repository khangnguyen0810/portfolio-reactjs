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
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  portfolio,
  score,
  wurm,
  python,
  java,
  Cpp,
  C,
  R,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Projects",
  },
];

const services = [
  {
  },
];

const technologies = [
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "C++",
    icon: Cpp,
  },
  {
    name: "C",
    icon: C,
  },
  {
    name: "R",
    icon: R,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
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
    name: "Portfolio Website",
    description:
      "Create a portfolio website to show my information. The website is responsive",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwindcss",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "text-red-500",
      },
      {
        name: "motion",
        color: "text-yellow-500"
      }
    ],
    image: portfolio,
    source_code_link: "https://github.com/khangnguyen0810/portfolio-reactjs",
  },
  {
    name: "Retrieve Student Score",
    description:
      "This project uses python code can retrieve students' score on Ministry of Education's website in 2022. The result is saved to a .csv file. It is no longer usable because the website has been updated",
    tags: [
      {
        name: "selenimum",
        color: "blue-text-gradient",
      },
      {
        name: "bs4",
        color: "green-text-gradient",
      },
      {
        name: "webdriver-manager",
        color: "pink-text-gradient",
      },
    ],
    image: score,
    source_code_link: "https://github.com/khangnguyen0810/Retrieve-Student-Score",
  },
  {
    name: "Da Ist Der Wurm Drin",
    description:
      "This is a project from my exchange semester in Germany. It implements real-life German board game Da Ist Der Wurm Drin using Java. Player can play by choosing a worm to bet on winning.",
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "java-swing",
        color: "green-text-gradient",
      },
      {
        name: "java-util",
        color: "pink-text-gradient",
      },
    ],
    image: wurm,
    source_code_link: "https://github.com/khangnguyen0810/Da-Ist-Der-Wurm-Drin",
  },
];

export { services, technologies, experiences, testimonials, projects };
