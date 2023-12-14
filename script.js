const questions = {
    easy: [
        {
            question: "Qual é a capital do Brasil?",
            options: ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
            correctAnswer: "Brasília"
        },
        {
            question: "Qual é o maior planeta do sistema solar?",
            options: ["Marte", "Vênus", "Júpiter", "Saturno"],
            correctAnswer: "Júpiter"
        },
        {
            question: "Qual é a capital do Japão?",
            options: ["Tóquio", "Osaka", "Quioto", "Nagoya"],
            correctAnswer: "Tóquio"
        },
        {
            question: "Qual é o maior oceano do mundo?",
            options: ["Oceano Atlântico", "Oceano Índico", "Oceano Ártico", "Oceano Pacífico"],
            correctAnswer: "Oceano Pacífico"
        }
    ],
    medium: [
        {
            question: "Quem escreveu 'Dom Quixote'?",
            options: ["Miguel de Cervantes", "William Shakespeare", "Friedrich Nietzsche", "Charles Dickens"],
            correctAnswer: "Miguel de Cervantes"
        },
        {
            question: "Qual é o símbolo químico para o ouro?",
            options: ["Ag", "Fe", "Au", "Hg"],
            correctAnswer: "Au"
        },
        {
            question: "Quem foi o primeiro presidente dos Estados Unidos?",
            options: ["Thomas Jefferson", "Benjamin Franklin", "John Adams", "George Washington"],
            correctAnswer: "George Washington"
        },
        {
            question: "Qual é a fórmula química da água?",
            options: ["H2O2", "H3O", "CO2", "H2O"],
            correctAnswer: "H2O"
        }
    ],
    hard: [
        {
            question: "Quantos continentes existem no mundo?",
            options: ["3", "5", "6", "7"],
            correctAnswer: "7"
        },
        {
            question: "Qual é a maior cordilheira do mundo?",
            options: ["Cordilheira dos Andes", "Cordilheira dos Himalaias", "Cordilheira dos Alpes", "Cordilheira dos Apalaches"],
            correctAnswer: "Cordilheira dos Himalaias"
        },
        {
            question: "Qual é a distância média da Terra à Lua em quilômetros?",
            options: ["384,400 km", "299,792,458 km", "149,600,000 km", "6378 km"],
            correctAnswer: "384,400 km"
        },
        {
            question: "Qual é o elemento químico mais abundante na crosta terrestre?",
            options: ["Oxigênio", "Silício", "Ferro", "Alumínio"],
            correctAnswer: "Oxigênio"
        }
    ]
};


let currentQuestionIndex = 0;
let score = 0;
let currentLevel = 'easy';
    //oiufcasiod
const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextButton = document.getElementById('next-button');
const resultElement = document.getElementById('result');
const levelSelect = document.getElementById('level');
const restartButton = document.getElementById('restart-button');

restartButton.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(questions[currentLevel][currentQuestionIndex]);
    resultElement.textContent = '';
    nextButton.disabled = false;
    restartButton.style.display = 'none';
    questionTextElement.style.display = 'block';
    optionsContainer.style.display = 'block';
});

levelSelect.addEventListener('change', () => {
    currentLevel = levelSelect.value;
    currentQuestionIndex = 0;
    score = 0;
    showQuestion(questions[currentLevel][currentQuestionIndex]);
    resultElement.textContent = '';
    nextButton.disabled = false;
});

function showQuestion(question) {
    questionTextElement.textContent = question.question;
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('button');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => checkAnswer(option, question.correctAnswer));
        optionsContainer.appendChild(optionElement);
    });
}

function checkAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[currentLevel].length) {
        showQuestion(questions[currentLevel][currentQuestionIndex]);
    } else {
        showResult();
    }
}

function showResult() {
    questionTextElement.style.display = 'none';
    optionsContainer.style.display = 'none';
    nextButton.style.display = 'none';
    restartButton.style.display = 'block'; // Exibir o botão de reiniciar
    resultElement.textContent = `Você acertou ${score} de ${questions[currentLevel].length} perguntas!`;
}

nextButton.addEventListener('click', () => {
    if (currentQuestionIndex < questions[currentLevel].length) {
        showQuestion(questions[currentLevel][currentQuestionIndex]);
    }
});

showQuestion(questions[currentLevel][currentQuestionIndex]);
