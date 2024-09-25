import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(".modal__form");
    this._inputList = this._popupElement.querySelectorAll(".modal__input");
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

      this._form.reset();
    });
  }
}
