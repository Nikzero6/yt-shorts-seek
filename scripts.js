let defaultSeekSecs = 2;

document.addEventListener("keydown", (e) => {
  const video = document.querySelector(
    "ytd-reel-video-renderer[is-active] video"
  );
  if (!video) return;

  if (e.code === "ArrowRight") {
    video.currentTime += defaultSeekSecs;
  } else if (e.code === "ArrowLeft") {
    video.currentTime -= defaultSeekSecs;
  }
});

// const seekInput = document.getElementById("seek-changer");
// const changeDefaultSeek = (e) => {
//   const seek = parseFloat(e.target.value || "2");
//   defaultSeekSecs = seek;
// };

// seekInput.addEventListener("input", changeDefaultSeek);
