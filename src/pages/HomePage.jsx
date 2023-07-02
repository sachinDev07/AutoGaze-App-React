import React, { useEffect } from "react";
import VideoBackground from "../components/VideoBackground";
import ImageBackground from "../components/ImageBackground";
import Model3_image from "../assets/Homepage-Model-3-NA.avif";
import ModelY_image from "../assets/Homepage-Model-Y.avif";
import ModelX_image from "../assets/Homepage-Model-X.avif";
import { MAIN_HERO_DESKTOP } from "../utils/constant";

const HomePage = () => {
  return (
    <>
      <VideoBackground videoSource={MAIN_HERO_DESKTOP} title="Experience Tesla" description="Schedule a Demo Drive Today" />
      <ImageBackground
        backgroundImage={Model3_image}
        title="Model 3"
        price="Starting at $32,740"
        description="After Federal Tax Credit"
      />
      <ImageBackground
        backgroundImage={ModelY_image}
        title="Model Y"
        description="Explore Inventory"
      />
      <ImageBackground
        backgroundImage={ModelX_image}
        title="Model X"
        description="Explore Inventory"
      />
    </>
  );
};

export default HomePage;
