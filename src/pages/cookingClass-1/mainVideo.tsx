import React, { FC, memo } from "react";
import { Lesson } from "./useClassDetails";

let Videotemp =
  "https://res.cloudinary.com/dvbplh4z9/video/upload/v1670062302/Cooking%20Academy%20Assets/kitchen%20videos/275510890_325976542837373_8757408711320570070_n_wsmvef.mp4";

export interface VideoControlls {
  onNextVideo: () => void;
  onPrevVideo: () => void;
  hasNextVideo: boolean;
  hasPrevVideo: boolean;
}

interface MainVideoProps {
  lesson?: Lesson | null;
  selectedLesson: number;
  videoControls: VideoControlls;
}

const MainVideo: FC<MainVideoProps> = ({
  lesson,
  selectedLesson,
  videoControls,
}) => {
  return (
    <>
      <div className="flex gap-10">
        <span className="flex">
          <i className="text-primary-clr2 pr-2 grid place-items-center fa-regular fa-circle-play"></i>
          <p>Video {selectedLesson + 1}</p>
        </span>
        <span className="flex">
          <i className="text-primary-clr2 pr-2 grid place-items-center fa-regular fa-clock"></i>
          <p>1 hrs</p>
        </span>
      </div>
      <h1 className="text-2xl font-medium tracking-wide py-3">
        {selectedLesson + 1}. {lesson?.title}
      </h1>

      <video className=" rounded-2xl" controls loop controlsList="nodownload" src={lesson?.videoLink}>
        {/* <source src={lesson?.videoLink} type="video/mp4" /> */}
      </video>
      <div>
        {videoControls.hasPrevVideo && (
          <button onClick={videoControls.onPrevVideo}>Prev</button>
        )}
        {videoControls.hasNextVideo && (
          <button onClick={videoControls.onNextVideo}>Next</button>
        )}
      </div>
    </>
  );
};

export default memo(MainVideo);
