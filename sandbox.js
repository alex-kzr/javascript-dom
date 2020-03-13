const article = document.querySelector('article');
console.log(article.children);

Array.from(article.children).forEach(child => {
    child.classList.add('article-element');
});

const articleTitle = document.querySelector('h2');
console.log(articleTitle.parentElement);
console.log(articleTitle.parentElement.parentElement);
console.log(articleTitle.nextElementSibling);
console.log(articleTitle.previousElementSibling);

// chaining
console.log(articleTitle.nextElementSibling.parentElement.children);