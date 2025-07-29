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
  LuPhoneIncoming,
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
} from "../interfaces";

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
  { icon: LuPhoneIncoming, path: "/contacts", label: "Contacts" },
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
