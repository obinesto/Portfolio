"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ecommerceImg from "../public/ecommerceHack.png";
import gymAppImg1 from "../public/gymApp1.png";
import gymAppImg2 from "../public/gymApp2.png";
import youtubecloneImg from "../public/YoutubeClone.png";
import apodImg from "../public/Apod.png";
import taskManagerImg from "../public/task_manager.png";
import { FaLink, FaGithub, FaArrowRight, FaArrowLeft } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "E-Commerce Store",
    description:
      "A responsive apple products e-commerce demo app with payment integration.",
    image: ecommerceImg,
    technologies: ["Html", "Vanilla.js", "Css", "PayStack"],
    link: "https://e-commerce-hack.vercel.app/",
    github: "https://github.com/obinesto/E-commerce_hack",
  },
  {
    title: "Gym App",
    description: "A fitness web app for formulating workout plans.",
    image: gymAppImg1,
    technologies: ["Vanilla.js", "React.js", "Tailwind Css"],
    link: "https://my-fitness-pal-bay.vercel.app/",
    github: "https://github.com/obinesto/MyFitnessPal",
  },
  {
    title: "Youtube Clone",
    description: "A YouTube clone that allows users to search, view and play videos. Also offering user interaction features such as comments, likes, subscrptions and more.",
    image: youtubecloneImg,
    technologies: ["Next.js", "Tailwind Css", "Firebase", "Google OAuth", "Supabase", "Cloudinary", "Sentry", "TanStack Query"],
    link: "https://youtube-clone-cyprianobi.vercel.app/",
    github: "https://github.com/obinesto/youtube-clone",
  },
  {
    title: "Apod Project",
    description:
      "This project makes use of NASA's API to render the astronomy picture of the day (APOD).",
    image: apodImg,
    technologies: ["React.js", "Tailwind Css"],
    link: "https://apod-project-psi.vercel.app/",
    github: "https://github.com/obinesto/NASA-ReactJS-App",
  },
  {
    title: "Gym Studio",
    description: "A responsive gym studio app template",
    image: gymAppImg2,
    technologies: ["Html", "Css", "Vanilla.js", "OpenStreetMap"],
    link: "https://gym-training-studio.vercel.app/",
    github: "https://github.com/obinesto/gym-training-studio",
  },
  {
    title: "Task Manager",
    description:
      "A task manager application that allows you assign tasks to yourself, others and also track the status of tasks assigned.",
    image: taskManagerImg,
    technologies: [
      "React.js",
      "Tailwind Css",
      "Node.js",
      "Redux",
      "TanStack Query",
      "Google OAuth",
      "React Router Dom",
      "Express.js",
      "Jsonwebtoken",
      "MongoDB",
      "Cloudinary",
      "Sentry",
    ],
    link: "https://task-manager-gules-nu.vercel.app/",
    github: "https://github.com/obinesto/taskManager",
  },
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

  const scrollableRef = useRef(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    if (scrollableRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollableRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  useEffect(() => {
    const scrollableElement = scrollableRef.current;
    if (scrollableElement) {
      scrollableElement.addEventListener("scroll", checkScrollPosition);
      checkScrollPosition();
    }
    return () => {
      if (scrollableElement) {
        scrollableElement.removeEventListener("scroll", checkScrollPosition);
      }
    };
  }, []);

  const scrollLeft = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div ref={projectsRef} className="px-8 py-32" id="projects">
      <div className="max-w-7xl mx-auto">
        <h2 className="flex items-center gap-4 mb-12">
          <span className="text-[#4ECCA3]">03.</span>
          <span className="text-2xl">Projects</span>
          <div className="h-px bg-gray-600 flex-1 ml-4" />
        </h2>
        <div className="projects-container">
          <div ref={scrollableRef} className="projects-scrollable">
            <button
              onClick={scrollLeft}
              disabled={isAtStart}
              className={
                isAtStart
                  ? "hidden"
                  : "absolute top-[80%] left-3 transform bg-[#4ECCA3] text-[#0D1627] p-2 rounded-full animate-bounce z-10 disabled:opacity-50 disabled:cursor-not-allowed"
              }
            >
              <FaArrowLeft />
            </button>

            <button
              onClick={scrollRight}
              className={
                isAtEnd
                  ? "hidden"
                  : "absolute top-[80%] right-3 transform bg-[#4ECCA3] text-[#0D1627] p-2 rounded-full animate-bounce z-10 disabled:opacity-50 disabled:cursor-not-allowed"
              }
            >
              <FaArrowRight />
            </button>
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-48 object-cover hover:scale-75 duration-300"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
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
                      <FaLink className="size-6"/>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 border border-[#4ECCA3] text-[#4ECCA3] hover:bg-[#4ECCA3] hover:bg-opacity-10 transition-colors rounded"
                      title="View Source Code"
                    >
                      <FaGithub className="size-6"/>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12">
          <a
            href="https://github.com/obinesto?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="max-w-40 flex items-center px-4 py-2 border border-[#4ECCA3] text-[#0D1627] bg-[#4ECCA3] hover:bg-[#4ECCA3] hover:bg-opacity-80 transition-colors rounded"
            title="View More"
          >
            <span className="mr-2">View More</span>
            <FaArrowRight className="size-5"/>
          </a>
        </div>
      </div>
    </div>
  );
}
