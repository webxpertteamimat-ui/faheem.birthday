const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let confetti = [];
for (let i = 0; i < 200; i++) {
  confetti.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 2,
    d: Math.random() * 5,
    color: `hsl(${Math.random() * 360},100%,50%)`
  });
}
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
    ctx.fillStyle = c.color;
    ctx.fill();
  });
  update();
}
function update() {
  confetti.forEach(c => {
    c.y += Math.cos(c.d) + 1;
    if (c.y > canvas.height) {
      c.y = -10;
      c.x = Math.random() * canvas.width;
    }
  });
}
setInterval(draw, 20);