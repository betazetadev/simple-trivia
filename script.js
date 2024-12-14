document.addEventListener('DOMContentLoaded', () => {
    const question = document.getElementById('question');
    const answers = document.querySelectorAll('.answer');

    answers.forEach(answer => {
        answer.addEventListener('click', () => {
            if (answer.textContent === 'Paris') {
                alert('Correct!');
            } else {
                alert('Wrong answer. Try again!');
            }
        });
    });
});
