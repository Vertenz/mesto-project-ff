import { closeModal } from './modal.js';
import { addCardList } from './cardList.js';
import { updateUserInfo, addCard, updateAvatar } from './api.js';
import { fillUserInfo, profile } from './user.js';

const editForm = document.forms['edit-profile'];
const cardForm = document.forms['new-place'];
const avatarForm = document.forms['avatar-form'];

const nameInput = editForm.elements['name'];
const descriptionInput = editForm.elements['description'];
const cardNameInput = cardForm.elements['place'];
const cardLinkInput = cardForm.elements['link'];
const avatarInput = avatarForm.elements['avatar'];

// функция предзаполнения формы редактирования профиля
const fillEditForm = () => {
    nameInput.value = profile.title.textContent || '';
    descriptionInput.value = profile.description.textContent || '';
}

const handleEditFormSubmit = async (evt) => {
    evt.preventDefault();
    const button = evt.target.querySelector('.popup__button');
    button.textContent = 'Сохранение...';

    const nameValue = nameInput?.value;
    const descriptionValue = descriptionInput?.value;

    try {
        await updateUserInfo({ name: nameValue, about: descriptionValue });
        fillUserInfo({ name: nameValue, about: descriptionValue });

        closeModal();
        editForm.reset();
    } catch (error) {
        console.log(error);
    }

    button.textContent = 'Сохранить';
}

const handleCardAdd = async (evt, { likeCard, handleImageClick }) => {
    evt.preventDefault();
    const button = evt.target.querySelector('.popup__button');
    button.textContent = 'Сохранение...';

    const  newCard = {
        name: cardNameInput.value,
        link: cardLinkInput.value,
    };
    
    try {
        await addCard(newCard);
        addCardList({ likeCard, handleImageClick }); 
        closeModal();
        cardForm.reset();
    } catch (error) {
        console.log(error);
    }

    button.textContent = 'Сохранить';
}

const handleAvatarChange = async (evt) => {
    evt.preventDefault();
    const button = evt.target.querySelector('.popup__button');
    button.textContent = 'Сохранение...';

    const avatarLink = avatarInput.value;

    try {
        await updateAvatar({ avatar: avatarLink });
        fillUserInfo({ avatar: avatarLink });
        closeModal();
        avatarForm.reset();
    } catch (error) {
        console.log(error);
    }

    button.textContent = 'Сохранить';
}


export { 
    handleEditFormSubmit,
    handleCardAdd,
    fillEditForm,
    editForm,
    cardForm,
    nameInput,
    descriptionInput,
    cardNameInput,
    cardLinkInput,
    profile,
    avatarForm,
    handleAvatarChange
};
