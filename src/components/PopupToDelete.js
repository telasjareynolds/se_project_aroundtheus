import Popup from "./Popup.js";

class PopupConfirmDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector); 
    this._cardTemplate = document.querySelector("#card-template");
  }


  setEventListeners() {
    // this._cardTemplate.querySelector(".card_trash-button").addEventListener("click", () => {
    //   console.log("hi");
    // }); // Add event listener to delete button


    // Call the parent class's event listeners to open and close the modal
    super.setEventListeners();
  }
}

export default PopupConfirmDelete;