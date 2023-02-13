const btn = document.getElementById('close-button');
const modal = document.getElementById('modal');

btn.addEventListener('click', e => {
    modal.classList.remove('active');
})



