const fullscreen = (id) => {
  var elem;
  if (!id) elem = document.documentElement;
  else elem = document.getElementById(id);

  if (hasFullscreen()) {
    if (document?.exitFullscreen) {
      document.exitFullscreen();
    } else if (document?.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document?.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } else {
    if (elem?.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem?.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem?.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }

  return !hasFullscreen();
};

const hasFullscreen = () => {
  return !!(
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement
  );
};

export { fullscreen, hasFullscreen };
