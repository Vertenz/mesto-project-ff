import { createCard } from './card.js';
import initialCards from "./cards.js";

const placesList = document.querySelector('.places__list');

// добавление ноды
const renderCard = (item, { deleteCard, likeCard, handleImageClick }, method = "prepend") => {
    // создаем карточку, передавая обработчики в виде объекта `callbacks`
    const cardElement = createCard(item, { deleteCard, likeCard, handleImageClick });
  
    // вставляем карточку, используя метод (вставится `prepend` или `append`)
    placesList[ method ](cardElement);
  }
  
// Вывод карточек на страницу
const addCardList = ({ deleteCard, likeCard, handleImageClick }) => {
  initialCards.forEach(cardData => {
    renderCard(cardData, { deleteCard, likeCard, handleImageClick });
  });
}

export { addCardList, renderCard };