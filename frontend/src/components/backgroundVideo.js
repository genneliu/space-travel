import video from "../Assets/Videos/video5.mp4";
import { useRef, React } from "react";

export default function VideoBackground() {
  const videoRef = useRef();
  const setPlayBack = () => {
    videoRef.current.playbackRate = 0.5;
  };
  return (
    <>
      <video ref={videoRef} onCanPlay={() => setPlayBack()}>
        <source src={video} type="video/mp4" />
      </video>
    </>
  );
}
