const nav = document.querySelector('.mobile');
const hamb = document.querySelector('.menu');

hamb.addEventListener('click' , () => {
hamb.classList.toggle('active');
nav.classList.toggle('active');
})