import React from "react";
import { MAIN_HERO_MODEL_X } from "../utils/constant";
import VideoBackground from "../components/VideoBackground";
import ImageBackground from "../components/ImageBackground";
const ModelXPage = () => {
  return (
    <>
      <ImageBackground backgroundImage={MAIN_HERO_MODEL_X} title="Model X" description="Explore Inventory" />
    </>
  );
};

export default ModelXPage;
