// Sets the app height so that it is at least 100% of the screen without using viewport units
const appHeight = () =>
  document.documentElement.style.setProperty(
    '--app-height',
    `${window.innerHeight}px`
  );
window.addEventListener('resize', appHeight);
appHeight();
