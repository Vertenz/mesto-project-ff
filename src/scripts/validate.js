import { 
  editForm,
  cardForm,
  avatarForm
} from './form.js';

const nameError = editForm.querySelector( '#error_name' );
const descriptionError = editForm.querySelector( '#error_description' );
const placeError = cardForm.querySelector( '#error_place' );
const linkError = cardForm.querySelector( '#error_link' );
const avatarError = avatarForm.querySelector( '#error_avatar' );
const errorElements = {
  nameError,
  descriptionError,
  placeError,
  linkError,
  avatarError
}


const setErrorText = ( element, text ) => {
  element.innerText = text;
}

const showError = ( input ) => {
  const errorPlaceholder = errorElements[`${input.id}Error`]; 
  const text = input.validity.patternMismatch ? input.dataset.errorText : input.validationMessage;
  setErrorText( errorPlaceholder, text );
  input.classList.add( 'is-invalid' );
  errorPlaceholder.classList.add( 'popup__error_visible' );
 }

const hideError = ( input ) => {
  const errorPlaceholder = errorElements[`${input.id}Error`];
  setErrorText( errorPlaceholder, '' );
  input.classList.remove( 'is-invalid' );
  errorPlaceholder.classList.remove( 'popup__error_visible' );
}

const clearAllErrors = () => {
  for ( const key in errorElements ) {
    errorElements[key].innerText = '';
    errorElements[key].classList.remove( 'popup__error_visible' );
  }
}

const checkInputValidity = ( input ) => {
  if ( input.validity.valid ) {
    hideError( input );
  } else {
    showError( input );
  }
}

const checkFormValidity = ( event ) => {
  let isValid = true;
  const form = event.target.form;
  const inputs = Array.from( form.elements );
  checkInputValidity( event.target );
  inputs.forEach( ( input ) => { 
    if ( input.type !== 'submit' ) {
      isValid = !input.validity.valid ? false : isValid;
    }
  });
  
  if ( isValid ) {
    return setSubmitButtonState( form.querySelector( 'button' ), true );
}

  return setSubmitButtonState( form.querySelector( 'button' ), false );
}

const setSubmitButtonState = ( button, payload ) => {
  if ( payload ) {
    button.removeAttribute( 'disabled' );
    button.classList.remove( 'popup__button_disabled' );
  } else {
    button.setAttribute( 'disabled', true );
    button.classList.add( 'popup__button_disabled' );
  }
}

const isImgUrl = ( url ) => {
  const imageExtensions = /\.(jpg|jpeg|png|gif|webp|svg|bmp|ico|tiff)$/i;
  if (!imageExtensions.test(url)) {
    return Promise.resolve(false);
  }

  // Попытка загрузки изображения
  return new Promise((resolve) => {
    const img = new Image();

    img.onload = () => resolve(true); // Успешная загрузка
    img.onerror = () => resolve(false); // Ошибка загрузки

    img.src = url;

    // Дополнительный таймаут на случай "зависших" изображений
    setTimeout(() => resolve(false), 5000);
  });
}

export { clearAllErrors, checkFormValidity, isImgUrl };
