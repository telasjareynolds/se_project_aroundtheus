import Popup from "./Popup.js";

class PopupConfirmDelete extends Popup {
  constructor(popupSelector, cardSelector) {
    super(popupSelector); 
    this.cardSelector = cardSelector;
  }


  setEventListeners() {
    this.cardSelector.querySelector(".card_trash-button").addEventListener("click", () => {
      super.open(this._popupElement);
    }); // Add event listener to delete button


    // Call the parent class's event listeners to open and close the modal
    super.setEventListeners();
  }
}

export default PopupConfirmDelete;