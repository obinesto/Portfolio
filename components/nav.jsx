"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import profileImage from "../public/profile_image.JPG";

export function Nav() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-[#0A192F] shadow-xl" : "shadow-sm shadow-gray-950"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center py-6 px-8">
        <Link href="/" className="gap-5 flex flex-row items-center">
          <Image
            alt="profile picture"
            src={profileImage}
            width={50}
            height={50}
            className="rounded-full object-cover"
          />
          <span className="text-xl font-light italic font-yellowtail">Cyprian Obi</span>
        </Link>
        <div className="flex gap-6">
          <Link
            href="#about"
            className="text-[#4ECCA3] hover:opacity-80 transition-opacity"
          >
            01. About me
          </Link>
          <Link
            href="#skills"
            className="text-[#4ECCA3] hover:opacity-80 transition-opacity"
          >
            02. Skills
          </Link>
          <Link
            href="#projects"
            className="text-[#4ECCA3] hover:opacity-80 transition-opacity"
          >
            03. Projects
          </Link>
          <Link
            href="#contact"
            className="text-[#4ECCA3] hover:opacity-80 transition-opacity"
          >
            04. Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
