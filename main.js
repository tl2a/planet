var frameNumber = 0, // start video at frame 0
// lower numbers = faster playback
playbackConst = 6000, 
// get page height from video duration
setHeight = document.getElementById("set-height"), 
// select video element         
vid = document.getElementById('v0');
btn = document.querySelector('.tap-on')
btn.addEventListener('mousedown',function() {
  this.classList.add('onhold');
  vid.play();
})
btn.addEventListener('mouseup',function() {
  this.classList.remove('onhold');
  vid.pause();
})
btn.addEventListener('touchstart',function() {
  this.classList.add('onhold');
  vid.play();
})
btn.addEventListener('touchend',function() {
  this.classList.remove('onhold');
  vid.pause();
})