import { type IconType } from "react-icons";

export interface Contacts {
  label: string;
  content: string;
  icon: IconType;
  tooltip: boolean;
}

export interface Links {
  icon: IconType;
  tooltip: string;
  to: string;
}
