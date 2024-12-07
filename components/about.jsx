"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import profileImage from "../public/about_image.jpg";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-anim", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={aboutRef} className="px-8 py-32" id="about">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-16">
        <div className="flex-1">
          <h2 className="flex items-center gap-4 mb-8 about-anim">
            <span className="text-[#4ECCA3]">01.</span>
            <span className="text-2xl">About Me.</span>
            <div className="h-px bg-gray-600 flex-1 ml-4" />
          </h2>
          <p className="text-gray-400 mb-4 about-anim">
            I&apos;m a full-stack developer dedicated to building immersive and
            responsive front end applications which are compliant with modern
            SEO standards and connecting them to custom REST-ful APIs built and
            maintained by me. I thrive on tackling complex problems and believe
            strongly in writing clean, maintainable code. My goal is to innovate
            and create captivating applications that leave a lasting impression
            on users.
            <br />
            <br />
            Don’t just take my word for it though, check out my projects to see
            my work in action. Let&apos;s connect and collaborate to turn your
            vision into reality! Together, we can create something truly
            special.
          </p>
        </div>
        <div className="relative w-80 h-80 border-8 border-[#4ECCA3] rounded-lg overflow-hidden about-anim">
          <Image
            src={profileImage}
            width={400}
            height={400}
            alt="Profile"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
