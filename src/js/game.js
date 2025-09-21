document.addEventListener("DOMContentLoaded", () => {
    let userResp = [];
    (function() {
        const questions = [{
            number: "Question 1",
            question: `Choose the correct option to fill up the blank spaces in the following phrase: "I .... having some problems, so I .... to debug the code (to be/have)`,
            options: ["A- were/has", "B- was/has", "C- was/had", "D- were/have", "E- were/having"],
            correct:"C",
            correctAns: `Resposta correta é "was" e "had". Para a primeira lacuna, usamos "was" porque o sujeito é "I" e estamos falando de uma ação no passado contínuo, então fica "I was having some problems". Para a segunda lacuna, precisamos da expressão "had to" que significa "tive que" ou "precisei", indicando necessidade no passado. A frase completa fica: "I was having some problems, so I had to debug the code" (Eu estava tendo alguns problemas, então tive que depurar o código).`
        }, {
            number: "Question 2",
            question: `Choose the correct option to fill up the blank spaces in the following phrase: I …… to backup my files, but there …… any space left (try/to be)`,
            options: ["A- try/are", "B- tried/isn’t", "C- tried/was", "D- try/weren’t", "E- tried/wasn’t"],
            correct:"E",
            correctAns: `Resposta "tried" e "isn't". Usamos "tried" porque a pessoa está contando sobre uma tentativa que já aconteceu no passado - ela tentou fazer backup dos arquivos. Para a segunda lacuna, mesmo que a primeira parte esteja no passado, o fato de não haver espaço é uma situação atual, então usamos "isn't" (is not). Além disso, "space" é uma palavra incontável, por isso usamos "is" e não "are". A frase fica: "I tried to backup my files, but there isn't any space left" (Eu tentei fazer backup dos meus arquivos, mas não há mais espaço).`
        }, {
            number: "Question 3",
            question: `Choose the correct option to fill up the blank spaces in the following phrase: Once i ….. his password, I ….. take a look at his projects. (get/can)`,
            options: ["A- got/can", "B- got/could", "C- gotten/could", "D- get/could", "E- gotten/can"],
            correct:"B",
            correctAns: `Resposta é "got" e "could". A palavra "once" (uma vez que/depois que) indica que estamos falando de algo que aconteceu no passado, então usamos "got" que é o passado de "get". Como a primeira parte está no passado, mantemos a concordância temporal na segunda parte usando "could" (passado de "can"), que indica uma possibilidade que existia naquele momento do passado. A frase completa é: "Once I got his password, I could take a look at his projects" (Uma vez que consegui a senha dele, pude dar uma olhada nos projetos dele).`
        }, {
            number: "Question 4",
            question: `Choose the correct option to fill up the blank spaces in the following phrase: She …… listening to me, so i ……. on telling her the truth. (to be/give up)`,
            options: ["A- wasn’t/gave up", "B- were/give up", "C- was/given up", "D- wasn’t/give up", "E- weren’t/gave up"],
            correct:"A",
            correctAns: `Resposta correta é "wasn't" e "gave up". Para a primeira lacuna, como o sujeito é "she" e queremos dizer que ela não estava ouvindo, usamos "wasn't listening" (was not listening). Para a segunda parte, temos o phrasal verb "give up on" que significa "desistir de". Como estamos narrando algo no passado, usamos "gave up" (passado de "give up"). A frase fica: "She wasn't listening to me, so I gave up on telling her the truth" (Ela não estava me ouvindo, então desisti de contar a verdade para ela).`
        }, {
            number: "Question 5",
            question: `Choose the correct option to fill up the blank spaces in the following phrase: They were …… about the project. It seems their ideas ….. matching very well. (discuss/to be)`,
            options: ["A- discussed/are", "B- discussing/was", "C- discuss/is", "D- discussed/is", "E- discussing/weren’t"],
            correct:"E",
            correctAns: `Resposta é "discussing" e "weren't". Na primeira lacuna, já temos "were", então precisamos do verbo principal no gerúndio (-ing) para formar o passado contínuo: "were discussing" (estavam discutindo). Para a segunda lacuna, o contexto sugere que as ideias deles não estavam combinando bem - por isso usamos a negativa "weren't". Como "ideas" é plural, usamos "weren't" (were not) e não "wasn't". A frase completa é: "They were discussing about the project. It seems their ideas weren't matching very well" (Eles estavam discutindo sobre o projeto. Parece que as ideias deles não estavam combinando muito bem).`
        }];

        const NumberQuestion = document.getElementById("numberQ");
        const TextQuestion = document.getElementById("text");
        const opt1 = document.getElementById("opts1");
        const opt2 = document.getElementById("opts2");
        const opt3 = document.getElementById("opts3");
        const opt4 = document.getElementById("opts4");
        const opt5 = document.getElementById("opts5");
        const btnVerify =  document.getElementById("btnS");
        const wrongAnswer = document.getElementById("correctAns");
        const correction = document.getElementById("ans");
        const btnContinue = document.getElementById("btnC");

        let i = 0;

        function printQuestions() {
            NumberQuestion.textContent = questions[i].number;
            TextQuestion.textContent = questions[i].question;
            opt1.textContent = questions[i].options[0];
            opt2.textContent = questions[i].options[1];
            opt3.textContent = questions[i].options[2];
            opt4.textContent = questions[i].options[3];
            opt5.textContent = questions[i].options[4];

            const Buttons = document.querySelectorAll('input[type="radio"]');
            Buttons.forEach(radio => {
                radio.checked = false; 
            });
        }

        function getSelectedAnswer() {
            const Buttons = document.querySelectorAll('input[type="radio"]');
            for (let radio of Buttons) {
                if (radio.checked) {
                    return radio.value;
                }
            }
            return null;
        }

        function finishQuiz() {
            localStorage.setItem('userResponses', JSON.stringify(userResp));
            window.location.href = "final.html";
        }

        function printCorrectAnswer() {
            wrongAnswer.style.visibility = 'visible';
            correction.textContent = questions[i].correctAns;

            btnContinue.onclick = () => {
                wrongAnswer.style.visibility = 'hidden';

                if (i < questions.length - 1) {
                    i++;
                    printQuestions();
                } else {
                    finishQuiz();
                }
            };
        }

        function verifyAnswer() {
            const selectedAnswer = getSelectedAnswer();

            if (selectedAnswer === null) {
                alert("Por favor, selecione uma resposta."); return;
            } 

            if (selectedAnswer === questions[i].correct) {
                userResp.push(selectedAnswer);
                localStorage.setItem('userResponses', JSON.stringify(userResp));
                if (i < questions.length - 1) {
                    i++
                    printQuestions();
                } else {
                    finishQuiz();
                }
            } else {
                printCorrectAnswer();
            }
        };

        btnVerify.onclick = verifyAnswer;

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                wrongAnswer.style.visibility === 'visible' ? btnContinue.click() : verifyAnswer();
            }
        });

        printQuestions();
    })();
});