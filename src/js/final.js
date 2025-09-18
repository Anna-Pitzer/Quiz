document.addEventListener("DOMContentLoaded", () => {
    const span = document.getElementById("userResult");
    const savedResponses = localStorage.getItem('userResponses');
    const userResp = JSON.parse(savedResponses);

    span.innerHTML = userResp.length;
});