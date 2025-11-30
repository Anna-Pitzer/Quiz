window.addEventListener("load", () => {
    document.body.classList.add("loaded");

    setTimeout(() => {
        const loader = document.getElementById("loading");
        if (loader) loader.style.display = "none";
    }, 800);
});

function nextPage() {
    const main = document.querySelector('main');
    main.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    main.style.opacity = '0';
    main.style.transform = 'translateY(-30px)';
    
    setTimeout(() => {
        window.location.href = "menu.html";
    }, 500);
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

