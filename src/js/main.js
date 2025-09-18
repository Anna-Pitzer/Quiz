window.addEventListener("load", () => {
    document.body.classList.add("loaded");

    setTimeout(() => {
        const loader = document.getElementsById("loading");
        if (loader) loader.style.display = "none";
    }, 800);
});

function nextPage() {
    window.location.href = "game.html";
}

