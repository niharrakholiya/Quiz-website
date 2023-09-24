let questions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "C. Hyper Text Markup Language",
        options: [
            "A. Hyper Type Multi Language",
            "B. Hyper Text Multiple Language",
            "C. Hyper Text Markup Language",
            "D. Home Text Multi Language"
        ]
    },
]
function displayQuestions() {
    const questionList = document.getElementById('questionList');
    questionList.innerHTML = '';
    questions.forEach((question, index) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${index + 1}. ${question.question}`;
        questionList.appendChild(listItem);
    });
}

function handleFormSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const question = form.question.value;
    const options = [
        form.options1.value,
        form.options2.value,
        form.options3.value,
        form.options4.value
    ];
    const answer = form.answer.value.toUpperCase();

    const newQuestion = {
        numb: questions.length + 1,
        question,
        options,
        answer
    };

    questions.push(newQuestion);

    form.reset();

    displayQuestions();
}

const questionForm = document.getElementById('questionForm');
questionForm.addEventListener('submit', handleFormSubmit);

// Display the initial set of questions
displayQuestions();
