export default class Card {
  constructor(data, cardSelector, handleImageClick) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector; 
    this._element = this._getTemplate();
    this._handleImageClick = handleImageClick;
  }

  _getTemplate() {
 const cardTemplate = document.querySelector(this._cardSelector).content.querySelector(".card").cloneNode(true);
 return cardTemplate;
  }
  
  _setEventListeners() {
 
      this._element.querySelector(".card__like-button").addEventListener('click', () =>
        this._handleCardLike());

      this._element.querySelector("#card-delete-btn").addEventListener('click', () =>
        this._handleCardDelete());

      // pass data to the image click handler
      this._element.querySelector('.card__image').addEventListener('click', () => 
         this._handleImageClick(this._data));
  }

  _handleCardLike() {
      this._element.querySelector(".card__like-button").classList.toggle('card__like-button_active');
  
  }

  _handleCardDelete() {
      this._element.remove();
      this._element = null;
  }

  cardView() {
   // get the card view
   // set event listeners
   // return the card
   
   this._element.querySelector('.card__header').textContent = this._name;
   this._element.querySelector('.card__image').src = this._link;
   this._element.querySelector('.card__image').alt = this._name;

   this._setEventListeners();
   return this._element;
  }
}