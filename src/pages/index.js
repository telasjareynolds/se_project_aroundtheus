import Card from "../scripts/components/Card.js";
import FormValidator from "../scripts/components/FormValidator.js";
import '../pages/index.css';

const cardSelector = '#card-template';

const initialCards = [
  {
    name: "Delijan, Iran",
    link: "https://images.unsplash.com/photo-1716102229255-faeed7ddb72a?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }, 
  {
    name: "Gardens by the Bay, Singapore",
    link: "https://images.unsplash.com/photo-1516496636080-14fb876e029d?q=80&w=2576&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "San Francisco, California",
    link: "https://images.unsplash.com/photo-1718041705221-0a6a8735c278?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Luna Park, Austrailia",
    link: "https://images.unsplash.com/photo-1718586534246-0e30b55a713e?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Hakodate, Japan",
    link: "https://images.unsplash.com/photo-1581346901292-7cf5c786d194?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Denmark",
    link: "https://images.unsplash.com/photo-1717010908458-cedcec3d8222?q=80&w=2565&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "London, England",
    link: "https://images.unsplash.com/photo-1711322605808-426ce4a357c1?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    name: "Times Square, New York",
    link: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
 }
];


/*-----------------------------------------------------------------*/
/*                            Elements                             */
/*-----------------------------------------------------------------*/
const buttonEdit = document.querySelector('#js-edit-button');
const buttonAdd = document.querySelector('#js-add-button');
const closeButtons = document.querySelectorAll('.modal__close');

const profileEditModal = document.querySelector('#profile-edit-modal');
const profileForm = document.forms["profile-form"];
const profileName = document.querySelector('#profile_name');
const profileJob = document.querySelector('#profile_job');

const addCardModal = document.querySelector('#add-card-modal');
const cardForm = document.forms["card-form"];

const previewImageModal = document.querySelector('#modal-preview-img');
const previewImageElement = document.querySelector('.js-modal-img-preview');
const previewImageCaption = previewImageModal.querySelector('#js-preview-caption');

const nameInput = profileEditModal.querySelector("[name='title']");
const jobInput = profileEditModal.querySelector("[name='description']");
const titleInput = addCardModal.querySelector("[name='title']");
const linkInput = addCardModal.querySelector("[name='link']");

const cardContainer = document.querySelector('.cards__list');

/*-----------------------------------------------------------------*/
/*                           Functions                             */
/*-----------------------------------------------------------------*/
function closePopup(modal) {
  modal.classList.remove('modal_opened');
  document.removeEventListener("keydown", handleEscClose);
  modal.removeEventListener("mousedown", clickClosePopUp);
}

function createCard(data) {
  const cardElement = new Card(data, cardSelector, handleImageClick);
  return cardElement.cardView();
}

function renderCard(data, cardContainer) {
  const card = createCard(data);
  cardContainer.prepend(card);
}

// declare a handleImageClick function
//    give it the content from the previous handler
// then pass the function to Card.js
function handleImageClick(data) {
      previewImageElement.src = data.link;
      previewImageCaption.textContent = data.name;
      previewImageElement.alt = data.name;
      openPopup(previewImageModal);
}

  function openPopup(popup) {
    popup.classList.add('modal_opened');
    document.addEventListener("keydown", handleEscClose);
    popup.addEventListener("mousedown", clickClosePopUp);
};

/*-----------------------------------------------------------------*/
/*                         Event Handlers                          */
/*-----------------------------------------------------------------*/

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(profileEditModal);
}

/*-----------------------------------------------------------------*/
/*                         Event Listeners                         */
/*-----------------------------------------------------------------*/
buttonEdit.addEventListener('click', function () {
  openPopup(profileEditModal);
});

buttonAdd.addEventListener('click', function () {
  openPopup(addCardModal);
});

closeButtons.forEach((button) => {
  const popup = button.closest('.modal');
  button.addEventListener('click', () => closePopup(popup));
});

profileForm.addEventListener('submit', handleProfileFormSubmit); 

cardForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const name = titleInput.value;
  const link = linkInput.value;
  const cardData = {name, link};
  renderCard(cardData, cardContainer);
  closePopup(addCardModal);
  cardForm.reset();
  formValidators["card-form"].disableButton();
});

initialCards.forEach((card) => {
  renderCard(card, cardContainer);
});



//close popup on click to overlay or "esc" press
function clickClosePopUp(evt) {
  if (evt.target.classList.contains("modal_opened")) {
    closePopup(evt.target);
  }
}

function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const modalOpened = document.querySelector(".modal_opened");
    closePopup(modalOpened);
  }
}


/*                         Validation                          */
/*-----------------------------------------------------------------*/
const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
}; 

const formValidators = {}

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(settings, formElement)
   const formName = formElement.getAttribute('name');

    formValidators[formName] = validator;
    validator.enableValidation();
  })
}

enableValidation(settings);





