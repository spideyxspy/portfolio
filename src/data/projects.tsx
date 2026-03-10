import { ReactNode } from "react";

export type Project = {
  title: string;
  src: string;
  type: "image" | "video";
};

const projects: Project[] = [
  {
    title: "3D Portfolio",
    src: "./project1.jpg",
    type: "image",
  },
  {
    title: "Landing Page Design",
    src: "./project2.jpg",
    type: "image",
  },
  {
    title: "Dashboard UI",
    src: "./project3.jpg",
    type: "image",
  },
  {
    title: "Product Animation",
    src: "./project4.jpg",
    type: "image",
  },
  {
    title: "Website Interaction Demo",
    src: "./video1.mp4",
    type: "video",
  },
];

export default projects;
