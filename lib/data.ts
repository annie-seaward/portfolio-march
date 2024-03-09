import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaPen } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import comingsoonImg from "@/public/coming-soon.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Computer Science (first year)",
    location: "The University of Oxford",
    description:
      "I complete the first year of degree at Oxford University, before transferring my credits in March 2020",
    icon: React.createElement(FaPen),
    date: "2017-2020",
  },
  {
    title: "1st Class BSc (Hons) STEM Degree",
    location: "The Open University",
    description:
      "I complete my degree at The Open University, graduating with first class honours. I focusing in Computer Science, Web Development and Earth Sciences.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Proagrica @ RELX",
    description:
      "I'm now a full-stack developer working at Proagrica, RELX. My stack includes React, Node JS, TypeScript, Tailwind and PostgreSQL. I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "COMING SOON",
    description:
      "COMING SOON",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: comingsoonImg,
  },
  {
    title: "COMING SOON",
    description:
      "COMING SOON",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: comingsoonImg,
  },
  {
    title: "COMING SOON",
    description:
      "COMING SOON",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: comingsoonImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;