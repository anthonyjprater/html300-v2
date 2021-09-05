swTheme = new Audio('/sound/Far Out - The Force Theme.mp3');

swTheme.addEventListener("canplaythrough", event => {
  /* the audio is now playable; play it if permissions allow */
  swTheme.play();
