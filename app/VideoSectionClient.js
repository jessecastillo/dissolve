import React from "react";
import Link from "next/link";

const VideoSection = () => {
  const handleScrollToNextSection = () => {
    const nextSection = document.getElementById("product-section");
    nextSection.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const scrollDuration = 1500; // Adjust this value to change the scroll duration (in milliseconds)

  return (
    <div className="main" style={{ position: "relative" }}>
      <video className="fixed z-[-1]" autoPlay muted loop>
        <source src="/videos/Aquatic_Clouds_geo_HD.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        className="down-arrow"
        onClick={handleScrollToNextSection}
        style={{
          position: "absolute",
          bottom: "20px", // Adjust the distance from the bottom as needed
          left: "50%", // Center the arrow horizontally
          transform: "translateX(-50%)", // Center the arrow horizontally
          cursor: "pointer",
          fontSize: "40px", // Adjust the font size to make the arrow bigger
        }}
      >
        <Link href="#product-section">
          {/* Add your down arrow icon or HTML here */}
          ↓
        </Link>
      </div>
    </div>
  );
};

export default VideoSection;
