import { addCardList } from './cardList.js';
import { openModal } from './modal.js';
import { handleEditFormSubmit, handleCardAdd, fillEditForm } from './form.js';

// дом элементы
const profileEditButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup_type_edit');
const profileAddButton = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.popup_type_new-card');
const editForm = document.forms['edit-profile'];
const cardForm = document.forms['new-place'];

// слушатели 
profileEditButton.addEventListener('click', () => {
    openModal(profilePopup);
    fillEditForm();
});
profileAddButton.addEventListener('click', () => {
    openModal(cardPopup);
});
editForm.addEventListener('submit', handleEditFormSubmit);
cardForm.addEventListener('submit', handleCardAdd);


// выводим карточки на страницу
addCardList();