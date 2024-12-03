import { initialCardList } from './card.js';
import { openModal, openImageModal } from './modal.js';
import { handleEditFormSubmit, handleCardAdd } from './form.js';

// дом элементы
const profileEditButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup_type_edit');
const profileAddButton = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.popup_type_new-card');
const formElement = // Воспользуйтесь методом querySelector()

// слушатели
profileEditButton.addEventListener('click', () => {
    openModal(profilePopup);
});
profileAddButton.addEventListener('click', () => {
    openModal(cardPopup);
});
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('card__image')) {
        openImageModal(event.target);
    }
});
document.forms['edit-profile'].addEventListener('submit', handleEditFormSubmit);
document.forms['new-place'].addEventListener('submit', handleCardAdd);


// выводим карточки на страницу
initialCardList();
