var Question = function (question, answers, correctAnswer) {
    this.question = question;
    this.option_a = answers[0];
    this.option_b = answers[1];
    this.option_c = answers[2];
    this.correctAnswer = correctAnswer;
};

var question1 = new Question('What is my fevourite programmming language ?', ['JavaScript', 'Ruby', 'Java'], 'a');

console.log('Question : '+question1.question);
console.log('a : ' + question1.option_a);
console.log('b : ' + question1.option_b);
console.log('c : ' + question1.option_c);

var answer = prompt('Write the answer : ');

if (answer == question1.correctAnswer) {
    alert('You Win!')
} else {
    alert('You Lose :(')
}







