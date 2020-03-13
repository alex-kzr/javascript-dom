// get an element by ID
const title = document.getElementById('page-title');
console.log(title);

// get elements by their class
const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);
/* can't use forEach on HTMLCollection
errors.forEach(error => {
    console.log(error);
}); */

// get elements by theur tag name
const params = document.getElementsByTagName('p');
console.log(params);
console.log(params[0]);