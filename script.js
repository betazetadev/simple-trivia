document.addEventListener('DOMContentLoaded', () => {
    fetch('questions.json')
        .then(response => response.json())
        .then(data => {
            loadQuestion(data);
        });

    function loadQuestion(questions) {
        const questionContainer = document.getElementById('question-container');
        const questionElement = document.getElementById('question');
        const answersContainer = document.getElementById('answers-container');

        let currentQuestionIndex = 0;
        
        function showQuestion(questionData) {
            questionElement.textContent = questionData.question;
            answersContainer.innerHTML = '';

            questionData.answers.forEach(answer => {
                const button = document.createElement('button');
                button.classList.add('answer');
                button.textContent = answer;
                button.addEventListener('click', () => {
                    if (answer === questionData.correct) {
                        alert('Correct!');
                    } else {
                        alert('Wrong answer. Try again!');
                    }
                    currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
                    showQuestion(questions[currentQuestionIndex]);
                });
                answersContainer.appendChild(button);
            });
        }

        showQuestion(questions[currentQuestionIndex]);
    }
});
