function playLove() {
  const music = document.getElementById('bgMusic');
  const msg1 = document.getElementById('message1');
  const msg2 = document.getElementById('message2');
  const letter = document.getElementById('letter');

  music.play();
  msg1.classList.add('show');
  
  // Reveal next message after 3 seconds
  setTimeout(() => {
    msg2.classList.add('show');
  }, 3000);
  
  // Reveal love letter after 6 seconds
  setTimeout(() => {
    letter.classList.remove('hidden');
    letter.classList.add('show');
  }, 6000);
}