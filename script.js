
const containerModal = document.querySelector('.container-modal');
const behindModal = document.querySelector('.js-behind-modal').addEventListener('click', closeModal);
const btnCloseOpen = document.querySelector('.js-btn-open-modal').addEventListener('click', openModal);
const btnCloseModal = document.querySelector('.js-btn-close-modal').addEventListener('click', closeModal);


function openModal() {
    containerModal.classList.remove('modal-hide');
}


function closeModal() {
    containerModal.classList.add('modal-hide');
}
