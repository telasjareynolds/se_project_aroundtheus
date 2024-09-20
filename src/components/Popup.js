export default class Popup {
  constructor({popupSelector}) {
    this._popupElement = document.querySelector(`.${popupSelector}`);
  }

  open() {
    //open popup logic
    this._popupElement.classList.add('modal_opened');
  }

  close() {
    //close popup logic
    this._popupElement.classList.remove('modal_opened');
  }

  _handleEscClose(evt) {
    //store logic for closing using esc
    if (evt.key === "Escape") {
      this.close(this._popupElement);
  }

  setEventListeners() {
    //add click event listener to close icon of the popup
    //window close on overlay click
    const closeButton = document.querySelector(this._popupElement).querySelector('.modal__close');
    closeButton.addEventListener('click', this.close());
}