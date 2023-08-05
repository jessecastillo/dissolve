import React from "react";
import Link from "next/link";

const VideoSection = () => {
  return (
    <div className="main relative h-screen">
      <video className="fixed z-[-1] w-full h-full object-cover" autoPlay muted loop>
        <source src="/videos/Aquatic_Clouds_geo_HD.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        {/* Add the text above the arrow */}
        <p className="text-xl text-white font-semibold mb-4">For those who Seek...</p>
        <Link href="#product-section">
          {/* Replace the existing arrow with a Font Awesome arrow */}
          <i className="text-4xl fas fa-chevron-down"></i>
        </Link>
      </div>
    </div>
  );
};

export default VideoSection;
