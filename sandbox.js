const link = document.querySelector('a');
console.log(link.getAttribute('href'));
link.setAttribute('href','https://www.caniuse.com');
link.innerText = 'CanIUse.com';
console.log(link.getAttribute('href'));

const msg = document.querySelector('p');
console.log(msg.getAttribute('class'));
msg.setAttribute('class', 'success');
msg.setAttribute('style', 'color: green;');
console.log(msg.getAttribute('class'));