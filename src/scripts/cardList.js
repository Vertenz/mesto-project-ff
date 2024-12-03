import { createCard, handleDelete, handleLike } from './card.js';
import { placesList } from './index.js';

// добавление ноды
function renderCard(item, method = "prepend") {
    // создаем карточку, передавая обработчики в виде объекта `callbacks`
    const cardElement = createCard(item, handleDelete, handleLike);
  
    // вставляем карточку, используя метод (вставится `prepend` или `append`)
    placesList[ method ](cardElement);
  }
  

export { renderCard };