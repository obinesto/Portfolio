"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { TextEffect } from "./ui/text-effect";

export function Hero() {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-anim", {
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen flex items-center px-8 pt-32">
      <div>
        <p className="text-[#4ECCA3] mb-4 hero-anim">Hi, my name is</p>
        <h1 className="text-4xl lg:text-6xl font-light mb-4 hero-anim">
          Cyprian.
        </h1>
        <div className="hero-anim">
          <TextEffect
            per="char"
            delay={0.5}
            variants={{
              container: {
                hidden: {
                  opacity: 0,
                },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              },
              item: {
                hidden: {
                  opacity: 0,
                  rotateX: 90,
                  y: 10,
                },
                visible: {
                  opacity: 1,
                  rotateX: 0,
                  y: 0,
                  transition: {
                    duration: 0.2,
                  },
                },
              },
            }}
            className="text-3xl lg:text-5xl font-light text-gray-400 mb-6"
          >
            A web developer
          </TextEffect>
          <TextEffect
            per="char"
            delay={1.5}
            className="max-w-2xl text-gray-400 mb-8"
          >
            A full stack developer with experience building web apps with modern
            technologies. I&apos;m able to create pixel perfect UI design with
            front end technologies. I can also create and implement REST-ful
            APIs.
          </TextEffect>
        </div>
        <Link
          href="https://drive.google.com/file/d/1DarqyLLb3QBEOwkz858uNhA-OyxvanSu/view?usp=sharing"
          target="blank"
          className="inline-block px-6 py-2 border border-[#4ECCA3] text-[#4ECCA3] hover:bg-[#4ECCA3] hover:bg-opacity-10 transition-colors hero-anim"
        >
          MY CV
        </Link>
      </div>
    </div>
  );
}
