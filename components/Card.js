export default class Card {
  constructor(data, cardSelector, handleImageClick) {
      this._cardSelector = cardSelector;  
      this._name = data.name;
      this._link = data.link;
      this._handleImageClick = handleImageClick;
  }

  _handleImageClick() {
    this._element.querySelector('.card__image').addEventListener('click', () => {
      this._element.querySelector('.js-modal-img-preview').src = this._link;
      this._element.querySelector('#js-preview-caption').textContent = this._name;
      this._element.querySelector('.js-modal-img-preview').alt = this._name;
      openPopup(previewImageModal);
      this._element.querySelector('#modal-preview-img').classList.add('modal_opened');
    })
  }
  _setEventListeners() {
      this._element.addEventListener('click', () => {
      this._handleImageClick(this);
      });

      this._element.querySelector(".card__like-button").addEventListener('click', () =>
        this._handleCardLike);

      this._element.querySelector("#card-delete-btn").addEventListener('click', () =>
        this._handleCardDelete);

      this._element.querySelector('.card__image').addEventListener('click', () => this._handleImageClick);
  }

  _handleCardLike() {
      this._element.querySelector(".card__like-button").classList.toggle('card__like-button_active');
  
  }

  _handleCardDelete() {
      this._element.querySelector("#card-delete-btn").remove();
  }

  _getTemplate() {
return document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
  }

  cardView() {
   // get the card view
   // set event listeners
   // return the card
   this._element = this._getTemplate();
   
   this._element.querySelector('.card__header').textContent = this._name;
   this._element.querySelector('.card__image').src = `url(${this._link})`;
   this._element.querySelector('.card__image').alt = this._name;

   this._setEventListeners();
   return this._element;
  }
}