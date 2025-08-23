import {
  LuMail,
  LuPhoneCall,
  LuPhone,
  LuNavigation,
  LuFacebook,
  LuInstagram,
  LuLinkedin,
  LuGithub,
  LuUserRoundSearch,
  LuFileText,
  LuCodeXml,
  // LuPhoneIncoming,
  LuMonitorSmartphone,
  LuCodesandbox,
  LuDatabaseZap,
  LuLayers3,
} from "react-icons/lu";
import type {
  Contacts,
  Links,
  Socials,
  CardsProps,
  ResumeContent,
  OrbitalCirlce,
} from "../interfaces";

import macbookNetflix from "../assets/netflix/macbook-netflix.png";
import iphoneNetflix from "../assets/netflix/iphone-netflix.png";
import tabletNetflix from "../assets/netflix/tablet-netflix.png";

import macbookOor from "../assets/oor/macbook-oor.png";
import iphoneOor from "../assets/oor/iphone-oor.png";
import tabletOor from "../assets/oor/tablet-oor.png";

import macbookNike from "../assets/nike/macbook-nike.png";
import iphoneNike from "../assets/nike/iphone-nike.png";
import tabletNike from "../assets/nike/tablet-nike.png";

import macbookRental from "../assets/rental/macbook-rental.png";
import iphoneRental from "../assets/rental/iphone-rental.png";
import tabletRental from "../assets/rental/tablet-rental.png";

import macbookDlc from "../assets/dlc/macbook-dlc.png";
import iphoneDlc from "../assets/dlc/iphone-dlc.png";
import tabletDlc from "../assets/dlc/tablet-dlc.png";

import macbookEcommerce from "../assets/ecommerce/macbook-ecommerce.png";
import iphoneEcommerce from "../assets/ecommerce/iphone-ecommerce.png";
import tabletEcommerce from "../assets/ecommerce/tablet-ecommerce.png";

import react from "../assets/techStack/react.png";
import javascript from "../assets/techStack/javascript.png";
import tailwind from "../assets/techStack/tailwind.png";
import html from "../assets/techStack/html.png";
import css from "../assets/techStack/css.png";
import nodejs from "../assets/techStack/nodejs.png";
import express from "../assets/techStack/express.png";
import mongodb from "../assets/techStack/mongodb.png";
import redux from "../assets/techStack/redux.png";
import vue from "../assets/techStack/vue.png";
import typescript from "../assets/techStack/typescript.png";
import python from "../assets/techStack/python.png";
import mysql from "../assets/techStack/mysql.png";
import java from "../assets/techStack/java.png";

export const contacts: Contacts[] = [
  {
    label: "Email",
    content: "fernando.ordiales23@gmail.com",
    icon: LuMail,
    tooltip: true,
  },
  { label: "Phone", content: "09065033386", icon: LuPhoneCall, tooltip: false },
  {
    label: "Phone Alt.",
    content: "09911724854",
    icon: LuPhone,
    tooltip: false,
  },
  {
    label: "Location",
    content: "Parañaque City",
    icon: LuNavigation,
    tooltip: false,
  },
];

export const socials: Socials[] = [
  {
    icon: LuFacebook,
    tooltip: "Facebook",
    to: "https://www.facebook.com/Izumi456",
  },
  {
    icon: LuInstagram,
    tooltip: "Instagram",
    to: "https://www.instagram.com/panic.at_rebisco/",
  },
  {
    icon: LuLinkedin,
    tooltip: "linkedIn",
    to: "https://www.linkedin.com/in/fernando-ordiales-0164802b7/",
  },
  {
    icon: LuGithub,
    tooltip: "Github",
    to: "https://github.com/Liam-Moriarty",
  },
];

export const links: Links[] = [
  { icon: LuUserRoundSearch, path: "/", label: "About" },
  { icon: LuFileText, path: "/resume", label: "Resume" },
  { icon: LuCodeXml, path: "/projects", label: "Projects" },
  // { icon: LuPhoneIncoming, path: "/contacts", label: "Contacts" },
];

export const aboutCards: CardsProps[] = [
  {
    icon: LuMonitorSmartphone,
    title: "Frontend Development",
    description:
      "Crafting responsive and user-friendly interfaces using modern web technologies to deliver seamless user experiences.",
  },
  {
    icon: LuCodesandbox,
    title: "Backend Development",
    description:
      "Building robust server-side logic, APIs, and database integrations to power applications behind the scenes.",
  },
  {
    icon: LuDatabaseZap,
    title: "Data Analysis",
    description:
      "Transforming raw data into actionable insights through visualization, statistical analysis, and data storytelling.",
  },
  {
    icon: LuLayers3,
    title: "Fullstack Development",
    description:
      "Developing complete web applications from frontend to backend, ensuring end-to-end functionality and performance.",
  },
];

