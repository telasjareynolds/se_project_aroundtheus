/*-----------------------------------------------------------------*/
/*                            Elements                             */
/*-----------------------------------------------------------------*/
// enabling validation by calling enableValidation()
// pass all the settings on call
const options = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
};

/*-----------------------------------------------------------------*/
/*                           Functions                             */
/*-----------------------------------------------------------------*/
const showInputError = (formElement, inputElement, options) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.add(options.inputErrorClass);
  errorElement.textContent = inputElement.validationMessage;
  errorElement.classList.add(options.errorClass);
};

const hideInputError = (formElement, inputElement, options) => {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
  inputElement.classList.remove(options.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(options.errorClass);
};

const checkInputValidity = (formElement, inputElement, options) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, options);
  } else {
    hideInputError(formElement, inputElement, options);
  }
  };

const disableButton = (buttonElement) => {
      buttonElement.classList.add(options.inactiveButtonClass);
      buttonElement.disabled = true;
}

const enableButton = (buttonElement) => {
      buttonElement.classList.remove(options.inactiveButtonClass);
      buttonElement.disabled = false;
}

const hasInvalidInput = (inputList) => {
  return !inputList.every((inputElement) =>
    inputElement.validity.valid);
}

const toggleButtonState = (inputList, buttonElement, options) => {
   if (hasInvalidInput(inputList)) {
     return disableButton(buttonElement);
    } 
     return enableButton(buttonElement);
  };

function setEventListeners(formElement, options) {
  const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
  const buttonElement = formElement.querySelector(options.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", (e) => {
      checkInputValidity(formElement, inputElement, options);
      toggleButtonState(inputList, buttonElement);
    });
  });
};


function enableValidation(options) {
  const formElements = Array.from(document.querySelectorAll(options.formSelector));
  formElements.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
    evt.preventDefault();
  });

  setEventListeners(formElement, options);
  });
};

enableValidation(options);
