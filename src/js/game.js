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
            question: `Choose the correct form: I live on the ___________ floor of the building.`,
            options: ["A- thirteen", "B- thirteenth", "C- thirthteen", "D- thirteenst", "E- thirteent"],
            correct:"B",
            correctAns: `A resposta correta é "thirteenth". Quando falamos sobre andares de prédios, usamos ordinal numbers (números ordinais), que indicam posição ou ordem. O número cardinal "thirteen" (treze) se transforma no ordinal "thirteenth" (décimo terceiro). Os ordinais são usados para: andares, posições em competições, datas, sequências. A frase completa fica: "I live on the thirteenth floor of the building" (Eu moro no décimo terceiro andar do prédio).`
        }, {
            number: "Question 3",
            question: `Read the text and choose the correct option: "My neighbor has a beautiful garden. _____ waters the plants every morning. _____ has many colorful flowers and _____ attract butterflies."`,
            options: ["A- He / It / they", "B- She / They / it", "C-  He / He / they", "D- It / She / they", "E- He / It / it"],
            correct:"A",
            correctAns: `A resposta correta é "He / It / they". Para a primeira lacuna, usamos "He" porque "my neighbor" (meu vizinho) se refere a uma pessoa do sexo masculino. Para a segunda lacuna, usamos "It" porque "the garden" (o jardim) é um objeto/lugar, e objetos sempre usam o pronome "it". Para a terceira lacuna, usamos "they" porque "many colorful flowers" (muitas flores coloridas) está no plural, e o pronome para substantivos plurais é "they". A frase completa fica: "My neighbor has a beautiful garden. He waters the plants every morning. It has many colorful flowers and they attract butterflies.`
        }, {
            number: "Question 4",
            question: `Complete the sentence correctly: My grandmother is ___________ years old today.`,
            options: ["A- eighty-five", "B- eightieth-five", "C- eighty-fiveth", "D- eightyfive", "E- eighty-fifth"],
            correct:"A",
            correctAns: `A resposta correta é "eighty-five". Quando falamos sobre idade (years old), sempre usamos cardinal numbers (números cardinais), nunca ordinais. Os números compostos de 21 a 99 são escritos com hífen entre as dezenas e as unidades: twenty-one, thirty-five, eighty-five. A frase completa fica: "My grandmother is eighty-five years old today" (Minha avó tem oitenta e cinco anos hoje). Nunca use "th" ou "st" em idades.`
        }, {
            number: "Question 5",
            question: `Choose the correct option to fill up the blank spaces in the following phrase: I …… to backup my files, but there …… any space left (try/to be)`,
            options: ["A- try/are", "B- tried/isn't", "C- tried/was", "D- try/weren't", "E- tried/wasn't"],
            correct:"E",
            correctAns: `Resposta correta é "tried" e "wasn't". Usamos "tried" porque a pessoa está contando sobre uma tentativa que já aconteceu no passado - ela tentou fazer backup dos arquivos. Para a segunda lacuna, mantemos a concordância temporal no passado usando "wasn't" (was not). Como "space" é uma palavra incontável (uncountable), usamos o singular "was" e não "were". A frase completa fica: "I tried to backup my files, but there wasn't any space left" (Eu tentei fazer backup dos meus arquivos, mas não havia mais espaço).`
        }, {
            number: "Question 6",
            question: `Select the correct option: This is my ___________ time visiting Paris.`,
            options: ["A- three", "B- third", "C- threeth", "D- thirdth", "E- tree"],
            correct:"B",
            correctAns: `A resposta correta é "third". Quando contamos quantas vezes algo aconteceu (primeira vez, segunda vez, terceira vez), usamos ordinal numbers. "Three" é o número cardinal (três), e "third" é o ordinal (terceiro/terceira). Os principais ordinais são: first (1st), second (2nd), third (3rd), fourth (4th), fifth (5th). A frase completa fica: "This is my third time visiting Paris" (Esta é minha terceira vez visitando Paris).`
        }, {
            number: "Question 7",
            question: `Which sentence uses the personal pronouns correctly?`,
            options: ["A- The boys are playing soccer. He are having fun", "B-  Maria is my teacher. It teaches English very well", "C- The cat is sleeping. She is very tired", "D- My parents are traveling. They will return tomorrow", "E- The book is interesting. He has many pictures"],
            correct:"D",
            correctAns: `A resposta correta é "My parents are traveling. They will return tomorrow." porque "my parents" (meus pais) está no plural, então o pronome correto é "They" (eles/elas). As outras alternativas estão incorretas: a alternativa (a) usa "He" para "boys" que é plural; a alternativa (b) usa "It" para "Maria" que é uma pessoa; a alternativa (c) usa "She" para "cat" sendo que não sabemos o sexo do animal; e a alternativa (e) usa "He" para "book" que é um objeto. A frase correta demonstra a concordância adequada entre o sujeito plural e o pronome "They".`
        }, {
            number: "Question 8",
            question: `Choose the best linking word: I studied hard, ___________ I passed the exam.`,
            options: ["A- although", "B- but", "C- so", "D- because", "E- however"],
            correct:"C",
            correctAns: `A resposta correta é "so" (então, portanto). Este linking word indica consequência ou resultado. A pessoa estudou muito (causa) e como resultado passou no exame (consequência). A estrutura é: CAUSA + SO + RESULTADO. As outras opções não funcionam: "although" (embora) mostra contraste, "but" (mas) mostra oposição, e "because" (porque) introduz a causa, não o resultado. A frase completa fica: "I studied hard, so I passed the exam" (Eu estudei bastante, então passei no exame).`
        }, {
            number: "Question 9",
            question: `Choose the alternative that correctly completes ALL the blanks: "_____ am a student. _____ study with my friends and _____ help each other. My teacher is very kind. _____ explains everything clearly."`,
            options: ["A- I / We / we / She", "B- You / They / we / He", "C- I / They / they / It", "D- We / I / they / She", "E- I / I / they / They"],
            correct:"A",
            correctAns: `A resposta correta é "I / We / we / She". Para a primeira lacuna, usamos "I" porque a pessoa está falando sobre si mesma ("I am a student" - Eu sou um estudante). Para a segunda lacuna, usamos "We" porque agora ela está incluindo os amigos ("We study" - Nós estudamos). Para a terceira lacuna, continuamos usando "we" (em minúscula por estar no meio da frase) referindo-se ao grupo que se ajuda. Para a quarta lacuna, usamos "She" porque "my teacher" (minha professora) é do sexo feminino e é uma pessoa diferente de quem está falando. A frase completa fica: "I am a student. We study with my friends and we help each other. My teacher is very kind. She explains everything clearly."`
        }, {
            number: "Question 10",
            question: `Complete with the appropriate connector: __________ he is very young, he is very talented.`,
            options: ["A- Because", "B- So", "C- Although", "D- But", "E- However"],
            correct:"C",
            correctAns: `A resposta correta é "Although" (embora, apesar de). Este linking word indica contraste ou oposição entre duas ideias. Normalmente alguém jovem não seria muito talentoso por falta de experiência, mas neste caso, apesar de ser jovem, ele é talentoso. A estrutura é: ALTHOUGH + situação inesperada, resultado surpreendente. "Because" (porque) indicaria causa, "so" (então) indicaria resultado, e "but" (mas) vem no meio da frase, não no início. A frase completa fica: "Although he is very young, he is very talented" (Embora ele seja muito jovem, ele é muito talentoso).`
        }, {
            number: "Question 11",
            question: `Mark the INCORRECT sentence: `,
            options: ["A- I love my family very much", "B- The dog is wagging its tail happily", "C- They are visiting his grandparents today", "D- She forgot her umbrella at home", "E- We need to finish our homework now"],
            correct:"C",
            correctAns: `A resposta correta é a alternativa (c) porque esta frase está INCORRETA. O erro está na falta de concordância entre "They" (eles/elas - plural) e "his" (dele - singular). Quando o sujeito é plural "They", o possessive adjective também deve ser plural, então o correto seria "their grandparents" (os avós deles/delas). A frase deveria ser: "They are visiting their grandparents today." As outras alternativas (a, b, d, e) estão todas corretas: "my family", "its tail", "her umbrella" e "our homework" apresentam concordância adequada entre o sujeito e o possessive adjective.`
        }, {
            number: "Question 12",
            question: `Select the correct linking word: She couldn't go to the party ___________ she had to work.`,
            options: ["A- so", "B- although", "C- but", "D- because", "E- however"],
            correct:"D",
            correctAns: `A resposta correta é "because" (porque). Este linking word introduz a razão ou causa de algo. Ela não pôde ir à festa (resultado) porque tinha que trabalhar (causa). A estrutura é: RESULTADO + BECAUSE + CAUSA. As outras opções não funcionam: "so" (então) introduz resultado, não causa; "although" (embora) mostra contraste; "but" (mas) mostra oposição simples. A frase completa fica: "She couldn't go to the party because she had to work" (Ela não pôde ir à festa porque tinha que trabalhar).`
        }, {
            number: "Question 13",
            question: `Choose the correct option to fill up the blank spaces in the following phrase: Once i ….. his password, I ….. take a look at his projects. (get/can)`,
            options: ["A- got/can", "B- got/could", "C- gotten/could", "D- get/could", "E- gotten/can"],
            correct:"B",
            correctAns: `Resposta é "got" e "could". A palavra "once" (uma vez que/depois que) indica que estamos falando de algo que aconteceu no passado, então usamos "got" que é o passado de "get". Como a primeira parte está no passado, mantemos a concordância temporal na segunda parte usando "could" (passado de "can"), que indica uma possibilidade que existia naquele momento do passado. A frase completa é: "Once I got his password, I could take a look at his projects" (Uma vez que consegui a senha dele, pude dar uma olhada nos projetos dele).`
        }, {
            number: "Question 14",
            question: `Read the text and choose the option that correctly completes ALL the blanks:
            "My best friend lives at number ___________ on Park Avenue. She is ___________ years old, ___________ she looks younger. She has ___________ cats and ___________ dog. She loves animals ___________ they make her happy."`,
            options: ["A- fifteen / thirty / although / two / one / because", "B- thirty / fifteen / so / one / two / although", "C- fifteen / thirty / so / two / one / because", "D- thirty / fifteen / although / one / two / so", "E- fifteen / thirty / but / one / two / because"],
            correct:"A",
            correctAns: `A resposta correta é "fifteen / thirty / although / two / one / because". Para a primeira lacuna, usamos "fifteen" (quinze) para o número da casa. Para a segunda lacuna, "thirty" (trinta) para a idade. Para a terceira lacuna, "although" (embora) porque mostra contraste entre ter 30 anos mas parecer mais jovem. Para a quarta e quinta lacunas, "two cats" (dois gatos) e "one dog" (um cachorro) - sempre use cardinal numbers para quantidades. Para a última lacuna, "because" (porque) introduz a razão pela qual ela ama animais. O texto completo fica: "My best friend lives at number fifteen on Park Avenue. She is thirty years old, although she looks younger. She has two cats and one dog. She loves animals because they make her happy."`
        }, {
            number: "Question 15",
            question: `Choose the correct option to fill up the blank spaces in the following phrase: She …… listening to me, so i ……. on telling her the truth. (to be/give up)`,
            options: ["A- wasn’t/gave up", "B- were/give up", "C- was/given up", "D- wasn’t/give up", "E- weren’t/gave up"],
            correct:"A",
            correctAns: `Resposta correta é "wasn't" e "gave up". Para a primeira lacuna, como o sujeito é "she" e queremos dizer que ela não estava ouvindo, usamos "wasn't listening" (was not listening). Para a segunda parte, temos o phrasal verb "give up on" que significa "desistir de". Como estamos narrando algo no passado, usamos "gave up" (passado de "give up"). A frase fica: "She wasn't listening to me, so I gave up on telling her the truth" (Ela não estava me ouvindo, então desisti de contar a verdade para ela).`
        }, {
            number: "Question 16",
            question: `Complete the sentences with the correct numbers and linking words:
            "I wake up at ___________ o'clock every day. I have breakfast at ___________. I leave home at ___________ o'clock ___________ I need to catch the bus. ___________ the traffic is heavy, I usually arrive on time."
            Options: seven, eight, although, because, six-thirty`,
            options: ["A- six / six-thirty / seven / because / Although", "B- seven / six-thirty / eight / so / Because", "C- six / seven / six-thirty / although / So", "D- seven / eight / six-thirty / although / Because", "E- six / six-thirty / seven / so / Although"],
            correct:"A",
            correctAns: `A resposta correta é "six / six-thirty / seven / because / Although". Para a primeira lacuna, "six o'clock" (seis horas) é o horário de acordar. Para a segunda lacuna, "six-thirty" (seis e meia) é o horário do café - note que horários compostos usam hífen. Para a terceira lacuna, "seven o'clock" (sete horas) é quando sai de casa. Para a quarta lacuna, "because" (porque) introduz a razão de sair cedo: precisa pegar o ônibus. Para a quinta lacuna, "Although" (embora) com letra maiúscula porque inicia a frase, mostrando contraste entre trânsito pesado mas chegar no horário. O texto completo fica: "I wake up at six o'clock every day. I have breakfast at six-thirty. I leave home at seven o'clock because I need to catch the bus. Although the traffic is heavy, I usually arrive on time."`
        }, {
            number: "Question 17",
            question: `Read the sentences and choose the option where ALL possessive adjectives are used correctly: I. The students finished they homework early.
            II. John is washing his car in the garage.
            III. We love our new house very much.
            IV. The bird built its nest on the tree.`,
            options: ["A- Only I and II are correct", "B- Only II and III are correct", "C- Only II, III and IV are correct", "D- Only III and IV are correct", "E- All sentences are correct"],
            correct:"C",
            correctAns: `A resposta correta é "Only II, III and IV are correct" (Apenas II, III e IV estão corretas). A frase I está INCORRETA porque usa "they homework" quando deveria ser "their homework" - "they" é personal pronoun (eles/elas) e não pode vir antes de substantivo, o correto é usar o possessive adjective "their" (deles/delas). A frase II está correta: "his car" (o carro dele - de John). A frase III está correta: "our new house" (nossa casa nova - de nós). A frase IV está correta: "its nest" (seu ninho - do pássaro). Portanto, apenas as frases II, III e IV usam os possessive adjectives corretamente.`
        }, {
            number: "Question 18",
            question: `Choose the correct option to fill up the blank spaces in the following phrase: They were …… about the project. It seems their ideas ….. matching very well. (discuss/to be)`,
            options: ["A- discussed/are", "B- discussing/was", "C- discuss/is", "D- discussed/is", "E- discussing/weren’t"],
            correct:"E",
            correctAns: `Resposta é "discussing" e "weren't". Na primeira lacuna, já temos "were", então precisamos do verbo principal no gerúndio (-ing) para formar o passado contínuo: "were discussing" (estavam discutindo). Para a segunda lacuna, o contexto sugere que as ideias deles não estavam combinando bem - por isso usamos a negativa "weren't". Como "ideas" é plural, usamos "weren't" (were not) e não "wasn't". A frase completa é: "They were discussing about the project. It seems their ideas weren't matching very well" (Eles estavam discutindo sobre o projeto. Parece que as ideias deles não estavam combinando muito bem).`
        }, {
            number: "Question 19",
            question: `Complete the dialogue with the correct possessive adjectives: "Hi, Tom! Is this _____ backpack?"
            "No, that's not _____. _____ backpack is blue. That one belongs to Sarah. It's _____ backpack."`,
            options: ["A- your / mine / My / her", "B- his / yours / His / hers", "C- your / my / Our / his", "D- their / mine / My / their", "E- you / me / My / she"],
            correct:"A",
            correctAns: `A resposta correta é "your / mine / My / her". Para a primeira lacuna, usamos "your" porque Tom está perguntando se a mochila pertence à outra pessoa ("Is this your backpack?" - Esta é sua mochila?). Para a segunda lacuna, usamos "mine" que significa "minha" e é um possessive pronoun usado sozinho, sem substantivo depois. Para a terceira lacuna, usamos "My" porque agora vem o substantivo "backpack" depois, então precisamos do possessive adjective. Para a quarta lacuna, usamos "her" porque a mochila pertence à Sarah, que é do sexo feminino. O diálogo completo fica: "Hi, Tom! Is this your backpack?" "No, that's not mine. My backpack is blue. That one belongs to Sarah. It's her backpack."`
        }, {
            number: "Question 20",
            question: `Choose the alternative that uses numbers and linking words correctly:
            I. She finished in the twenty-first position.
            II. He bought three apples, so he ate two bananas.
            III. Although it was cold, they went swimming.
            IV. I'm hungry because I will make lunch.`,
            options: ["A- Only I and II are correct", "B- Only I and III are correct", "C- Only II and IV are correct", "D- Only III and IV are correct", "E- All sentences are correct"],
            correct:"B",
            correctAns: `A resposta correta é "Only I and III are correct" (Apenas I e III estão corretas). A frase I está CORRETA: "twenty-first" é a forma correta do ordinal number (vigésimo primeiro), usado para indicar posição. A frase II está INCORRETA: o linking word "so" (então) indica resultado/consequência, mas não faz sentido dizer que porque ele comprou maçãs, ele comeu bananas - não há relação lógica de causa e efeito. A frase III está CORRETA: "Although" (embora) mostra corretamente o contraste entre estar frio e mesmo assim irem nadar. A frase IV está INCORRETA: "because" (porque) introduz causa, mas a frase está invertida - deveria ser "I will make lunch because I'm hungry" (Vou fazer almoço porque estou com fome). Portanto, apenas as frases I e III usam numbers e linking words corretamente.`
        }];

        const NumberQuestion = document.getElementById("numberQ");
        const TextQuestion = document.getElementById("text");
        const opt1 = document.getElementById("opts1");
        const opt2 = document.getElementById("opts2");
        const opt3 = document.getElementById("opts3");
        const opt4 = document.getElementById("opts4");
        const opt5 = document.getElementById("opts5");
        const btnVerify =  document.getElementById("btnS");
        const overlay = document.getElementById("overlay");
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
            wrongAnswer.classList.add('show');
            overlay.classList.add('show');
            correction.textContent = questions[i].correctAns;

            btnContinue.onclick = () => {
                wrongAnswer.classList.remove('show');
                overlay.classList.remove('show');

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
                alert("Por favor, selecione uma resposta."); 
                return;
            } 

            if (selectedAnswer === questions[i].correct) {
                userResp.push(selectedAnswer);
                localStorage.setItem('userResponses', JSON.stringify(userResp));
                if (i < questions.length - 1) {
                    i++;
                    printQuestions();
                } else {
                    finishQuiz();
                }
            } else {
                printCorrectAnswer();
            }
        }

        btnVerify.onclick = verifyAnswer;

        overlay.onclick = () => {
            wrongAnswer.classList.remove('show');
            overlay.classList.remove('show');
        };

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                if (wrongAnswer.classList.contains('show')) {
                    btnContinue.click();
                } else {
                    verifyAnswer();
                }
            }

            if (e.key === 'Escape' && wrongAnswer.classList.contains('show')) {
                wrongAnswer.classList.remove('show');
                overlay.classList.remove('show');
            }
        });

        document.addEventListener('mousemove', (e) => {
            const imgs = document.querySelectorAll('.img2, .img3');
            const x = e.clientX / window.innerWidth;
            const y = e.clientY / window.innerHeight;
            
            imgs.forEach((img, index) => {
                const speed = (index + 1) * 12;
                const xMove = (x - 0.5) * speed;
                const yMove = (y - 0.5) * speed;
                
                img.style.transform = `translate(${xMove}px, ${yMove}px)`;
            });
        });

        printQuestions();
    })();
});