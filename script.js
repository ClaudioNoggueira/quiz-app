const quizData = [
    {
        question: "Qual bicho transmite Doença de Chagas?",
        a: "Abelha",
        b: "Barata",
        c: "Pulga",
        d: "Barbeiro",
        correct: "d"
    },
    {
        question: "Qual é o coletivo de cães?",
        a: "Matilha",
        b: "Rebanho",
        c: "Alcateia",
        d: "Manada",
        correct: "a"
    },
    {
        question: "Qual é o triângulo que tem todos os lados diferentes?",
        a: "Equilátero",
        b: "Isósceles",
        c: "Escaleno",
        d: "Trapézio",
        correct: "c"
    },
    {
        question: "Quem compôs o Hino da Independência do Brasil?",
        a: "Dom Pedro I",
        b: "Manuel Bandeira",
        c: "Castro Alvez",
        d: "Carlos Gomes",
        correct: "a"
    },
    {
        question: "Seguindo a sequência do baralho, qual carta vem depois do dez?",
        a: "Rei",
        b: "Valete",
        c: "Nove",
        d: "Ás",
        correct: "b"
    },
    {
        question: "Que nome se dá à purificação por meio da água?",
        a: "Abolição",
        b: "Abnegação",
        c: "Ablução",
        d: "Abrupção",
        correct: "c"
    },
    {
        question: "Qual montanha se localiza entre a fronteira do Tibet com o Nepal?",
        a: "Monte Everest",
        b: "Monte Carlo",
        c: "Monte Fuji",
        d: "Monte Branco",
        correct: "a"
    },
    {
        question: "Em que parte do corpo se encontra a epiglote?",
        a: "Estômago",
        b: "Pâncreas",
        c: "Rim",
        d: "Boca",
        correct: "d"
    },
    {
        question: "A compensação por perda é chamada de...",
        a: "Déficit",
        b: "Indenização",
        c: "Indexação",
        d: "Indébito",
        correct: "b"
    },
    {
        question: "O adjetivo 'venoso' está relacionado a:",
        a: "Vela",
        b: "Vento",
        c: "Vênia",
        d: "Veia",
        correct: "d"
    }
];

const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById("button");

//Radio buttons
const answerElements = document.querySelectorAll('.answer');

const quiz = document.getElementById('quiz');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;
    answerElements.forEach((answerElement) => {
        if (answerElement.checked) {
            answer = answerElement.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerElements.forEach((answerElement) => {
        answerElement.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    //check to see the answer
    const answer = getSelected();

    console.log(answer);
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2>Você acertou ${score} de ${quizData.length} questões!</h2> <button onclick="location.reload()">Tentar novamente.</button>`;
        }
    }
});