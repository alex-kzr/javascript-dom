const content = document.querySelector('p');
console.log(content.classList);

content.classList.add('error');
content.classList.remove('error');
content.classList.add('success');

const paras = document.querySelectorAll('p');
paras.forEach(p =>{
    console.log(p.textContent);
});

paras.forEach(p =>{
    if(p.innerText.includes('success')){
        p.classList.add('success');
    }
    if(p.textContent.includes('error')){
        p.classList.add('class', 'error');
    }
});

const title = document.querySelector('.title');
title.classList.toggle('test');
console.log(title.classList);
title.classList.toggle('test');
console.log(title.classList);