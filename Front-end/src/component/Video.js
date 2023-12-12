import video from "./videos/ssstwitter.com_1691918520220.mp4";
import { useImperativeHandle, forwardRef, useRef } from "react";

function Video(props, ref) {
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play() {
      videoRef.current.play();
    },
    pause() {
      videoRef.current.pause();
    },
  }));
  // có thể dùng controls để mặc định video
  return <video src={video} width={300} ref={videoRef}></video>;
}

export default forwardRef(Video);
