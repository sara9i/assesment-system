export const isInViewport = (ref) => {
  const rect = ref.current.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export const videoOnScroll = (videoWrap, video) => {
  const videoHeight = video.clientHeight;
  const windowScrollTop = window.pageYOffset;
  const videoBottom = videoHeight/4;
  if (windowScrollTop > videoBottom) {
    video.classList.add('c-Video--sticky');
  } else {
    video.classList.remove('c-Video--sticky');
  }
};

export const minDesktopWidth = 1200;
export const isDesktop = window.innerWidth >= minDesktopWidth;
export const isMobile = window.innerWidth < 470;
