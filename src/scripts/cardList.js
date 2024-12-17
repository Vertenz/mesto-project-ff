import { createCard } from './card.js';
import { getInitialCards } from './api';

const placesList = document.querySelector('.places__list');

// добавление ноды
const renderCard = (item, { handleLikeCard, handleImageClick }, method = "append") => {
    // создаем карточку, передавая обработчики в виде объекта `callbacks`
    const cardElement = createCard(item, { handleLikeCard, handleImageClick });
  
    // вставляем карточку, используя метод (вставится `prepend` или `append`)
    placesList[ method ](cardElement);
  }
  
// Вывод карточек на страницу
const addCardList = async ({ handleLikeCard, handleImageClick }) => {
  const initialCards = await getInitialCards();
  placesList.innerHTML = '';
  initialCards.forEach(cardData => {
    renderCard(cardData, { handleLikeCard, handleImageClick });
  });
}

export { addCardList, renderCard };
