const questions = [
    {
        question: "Which is the largest animal",
        answers: [
            { text: "Shark", correct: false},
            { text: "blue whale", correct: true},
            { text: "elephant", correct: false},
            { text: "giraffe", correct: false},
        ]
    },

    {
        question: "Which is the smallest contry",
        answers: [
            { text: "Shark", correct: false},
            { text: "vatican", correct: true},
            { text: "elephant", correct: false},
            { text: "giraffe", correct: false},
        ]
    },

    {
        question: "click green",
        answers: [
            { text: "green", correct: true},
            { text: "blue whale", correct: false},
            { text: "elephant", correct: false},
            { text: "giraffe", correct: false},
        ]
    },

    {
        question: "click yellow",
        answers: [
            { text: "green", correct: false},
            { text: "blue whale", correct: false},
            { text: "yellow", correct: true},
            { text: "giraffe", correct: false},
        ]
    }

];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answerButton.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
    }else{
        selectedBtn.classList.add("incorrect");
    }
}

startQuiz();