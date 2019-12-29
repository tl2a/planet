// select video element         
var vid = document.getElementById('v0'),
btn = document.querySelector('.tap-on');
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