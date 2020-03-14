/* https://regex101.com/ */

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('div.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

form.addEventListener('submit', e => {
    e.preventDefault();
    
    const username = form.username.value;
    
    if(usernamePattern.test(username)){
        feedback.textContent = 'that username is valid!';
    } else {
        feedback.textContent = 'username must contain letters only & be between 6 & 12 charcters long';
    }
});

// live feedback
form.username.addEventListener('keyup', e => {
    if(usernamePattern.test(e.target.value)){
        e.target.setAttribute('class', 'success');
    } else {
        e.target.setAttribute('class', 'error');
    }
})