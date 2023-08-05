import React from "react";

function VideoSectionClient() {
  return (
    <div>
      <video className="fixed z-[-1]" autoPlay muted loop>
        <source src="/videos/Aquatic_Clouds_geo_HD.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}