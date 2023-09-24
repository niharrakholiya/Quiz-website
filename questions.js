// let questions = [
//     {
//         numb: 1,
//         question: "What does HTML stand for?",
//         answer: "C. Hyper Text Markup Language",
//         options: [
//             "A. Hyper Type Multi Language",
//             "B. Hyper Text Multiple Language",
//             "C. Hyper Text Markup Language",
//             "D. Home Text Multi Language"
//         ]
//     },
//     {
//         numb: 2,
//         question: "What does CSS stand for?",
//         answer: "A. Cascading Style Sheet",
//         options: [
//             "A. Cascading Style Sheet",
//             "B. Cute Style Sheet",
//             "C. Computer Style Sheet",
//             "D. Codehal Style Sheet"
//         ]
//     },
//     {
//         numb: 3,
//         question: "What does PHP stand for?",
//         answer: "A. Hypertext Preprocessor",
//         options: [
//             "A. Hypertext Preprocessor",
//             "B. Hometext Programming",
//             "C. Hypertext Preprogramming",
//             "D. Programming Hypertext Preprocessor"
//         ]
//     },
//     {
//         numb: 4,
//         question: "What does SQL stand for?",
//         answer: "D. Structured Query Language",
//         options: [
//             "A. Strength Query Language",
//             "B. Stylesheet Query Language",
//             "C. Science Question Language",
//             "D. Structured Query Language"
//         ]
//     },
//     {
//         numb: 5,
//         question: "What does XML stand for?",
//         answer: "D. Extensible Markup Language",
//         options: [
//             "A. Excellent Multiple Language",
//             "B. Explore Multiple Language",
//             "C. Extra Markup Language",
//             "D. Extensible Markup Language"
//         ]
//     }
// ];
//how to empty local storage

if(localStorage.getItem("questions") !== null) {
    questions = JSON.parse(localStorage.getItem("questions"));
    //i want to add a property to each question object called "numb" and assign it a value of 1,2,3,4,5
    //how do i do that?
    //for loop
    for(let i = 0; i < questions.length; i++) {
        questions[i].numb = i + 1;
    }
    
    // console.log(questions);
    }
    