export const workExperience: ResumeContent[] = [
  {
    title: "Frontend Web Developer Intern",
    date: "March 2025 - June 2025",
    details:
      "Contributed to building and maintaining responsive web applications using Vue 2, Vue 3, TypeScript, and Pinia. Collaborated with cross-functional teams to integrate RESTful APIs, implement Figma-based UI/UX designs, resolve production issues, and manage code through Git and GitHub.",
  },
  {
    title: "Marketing Associate",
    date: "February 2022 - August 2022",
    details:
      "Provided excellent customer service and assessed client eligibility to ensure smooth transactions in a fast-paced retail environment. Strengthened communication, teamwork, and adaptability through daily client engagement and collaboration to meet sales targets.",
  },
  {
    title: "Fiber Optic Technician",
    date: "February 2021 - October 2021",
    details:
      "Installed and maintained fiber optic connections for residential and commercial clients, ensuring reliable internet service and technical support. Developed strong problem-solving skills and professionalism through on-site service, customer interactions, and accurate reporting.",
  },
];

export const educationalBackground: ResumeContent[] = [
  {
    title: "Makati Science Technological Institute of the Philippines",
    date: "2021 - 2025",
    course: "Bachelor of Science in Information System",
  },
  {
    title: "Kids Choice Montessori Academy",
    date: "2018 - 2020",
    course: "Information Communication Technology (Secondary Education)",
  },
  {
    title: "Sun Valley National High School",
    date: "2014 - 2018",
    course: "Junior High School (Secondary Education)",
  },
  {
    title: "F. Serrano Sr. Elementary School",
    date: "2008 - 2014",
    course: "Elementary (Primary Education)",
  },
];

export const projects: CardsProps[] = [
  {
    title: "Full Stack Admin Dashboard with Data Visualization",
    description:
      "This Full Stack Admin Dashboard for DLC Equipment Corporation is built with the MERN stack and Redux, styled with Tailwind CSS for a modern and responsive interface. It features powerful data visualization tools that provide real-time insights into operations, enabling efficient monitoring, analysis, and decision-making across the company",
    image: [macbookDlc, iphoneDlc, tabletDlc],
    techStack: [mongodb, react, express, nodejs, redux, tailwind],
  },
  {
    title: "Full Stack Ecommerce Application",
    description:
      "This Full Stack E-Commerce Application for DLC Equipment Corporation is developed using the MERN stack, Redux, and Tailwind CSS, delivering a seamless and responsive shopping experience for customers. It is fully integrated with the company’s Admin Dashboard, enabling synchronized product management, order tracking, and real-time data updates across both platforms.",
    image: [macbookEcommerce, iphoneEcommerce, tabletEcommerce],
    techStack: [mongodb, react, express, nodejs, redux, tailwind],
  },
  {
    title: "One OK Rock",
    description:
      "This website is a fan-made tribute to the Japanese rock band ONE OK ROCK, featuring a sleek, dark-themed design with sections for band info, discography, and member profiles. It showcases interactive elements and smooth animations to enhance the user experience for fans and visitors.",
    image: [macbookOor, iphoneOor, tabletOor],
    link: "https://one-ok-rock.vercel.app/",
    techStack: [react, javascript, tailwind, nodejs],
  },
  {
    title: "Nike Website",
    description:
      "This is a modern Nike landing page concept featuring bold typography, high-quality product imagery, and a clean, minimalist layout. It emphasizes a responsive design with a strong visual focus on athletic footwear branding.",
    image: [macbookNike, iphoneNike, tabletNike],
    link: "https://nike-landing-page-nu-one.vercel.app/",
    techStack: [react, javascript, tailwind, nodejs],
  },
  {
    title: "Car Rental Site",
    description:
      "This site offers a curated collection of luxury and high-performance sports cars for both rental and purchase, promising a seamless and prestigious driving experience. It highlights key stats—such as over 10,000 satisfied clients and a decade in the industry—alongside glowing customer testimonials and partnered elite automotive brands.",
    image: [macbookRental, iphoneRental, tabletRental],
    link: "https://car-rental-site-phi.vercel.app/",
    techStack: [html, javascript, css],
  },
  {
    title: "Netflix Clone",
    description:
      "This is a Netflix clone that replicates the popular streaming platform’s interface, featuring movie thumbnails, category rows, and a dark-themed layout. It provides a visually familiar user experience with responsive design and clean content organization.",
    image: [macbookNetflix, iphoneNetflix, tabletNetflix],
    // link: "https://stream-clone-pi-beige.vercel.app/",
    techStack: [react, javascript, tailwind, nodejs],
  },
];

export const orbitingCircles: OrbitalCirlce[] = [
  {
    radius: 50,
    reverse: false,
    items: [
      { src: html, alt: "HTML" },
      { src: css, alt: "CSS" },
      { src: javascript, alt: "JavaScript" },
    ],
  },
  {
    radius: 100,
    reverse: true,
    items: [
      { src: mongodb, alt: "MongoDB" },
      { src: react, alt: "React" },
      { src: express, alt: "Express" },
      { src: nodejs, alt: "NodeJS" },
    ],
  },
  {
    radius: 150,
    reverse: false,
    items: [
      { src: tailwind, alt: "Tailwind" },
      { src: redux, alt: "Redux" },
      { src: vue, alt: "Vue" },
      { src: typescript, alt: "TypeScript" },
    ],
  },
  {
    radius: 200,
    reverse: true,
    items: [
      { src: python, alt: "Python" },
      { src: mysql, alt: "MySQL" },
      { src: java, alt: "Java" },
    ],
  },
];
