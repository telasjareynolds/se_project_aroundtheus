export default class Card {
  constructor(data, cardSelector, handleImageClick, handleCardDelete, handleCardLike) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this.cardSelector = cardSelector;
    this._element = this._getTemplate();
    this._handleImageClick = handleImageClick;
    this._handleCardDelete = handleCardDelete;
    this._cardLikeBtn = this._element.querySelector(".card__like-button");
    this._isLiked = data.isLiked;
    this._handleLikeClick = handleCardLike;
    this._id = data._id;
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this.cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardTemplate;
  }

  _setEventListeners() {
    this._cardLikeBtn.addEventListener("click", () => this._handleLikeClick(this));

    this._element
      .querySelector("#card-trash-btn")
      .addEventListener("click", () => {
        this._handleCardDelete(this);
      });

    // pass data to the image click handler
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => this._handleImageClick(this._data));
  }

  handleCardLike() {
    this._cardLikeBtn.classList.add("card__like-button_active");
  }

  removeCardLike() {
    this._cardLikeBtn.classList.remove("card__like-button_active");
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  cardView() {
    // get the card view
    // set event listeners
    // return the card

    this._element.querySelector(".card__header").textContent = this._name;
    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._name;
    this._likeButton = this._element.querySelector('.card__like-button');

    this._setEventListeners();
    return this._element;
  }

  getId() {
    return this._data._id;
  }

  isLiked() {
    return this._isLiked;
  }
}
