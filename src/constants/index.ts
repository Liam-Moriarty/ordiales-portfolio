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
import type { Contacts, Links, Socials, AboutCards } from "../interfaces";

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

export const aboutCards: AboutCards[] = [
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
