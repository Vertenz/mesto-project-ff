import { deleteCard } from './api.js';
import { user } from './user.js';

// Функция создания карточки
const createCard = (cardData, { handleLikeCard, handleImageClick }) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement= cardTemplate.querySelector(".card").cloneNode(true);
  
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');
  const likeCounter = cardElement.querySelector('.card__like-counter');
  const likeCount = cardData.likes.length;
  const isFavorite = checkIsFavorite(cardData);
  setFavorite(isFavorite, {likeButton, likeCounter, likeCount});

  cardElement.id = cardData._id;
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
 
  deleteButton.addEventListener('click', () => removeCard(cardElement));
  likeButton.addEventListener('click', () => handleLikeCard(likeButton));
  cardImage.addEventListener('click', () => handleImageClick(cardImage));
  
  return cardElement;
}

const setFavorite = (payload, { likeButton, likeCounter, likeCount }) => {
    if (payload) {  
      likeButton.classList.add('card__like-button_is-active');
      likeButton.dataset.isFavorite = true; 
    } else {
      likeButton.classList.remove('card__like-button_is-active');
      likeButton.dataset.isFavorite = false;
    }

    likeCounter.textContent = likeCount;
};


const checkIsFavorite = (element) => {
    return element.likes.some((like) => like._id === user._id);
};

// Функция удаления карточки
const removeCard = async (cardElement) => { 
    try {
        await deleteCard(cardElement.id);
        cardElement.remove();
    } catch (error) {
        console.log(error);
    }
}; 


export { createCard, setFavorite };
