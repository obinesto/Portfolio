"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ecommerceImg from "../public/ecommerceHack.png";
import gymAppImg1 from "../public/gymApp1.png";
import gymAppImg2 from "../public/gymApp2.png";
import buildingsImg from "../public/building_gallery.png"
import apodImg from "../public/Apod.png"
import toDoImg from "../public/to_do_app.png"
import { FaLink, FaGithub, FaArrowRight } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-Commerce Store",
    description:
      "A responsive apple products e-commerce demo app with payment integration.",
    image: ecommerceImg,
    technologies: ["Html", "Vanilla.js", "Css"],
    link: "https://e-commerce-hack.vercel.app/",
    github: "https://github.com/obinesto/E-commerce_hack",
  },
  {
    title: "Gym App",
    description: "A fitness app for tracking workouts.",
    image: gymAppImg1,
    technologies: ["React.js", "Tailwind Css",],
    link: "https://my-fitness-pal-bay.vercel.app/",
    github: "https://github.com/obinesto/MyFitnessPal",
  },
  {
    title: "Building Gallery",
    description: "A template website showcasing different buildings",
    image: buildingsImg,
    technologies: ["Html", "Css"],
    link: "https://obinesto.github.io/Gallery-Layout/",
    github: "https://github.com/obinesto/Gallery-Layout",
  },
  {
    title: "Apod Project",
    description: "This project makes use of NASA's API to render the astronomy picture of the day (APOD).",
    image: apodImg,
    technologies: ["React.js", "Tailwind Css"],
    link: "https://apod-project-psi.vercel.app/",
    github: "https://github.com/obinesto/NASA-ReactJS-App",
  },
  {
    title: "Gym Studio",
    description: "A responsive gym studio app template",
    image: gymAppImg2,
    technologies: ["Html", "Css", "Vanilla.js"],
    link: "https://gym-training-studio.vercel.app/",
    github: "https://github.com/obinesto/gym-training-studio",
  },
  {
    title: "To-do App",
    description: "CRUD to-do application.",
    image: toDoImg,
    technologies: ["React.js", "Tailwind Css"],
    link: "https://to-do-list-blond-sigma.vercel.app/",
    github: "https://github.com/obinesto/REACTJS-TODOLIST",
  }
];

export function Projects() {
  const projectsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".project-item", {
        y: 50,
        opacity: 0,
        stagger: 0.3,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: projectsRef.current,
          start: "top 80%",
        },
      });
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={projectsRef} className="px-8 py-32" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="flex items-center gap-4 mb-12">
          <span className="text-[#4ECCA3]">03.</span>
          <span className="text-2xl">Projects</span>
          <div className="h-px bg-gray-600 flex-1 ml-4" />
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-item bg-[#1A2332] rounded-lg overflow-hidden"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm text-[#4ECCA3] bg-[#0D1627] px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 border border-[#4ECCA3] text-[#0D1627] bg-[#4ECCA3] hover:bg-[#4ECCA3] hover:bg-opacity-70 transition-colors rounded-md"
                    title="Visit Project"
                  >
                    <FaLink style={{ fontSize: "20px" }} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 border border-[#4ECCA3] text-[#4ECCA3] hover:bg-[#4ECCA3] hover:bg-opacity-10 transition-colors rounded"
                    title="View Source Code"
                  >
                    <FaGithub style={{ fontSize: "24px" }} />
                  </a>
                </div>
              </div>
            </div>
          ))}
          <a
            href="https://github.com/obinesto?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className=" max-w-40 flex items-center px-4 py-2 border border-[#4ECCA3] text-[#0D1627] bg-[#4ECCA3] hover:bg-[#4ECCA3] hover:bg-opacity-80 transition-colors rounded"
            title="View More"
          >
            <span className="mr-2">View More</span>
            <FaArrowRight style={{ fontSize: "20px" }} />
          </a>
        </div>
      </div>
    </div>
  );
}
