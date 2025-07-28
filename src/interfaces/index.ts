import { type IconType } from "react-icons";

export interface Contacts {
  label: string;
  content: string;
  icon: IconType;
  tooltip: boolean;
}

export interface Socials {
  icon: IconType;
  tooltip: string;
  to: string;
}

export interface Links {
  icon?: IconType;
  path: string;
  label: string;
}

export interface MenuBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface AboutCards {
  icon: IconType;
  title: string;
  description: string;
}

export interface ResumeContent {
  title: string;
  date: string;
  details?: string;
  course?: string;
}
