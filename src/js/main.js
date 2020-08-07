const instance = new vidbg('.vidbg-box', {
  mp4: './images/video/world.mp4', // URL or relative path to MP4 video
  webm: './images/video/world.webm', // URL or relative path to webm video
  poster: './images/poster.jpg', // URL or relative path to fallback image
  overlay: false, // Boolean to display the overlay or not
}, {
  // Attributes
})
const rellax = new Rellax('.rocket');
AOS.init();
