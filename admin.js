let questions = [];
function addQuestion(question, options, answer) {
   let questionObj = {
          question: question,
          options: options,
          answer: answer
   };
     questions.push(questionObj);
     localStorage.setItem("questions", JSON.stringify(questions));
}
//how to get value of input field in after form submission
let form = document.getElementById("questionForm");
form.addEventListener("submit", function(event) {
// event.preventDefault();

let question = document.getElementById("question").value;
console.log(question);
let options=[];
options.push(document.getElementById("options1").value);
options.push(document.getElementById("options2").value);
options.push(document.getElementById("options3").value);
options.push(document.getElementById("options4").value);
let answer = document.getElementById("answer").value;
console.log(answer);
console.log(options);
addQuestion(question, options, answer);

});
if(localStorage.getItem("questions") !== null) {
questions = JSON.parse(localStorage.getItem("questions"));
console.log(questions);
}
