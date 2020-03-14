/* https://regex101.com/ */

const form = document.querySelector('.signup-form');

form.addEventListener('submit', e => {
    e.preventDefault();
    console.log(form.username.value);
})

const username = 'alexxx';
const regexPattern = /^[a-z]{6,}$/;

// let regexResult = username.search(regexPattern);
// console.log(regexResult); // -1 or 1

let regexResult = regexPattern.test(username);
if(regexResult){
    console.log('regex test passed :)')
} else {
    console.log('regex test failed :(')
}

