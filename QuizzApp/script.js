const question = [
    {
        "que": "Which of the following is a markup language?",
        "a": "HTML",
        "b": "CSS",
        "c": "JavaScript",
        "d": "PHP",
        "correct": "a"
    },
    {
        "que": "What does CSS stand for?",
        "a": "Cascading Style Sheets",
        "b": "Computer Style Sheets",
        "c": "Creative Style Sheets",
        "d": "Cascading Simple Sheets",
        "correct": "a"
    },
    {
        "que": "Which company developed JavaScript?",
        "a": "Netscape",
        "b": "Microsoft",
        "c": "Sun Microsystems",
        "d": "Oracle",
        "correct": "a"
    },
    {
        "que": "Which of the following is a server-side scripting language?",
        "a": "PHP",
        "b": "JavaScript",
        "c": "HTML",
        "d": "CSS",
        "correct": "a"
    },
    {
        "que": "Which of the following is used to style a webpage?",
        "a": "HTML",
        "b": "CSS",
        "c": "JavaScript",
        "d": "Python",
        "correct": "b"
    },
    {
        "que": "Which of the following is not a data type in JavaScript?",
        "a": "Number",
        "b": "String",
        "c": "Integer",
        "d": "Boolean",
        "correct": "c"
    },
    {
        "que": "What does the 'this' keyword refer to in JavaScript?",
        "a": "The current object",
        "b": "The previous object",
        "c": "The global object",
        "d": "The function calling the method",
        "correct": "a"
    },
    {
        "que": "Which HTML tag is used to display an image?",
        "a": "<img>",
        "b": "<image>",
        "c": "<picture>",
        "d": "<img-src>",
        "correct": "a"
    },
    {
        "que": "Which of the following is a programming language used for building web pages?",
        "a": "HTML",
        "b": "Python",
        "c": "JavaScript",
        "d": "PHP",
        "correct": "c"
    },
    {
        "que": "Which tag is used for creating a table in HTML?",
        "a": "<table>",
        "b": "<tab>",
        "c": "<tble>",
        "d": "<table-data>",
        "correct": "a"
    }
];

let index = 0;
let total = question.length;
let right = 0,
    wrong = 0;

const queBox = document.getElementById('question-title');
const options = document.querySelectorAll('.options');

const loadQuestion = () => {
    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = question[index];
    queBox.innerText = `${index + 1}) ${data.que}`;
    options[0].nextElementSibling.innerText = `a) ${data.a}`;
    options[1].nextElementSibling.innerText = `b) ${data.b}`;
    options[2].nextElementSibling.innerText = `c) ${data.c}`;
    options[3].nextElementSibling.innerText = `d) ${data.d}`;
};

const submitQuiz = () => {
    const data = question[index];
    const ans = getAnswer();
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
};

const getAnswer = () => {
    let answer;
    options.forEach(input => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
};

const reset = () => {
    options.forEach(input => {
        input.checked = false;
    });
};

const endQuiz = () => {
    const box = document.getElementById("box");
    box.innerHTML = `
        <h3>Thank you for participating!</h3>
        <p>Your score: ${right} out of ${total}</p>
    `;
};

// Start the quiz
loadQuestion();
