'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    name: 'HTML5',
    img: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/000000/external-html-5-is-a-software-solution-stack-that-defines-the-properties-and-behaviors-of-web-page-logo-shadow-tal-revivo.png',
  },
  {
    name: 'CSS3',
    img: 'https://img.icons8.com/color/50/000000/css3.png',
  },
  {
    name: 'JavaScript',
    img: 'https://img.icons8.com/color/50/000000/javascript--v1.png',
  },
  {
    name: 'React',
    img: 'https://img.icons8.com/ultraviolet/50/000000/react--v1.png',
  },
  {
    name: 'Next.js',
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg',
  },
  {
    name: 'Redux',
    img: 'https://img.icons8.com/color/50/000000/redux.png',
  },
  {
    name: 'Node.js',
    img: 'https://img.icons8.com/color/50/000000/nodejs.png',
  },
  {
    name: 'Express',
    img: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg',
  },
  {
    name: 'MongoDB',
    img: 'https://img.icons8.com/color/50/000000/mongodb.png',
  },
  {
    name: 'TypeScript',
    img: 'https://img.icons8.com/color/50/000000/typescript.png',
  },
  {
    name: 'Tailwind CSS',
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  },
  {
    name: 'Git',
    img: 'https://img.icons8.com/color/50/000000/git.png',
  },
  {
    name: 'Figma',
    img: 'https://img.icons8.com/color/50/000000/figma--v1.png',
  },
  {
    name: 'Postman',
    img: 'https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/000000/external-postman-is-the-only-complete-api-development-environment-logo-shadow-tal-revivo.png',
  },
];

export function Skills() {
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.skill-item', {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: skillsRef.current,
          start: 'top 80%',
        },
      });
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={skillsRef} className="px-8 py-32 bg-[#0D1627]" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="flex items-center gap-4 mb-12">
          <span className="text-[#4ECCA3]">02.</span>
          <span className="text-2xl text-white">Skills</span>
          <div className="h-px bg-gray-600 flex-1 ml-4" />
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-item flex flex-col items-center p-4 bg-[#1A2332] text-[#4ECCA3] rounded-lg"
            >
              <img
                src={skill.img}
                alt={skill.name}
                className="w-12 h-12 mb-2"
              />
              <span className="text-center text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
