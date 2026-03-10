import { ReactNode } from "react";

export type Project = {
  title: string;
  src: string;
  type: "image" | "video";
};

const projects: Project[] = [
  {
    title: "3D Portfolio",
    src: "/assets/projects-screenshots/project1.jpg",
    type: "image",
  },
  {
    title: "Landing Page Design",
    src: "/assets/projects-screenshots/project2.jpg",
    type: "image",
  },
  {
    title: "Dashboard UI",
    src: "/assets/projects-screenshots/project3.jpg",
    type: "image",
  },
  {
    title: "Product Animation",
    src: "/assets/projects-screenshots/project4.jpg",
    type: "image",
  },
  {
    title: "Website Interaction Demo",
    src: "/assets/projects-screenshots/video1.mp4",
    type: "video",
  },
  // {
  //   title: "App Preview",
  //   src: "/assets/projects-screenshots/video3.mp4",
  //   type: "video",
  // },
];

export default projects;
