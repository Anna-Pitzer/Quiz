function navigate(page) {
document.querySelector('.container').style.animation = 'slideOut 0.5s ease-in forwards';

    setTimeout(() => {
        window.location.href = page;
    }, 500);
}

const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        to {
            opacity: 0;
            transform: translateY(-50px);
        }
    }
`;
document.head.appendChild(style);

document.addEventListener('mousemove', (e) => {
    const imgs = document.querySelectorAll('.float-img');
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    imgs.forEach((img, index) => {
        const speed = (index + 1) * 20;
        const xMove = (x - 0.5) * speed;
        const yMove = (y - 0.5) * speed;
        img.style.transform = `translate(${xMove}px, ${yMove}px)`;
    });
});