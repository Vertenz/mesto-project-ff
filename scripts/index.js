// Функция создания карточки
function createCard(cardData, handleDelete) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardElement = cardTemplate.cloneNode(true);
    
    const cardImage = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const deleteButton = cardElement.querySelector('.card__delete-button');
    
    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;
    
    deleteButton.addEventListener('click', handleDelete);
    
    return cardElement;
}

// Функция удаления карточки
function handleDeleteCard(event) {
    event.target.closest('.card').remove();
}

// Вывод карточек на страницу
const placesList = document.querySelector('.places__list');
initialCards.forEach(cardData => {
    const cardElement = createCard(cardData, handleDeleteCard);
    placesList.append(cardElement);
});

placesList.addEventListener('click', function(event) {
    if (event.target.classList.contains('card__like-button')) {
        event.target.parentNode.remove();
    }
});