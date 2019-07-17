// DOM
var startTheGame = $('#start');
var quiz = $('#quiz-container');
var questionShow = $('#question');
var A = $('#A');
var B = $('#B');
var C = $('#C');
var D = $('#D');
var counter = $('#counter');
var scoreBoard = $('#scoreBoard');
var result = $('#result');
var totalScore = $('#totalScore');

// Variables using inside JS
// Create questions
var questions = [
    {
        question: "Ant-Man has had a number of incarnations. Which of these was his first?",
        A: "Scott Lang",
        B: "Eric O'Grady",
        C: "Mick Taylor",
        D: "Hank Pym",
        correct: "D",
        pic: ""
    },
    {
        question: "What is the real name of the member of the Uncanny X-Men known as Nightcrawler?",
        A: "Kurt Wagner",
        B: "Logan",
        C: "Charles Xavier",
        D: "Taylor Swift",
        correct: "A",
        pic: ""
    },
    {
        question: "What is the Avenger known as Hawkeye's real name?",
        A: "Natty Bumppo",
        B: "Clint Barton",
        C: "Oliver Queen",
        D: "Robin Hood",
        correct: "B",
        pic: ""
    },
    {
        question: "Who wiped out almost all of the mutants by saying 3 words 'No More Mutants'?",
        A: "Scarlett Witch",
        B: "Thanos",
        C: "Doctor Strange",
        D: "The Galactus",
        correct: "A",
        pic: ""
    },
    {
        question: "The clawed superhero Wolverine is what nationality?",
        A: "Canadian",
        B: "American",
        C: "Australian",
        D: "Mexican",
        correct: "A",
        pic: ""
    },
    {
        question:"Star-Lord's mother is from Earth and his father is from:",
        A: "Spartax",
        B: "Jupiter",
        C: "Scarif",
        D: "Asgard",
        correct: "A",
        pic: ""
    },
    {
        question:"Which female character took on the role of 'Thor' when the original was unable?",
        A: "Black Widow",
        B: "Captain Marvel",
        C: "Jane Foster",
        D: "Mary Jane",
        correct: "C",
        pic: ""
    },
    {
        question:"Peter Parker works as a photographer for:",
        A: "The Daily Planet",
        B: "The Daily Bugle",
        C: "The New York Times",
        D: "The Avenger",
        correct: "B",
        pic: ""
    },
    {
        question:"Who is Professor Xavier's step-brother?",
        A: "Magneto",
        B: "Mystique",
        C: "Juggernaut",
        D: "P.Xavier",
        correct: "C",
        pic: ""
    },
    {
        question:"Before turning to a life of crime, Mysterio was:",
        A: "A stuntman",
        B: "Iron Man's Apprentice",
        C: "A magician",
        D: "A special effects artist",
        correct: "D",
        pic: ""
    },
    {
        question:"Dr. Doom went to the same college as:",
        A: "Tony Stark",
        B: "Peter Parker",
        C: "Reed Richards",
        D: "Bruce Banner",
        correct: "C",
        pic: ""
    },
    {
        question:"Who paid Mac Gargan to become the Scorpion?",
        A: "The Kingpin",
        B: "Norman Osborn",
        C: "Dr. Otto",
        D: "J. Jonah Jameson",
        correct: "D",
        pic: ""
    },
    {
        question:"Who got the title 'The Superior Spider Man'?",
        A: "Peter Parker",
        B: "Mysterio",
        C: "Miles Morales",
        D: "Otto Octavius",
        correct: "D",
        pic: ""
    }
    
];

// picking question
var lastQuestion = questions.length - 1;
var checkingQuestion ;
var count;
var countDown;
let score;
//Start Game
function startGame(){
    checkingQuestion = 0;
    score = 0;
    count = 20;
    result.css('display', 'none');
    startTheGame.css('display', 'none');
    quiz.css('display', 'block');
    
    scoreBoard.html(score);
    showQuestion();
    
    $('#timer').css('display', 'block');
    countDown(showingTimer);
    
};
startTheGame.on("click",startGame);

// showing question
function showQuestion(){
    let q = questions[checkingQuestion];
    questionShow.html('<h2>'+ q.question + '</h2>');
    A.html(q.A);
    B.html(q.B);
    C.html(q.C);
    D.html(q.D);
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
        countDown= clearInterval(showingTimer);
        $('#timer').css('display', 'none');
        quiz.css('display', 'none');
        result.css('display', 'block');
        
    }
}


//Count down from 20;
function countDown(showingTimer){
clearInterval(showingTimer);
setInterval(showingTimer,1000);
};
//Timer

function showingTimer(){
    if (count > 0){
        counter.html(count);
        count--;
    } else{
        count = 20;
    };
};






