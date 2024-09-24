export default class Popup {
  constructor(popupSelector) {
    this._popupElement = document.querySelector(popupSelector);
  }

  open() {
    //open popup logic
    this._popupElement.classList.add("modal_opened");
    document.addEventListener("keydown", this._handleEscClose.bind(this));
  }

  close() {
    //close popup logic
    this._popupElement.classList.remove("modal_opened");
    document.removeEventListener("keydown", this._handleEscClose.bind(this));
  }

  _handleEscClose(evt) {
    //store logic for closing using esc
    if (evt.key === "Escape") {

      this.close();
    }
  }

  setEventListeners() {
    //add click event listener to close icon of the popup
    const closeButton = this._popupElement.querySelector(".modal__close");
  
    closeButton.addEventListener("click", () => {
      this.close();
    });

    // close on overlay click
    this._popupElement.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("modal_opened")) {
        this.close();
      }
    });
  }
}
