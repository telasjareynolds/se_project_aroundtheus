import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector); 
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popupElement.querySelector(".modal__form");
  }

  _getInputValues() {
    //collect all data from all input fields
    // return it as object
    // pass to submission handler as argument

    const inputList = this._popupElement.querySelectorAll('.modal__input');
    const formValues = {};
  
    inputList.forEach((input) => {
    formValues[input.name] = input.value;
    });


    return formValues;
  
  }

  setEventListeners() {
    // add submit event listener to the form
    //call setEventListeners method
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
      this._form.reset();
    });
    super.setEventListeners();
  }

  close() {
    console.log(this._popupElement);
    super.close();
  }
}