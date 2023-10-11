document.getElementById("modal-open-btn").addEventListener("click", function () {
	document.getElementById("modal-order").classList.add("is-open")
})

document.getElementById("modal-close-order-btn").addEventListener("click", function () {
	document.getElementById("modal-order").classList.remove("is-open")
})

let menuBtn = document.querySelector('.menu-btn');
let headerMenu = document.querySelector('.header-menu');
menuBtn.addEventListener('click', function () {
    headerMenu.classList.toggle('active');
});
/*хедер  */
// Отримуємо посилання на елементи DOM
const modal = document.getElementById('myModal'); // Ваш ID модального вікна
const openModalButton = document.getElementById('openModalButton'); // Ваш ID кнопки для відкриття модального вікна
const closeModalButton = document.getElementById('modal-hover-close-order-btn'); // Ваш ID кнопки для закриття модального вікна

// Функція для відкриття модального вікна
function openModal() {
  modal.style.display = 'block';
}

// Функція для закриття модального вікна
function closeModal() {
  modal.style.display = 'none';
}

// Додаємо обробники подій для відкриття та закриття
openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);


