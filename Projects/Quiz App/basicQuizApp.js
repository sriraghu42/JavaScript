const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: "Paris"
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        correct: "Leonardo da Vinci"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Jupiter", "Mars", "Saturn"],
        correct: "Jupiter"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextQuestionButton = document.getElementById('next-question');
const resultElement = document.getElementById('result');

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = '';

    currentQuestion.options.forEach(option => {
        const li = document.createElement('li');
        li.textContent = option;
        li.addEventListener('click', () => selectOption(option));
        optionsElement.appendChild(li);
    });
}

function selectOption(selectedOption) {
    const currentQuestion = quizData[currentQuestionIndex];
    if (selectedOption === currentQuestion.correct) {
        score++;
    }
    nextQuestionButton.disabled = false;
}

nextQuestionButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
    nextQuestionButton.disabled = true;
});

function showResult() {
    quizContainer.style.display = 'none';
    resultElement.style.display = 'block';
    resultElement.textContent = `You scored ${score} out of ${quizData.length}`;
}

loadQuestion();
