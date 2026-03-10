export type Project = {
  title: string;
  src: string;
  type: "image" | "video";
};

const projects: Project[] = [
  {
    title: "3D Portfolio",
    src: "/assets/projects-screenshots/project1.jpeg",
    type: "image",
  },
  {
    title: "Landing Page Design",
    src: "/assets/projects-screenshots/project2.jpeg",
    type: "image",
  },
  {
    title: "Dashboard UI",
    src: "/assets/projects-screenshots/project3.jpeg",
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
];

export default projects;
