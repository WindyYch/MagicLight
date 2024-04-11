import "./style.css";
import "./compontent/lightTip/lightTip.css"
import "./compontent/loading/loading.css"
import { setScrollSmooth } from "./utils/scrollSmooth";
import { setRem } from "./utils/pxToRem";
import { handleWorkFlowsVideoPlayer } from "./utils/handlePlayer";
import { debouncedLogEmail } from "./utils/logEmail";

// @ts-ignore
window.handleWorkFlowsVideoPlayer = handleWorkFlowsVideoPlayer;
// @ts-ignore
window.debouncedLogEmail = debouncedLogEmail;

setScrollSmooth();
setRem();

const player = document.querySelector(
  "#workFlowsVideoPlayer"
) as HTMLVideoElement;
let startPlayFlag: boolean = false;
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (!startPlayFlag) {
        startPlayFlag = handleWorkFlowsVideoPlayer(0);
      } else {
        player?.play();
      }
    } else {
      player?.pause();
    }
  });
});

observer.observe(player);
