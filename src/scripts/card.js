import initialCards from "./cards";

// Функция создания карточки
const createCard = (cardData, handleDelete, handleLike) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement= cardTemplate.querySelector(".card").cloneNode(true);
  
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const likeButton = cardElement.querySelector('.card__like-button');
  
  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  
  deleteButton.addEventListener('click', () => handleDelete(cardElement));
  likeButton.addEventListener('click', () => handleLike(cardElement));
  
  return cardElement;
}

// Функция удаления карточки
const handleDeleteCard = (cardElement) => {  
  cardElement.remove(); 
}; 

// Функция лайка карточки
const handleLikeCard = (cardElement) => {
  cardElement.querySelector('.card__like-button').classList.toggle('card__like-button_is-active');
};

// добавление ноды
const addPrependCard = (element) => {
    if (!element){
        return
    }

    const placesList = document.querySelector('.places__list');
    placesList.prepend(createCard(element, handleDeleteCard, handleLikeCard));
}

const addAppendCard = (element) => {
    if (!element){
        return
    }

    const placesList = document.querySelector('.places__list');
    placesList.append(createCard(element, handleDeleteCard, handleLikeCard));
}

// Вывод карточек на страницу
const initialCardList = () => {
  const placesList = document.querySelector('.places__list');
  initialCards.forEach(cardData => {
    addAppendCard(cardData);
  });
}

export { initialCardList, addPrependCard };