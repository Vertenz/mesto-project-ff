import { closeModal } from './modal.js';
import { renderCard } from './cardList.js';

const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profile = {
    title: profileTitle,
    description: profileDescription,
}

// функция предзаполнения формы редактирования профиля
const fillEditForm = () => {
    const form = document.forms['edit-profile'];
    const nameInput = form.elements['name'];
    const descriptionInput = form.elements['description'];

    nameInput.value = profile.title.textContent || '';
    descriptionInput.value = profile.description.textContent || '';
}

const handleEditFormSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const nameInput = form.elements['name'];
    const descriptionInput = form.elements['description'];

    const nameValue = nameInput?.value;
    const descriptionValue = descriptionInput?.value;

    profile.title.textContent = nameValue;
    profile.description.textContent = descriptionValue;
    closeModal();
}

const handleCardAdd = (evt) => {
    evt.preventDefault();

    const form = evt.target;
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


    renderCard(newCard);
    form.reset();
    closeModal();
}


export { handleEditFormSubmit, handleCardAdd, fillEditForm };