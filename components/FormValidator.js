export default class FormValidator {
  constructor(settings, formElement) {

    this._form = formElement;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._inactiveButtonClass= settings.inactiveButtonClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._errorClass = settings.errorClass;
  }
  
  _showInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  };
  
  _hideInputError(inputElement) {
    const errorElement = this._form.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = "";
    errorElement.classList.remove(this._errorClass);
  };
  
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
    };

  _hasInvalidInput() {
    const inputList = Array.from(this._form.querySelectorAll(this._inputSelector));
    return !inputList.every((inputElement) =>
      inputElement.validity.valid);
  }

  _toggleButtonState() {
    const buttonElement = this._form.querySelector(this._submitButtonSelector);

    if (this._hasInvalidInput) {
      buttonElement.classList.add(this._inactiveButtonClass);
      buttonElement.disabled = true;;
     } 
     buttonElement.classList.remove(this._inactiveButtonClass);
     buttonElement.disabled = false;
   };

  _setEventListeners() {
    const inputList = Array.from(this._form.querySelectorAll(this._inputSelector));

 inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      this._checkInputValidity(inputElement);
      this._toggleButtonState();
    });
  });
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners();
      this._toggleButtonState();
    };

  }