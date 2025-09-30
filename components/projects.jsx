"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ecommerceImg from "../public/ecommerceHack.png";
import cryptocoinImg from "../public/cryptocoin.png";
import gymAppImg from "../public/gymApp.png";
import youtubecloneImg from "../public/YoutubeClone.png";
import apodImg from "../public/Apod.png";
import taskManagerImg from "../public/task_manager.png";
import { FaLink, FaGithub, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { TruncatedText } from "./ui/truncated-text";
import { TruncatedTechnologies } from "./ui/truncated-technologies";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    category: "Web Application",
    title: "E-Commerce Store",
    description:
      "A fully responsive demo e-commerce application. Offering both user and admin dashboard, this project showcases a complete front-end user flow, from browsing products to completing a purchase with a real payment gateway integration.",
    image: ecommerceImg,
    technologies: ["Html", "Vanilla JS", "CSS", "PayStack"],
    link: "https://e-commerce-hack.vercel.app/",
    github: "https://github.com/obinesto/E-commerce_hack",
  },
  {
    category: "Progressive Web Application",
    title: "Youtube Clone",
    description:
      "A YouTube clone that allows users to search, view and play videos. Also offering database query caching, native app behaviour, push notifications and user interaction features such as bookmarks, likes, subscrptions and more.",
    image: youtubecloneImg,
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn/UI",
      "Firebase",
      "Google OAuth",
      "PostgreSQL",
      "Supabase",
      "Cloudinary",
      "Sentry",
      "TanStack Query",
      "Zustand",
      "Web-push",
      "React Context",
      "Node.js",
      "Axios",
      "Next PWA",
    ],
    link: "https://youtube-clone-cyprianobi.vercel.app/",
    github: "https://github.com/obinesto/youtube-clone",
  },
  {
    category: "Web Application",
    title: "Apod Project",
    description:
      "This project makes use of NASA's API to render the astronomy picture of the day (APOD).",
    image: apodImg,
    technologies: ["Vite","React.js", "Tailwind CSS", "Axios"],
    link: "https://apod-project-psi.vercel.app/",
    github: "https://github.com/obinesto/NASA-ReactJS-App",
  },
  {
    category: "Progressive Web Application",
    title: "Cryptocoin App",
    description:
      "A crypto progressive web application (PWA) which uses Coingecko's API to provide real time information on cryptocurrency tokens.",
    image: cryptocoinImg,
    technologies: [
      "Vite",
      "React.js",
      "CSS",
      "React Router Dom",
      "Axios",
      "Vite PWA",
    ],
    link: "https://cyprian-obi-cryptocoin-app.vercel.app/",
    github: "https://github.com/obinesto/Cryptocoin-App",
  },
  {
    category: "Web Application",
    title: "Gym Studio",
    description: "A modern, fully responsive, and visually appealing landing page template for a gym or fitness studio.",
    image: gymAppImg,
    technologies: ["Html", "CSS", "Vanilla JS", "OpenStreetMap"],
    link: "https://gym-training-studio.vercel.app/",
    github: "https://github.com/obinesto/gym-training-studio",
  },
  {
    category: "Web Application",
    title: "Task Manager",
    description:
      "A robust and efficient task management application built with modern web technologies.",
    image: taskManagerImg,
    technologies: [
      "Vite",
      "React.js",
      "Tailwind CSS",
      "Shadcn/UI",
      "Node.js",
      "Axios",
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
                  lazy
                  className="w-full h-2/5 object-fill hover:scale-75 transition-transform duration-500 ease-in-out mb-2"
                />
                <div className="relative p-2 h-3/5">
                  <span className="flex gap-2 items-center mb-2">
                    <p className="text-xl font-semibold">
                    {project.title}
                  </p>
                  <p className="text-xs text-[#4ECCA3] bg-[#0D1627] px-2 py-1 rounded">{project.category}</p>
                  </span>
                  <TruncatedText text={project.description} maxLength={90} />
                  <TruncatedTechnologies technologies={project.technologies} />
                  <div className="flex space-x-4 absolute bottom-16">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 border border-[#4ECCA3] text-[#0D1627] bg-[#4ECCA3] hover:bg-[#4ECCA3] hover:bg-opacity-70 transition-colors rounded-md"
                      title="Visit Project"
                    >
                      <FaLink className="size-6" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-4 py-2 border border-[#4ECCA3] text-[#4ECCA3] hover:bg-[#4ECCA3] hover:bg-opacity-10 transition-colors rounded"
                      title="View Source Code"
                    >
                      <FaGithub className="size-6" />
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
            <FaArrowRight className="size-5" />
          </a>
        </div>
      </div>
    </div>
  );
}
