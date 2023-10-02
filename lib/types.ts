import { links } from "./data";

export type TSectionName = (typeof links)[number]["name"];

export type TActiveSection = {
  activeSection: TSectionName;
  setActiveSection: React.Dispatch<React.SetStateAction<TSectionName>>;
};
