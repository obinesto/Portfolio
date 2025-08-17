/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { InfiniteSlider } from './ui/infinite-slider';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  {
    name: 'HTML5',
    img: 'https://img.icons8.com/?size=100&id=20909&format=png&color=000000',
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
    img: 'https://img.icons8.com/?size=100&id=MWiBjkuHeMVq&format=png&color=000000',
  },
  {
    name: 'PHP',
    img: 'https://img.icons8.com/?size=100&id=UGYn5TapNioV&format=png&color=000000',
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
    img: 'https://img.icons8.com/?size=100&id=kg46nzoJrmTR&format=png&color=000000',
  },
  {
    name: 'MongoDB',
    img: 'https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000',
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

  const SkillItem = ({ skill }) => (
    <div className="flex flex-col items-center p-4 bg-[#1A2332] text-[#4ECCA3] rounded-lg mx-2">
      <img src={skill.img} alt={skill.name} className="w-12 h-12 mb-2" />
      <span className="text-center text-sm">{skill.name}</span>
    </div>
  );

  return (
    <div ref={skillsRef} className="px-8 py-32" id="skills">
      <div className="max-w-7xl mx-auto">
        <h2 className="flex items-center gap-4 mb-12">
          <span className="text-[#4ECCA3]">02.</span>
          <span className="text-2xl text-white">Skills</span>
          <div className="h-px bg-gray-600 flex-1 ml-4" />
        </h2>
        <InfiniteSlider
          reverse={false}
          duration={35}
          durationOnHover={45}
          className="py-4"
        >
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </InfiniteSlider>
        <InfiniteSlider
          reverse={true}
          duration={35}
          durationOnHover={45}
          className="py-4"
        >
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </InfiniteSlider>
      </div>
    </div>
  );
}

