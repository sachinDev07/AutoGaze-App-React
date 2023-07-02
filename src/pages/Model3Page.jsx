import React from "react";
import VideoBackground from "../components/VideoBackground";
import { MAIN_HERO_MODEL_3 } from "../utils/constant";

const Model3Page = () => {
  return (
    <>
      <VideoBackground
        videoSource={MAIN_HERO_MODEL_3}
        title="Model 3"
        description="Demo Drive"
      />
    </>
  );
};

export default Model3Page;
