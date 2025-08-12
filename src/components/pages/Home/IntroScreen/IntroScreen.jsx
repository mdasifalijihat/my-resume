import React, { useEffect, useState } from "react";
import "./IntroAnimation.css";

const nameParts = ["Hi,", "I'm", "Asif", "Ali", "Jihat"];

const IntroScreen = () => {
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => {
        if (prev < nameParts.length) return prev + 1;
        return prev;
      });
    }, 600); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="intro-container">
      <div className="text-wrapper">
        {nameParts.slice(0, currentWord).map((word, index) => (
          <span key={index} className="rotating-text">
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};

export default IntroScreen;
