import { closeModal } from './modal.js';
import initialCards from './cards.js'
import { addPrependCard } from './card.js';

const handleEditFormSubmit = (evt) => {
    evt.preventDefault();

    const form = document.forms['edit-profile'];
    const nameInput = form.elements['name'];
    const descriptionInput = form.elements['description'];

    const nameValue = nameInput?.value;
    const descriptionValue = descriptionInput?.value;

    const profileTitle = document.querySelector('.profile__title');
    const profileDescription = document.querySelector('.profile__description');

    if (!profileTitle || !profileDescription || !nameValue || !descriptionValue) {
        console.error('Не удалось найти элементы формы или значения полей');
        return;
    }

    profileTitle.textContent = nameValue;
    profileDescription.textContent = descriptionValue;
    closeModal();
}

const handleCardAdd = (evt) => {
    evt.preventDefault();

    const form = document.forms['new-place'];
    const nameInput = form.elements['place-name'];
    const linkInput = form.elements['link'];

    if (!nameInput?.value || !linkInput?.value) {
        console.error('Не удалось найти элементы формы или значения полей');
        return;
    }

    const  newCard = {
        name: nameInput.value,
        link: linkInput.value,
    };


    addPrependCard(newCard);
    closeModal();
}


export { handleEditFormSubmit, handleCardAdd };