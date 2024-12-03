import { closeModal } from './modal.js';
import { renderCard } from './cardList.js';
import { profileTitle, profileDescription } from './index.js';

const fillEditForm = (userData) => {
    const form = document.forms['edit-profile'];
    const nameInput = form.elements['name'];
    const descriptionInput = form.elements['description'];

    nameInput.value = userData.name || '';
    descriptionInput.value = userData.description || '';
}

const handleEditFormSubmit = (evt) => {
    evt.preventDefault();

    const form = document.forms['edit-profile'];
    const nameInput = form.elements['name'];
    const descriptionInput = form.elements['description'];

    const nameValue = nameInput?.value;
    const descriptionValue = descriptionInput?.value;

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


    renderCard(newCard, 'append');
    form.reset();
    closeModal();
}


export { handleEditFormSubmit, handleCardAdd };