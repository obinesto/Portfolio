"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import aboutImage1 from "../public/about_image.jpg";
import aboutImage2 from "../public/about_image2.jpg";
import aboutImage3 from "../public/about_image3.jpg";
import aboutImage4 from "../public/about_image4.jpg";
import aboutImage5 from "../public/about_image5.jpg";
import aboutImage6 from "../public/about_image6.jpg";

gsap.registerPlugin(ScrollTrigger);

export function About() {
  const aboutRef = useRef(null);
  const [currentIndex1, setCurrentIndex1] = useState(0);
  const [currentIndex2, setCurrentIndex2] = useState(1);
  const [animating, setAnimating] = useState(false);

  const aboutImageHolder = [
    aboutImage1,
    aboutImage2,
    aboutImage3,
    aboutImage4,
    aboutImage5,
    aboutImage6,
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      if (!animating) {
        setAnimating(true);
        setTimeout(() => setAnimating(false), 1000);
        setCurrentIndex1(
          (prevIndex) => (prevIndex + 1) % aboutImageHolder.length
        );
        setCurrentIndex2(
          (prevIndex) => (prevIndex + 1) % aboutImageHolder.length
        );
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [animating, aboutImageHolder.length]);

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
            responsive front-end applications which are compliant with modern
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-20">
          <div
            className={`relative w-80 h-80 border-8 border-[#4ECCA3] rounded-lg overflow-hidden about-anim`}
            style={{ transform: `rotate(-8deg)` }}
          >
            <Image
              src={aboutImageHolder[currentIndex1]}
              alt={`Image ${currentIndex1 + 1}`}
              fill
              className={`object-cover transition-transform duration-1000 ${
                animating
                  ? "translate-x-full opacity-0"
                  : "-translate-x-0 opacity-100"
              }`}
            />
          </div>
          <div
            className={`relative w-80 h-80 border-8 border-[#4ECCA3] rounded-lg overflow-hidden about-anim`}
            style={{ transform: `rotate(8deg)` }}
          >
            <Image
              src={aboutImageHolder[currentIndex2]}
              alt={`Image ${currentIndex2 + 1}`}
              fill
              className={`object-cover transition-transform duration-1000 ${
                animating
                  ? "translate-x-full opacity-0"
                  : "-translate-x-0 opacity-100"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
