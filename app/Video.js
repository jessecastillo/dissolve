import React from "react";
import Link from "next/link";

const VideoSection = () => {
  return (
    <div className="main">
      <video className="fixed z-[-1]" autoPlay muted loop>
        <source src="/videos/Aquatic_Clouds_geo_HD.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="down-arrow">
        <Link href="#product-section">
          {/* Add your down arrow icon or HTML here */}
          ↓
        </Link>
      </div>
    </div>
  );
};

export { default } from "./VideoSectionClient";

