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
  changeAvatarBtn,
  apiOptions,
  avatarInput,
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
    handleCardLikeButtonClick
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

// UserInfo class instance
const userInfo = new UserInfo({
  profileName: "#profile_name",
  profileJob: "#profile_job",
  profileAvatar: "#profile__avatar",
});

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    // document.getElementById("profile__avatar").src = userData.avatar;
    // document.getElementById("profile-name").textContent = userData.name;
    // document.getElementById("profile-title").textContent = userData.about;
    userInfo.setUserInfo(userData);
    cardSection.renderItems(cardsData);
  })
  .catch((err) => {
    console.error("Error:", err);
  });

function handleCardLikeButtonClick(card) {
  if (!card.isLiked()) {
    api
      .addCardLike(card._id)
      .then(() => {
        card.handleLikeButtonToggle();
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  } else {
    api
      .removeCardLike(card._id)
      .then(() => {
        card.handleLikeButtonToggle();
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }
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

function handleSubmit(request, popupInstance) {
  popupInstance.renderLoading(true);
  //popupInstance.setSubmitButtonText("Saving...")
  request()
    .then(() => {
      popupInstance.close();
    })
    .catch((error) => console.error(error))
    .finally(() => {
      popupInstance.renderLoading(false);
      //popupInstance.setSubmitButtonText("Save")
    });
}

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
    handleSubmit(() => {
      return api.changeProfilePic(formData.avatar).then((data) => {
        userInfo.setUserInfo(data);
        popupWithAvatarForm.close();
      });
    }, popupWithAvatarForm);
  }
);

popupWithAvatarForm.setEventListeners();

changeAvatarBtn.addEventListener("click", () => {
  // assign them to the value of the corresponding input elements
  console.log("hi");
  const userData = userInfo.getUserInfo();
  avatarInput.src = userData.avatar;
  popupWithAvatarForm.open();
});

// Edit modal instance
const popupWithEditForm = new PopupWithForm(
  "#profile-edit-modal",
  (formData) => {
    handleSubmit(
      () =>
        api.modifyUserProfile(formData).then((data) => {
          userInfo.setUserInfo(data);
          popupWithEditForm.close();
        }),
      popupWithEditForm
    );
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
  handleSubmit(() => {
    return api
      .createCard(formData)
      .then((data) => {
        const cardElement = createCard(data);
        cardSection.addItem(cardElement);
        popupWithAddForm.close();
        formValidators["card-form"].disableButton();
      })
      .then(() => {
        cardForm.reset();
      });
  }, popupWithAddForm);
});

popupWithAddForm.setEventListeners();

buttonAdd.addEventListener("click", function () {
  popupWithAddForm.open();
});

// Preview image modal instance
const imagePopup = new PopupWithImage("#modal-preview-img");
imagePopup.setEventListeners();
