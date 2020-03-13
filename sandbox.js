const ul = document.querySelector('ul');

const button = document.querySelector('button');

button.addEventListener('click', () => {
    //ul.innerHTML += '<li>added item</li>';
    const li = document.createElement('li');
    li.textContent = 'something new';
    //ul.append(li);
    ul.prepend(li);
});

ul.addEventListener('click', e => {
    if(e.target.tagName === 'LI'){
        e.target.remove();
    }
});