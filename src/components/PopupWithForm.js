import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(".modal__form");
    this._inputList = this._popupElement.querySelectorAll(".modal__input");
    this._submitBtn = this._form.querySelector(".modal__button");
    this._submitBtnText = this._submitBtn.textContent;
  }

  renderLoading(isLoading, loadingText = "Saving...") {
    if (isLoading) {
      this._submitBtn.textContent = loadingText;
    } else {
      this._submitBtn.textContent = this._submitBtnText;
    }
  }

  setSubmitButtonText(text) {
    this._submitBtn.textContent = text;
  }

  _getInputValues() {
    //collect all data from all input fields
    // return it as object
    // pass to submission handler as argument
    const formValues = {};

    this._inputList.forEach((input) => {
      formValues[input.name] = input.value;
    });

    return formValues;
  }

  setEventListeners() {
    // add submit event listener to the form
    //call setEventListeners method
    super.setEventListeners();

    this._popupElement.addEventListener("submit", (evt) => {
      evt.preventDefault();

      const inputData = this._getInputValues();
      this._handleFormSubmit(inputData);
    });
  }
}
