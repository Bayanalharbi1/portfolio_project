import React, { useState, useEffect } from "react";

const aboutItems = [
  {
    label: "Projects",
    number: 37,
  },
  {
    label: "Skills",
    number: 13,
  },
  {
    label: "LeetCode",
    number: 23,
  },
  {
    label: "Certifications",
    number: 15,
  },
  {
    label: "Volunteering",
    number: 110,
    suffix: "/H",
  },
];

const About = () => {
  const [displayedText, setDisplayedText] = useState("");
  const fullText =
    "Welcome! I'm Bayan Alharbi, a computer science professional and data analyst passionate about transforming complex data into actionable insights. With expertise in Python, Power BI, and bioinformatics, I bring a blend of technical proficiency and creative problem-solving to drive impactful solutions in technology and science.";

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText((prev) => prev + fullText[index]);
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50); // Adjust typing speed

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          {/* Typing animation for introduction text */}
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            {displayedText}
          </p>

          {/* Display the grid of aboutItems */}
          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number, suffix }, key) => (
              <div
                key={key}
                className="bg-zinc-900 p-6 rounded-xl shadow-md flex flex-col items-center justify-center w-[150px] h-[100px]"
              ><div className="flex items-baseline">
              <span
                className="text-lg sm:text-xl md:text-2xl font-semibold"
                style={{ color: "rgba(254, 254, 254, 0.84)" }} 
              >
                {number}
              </span>
              <span className="text-sky-400 font-semibold sm:text-lg md:text-xl"
              style={{ color: "rgba(183, 98, 207, 0.84)" }}>
                +
              </span>
              {suffix && (
                <span className="text-sm text-gray-500 ml-1">{suffix}</span>
                
              )}
            </div>
            
                <p className="text-sm sm:text-md text-zinc-400 mt-2">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
