let time = 5 * 60; // 5 minutes in seconds
const countdown = document.getElementById('countdown');

setInterval(() => {
  const mins = Math.floor(time / 60);
  const secs = time % 60;
  countdown.textContent = `Pay within: ${mins}:${secs < 10 ? '0' : ''}${secs}`;
  if (time > 0) time--;
}, 1000);
