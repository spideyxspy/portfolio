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
    src: "https://substackcdn.com/image/fetch/$s_!G1lk!,w_1456,c_limit,f_webp,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
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
