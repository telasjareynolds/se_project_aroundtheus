import Popup from "./Popup.js";

export default class PopupConfirmDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector); 
  }


  setEventListeners() {
    this._popupElement.querySelector(".modal__form").addEventListener("submit", (e) => {
      e.preventDefault();
      this._handleSubmitFuntion();
    }) // Add event listener to delete button

    // Call the parent class's event listeners to open and close the modal
    super.setEventListeners();
  }

  setSubmitFunction(submitFunction) {
    this._handleSubmitFuntion = submitFunction;
  }
}