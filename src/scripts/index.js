import { initialCardList } from './card.js';
import { openModal } from './modal.js';
import { handleEditFormSubmit, handleCardAdd } from './form.js';

// дом элементы
const placesList = document.querySelector('.places__list');

const profileEditButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup_type_edit');
const profileAddButton = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');
const imageElement = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

// функция открытия модального окна с изображением
const openImageModal = (image) => {
    imageElement.src = image.src;
    imageElement.alt = image.alt;
    popupCaption.textContent = image.alt;
    window.requestAnimationFrame(() => {
        openModal(imagePopup);
    });
}

// функция предзаполнения формы редактирования профиля
const fillEditForm = () => {
    const form = document.forms['edit-profile'];
    const nameInput = form.elements['name'];
    const descriptionInput = form.elements['description'];

    nameInput.value = profileTitle.textContent || '';
    descriptionInput.value = profileDescription.textContent || '';
}

// слушатели
profileEditButton.addEventListener('click', () => {
    openModal(profilePopup);
    fillEditForm();
});
profileAddButton.addEventListener('click', () => {
    openModal(cardPopup);
});
document.forms['edit-profile'].addEventListener('submit', handleEditFormSubmit);
document.forms['new-place'].addEventListener('submit', handleCardAdd);


// выводим карточки на страницу
initialCardList();

export { placesList, profileTitle, profileDescription, imageElement, popupCaption, imagePopup, openImageModal };