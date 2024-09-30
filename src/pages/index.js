import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import "../pages/index.css";
import {
  cardContainer,
  cardSelector,
  cardForm,
  settings,
  buttonEdit,
  buttonAdd,
  nameInput,
  jobInput,
  changeAvatarbtn,
  apiOptions,
  avatarInput,
  savingBtn,
} from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
// import Popup from "../components/Popup.js";
import PopupConfirmDelete from "../components/PopupConfirmDelete.js";
/*-----------------------------------------------------------------*/
/*                           Functions                             */
/*-----------------------------------------------------------------*/

function createCard(data) {
  const cardElement = new Card(
    data,
    cardSelector,
    (imgData) => {
      imagePopup.open(imgData);
    },
    handleCardDelete,
    handleCardLike
  );
  return cardElement.cardView();
}

// Api instances
const api = new Api(apiOptions);

// delete card instance
function handleCardDelete(card) {
  confirmDeleteModal.setSubmitFunction(() => {
    api
      .deleteCard(card.getId())
      .then(() => {
        //remove card from DOM
        card.deleteCard();
        confirmDeleteModal.close();
      })
      .catch((err) => {
        console.error("Error deleting card", err);
      });
  });
  confirmDeleteModal.open();
}

// Confirm delete modal instance
const confirmDeleteModal = new PopupConfirmDelete("#confirm-delete-modal");

confirmDeleteModal.setEventListeners();

//Cards should be rendered after the user information is received from the server.

function getUserData() {
  api
    .getUserInfo()
    .then((data) => {
      userInfo.setUserInfo(data);
    })
    .catch((err) => console.error(err));
}
getUserData();

// UserInfo class instance
const userInfo = new UserInfo({
  profileName: "#profile_name",
  profileJob: "#profile_job",
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    document.getElementById("profile__avatar").src = userData.avatar;
    document.getElementById("profile-name").textContent = userData.name;
    document.getElementById("profile-title").textContent = userData.about;

    cardSection.renderItems(cardsData);
  })
  .catch((err) => {
    console.error("Error:", err);
  });

function handleCardLike(card) {
  api
    .addCardLike(card.getId())
    .then((cardData) => {
      card.handleCardLike(cardData);
    })
    .catch((err) => console.error(err));
}

function removeCardLike(card) {
  api
    .removeCardLike(card.getId())
    .then((cardData) => {
      card.handleCardLike(cardData);
    })
    .catch((err) => console.error(err));
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

/*-----------------------------------------------------------------*/
/*             Class Instances                          */
/*-----------------------------------------------------------------*/

// Section instance
const cardSection = new Section(
  {
    items: [],
    renderer: (data) => {
      cardSection.addItem(createCard(data), "append");
    },
  },
  cardContainer
);

// Edit Avatar instance
const popupWithAvatarForm = new PopupWithForm(
  "#edit-avatar-modal",
  (formData) => {
    savingBtn.textContent = "Saving...";
    const avatarLink = formData.avatar;
    api
      .changeProfilePic(avatarLink)
      .then((data) => {
        document.getElementById("profile__avatar").src = data.avatar;
        popupWithAvatarForm.close();
      })
      .catch((err) => console.error(err));
  }
);

popupWithAvatarForm.setEventListeners();

changeAvatarbtn.addEventListener("click", () => {
  // assign them to the value of the corresponding input elements
  api
    .getUserInfo()
    .then((userData) => {
      avatarInput.value = userData.avatar;
      popupWithAvatarForm.open();
    })
    .catch((err) => console.error(err))
    .finally(() => {
      savingBtn.textContent = "Create";
    });
});

// Edit modal instance
const popupWithEditForm = new PopupWithForm(
  "#profile-edit-modal",
  (formData) => {
    savingBtn.textContent = "Saving...";
    api
      .modifyUserProfile(formData)
      .then((data) => {
        userInfo.setUserInfo(data);
        popupWithEditForm.close();
      })
      .catch((err) => console.error(err))
      .finally(() => {
        savingBtn.textContent = "Create";
      });
  }
);

popupWithEditForm.setEventListeners();

buttonEdit.addEventListener("click", () => {
  // assign them to the value of the corresponding input elements
  const userData = userInfo.getUserInfo();
  nameInput.value = userData.name;
  jobInput.value = userData.about;
  popupWithEditForm.open();
});

// Add modal instance
const popupWithAddForm = new PopupWithForm("#add-card-modal", (formData) => {
  savingBtn.textContent = "Saving...";
  api
    .createCard(formData)
    .then((data) => {
      const cardElement = createCard(data);
      cardSection.addItem(cardElement);
      popupWithAddForm.close();
      cardForm.reset();
      formValidators["card-form"].disableButton();
    })
    .catch((err) => console.error(err))
    .finally(() => {
      savingBtn.textContent = "Create";
    });
});
popupWithAddForm.setEventListeners();

buttonAdd.addEventListener("click", function () {
  popupWithAddForm.open();
});

// Preview image modal instance
const imagePopup = new PopupWithImage("#modal-preview-img");
imagePopup.setEventListeners();
