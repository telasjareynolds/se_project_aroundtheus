export default class Card {
  constructor(data, cardSelector) {
      this._cardSelector = cardSelector;  
      this._name = data.name;
      this._link = data.link;
      this._handleImageClick = handleImageClick;
  }
  handleImageClick() {
    this._element.querySelector('.card__image').addEventListener('click', () => {
      previewImageElement.src = data.link;
      previewImageCaption.textContent = data.name;
      previewImageElement.alt = data.name;
      openPopup(previewImageModal);
    })
  }
  _setEventListeners() {
      this._cardImageElement.addEventListener('click', () => {
      this._handleImageClick(this);
      });

      this._element.querySelector(".card__like-button").addEventListener('click', () =>
        this._handleCardLike);

      this._element.querySelector("#card-delete-btn").addEventListener('click', () =>
        this._handleCardDelete);
  }

  _handleCardLike() {
      this._element.querySelector(".card__like-button").classList.toggle('card__like-button_active');
      console.log("hello");
  }

  _handleCardDelete() {
      this._element.querySelector("#card-delete-btn").remove();
  }
  renderCard() {
   // get the card view
   // set event listeners
   // return the card
   this._element.querySelector('.card').cloneNode(true);
   
   this._element.querySelector('.card__header').textContent = this._name;
   this._element.querySelector('.card__image').src = `url(${this._link})`;
   this._element.querySelector('.card__image').alt = this._name;

   this._setEventListeners();
   return this._element;
  }
}