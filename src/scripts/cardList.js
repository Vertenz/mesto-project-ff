import { createCard } from './card.js';
import initialCards from "./cards.js";

const placesList = document.querySelector('.places__list');

// добавление ноды
const renderCard = (item, method = "prepend") => {
    // создаем карточку, передавая обработчики в виде объекта `callbacks`
    const cardElement = createCard(item);
  
    // вставляем карточку, используя метод (вставится `prepend` или `append`)
    placesList[ method ](cardElement);
  }
  
// Вывод карточек на страницу
const addCardList = () => {
  initialCards.forEach(cardData => {
    renderCard(cardData);
  });
}

export { addCardList, renderCard };