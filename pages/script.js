// Объявление переменных для бургерного меню
const headerButton = document.querySelector('.header__button');
const popup = document.querySelector('.popup');
const closePopupButton = document.querySelector('.popup__close-button');

const popupLinks = document.querySelectorAll('.popup__link');

//Функция открытия/закрытия модального окна
function openPopup(popupElement){
    popupElement.classList.add('popup_opened');
}

function closePopup(popupElement){
    popupElement.classList.remove('popup_opened');
}

headerButton.addEventListener('click', function(){
    openPopup(popup);
});

closePopupButton.addEventListener('click', function(){
    closePopup(popup);
});


//Модальное окно будет закрываться при нажатии на ссылки + переход на секции
popupLinks.forEach((item) => 
  item.addEventListener('click', (evt) =>
    closePopup(evt.target.closest('.popup'))
  )
);