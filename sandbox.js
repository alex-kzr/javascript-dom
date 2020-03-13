// select first element
const para = document.querySelector('p');
console.log(para);

const para2 = document.querySelector('.error');
console.log(para2);

const div = document.querySelector('div.error');
console.log(div);


// select multiple elements
const paras = document.querySelectorAll('p');
paras.forEach(para => {
    console.log(para);
});


const errors = document.querySelectorAll('.error');
console.log(errors[0]) // use first element from returned list
