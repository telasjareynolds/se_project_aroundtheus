import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector); 
    this._popupForm = document.querySelector(".modal__form")
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    //collect all data from all input fields
    // return it as object
    // pass to submission handler as argument
    this._element = this._form.querySelectorAll('.modal__input');
    return this._element;
    

  }

  setEventListeners() {
    // add submit event listener to the form
    //call setEventListeners method
    this._popupForm.setEventListeners('submit', super.setEventListeners());
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}