"use client";

import { useState } from "react";

export function TruncatedTechnologies({ technologies, maxLength = 10 }) {
  const [showAll, setShowAll] = useState(false);

  if (technologies.length < maxLength) {
    return (
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, i) => (
          <span
            key={i}
            className="text-sm text-[#4ECCA3] bg-[#0D1627] px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    );
  }

  const visibleTechs = technologies.slice(0, maxLength - 1);

  return (
    <div className="flex flex-wrap items-center gap-2 mb-4">
      {visibleTechs.map((tech, i) => (
        <span
          key={i}
          className="text-sm text-[#4ECCA3] bg-[#0D1627] px-2 py-1 rounded"
        >
          {tech}
        </span>
      ))}
      <div
        className="relative"
        onMouseEnter={() => setShowAll(true)}
        onMouseLeave={() => setShowAll(false)}
      >
        <button className="text-sm text-[#0D1627] bg-[#4ECCA3] px-2 py-1 rounded hover:bg-opacity-80 transition-opacity">
          View all
        </button>
        {showAll && (
          <div className="absolute bottom-full left-[-170%] md:left-[-100%] mb-2 w-72 p-2 bg-[#1a2c47] border border-[#4ECCA3] rounded-md shadow-lg z-20">
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm text-[#4ECCA3] bg-[#0D1627] px-2 py-1 rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}