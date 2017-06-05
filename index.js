(function(){

  'use strict';

  const video = document.getElementById('js-video');

  function onTouchStart() {
    video.removeEventListener('touchstart', onTouchStart, false);

    this.muted = false;

    console.log(this.muted);

    this.play();
  }
  video.addEventListener('touchstart', onTouchStart, false);

  video.addEventListener('play', console.log.bind(console), false);
  video.addEventListener('ended', console.log.bind(console), false);

  setTimeout(function() {
    video.play();
  }, 3000);

}());
