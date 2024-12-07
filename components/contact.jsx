"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedin, FaGithub, FaTwitter, FaPhone } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const contactRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-anim", {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
        },
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={contactRef} className="px-8 py-32 bg-[#0D1627]" id="contact">
      <div className="max-w-7xl mx-auto">
        <h2 className="flex items-center gap-4 mb-12 contact-anim">
          <span className="text-[#4ECCA3]">04.</span>
          <span className="text-2xl">Contact.</span>
          <div className="h-px bg-gray-600 flex-1 ml-4" />
        </h2>
        <p className="text-4xl">Get in Touch</p>
        <br />
        <p className="text-gray-400 mb-8 contact-anim">
          I&apos;m currently looking for new opportunities. Whether you have a
          question, want to hire, want to collaborate or just want to say hi,
          I&apos;ll try my best to get back to you!
        </p>
        <a
          href="mailto:obicyprian180@gmail.com"
          className="inline-block px-8 py-3 border-2 border-[#4ECCA3] text-[#4ECCA3] hover:bg-[#4ECCA3] hover:text-[#0B1221] transition-colors rounded-full text-lg font-semibold contact-anim"
        >
          Send an Email
        </a>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2 gap-4 mt-8">
          <a
            href="https://www.linkedin.com/in/cyprian-obi-6306b4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 border border-[#4ECCA3] text-[#4ECCA3] hover:bg-[#4ECCA3] hover:bg-opacity-10 transition-colors rounded"
            title="LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="https://github.com/obinesto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 border border-[#4ECCA3] text-[#4ECCA3] hover:bg-[#4ECCA3] hover:bg-opacity-10 transition-colors rounded"
            title="GitHub"
          >
            <FaGithub className="text-2xl" />
          </a>
          <a
            href="https://x.com/Mc_Cprian02"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-4 border border-[#4ECCA3] text-[#4ECCA3] hover:bg-[#4ECCA3] hover:bg-opacity-10 transition-colors rounded"
            title="Twitter"
          >
            <FaTwitter className="text-2xl" />
          </a>
          <a
            href="tel:+2348102992504"
            className="flex items-center justify-center p-4 border border-[#4ECCA3] text-[#4ECCA3] hover:bg-[#4ECCA3] hover:bg-opacity-10 transition-colors rounded"
            title="Call"
          >
            <FaPhone className="text-2xl" />
          </a>
        </div>
      </div>
    </div>
  );
}
