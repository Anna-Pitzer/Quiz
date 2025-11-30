document.addEventListener("DOMContentLoaded", () => {
    const span = document.getElementById("userResult");
    const badge = document.getElementById("badge");
    const savedResponses = localStorage.getItem('userResponses');
    
    if (savedResponses) {
        const userResp = JSON.parse(savedResponses);
        const score = userResp.length;
        
        let currentScore = 0;
        const interval = setInterval(() => {
            if (currentScore <= score) {
                span.textContent = currentScore;
                currentScore++;
            } else {
                clearInterval(interval);
            }
        }, 200);

        let badgeText = "";
        let badgeColor = "";
        
        if (score === 20) {
            badgeText = "🏆 Perfeito!";
            badgeColor = "#FFD700";
        } else if (score >= 10) {
            badgeText = "⭐ Muito Bem!";
            badgeColor = "#96acd9";
        } else if (score >= 5) {
            badgeText = "💪 Continue Tentando!";
            badgeColor = "#96acd9";
        } else {
            badgeText = "📚 Estude Mais!";
            badgeColor = "#96acd9";
        }
        
        badge.textContent = badgeText;
        badge.style.backgroundColor = badgeColor;
        
        if (score === 20) {
            badge.style.color = "#040926";
        }
    } else {
        span.textContent = "0";
        badge.textContent = "❌ Erro";
    }

    document.addEventListener('mousemove', (e) => {
        const imgs = document.querySelectorAll('.img1, .img2, .img3');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        imgs.forEach((img, index) => {
            const speed = (index + 1) * 15;
            const xMove = (x - 0.5) * speed;
            const yMove = (y - 0.5) * speed;
            
            const currentTransform = img.style.transform || '';
            const scaleMatch = currentTransform.match(/scale[^)]*\)/g);
            const scaleXMatch = currentTransform.match(/scaleX[^)]*\)/g);
            
            let baseTransform = '';
            if (scaleXMatch) baseTransform += scaleXMatch[0] + ' ';
            if (scaleMatch) baseTransform += scaleMatch[0] + ' ';
            
            img.style.transform = `${baseTransform}translate(${xMove}px, ${yMove}px)`;
        });
    });

    if (savedResponses) {
        const userResp = JSON.parse(savedResponses);
        if (userResp.length === 20) {
            createConfetti();
        }
    }
});

function createConfetti() {
    const colors = ['#96acd9', '#FFD700', '#ff6b6b', '#4ecdc4', '#95e1d3'];
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-10px';
            confetti.style.borderRadius = '50%';
            confetti.style.zIndex = '9999';
            confetti.style.pointerEvents = 'none';
            document.body.appendChild(confetti);

            const fall = confetti.animate([
                { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                { transform: `translateY(${window.innerHeight + 20}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
            ], {
                duration: 2000 + Math.random() * 1000,
                easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
            });

            fall.onfinish = () => confetti.remove();
        }, i * 30);
    }
}