const setClickListener = (addEvent) => {
    if (addEvent === undefined) {
        return;
    }

    const closeOnClick = (event) => {
        if (
            event.target.classList.contains('popup__close') || 
            event.target.classList.contains('popup_is-opened') ||
            event.key === 'Escape'
        ) {
            closeModal();
        } 
    }

    if (addEvent) {
        window.addEventListener('click', closeOnClick);
        window.addEventListener('keydown', closeOnClick);
    } else {
        window.removeEventListener('click', closeOnClick);
        window.removeEventListener('keydown', closeOnClick);
    }
}

const openModal = (element) => {
    if (!element) {
        return;
    }

    element.classList.add('popup_is-animated');
    window.requestAnimationFrame(() => {
        element.classList.add('popup_is-opened');  
        element.classList.remove('popup_is-closed');
    });
    setClickListener(true);
}

const closeModal = () => {
    const element = document.querySelector('.popup_is-opened');
    if (!element) {
        return;
    }

    element.classList.remove('popup_is-opened');
    // transition: visibility 0s 0.6s, opacity 0.6s;
    setTimeout(() => {
        element.classList.remove('popup_is-animated');
    }, 600);
    setClickListener(false);
}

const openImageModal = (image) => {
    const imagePopup = document.querySelector('.popup_type_image');
    const imageElement = imagePopup.querySelector('.popup__image');
    imageElement.src = image.src;
    imageElement.alt = image.alt;
    window.requestAnimationFrame(() => {
        openModal(imagePopup);
    });
}

export { openModal, openImageModal, closeModal };