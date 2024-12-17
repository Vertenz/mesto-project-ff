import { addCardList } from './cardList.js';
import { setFavorite } from './card.js';
import { openModal } from './modal.js';
import { 
    handleEditFormSubmit,
    handleCardAdd,
    fillEditForm,
    editForm,
    cardForm,
    avatarForm,
    handleAvatarChange
} from './form.js';
import { checkFormValidity, clearAllErrors } from './validate.js';
import { getInitialCards, likeCard, removeLikeCard } from './api.js';
import { setUser } from './user.js';


// дом элементы
const profileEditButton = document.querySelector('.profile__edit-button');
const profilePopup = document.querySelector('.popup_type_edit');
const profileAddButton = document.querySelector('.profile__add-button');
const cardPopup = document.querySelector('.popup_type_new-card');
const imagePopup = document.querySelector('.popup_type_image');
const avatarPopup = document.querySelector('.popup_type_avatar');
const avatarButton = document.querySelector('.profile__avatar-button');
const imageElement = imagePopup.querySelector('.popup__image');
const popupCaption = imagePopup.querySelector('.popup__caption');

  
// Функция лайка карточки
const handleLikeCard = async (likeButton) => {
    const card = likeButton.closest('.card');
    const likeCounter = card.querySelector('.card__like-counter');
    const isFavorite = likeButton.dataset?.isFavorite === 'true';
    let likeCount = null;
    let res = {};
    try {
        if (isFavorite) {
           res = await removeLikeCard(card.id);
        } else {
           res = await likeCard(card.id);
        }
        likeCount = res.likes.length;

        setFavorite(!isFavorite, { likeButton, likeCounter, likeCount });
    } catch (error) {
        console.log(error);
    };
}

// Функция открытия модального окна с изображением
const handleImageClick = (image) => {
    imageElement.src = image.src;
    imageElement.alt = image.alt;
    popupCaption.textContent = image.alt;
    window.requestAnimationFrame(() => {
        openModal(imagePopup);
    });
}


// слушатели 
profileEditButton.addEventListener('click', () => {
    openModal(profilePopup);
    fillEditForm();
    clearAllErrors();
});
profileAddButton.addEventListener('click', () => {
    openModal(cardPopup);
    clearAllErrors();
});
avatarButton.addEventListener('click', () => {
    openModal(avatarPopup);
    clearAllErrors();
});
editForm.addEventListener('submit', handleEditFormSubmit);
editForm.addEventListener('input', checkFormValidity);
cardForm.addEventListener('input', checkFormValidity);
cardForm.addEventListener('submit', (event) => handleCardAdd(event, { handleLikeCard, handleImageClick }));
avatarForm.addEventListener('input', checkFormValidity);
avatarForm.addEventListener('submit', handleAvatarChange);

await Promise.all([
    getInitialCards(),
    setUser()
])

addCardList({ handleLikeCard, handleImageClick });
