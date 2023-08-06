import React from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "./Components/NavBar";
import animationStyles from "./animation.css";
import styles from "./VideoSection.module.css";

const VideoSection = () => {
  return (
    <div className="main relative h-screen">
      <video className="fixed z-[-1] w-full h-full object-cover" autoPlay muted loop>
        <source src="/videos/Aquatic_Clouds_geo_HD.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        {/* Add the text above the arrow */}
        <Link href="#product-section">
          <p className="text-xl text-white font-semibold mb-4">For those who Seek...</p>
        </Link>
        <Link href="#product-section">
          {/* Replace the existing arrow with a Font Awesome arrow */}
          <i className="text-4xl fas fa-chevron-down"></i>
        </Link>
      </div>
      <div className="absolute right-24 top-16 h-3/4 flex flex-col justify-between">
        <p className="text-xl text-white">Sola Scriptura</p>
        <p className="text-xl text-white">Sola Fide</p>
        <p className="text-xl text-white">Sola Gratia</p>
        <p className="text-xl text-white">Solus Christus</p>
        <p className="text-xl text-white">Soli Deo Gloria</p>
      </div>
      {/* Add Wisdom and wear text */}
      {/*<div className={styles.wisdomWearContainer}>
        <div className={styles.wisdomText}>Wisdom</div>
        <div className={styles.wearText}>wear</div>
      </div>
      */}
      {/* Add Wisdom and wear text */}
      <div className={styles.wisdomWearContainer}>
        {/* Use the Image component to display the .png image */}
        <div style={{ position: "bottom", top: "100%", left: "20%", transform: "translate(15%, 40%)" }}>
          <Image src="/WisdomWear.png" alt="Wisdom" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
