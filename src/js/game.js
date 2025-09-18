document.addEventListener("DOMContentLoaded", () => {
    let userResp = [];
    (function() {
        const questions = [{
            number: "Question 1",
            question: `Choose the correct option to fill up the blank spaces in the following phrase: "I .... having some problems, so I .... to debug the code (to be/have)`,
            options: ["A- were/has", "B- was/has", "C- was/had", "D- were/have", "E- were/having"],
            correct:"C",
            correctAns: "A frase “I .... having some problems, so I .... to debug the code” exige o uso correto dos tempos verbais em inglês. Na primeira lacuna, usamos o passado contínuo (“was having”), que indica uma ação em andamento no passado, ou seja, “Eu estava tendo alguns problemas”. Na segunda lacuna, usamos o passado simples de obrigação (“had to”), que indica que, devido aos problemas, foi necessário depurar o código. Portanto, a opção correta é C – was/had, pois combina o tempo contínuo para a ação em progresso e o passado simples para a ação obrigatória que se seguiu. As outras opções estão incorretas porque usam formas verbais inadequadas para o contexto da frase."
        }, {
            number: "Question 2",
            question: `lorem`,
            options: ["A- ", "B- ", "C- ", "D- ", "E- "],
            correct:"A",
            correctAns: ""
        }, {
            number: "Question 3",
            question: `lorem`,
            options: ["A- ", "B- ", "C- ", "D- ", "E- "],
            correct:"A",
            correctAns: ""
        }, {
            number: "Question 4",
            question: `lorem`,
            options: ["A- ", "B- ", "C- ", "D- ", "E- "],
            correct:"A",
            correctAns: ""
        }, {
            number: "Question 5",
            question: `lorem`,
            options: ["A- ", "B- ", "C- ", "D- ", "E- "],
            correct:"A",
            correctAns: ""
        },];

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