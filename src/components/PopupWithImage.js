import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._title = this._popupElement.querySelector('#js-preview-caption');
    this._image = this._popupElement.querySelector('.modal__link');
  }

  open(data) {
    // accept name and link of the card
    // add image to popup and corresponding image src and caption
    this._image.src = data.link;
    this._title.textContent = data.name;
    this._image.alt = data.name;

    super.open();
  }
}