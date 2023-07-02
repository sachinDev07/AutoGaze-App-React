import React from "react";
import VideoBackground from "../components/VideoBackground";
import { MAIN_HERO_MODEL_S } from "../utils/constant";

const ModelSPage = () => {
  return (
    <>
      <VideoBackground
        videoSource={MAIN_HERO_MODEL_S}
        title="Model S"
        description="Explore Inventory"
      />
    </>
  );
};

export default ModelSPage;
