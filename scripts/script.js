let popUp = document.querySelector(".popup");
let btn = document.querySelector('.btn-popup');
let popupClose = document.querySelector('.btn-popup-close');

function showPoUpOnClick() {
    popUp.classList.add('popup-show');
}

btn.addEventListener("mouseup", showPoUpOnClick);

popupClose.addEventListener('click', function () {
    popUp.classList.remove('popup-show')
})

