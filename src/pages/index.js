import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import '../pages/index.css';
import { initialCards, cardContainer, cardSelector, cardForm, settings, previewImageModal, buttonEdit,  buttonAdd } from "../utils/constants.js";
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js'
import Section from '../components/Section.js';

/*-----------------------------------------------------------------*/
/*                           Functions                             */
/*-----------------------------------------------------------------*/
// function closePopup(modal) {
//   modal.classList.remove('modal_opened');
//   document.removeEventListener("keydown", handleEscClose);
//   modal.removeEventListener("mousedown", clickClosePopUp);
// }

function createCard(data) {
  const cardElement = new Card(data, cardSelector, handleImageClick);
  return cardElement.cardView();
}

function renderCard(data, cardContainer) {
  const card = createCard(data);
  cardContainer.prepend(card);
}



function handleImageClick(data) {
      previewImageElement.src = data.link;
      previewImageCaption.textContent = data.name;
      previewImageElement.alt = data.name;
      openPopup(previewImageModal);
}

//   function openPopup(popup) {
//     popup.classList.add('modal_opened');
//     document.addEventListener("keydown", handleEscClose);
//     popup.addEventListener("mousedown", clickClosePopUp);
// };

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
  open(PopupWithForm);
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

// initialCards.forEach((card) => {
//   renderCard(card, cardContainer);
// });



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




//create instances of classes
const CardSection = new section({
  items: initialCards,
  renderer: (data) => {
    const cardEl = new Card( data, cardSelector, handleImageClick: (imgData) => {
      imagePopup.open(imgData)
    });
    CardSection.addItems(cardEl.cardView());
  },
}, 
cardContainer
);

// Create an instance of the PopupWithForm class for each popup that contains a form, and call their setEventListeners() method.
const popupWithForm = new PopupWithForm(formSelector, handleFormSubmit: () => {
  
});


  const imagePopup = new PopupWithImage(previewImageModal);


//initialize all instances 
CardSection.renderItems(initialCards);
imagePopup.setEventListeners(); 
//the rest
