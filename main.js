var Question = function (question, answers, correctAnswer) {
    this.question = question;
    this.answersObject = {
        'a': answers[0],
        'b': answers[1],
        'c': answers[2]
    }
    this.correctAnswer = correctAnswer;
};

var score = 0;

var question1 = new Question('What is my fevourite programmming language ?', ['JavaScript', 'Ruby', 'Java'], 'a');
var question2 = new Question('Which one of this is my fevourite food ?', ['Pasta', 'Burger', 'Ramen'], 'c');
var question3 = new Question('What can I drink for whole day ?', ['Beer', 'Coffe', 'Milk Shake'], 'b');
var question4 = new Question('My favourite thing to do ?', ['Playing video games', 'Chating with Friends', 'Watching Animes'], 'c');
var question5 = new Question('What is my DREAM ?', ['Developer', 'Entrapenaur', 'Freelancer'], 'c');

var questions = [question1, question2, question3, question4, question5];

function gameLoop() {
    var randomQuestion = questions[Math.floor(Math.random() * 5)];
    console.log('Your Score is : ' + score);

    console.log('Question : ' + randomQuestion.question);
    console.log('a : ' + randomQuestion.answersObject.a);
    console.log('b : ' + randomQuestion.answersObject.b);
    console.log('c : ' + randomQuestion.answersObject.c);
    

    var answer = prompt('Enter the CORRECT option : ');
    
    
    if (answer === randomQuestion.correctAnswer) {
        alert('You Win :)');
        score += 1;
        console.log(`You choose the CORRECT answer.`);
    } else {
        alert('You Lose :(')
        console.log(`You choose the WRONG answer.`);
    }
    
    console.clear();
    
    if (answer === 'exit') {
        console.log('Game Over!');
    } else {
        gameLoop();
    }
}

// gameLoop();

document.getElementById('start-btn').addEventListener('click', gameLoop);






