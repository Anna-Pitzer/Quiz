const words = [
    "verb", "noun", "adjective", "adverb", "sentence", 
    "phrase", "clause", "tense", "present", "past", 
    "future", "singular", "plural", "negative", "question",
    "cardinal", "ordinal", "thirteen", "thirteenth", "twenty", 
    "twentieth", "fifty", "hundred", "thousand", "million",
    "although", "because", "however", "therefore", "moreover", 
    "furthermore", "consequently", "meanwhile", "nevertheless", "contrast",
    "debug", "array", "function", "variable", "algorithm", 
    "syntax", "compiler", "method", "object", "class",
    "string", "boolean", "integer", "loop", "conditional",
    "framework", "library", "module", "import", "export"
];

let word = "";
let guessed = [];
let attempts = 6;
let gamesWon = 0;
const hangmanParts = ["head", "body", "leftArm", "rightArm", "leftLeg", "rightLeg"];

const savedScore = localStorage.getItem('hangmanScore');
if (savedScore) {
    gamesWon = parseInt(savedScore);
    document.querySelector('.result').textContent = gamesWon;
}

function initGame() {
    word = words[Math.floor(Math.random() * words.length)].toLowerCase();
    guessed = Array(word.length).fill("_");
    attempts = 6;
    
    document.getElementById("word").textContent = guessed.join(" ");
    document.getElementById("attempts").textContent = attempts;
    document.getElementById("message").textContent = "";
    document.getElementById("message").className = "";
    
    hangmanParts.forEach(part => {
        document.getElementById(part).style.opacity = "0";
    });
    
    const lettersDiv = document.getElementById("letters");
    lettersDiv.innerHTML = "";
    
    for (let i = 97; i <= 122; i++) {
        const btn = document.createElement("button");
        btn.textContent = String.fromCharCode(i);
        btn.onclick = () => handleGuess(btn.textContent, btn);
        lettersDiv.appendChild(btn);
    }
}

function updateHangman() {
    const partIndex = 6 - attempts - 1;
    if (partIndex >= 0 && partIndex < hangmanParts.length) {
        const part = document.getElementById(hangmanParts[partIndex]);
        part.style.transition = "opacity 0.5s ease";
        part.style.opacity = "1";
    }
}

function handleGuess(letter, button) {
    button.disabled = true;

    if (word.includes(letter)) {
        button.classList.add("correct");
        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) guessed[i] = letter;
        }
    } else {
        button.classList.add("wrong");
        attempts--;
        updateHangman();
    }

    document.getElementById("word").textContent = guessed.join(" ");
    document.getElementById("attempts").textContent = attempts;

    if (!guessed.includes("_")) {
        const messageEl = document.getElementById("message");
        messageEl.textContent = "🎉 You Win!";
        messageEl.className = "win";
        disableAll();
        gamesWon++;
        localStorage.setItem('hangmanScore', gamesWon);
        document.querySelector('.result').textContent = gamesWon;
        createConfetti();
    } else if (attempts === 0) {
        const messageEl = document.getElementById("message");
        messageEl.textContent = `😢 You Lose! Word: ${word.toUpperCase()}`;
        messageEl.className = "lose";
        disableAll();
    }
}

function disableAll() {
    document.querySelectorAll("#letters button").forEach(btn => btn.disabled = true);
}

function resetGame() {
    initGame();
}

function createConfetti() {
    const colors = ['#96acd9', '#5c7fc7', '#4ecdc4', '#ff6b6b', '#95e1d3'];
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

document.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    
    const orb = document.querySelector('.gradient-orb');
    const xMove = (x - 0.5) * 30;
    const yMove = (y - 0.5) * 30;
    
    orb.style.transform = `translate(${xMove}px, ${yMove}px)`;
});

initGame();