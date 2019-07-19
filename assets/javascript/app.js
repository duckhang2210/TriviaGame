// DOM
var startTheGame = $('#start');
var quiz = $('#quiz-container');
var questionShow = $('#question');
var A = $('#A');
var B = $('#B');
var C = $('#C');
var D = $('#D');
var showAnswer = $('#answer');
var counter = $('#counter');
var scoreBoard = $('#scoreBoard');
var result = $('#result');
var totalScore = $('#totalScore');

// Variables using inside JS
// Create questions
var questions = [
    {
        question: "Who was the first Ant-Man?",
        A: "Scott Lang",
        B: "Eric O'Grady",
        C: "Mick Taylor",
        D: "Hank Pym",
        correct: "D",
        fact: "D: Hank Pym was the first Ant-Man",
        pic: "Hank Pym.jpg"
    },
    {
        question: "What is the real name of the member of the Uncanny X-Men known as Nightcrawler?",
        A: "Kurt Wagner",
        B: "Logan",
        C: "Charles Xavier",
        D: "Taylor Swift",
        correct: "A",
        fact: "A: Kurt Wagner is Nightcrawler's real name",
        pic: "Kurt Wagner.jpg"
    },
    {
        question: "What is the Hawkeye's real name?",
        A: "Natty Bumppo",
        B: "Clint Barton",
        C: "Oliver Queen",
        D: "Robin Hood",
        correct: "B",
        fact: "B: Clint Barton is his real name",
        pic: "Clint Barton.jpg"
    },
    {
        question: "Who wiped out almost all of the mutants by saying 3 words 'No More Mutants'?",
        A: "Scarlett Witch",
        B: "Thanos",
        C: "Doctor Strange",
        D: "The Galactus",
        correct: "A",
        fact: "A: Scarlett Witch almost brought the extinction to the Mutants with only THREE FREAKING WORDS.",
        pic: "Scarlett Witch.jpg"
    },
    {
        question: "The clawed superhero Wolverine is what nationality?",
        A: "Canadian",
        B: "American",
        C: "Australian",
        D: "Mexican",
        correct: "A",
        fact: "A: the wild from Canada",
        pic: "Canadian.jpg"
    },
    {
        question:"Star-Lord's mother is from Earth and his father is from:",
        A: "Spartax",
        B: "Jupiter",
        C: "Scarif",
        D: "Asgard",
        correct: "A",
        fact: "A: the worst dad ever is from Spartax",
        pic: "Spartax.jpg"
    },
    {
        question:"Which female character took on the role of 'Thor' when the original was unable?",
        A: "Black Widow",
        B: "Captain Marvel",
        C: "Jane Foster",
        D: "Mary Jane",
        correct: "C",
        fact: "C: Jane Foster,Thor's cancer girlfriend",
        pic: "Jane Foster.jpg"
    },
    {
        question:"Peter Parker works as a photographer for:",
        A: "The Daily Planet",
        B: "The Daily Bugle",
        C: "The New York Times",
        D: "The Avenger",
        correct: "B",
        fact: "B: Spider-Man worked at the place where its boss is the biggest anti-fan of Spider-Man",
        pic: "The Daily Bugle.jpg"
    },
    {
        question:"Who is Professor Xavier's step-brother?",
        A: "Magneto",
        B: "Mystique",
        C: "Juggernaut",
        D: "P.Xavier",
        correct: "C",
        fact: "C: when you need a wheelchair and your step-brother is one of the strongest men",
        pic: "Juggernault.jpg"
    },
    {
        question:"Before turning to a life of crime, Mysterio was:",
        A: "A stuntman",
        B: "Iron Man's Apprentice",
        C: "A magician",
        D: "A special effects artist",
        correct: "D",
        fact: "D: althought he has no power at all, he was still able to cause many deadly trouble to Spider-Man",
        pic: "Mysterio.jpg"
    },
    {
        question:"Dr. Doom went to the same college as:",
        A: "Tony Stark",
        B: "Peter Parker",
        C: "Reed Richards",
        D: "Bruce Banner",
        correct: "C",
        fact: "C: Doom, one of the most powerful villian, and Reed, one of the smartest brain used to be close friends",
        pic: "Reed Richard.jpg"
    },
    {
        question:"Who paid Mac Gargan to become the Scorpion?",
        A: "The Kingpin",
        B: "Norman Osborn",
        C: "Dr. Otto",
        D: "J. Jonah Jameson",
        correct: "D",
        fact: "D: J.J. Jameson, Peter Parker's boss, created one of the most deadliest enemy for his employee",
        pic: "Scorpion.jpg"
    },
    {
        question:"Who got the title 'The Superior Spider-Man'?",
        A: "Peter Parker",
        B: "Mysterio",
        C: "Miles Morales",
        D: "Otto Octavius",
        correct: "D",
        pic: "Superior spider man.jpg"
    }
    
];

// picking question
var lastQuestion = questions.length - 1;
var checkingQuestion ;
var count;
var countDown;
var score;
var timeout;
//Start Game
function startGame(){
    clearInterval(timeout);
    checkingQuestion = 0;
    score = 0;
    count = 20;
    showAnswer.css('display','none');
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
    questionShow.html('<h3>'+ q.question + '</h3>');
    A.html('<p>' + q.A + '</p>');
    B.html('<p>' + q.B + '</p>');
    C.html('<p>' + q.C + '</p>');
    D.html('<p>' + q.D + '</p>');
};

//check the answer
function checkAnswer(answer){
    //right answer
    if (answer == questions[checkingQuestion].correct){
        score ++;
        scoreBoard.html(score);
        //show the correct alert and the picture for right answer 
        showAnswer.html('<h1>Correct!!!!!!</h1><p>'+questions[checkingQuestion].fact+'</p><br><img src="assets/images/'+ questions[checkingQuestion].pic + '">');
        $('#timer').css('display', 'none');
        quiz.css('display', 'none');
        showAnswer.css('display','block');
        timeout = setInterval(nextQuestion,4000);    
    }
    //wrong
    else if(answer !== questions[checkingQuestion].correct) {
        showAnswer.html('<h1>Wrong!!!!!!</h1> <br><img src="assets/images/wrong.png"> ');
        $('#timer').css('display', 'none');
        quiz.css('display', 'none');
        showAnswer.css('display','block');
        
        timeout = setInterval(nextQuestion,4000);
    };
};
//next question
function nextQuestion(){
    if (checkingQuestion < lastQuestion){
        clearInterval(timeout);
        checkingQuestion ++;
        count = 20;
        $('#timer').css('display', 'block');
        quiz.css('display', 'block');
        showAnswer.css('display','none');
        showQuestion();
        showingTimer();
    } else {
        clearInterval(timeout);
        countDown= clearInterval(showingTimer);
        $('#timer').css('display', 'none');
        quiz.css('display', 'none');
        result.css('display', 'block');  
    };
};

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
        //if no choice is made and counter reaches 0
        showAnswer.html("<h1>Time's up. Too slow!!!!!!</h1><br><img src='assets/images/wrong.png'>");
        $('#timer').css('display', 'none');
        quiz.css('display', 'none');
        showAnswer.css('display','block');
        timeout = setInterval(nextQuestion,4000);
        count = 20;
    };
};






