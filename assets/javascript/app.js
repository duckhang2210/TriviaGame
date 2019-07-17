// DOM
var startTheGame = $('#start');
var quiz = $('#quiz-container');
var questionShow = $('#question');
var choiceA = $('#A');
var choiceB = $('#B');
var choiceC = $('#C');
var choiceD = $('#D');
var counter = $('#counter');
var scoreBoard = $('#scoreBoard');
var result = $('#result');
var totalScore = $('#totalScore');

// Variables using inside JS
// Create questions
var questions = [
    {
        question: "Ant-Man has had a number of incarnations. Which of these was his first?",
        choiceA: "Scott Lang",
        choiceB: "Eric O'Grady",
        choiceC: "Mick Taylor",
        choiceD: "Hank Pym",
        correct: "D",
        pic: ""
    },
    {
        question: "What is the real name of the member of the Uncanny X-Men known as Nightcrawler?",
        choiceA: "Kurt Wagner",
        choiceB: "Logan",
        choiceC: "Charles Xavier",
        choiceD: "Taylor Swift",
        correct: "A",
        pic: ""
    },
    {
        question: "What is the Avenger known as Hawkeye's real name?",
        choiceA: "Natty Bumppo",
        choiceB: "Clint Barton",
        choiceC: "Oliver Queen",
        choiceD: "Robin Hood",
        correct: "B",
        pic: ""
    },
    {
        question: "Who wiped out almost all of the mutants by saying 3 words 'No More Mutants'?",
        choiceA: "Scarlett Witch",
        choiceB: "Thanos",
        choiceC: "Doctor Strange",
        choiceD: "The Galactus",
        correct: "A",
        pic: ""
    },
];

// picking question
var lastQuestion = questions.length - 1;
var checkingQuestion = 0;
var count =20;
var countDown;
let score = 0;
//Start Game
function startGame(){
    startTheGame.css('display', 'none');
    showQuestion();
    showingTimer();
    countDown = setInterval(showingTimer,1000);
};
startTheGame.on("click",startGame);

// showing question
function showQuestion(){
    let q = questions[checkingQuestion];
    questionShow.html('<h2>'+ q.question + '</h2>');
    choiceA.html(q.choiceA);
    choiceB.html(q.choiceB);
    choiceC.html(q.choiceC);
    choiceD.html(q.choiceD);
};

//check the answer
function checkAnswer(answer){
    if (answer == questions[checkingQuestion].correct){
        score ++;
        scoreBoard.html(score);
    }
    if (checkingQuestion < lastQuestion){
        checkingQuestion ++;
        count = 20;
        showQuestion();
        showingTimer();
    } else {

        quiz.css('display', 'none');
        result.css('display', 'block');
        totalScore.html(score);
    }
}
//Reset function
function reset(){
    score = 0;
    
}


//Timer

function showingTimer(){
    if (count > 0){
        counter.html(count);
        count--;
    } else{
        count = 20;
    };
};






