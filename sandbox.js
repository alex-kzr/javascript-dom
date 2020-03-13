// change inner text of a tag
const para = document.querySelector('p');
para.innerText = 'JS is awesome!';

const paras = document.querySelectorAll('p');
paras.forEach(para => {
    para.innerText += ' added text';
});

// change inner HTML of a tag
const content = document.querySelector('.content');
content.innerHTML += '<h2>This is a new H2</h2>';

const people = ['mario', 'luigi', 'yoshi'];
people.forEach(person => {
    content.innerHTML += `<p>${person}</p>`;
});