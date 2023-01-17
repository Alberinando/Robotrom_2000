const btn = document.querySelector('#showButton');
const lista = document.querySelector('.lista');

btn.addEventListener('click', () => {
    if (lista.style.display === 'block') {
        lista.style.display = 'none';
    } else {
        lista.style.display = 'block';
    }
});