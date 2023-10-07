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



