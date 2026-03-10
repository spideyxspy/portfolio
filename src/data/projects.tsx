import project1 from "./project1.jpg";
import project2 from "./project2.jpg";
import project3 from "./project3.jpg";
import project4 from "./project4.jpg";
import video1 from "./video1.mp4";

export type Project = {
  title: string;
  src: string;
  type: "image" | "video";
};

const projects: Project[] = [
  {
    title: "3D Portfolio",
    src: project1,
    type: "image",
  },
  {
    title: "Landing Page Design",
    src: project2,
    type: "image",
  },
  {
    title: "Dashboard UI",
    src: project3,
    type: "image",
  },
  {
    title: "Product Animation",
    src: project4,
    type: "image",
  },
  {
    title: "Website Interaction Demo",
    src: video1,
    type: "video",
  },
];

export default projects;
