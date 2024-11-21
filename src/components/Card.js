export default class Card {
  constructor(
    data,
    cardSelector,
    handleImageClick,
    handleCardDelete,
    handleCardLikeButtonClick
  ) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this.cardSelector = cardSelector;
    this._element = this._getTemplate();
    this._handleImageClick = handleImageClick;
    this._handleCardDelete = handleCardDelete;
    this._cardLikeBtn = this._element.querySelector(".card__like-button");
    this._isLiked = data.isLiked;
    this._id = data._id;
    this.handleCardLikeButtonClick = handleCardLikeButtonClick;
    this._header = this._element.querySelector(".card__header");
    this._cardImg = this._element.querySelector(".card__image");
  }

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this.cardSelector)
      .content.querySelector(".card")
      .cloneNode(true);
    return cardTemplate;
  }

  _setEventListeners() {
    this._cardLikeBtn.addEventListener("click", () =>
      this.handleCardLikeButtonClick(this)
    );

    this._element
      .querySelector("#card-trash-btn")
      .addEventListener("click", () => {
        this._handleCardDelete(this);
      });

    // pass data to the image click handler
    this._cardImg.addEventListener("click", () =>
      this._handleImageClick(this._data)
    );
  }

  handleLikeButtonToggle() {
    this._isLiked = !this._isLiked;
    this._cardLikeBtn.classList.toggle("card__like-button_active");
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setLikeOnLoad() {
    if (this.isLiked()) {
      this._cardLikeBtn.classList.add("card__like-button_active");
    } else {
      this._cardLikeBtn.classList.remove("card__like-button_active");
    }
  }

  cardView() {
    // get the card view
    // set event listeners
    // return the card

    this._header.textContent = this._name;
    this._cardImg.src = this._link;
    this._cardImg.alt = this._name;
    this._cardLikeBtn;

    this._setLikeOnLoad();
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
