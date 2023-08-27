const questions = [
    {
        question: "What is the value of x in the equation 3x + 7 = 22?",
        answers: [
            { text: "7", correct: false},
            { text: "5", correct: true},
            { text: "3", correct: false},
            { text: "9", correct: false},
        ]
    },
    {
        question: "Which of the following is a prime number?",
        answers: [
            { text: "31", correct: true},
            { text: "16", correct: false},
            { text: "27", correct: false},
            { text: "21", correct: false},
        ]
    },
    {
        question: "Simplify the expression 4x - 2(2x - 5) + 3x",
        answers: [
            { text: "-5x + 10", correct: false},
            { text: " 5x - 10", correct: false},
            { text: "-5x - 10", correct: false},
            { text: "5x + 10", correct: true},
        ]
    },
    {
        question: "Solve the equation 2x + 5 = 17",
        answers: [
            { text: "X = 9", correct: false},
            { text: "X = 6", correct: true},
            { text: "X = 5", correct: false},
            { text: "x = 11", correct: false},
        ]
    }, 
    {
        question: "What is the sum of the interior angles of a triangle?",
        answers: [
            { text: "270 degrees", correct: false},
            { text: "180 degrees", correct: true},
            { text: "360 degrees", correct: false},
            { text: "90 degrees", correct: false},
        ]
    },
    {
        question: "Given the following set of data: 4, 6, 8, 10, 12. What is the median?",
        answers: [
            { text: "8", correct: true},
            { text: "10", correct: false},
            { text: "12", correct: false},
            { text: "6", correct: false},
        ]
    },
    {
        question: "Simplify the expression: 2(3x + 4) - 3(2x - 1)",
        answers: [
            { text: "6x - 10", correct: false},
            { text: "6x - 2", correct: false},
            { text: "6x + 10", correct: false},
            { text: "6x + 2", correct: true},
        ]
    },
    {
        question: "Which of the following numbers is an irrational number?",
        answers: [
            { text: "√2", correct: false},
            { text: "1.25", correct: true},
            { text: "o.50", correct: false},
            { text: "2.5", correct: false},
        ]
    },  
    {
        question: "Which of the following is the reciprocal of 3/4?",
        answers: [
            { text: "7/4", correct: false},
            { text: "4/7", correct: false},
            { text: "4/3", correct: true},
            { text: "3/4", correct: false},
        ]
    },
    {
        question: "Solve the equation: 2x^2 - 5x - 2 = 0",
        answers: [
            { text: "x = -1/2, x = 2", correct: true},
            { text: "x = 1/2, x = 2", correct: false},
            { text: "x = -1/2, x = -2", correct: false},
            { text: "x = 1/2, x = -2", correct: false},
        ]
    },
    {
        question: "Simplify the expression: 3(x^2 - 2x) + 2(3x - 4)",
        answers: [
            { text: "9x^2 - 2x + 10", correct: false},
            { text: "3x^2 + 9x + 10", correct: false},
            { text: "9x^2 + 9x - 10", correct: false},
            { text: "3x^2 + 9x - 10", correct: true},
        ]
    },
    {
        question: "Factorize the expression: 25x^2 - 16",
        answers: [
            { text: "(5x + 4)(5x + 4)", correct: false},
            { text: "(5x + 4)(5x - 4)", correct: true},
            { text: " (5x + 16)(5x - 16)", correct: false},
            { text: "(5x - 16)(5x - 16)", correct: false},
        ]
    },
    {
        question: "Which of the following is the standard form of a quadratic equation?",
        answers: [
            { text: "y = mx + b", correct: false},
            { text: "y = ax^2 + bx + c", correct: true},
            { text: "y = kx", correct: false},
            { text: "y = a/x + b", correct: false},
        ]
    },
    {
        question: "Solve for x: 5x + 2 = 2(x - 3) + 4",
        answers: [
            { text: "x = 2", correct: false},
            { text: "x = -2", correct: false},
            { text: "x = -1", correct: false},
            { text: "x = 3", correct: true},
        ]
    },
    {
        question: "Which of the following is the slope of the line passing through the points (2, 4) and (5, 9)?",
        answers: [
            { text: "4", correct: false},
            { text: "1", correct: false},
            { text: "5", correct: false},
            { text: "3", correct: true},
        ]
    },
    {
        question: "Solve the equation: 4(2x - 3) = 3(x + 2) + 5",
        answers: [
            { text: "X = 1", correct: false},
            { text: "X = 0", correct: true},
            { text: "X = 3", correct: false},
            { text: "X = 4", correct: false},
        ]
    },
    {
        question: "Simplify the expression: 3(x^2 + 2x) - 4(x - 1)",
        answers: [
            { text: "3x^2 - 2x - 4", correct: false},
            { text: "3x^2 - 2x + 4", correct: false},
            { text: "3x^2 - 10x - 4", correct: false},
            { text: "3x^2 - 10x + 4", correct: true},
        ]
    },
    {
        question: "Factorize the expression: 16x^2 - 9",
        answers: [
            { text: "(4x + 3)(4x - 3)", correct: true},
            { text: "(4x + 9)(4x - 9)", correct: false},
            { text: "(4x + 3)(4x + 3)", correct: false},
            { text: "(4x - 9)(4x - 9)", correct: false},
        ]
    },
    {
        question: "Which of the following is the point of intersection for the equations y = 2x + 3 and y = -x + 1?",
        answers: [
            { text: "(1, 2)", correct: false},
            { text: "(-1, 4)", correct: false},
            { text: "(-1, 2)", correct: true},
            { text: "(1, 4)", correct: false},
        ]
    },
    {
        question: "Solve for x: 3(x + 2) = 2(x - 1) + 5",
        answers: [
            { text: "X = 3", correct: false},
            { text: "X = 4", correct: true},
            { text: "X = 6", correct: false},
            { text: "X = 7", correct: false},
        ]
    }, 
    {
        question: "Simplify the expression: 5x^2 + 2x^2 - 3x^2",
        answers: [
            { text: "2x^2", correct: false},
            { text: "4x^2", correct: true},
            { text: "x^2", correct: false},
            { text: "-x^2", correct: false},
        ]
    },
    {
        question: "Expand the expression: (2x - 1)(x + 3)",
        answers: [
            { text: "2x^2 + 5x - 3", correct: true},
            { text: "2x^2 + 5x + 3", correct: false},
            { text: "2x^2 - 5x + 3", correct: false},
            { text: "2x^2 - 5x - 3", correct: false},
        ]
    },
    {
        question: "Which of the following is the additive inverse of -6?",
        answers: [
            { text: "-6", correct: false},
            { text: "-1/6", correct: false},
            { text: "1/6", correct: false},
            { text: "6", correct: true},
        ]
    },
    {
        question: "Solve the equation: 2x^2 - 9x + 5 = 0",
        answers: [
            { text: "x = 2, x = -5/2", correct: false},
            { text: "x = 1, x = 5/2", correct: true},
            { text: "x = 2, x = 5/2", correct: false},
            { text: "x = 1, x = 5", correct: false},
        ]
    },  
    {
        question: "Simplify the expression: 2(x^3 + 4x^2) - 3x(x - 1)",
        answers: [
            { text: "2x^3 + 5x^2 + 3x", correct: false},
            { text: "2x^3 + 8x^2 - 3x^2 + 3x", correct: true},
            { text: "2x^3 - 8x^2 - 3x^2 - 3x", correct: false},
            { text: "2x^3 - 3x^2 + 3x", correct: false},
        ]
    },
    {
        question: "Find the value of x: 3(x + 2) - 2(x - 3) = 5",
        answers: [
            { text: "-2", correct: true},
            { text: "-3", correct: false},
            { text: "3", correct: false},
            { text: "2", correct: false},
        ]
    },
    {
        question: "Which of the following is the intercept form of a linear equation?",
        answers: [
            { text: "y = a/x + b", correct: false},
            { text: "y = mx + b", correct: false},
            { text: "y = ax^2 + bx + c", correct: false},
            { text: "x/a + y/b = 1", correct: true},
        ]
    },
    {
        question: "2(x^2 - 3x) + 3(x - 2)",
        answers: [
            { text: "2x^2 - 3x + 6", correct: false},
            { text: "2x^2 + 3x - 6", correct: true},
            { text: "2x^2 - 3x - 6", correct: false},
            { text: "2x^2 + 3x + 6", correct: false},
        ]
    },
    {
        question: "Solve for x: 4x + 7 = 3(x - 2) + 5",
        answers: [
            { text: "x = 3", correct: false},
            { text: " x = 4", correct: true},
            { text: "x = -2", correct: false},
            { text: "x = -3", correct: false},
        ]
    },
    {
        question: "Factorize the expression: 9x^2 - 16",
        answers: [
            { text: "(3x + 4)(3x - 4)", correct: true},
            { text: "(3x + 16)(3x - 16)", correct: false},
            { text: "(3x + 4)(3x + 4)", correct: false},
            { text: "(3x - 16)(3x - 16)", correct: false},
        ]
    },
    {
        question: "Which of the following is the point-slope form of a linear equation?",
        answers: [
            { text: "y = mx + b", correct: false},
            { text: "y = ax^2 + bx + c", correct: false},
            { text: "y = a/x + b", correct: false},
            { text: "y - y1 = m(x - x1)", correct: true},
        ]
    },
    {
        question: "Solve the equation: 2(x - 4) = 3(2x + 1)",
        answers: [
            { text: " x = 5", correct: false},
            { text: " x = -6", correct: false},
            { text: "x = -7", correct: true},
            { text: " x = 7", correct: false},
        ]
    },
    {
        question: "Simplify the expression: 5(2x + 3) - 3(4x - 1)",
        answers: [
            { text: "8x - 2", correct: true},
            { text: "2x + 18", correct: false},
            { text: "2x - 18", correct: false},
            { text: "8x + 2", correct: false},
        ]
    },
    {
        question: "Expand the expression: (x - 3)(x + 4)",
        answers: [
            { text: " x^2 + 7x - 12", correct: false},
            { text: "x^2 - x - 12", correct: false},
            { text: "x^2 + x + 12", correct: false},
            { text: "x^2 + x - 12", correct: true},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    }, 
    {
        question: "Which is larget animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Shri Lanka", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    },  
    {
        question: "Which is larget animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Shri Lanka", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    },
    {
        question: "Which is larget animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Shri Lanka", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is larget animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Shri Lanka", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    }, 
    {
        question: "Which is larget animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Shri Lanka", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    },  
    {
        question: "Which is larget animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Shri Lanka", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Arctic", correct: false},
            { text: "Africa", correct: false},
        ]
    },
    {
        question: "Which is larget animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            { text: "Vatican City", correct: true},
            { text: "Bhutan", correct: false},
            { text: "Nepal", correct: false},
            { text: "Shri Lanka", correct: false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
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
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});


startQuiz();