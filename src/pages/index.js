import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import {
  initialCards,
  cardContainer,
  cardSelector,
  cardForm,
  settings,
  buttonEdit,
  titleInput,
  buttonAdd,
  linkInput,
  nameInput,
  jobInput,
} from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";

/*-----------------------------------------------------------------*/
/*                           Functions                             */
/*-----------------------------------------------------------------*/

function createCard(data) {
  const cardElement = new Card(data, cardSelector, (imgData) => {
    imagePopup.open(imgData);
  });
  return cardElement.cardView();
}

/*----------------------------------------------------------------*/
/*                         Validation                          */
/*----------------------------------------------------------------*/

const formValidators = {};

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formSelector));
  formList.forEach((formElement) => {
    const validator = new FormValidator(settings, formElement);
    const formName = formElement.getAttribute("name");

    formValidators[formName] = validator;
    validator.enableValidation();
  });
};

enableValidation(settings);

// Section class Instance
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (data) => {
      cardSection.addItem(createCard(data));
    },
  },
  cardContainer
);
cardSection.renderItems();

// UserInfo class instance
const userInfo = new UserInfo({
  profileName: "#profile_name",
  profileJob: "#profile_job",
});

// Edit modal instance
const popupWithEditForm = new PopupWithForm(
  "#profile-edit-modal",
  (formData) => {
    userInfo.setUserInfo(formData);
    popupWithEditForm.close();
  }
);

popupWithEditForm.setEventListeners();

buttonEdit.addEventListener("click", () => {
  // assign them to the value of the corresponding input elements
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.job;
  popupWithEditForm.open();
});

// Add modal instance
const popupWithAddForm = new PopupWithForm("#add-card-modal", (formData) => {
  const cardElement = createCard(formData);
  cardSection.addItem(cardElement);
  popupWithAddForm.close();
  cardForm.reset();
  formValidators["card-form"].disableButton();
});
popupWithAddForm.setEventListeners();

buttonAdd.addEventListener("click", function () {
  popupWithAddForm.open();
});

// Preview image modal instance
const imagePopup = new PopupWithImage("#modal-preview-img");
imagePopup.setEventListeners();
