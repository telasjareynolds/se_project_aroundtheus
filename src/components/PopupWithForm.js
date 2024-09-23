import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector); 
    this._handleFormSubmit = handleFormSubmit;
    this._form = document.querySelector(".modal__form");
  }

  _getInputValues() {
    //collect all data from all input fields
    // return it as object
    // pass to submission handler as argument
    this._element = this._popupElement. querySelectorAll('.modal__input');
    return this._element;
  
  }

  setEventListeners() {
    // add submit event listener to the form
    //call setEventListeners method
    super.setEventListeners();
    this._popupElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
  });
  }

  close() {
    console.log(this._popupElement);
    super.close();
    this._form.reset();
  }
}