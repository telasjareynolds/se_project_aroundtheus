export const cardSelector = '#card-template';

export const apiOptions = {
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "abe8d1d8-efa1-44cc-9410-8e0017a1a66e",
    'Content-Type': 'application/json'
  }
}

export const initialCards = [
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

export const confirmDeleteBtn = document.querySelector("#card-delete-btn");
export const buttonEdit = document.querySelector('#js-edit-button');
export const buttonAdd = document.querySelector('#js-add-button');
export const changeAvatarbtn = document.querySelector('.profile__avatar-edit-btn');
export const savingBtn = document.querySelector('.modal__save-button');





export const profileEditModal = document.querySelector('#profile-edit-modal');
export const profileForm = document.forms["profile-form"];
export const profileName = document.querySelector('#profile_name');
export const profileJob = document.querySelector('#profile_job');

export const addCardModal = document.querySelector('#add-card-modal');
export const cardForm = document.forms["card-form"];

export const previewImageModal = document.querySelector('#modal-preview-img');
export const previewImageElement = document.querySelector('.js-modal-img-preview');
export const previewImageCaption = previewImageModal.querySelector('#js-preview-caption');
export const avatarModal = document.querySelector('#edit-avatar-modal');

export const nameInput = profileEditModal.querySelector("[name='name']");
export const jobInput = profileEditModal.querySelector("[name='about']");

export const titleInput = addCardModal.querySelector("[name='title']");
export const linkInput = addCardModal.querySelector("[name='link']");
export const avatarInput = avatarModal.querySelector("[name='avatar']");

export const cardContainer = document.querySelector('.cards__list');

export const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
}; 