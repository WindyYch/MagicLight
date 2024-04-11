
export function handleWorkFlowsVideoPlayer(index: number): boolean {
  let startPlayFlag = true
  const playerTitles = document.getElementsByClassName('workflows-video-title');
  const playerContents = document.getElementsByClassName('workflows-video-content');
  const player = document.getElementById("workFlowsVideoPlayer") as HTMLVideoElement;

  function updateFontStyles() {
      for (let i = 0; i < playerTitles.length; i++) {
          (playerTitles[i] as HTMLElement).style.color = "#525462";
          (playerContents[i] as HTMLElement).style.color = "#767782";
      }
      (playerTitles[index] as HTMLElement).style.color = "#FFF";
      (playerContents[index] as HTMLElement).style.color = "rgba(255,255,255,0.7)";
  }

  function updateScrollBarStyles() {
    const scrollBar = document.getElementById('workFlowsScrollBar');
    const scrollHeight = 0.96 * (index + 1);
    (scrollBar as HTMLElement).style.height = `${scrollHeight}rem`
  }

  function updateVideoSource() {
      const videoSource = `/assets/video/workFlowsVideo_${index}.mp4`;
      player.src = videoSource;
      player.load();
      player.play();
  }

  function onVideoEnded() {
      index++;
      if (index >= playerTitles.length) {
          index = 0;
      }
      player.removeEventListener("ended", onVideoEnded);
      handleWorkFlowsVideoPlayer(index);
  }

  player.removeEventListener("ended", onVideoEnded);
  player.addEventListener("ended", onVideoEnded);

  updateFontStyles();
  updateScrollBarStyles();
  updateVideoSource();

  return startPlayFlag;
}
