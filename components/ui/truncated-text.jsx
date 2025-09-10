"use client";

import { useState } from "react";

export function TruncatedText({ text, maxLength = 100 }) {
  const [isHovered, setIsHovered] = useState(false);

  if (text.length <= maxLength) {
    return <p className="text-gray-400 mb-4">{text}</p>;
  }

  const truncated = `${text.slice(0, maxLength)}...`;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p className="text-gray-400 mb-4 cursor-pointer">{truncated}</p>
      {isHovered && (
        <div className="absolute bottom-[-200%] mb-2 w-full max-w-md p-4 bg-[#1A2332] border border-[#4ECCA3] text-gray-300 rounded-md shadow-lg z-20">
          {text}
        </div>
      )}
    </div>
  );
}