const button = document.getElementById('clickMeButton');
const fireworksCanvas = document.getElementById('fireworks');
const ctx = fireworksCanvas.getContext('2d');

button.addEventListener('click', function() {
    button.textContent = "Fuck You!";
    fireworks();
});

function fireworks() {
    const particles = [];
    const numParticles = 100;
    const particleColors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];

    for (let i = 0; i < numParticles; i++) {
        const x = Math.random() * fireworksCanvas.width;
        const y = Math.random() * fireworksCanvas.height;
        const size = Math.random() * 5 + 1;
        const color = particleColors[Math.floor(Math.random() * particleColors.length)];
        const speed = Math.random() * 3 + 1;
        const direction = Math.random() * Math.PI * 2;

        particles.push({ x, y, size, color, speed, direction });
    }

    setInterval(function() {
        ctx.clearRect(0, 0, fireworksCanvas.width, fireworksCanvas.height);

        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];

            p.x += Math.cos(p.direction) * p.speed;
            p.y += Math.sin(p.direction) * p.speed;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2, false);
            ctx.fillStyle = p.color;
            ctx.fill();

            if (p.x < 0 || p.x > fireworksCanvas.width || p.y < 0 || p.y > fireworksCanvas.height) {
                particles.splice(i, 1);
                i--;
            }
        }
    }, 20);
}