import { closeModal } from './modal.js';
import { renderCard } from './cardList.js';

const editForm = document.forms['edit-profile'];
const cardForm = document.forms['new-place'];

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profile = {
    title: profileTitle,
    description: profileDescription,
}

// функция предзаполнения формы редактирования профиля
const fillEditForm = () => {
    const nameInput = editForm.elements['name'];
    const descriptionInput = editForm.elements['description'];

    nameInput.value = profile.title.textContent || '';
    descriptionInput.value = profile.description.textContent || '';
}

const handleEditFormSubmit = (evt) => {
    evt.preventDefault();

    const nameInput = editForm.elements['name'];
    const descriptionInput = editForm.elements['description'];

    const nameValue = nameInput?.value;
    const descriptionValue = descriptionInput?.value;

    profile.title.textContent = nameValue;
    profile.description.textContent = descriptionValue;
    closeModal();
}

const handleCardAdd = (evt, { deleteCard, likeCard, handleImageClick }) => {
    evt.preventDefault();

    const nameInput = cardForm.elements['place-name'];
    const linkInput = cardForm.elements['link'];

    if (!nameInput?.value || !linkInput?.value) {
        console.error('Не удалось найти элементы формы или значения полей');
        return;
    }

    const  newCard = {
        name: nameInput.value,
        link: linkInput.value,
    };


    renderCard(newCard, { deleteCard, likeCard, handleImageClick });
    cardForm.reset();
    closeModal();
}


export { handleEditFormSubmit, handleCardAdd, fillEditForm, editForm, cardForm };