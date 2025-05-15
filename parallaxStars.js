document.addEventListener('DOMContentLoaded', () => {
  const canvas = document.getElementById('parallaxStars');
  const ctx = canvas.getContext('2d');
  let width, height;
  const stars = [];
  const starCount = 120;
  let offsetX = 0, offsetY = 0;

  function resizeCanvas() {
    width = canvas.width = window.innerWidth - 270;
    height = canvas.height = window.innerHeight;
  }

  function createStars() {
    stars.length = 0;
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 1,
        depth: Math.random() * 3 + 1,
        alpha: Math.random(),
        alphaDirection: Math.random() > 0.5 ? 1 : -1,
        alphaSpeed: 0.01 + Math.random() * 0.015
      });
    }
  }

  function drawStars() {
    ctx.clearRect(0, 0, width, height);

    for (let s of stars) {
      // Мерцание
      s.alpha += s.alphaDirection * s.alphaSpeed;
      if (s.alpha >= 1) {
        s.alpha = 1;
        s.alphaDirection = -1;
      } else if (s.alpha <= 0.3) {
        s.alpha = 0.3;
        s.alphaDirection = 1;
      }

      const parallaxX = offsetX / s.depth;
      const parallaxY = offsetY / s.depth;
      const x = s.x + parallaxX;
      const y = s.y + parallaxY;

      // Нарисуем крестовидную "звезду"
      ctx.save();
      ctx.globalAlpha = s.alpha;
      ctx.strokeStyle = "rgba(255, 255, 255, 0.7)";
      ctx.lineWidth = 1;

      ctx.beginPath();
      ctx.moveTo(x - s.radius, y);
      ctx.lineTo(x + s.radius, y);
      ctx.moveTo(x, y - s.radius);
      ctx.lineTo(x, y + s.radius);
      ctx.stroke();

      ctx.restore();
    }

    requestAnimationFrame(drawStars);
  }

  document.addEventListener('mousemove', e => {
    const centerX = width / 2;
    const centerY = height / 2;
    offsetX = (e.clientX - centerX) * 0.05;
    offsetY = (e.clientY - centerY) * 0.05;
  });

  resizeCanvas();
  createStars();
  drawStars();

  window.addEventListener('resize', () => {
    resizeCanvas();
    createStars();
  });
});
