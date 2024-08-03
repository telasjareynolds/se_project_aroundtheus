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
const closeEditForm = document.querySelector('#close-edit-btn');
const closeAddForm = document.querySelector('#close-add-btn');

const profileEditModal = document.querySelector('#profile-edit-modal');
const profileFormElement = profileEditModal.querySelector('.modal__form');
const profileName = document.querySelector('#profile_name');
const profileJob = document.querySelector('#profile_job');

const addCardModal = document.querySelector('#add-card-modal');
const addFormElement = addCardModal.querySelector('.modal__form');
const addCardForm = addCardModal.querySelector("#add-card-form"); 
const addSubmitButton = addFormElement.querySelector(".js-submit-btn");

const nameInput = profileEditModal.querySelector("[name='title']");
const jobInput = profileEditModal.querySelector("[name='description']");
const titleInput = addCardModal.querySelector("[name='title']");
const linkInput = addCardModal.querySelector("[name='link']");

const cardTemplate = document.querySelector('#card-template').content;
const cardContainter = document.querySelector('.cards__list');
/*-----------------------------------------------------------------*/
/*                           Functions                             */
/*-----------------------------------------------------------------*/
function closePopup(modal) {
  modal.classList.remove('modal_opened');
}

function renderCard(cardElement, cardContainter) {
  cardContainter.prepend(cardElement);
}

function getCardElement (data) {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImageTem = cardElement.querySelector('.card__image');
  const cardTitleTem = cardElement.querySelector('.card__header');
  cardTitleTem.textContent = data.name;
  cardImageTem.src = data.link;
  cardTitleTem.alt = data.name;
  const likeBtns = cardElement.querySelector('.card__like-button');
  likeBtns.addEventListener('click', () => {
    likeBtns.classList.toggle('card__like-button_active');
  });
  const cardDeleteBtn = cardElement.querySelector('#card-delete-btn');
cardDeleteBtn.addEventListener('click', () => {
  cardElement.remove();
});
  //add click listner to the card image element
    //openModal with previewImageModal
  return cardElement;
}

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
  profileEditModal.classList.add('modal_opened');
});

buttonAdd.addEventListener('click', function () {
  addCardModal.classList.add('modal_opened');
});

closeEditForm.addEventListener('click', function () {
  closePopup(profileEditModal);
});

closeAddForm.addEventListener('click', function () {
  closePopup(addCardModal);
});


profileFormElement.addEventListener('submit', handleProfileFormSubmit); 

addCardForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = titleInput.value;
  const link = linkInput.value;
  const cardElement = getCardElement({
    name,
    link
  });
  renderCard(cardElement, cardContainter);
  closePopup(addCardModal);
});

initialCards.forEach((data) => {
  const cardElement = getCardElement(data);
  renderCard(cardElement, cardContainter);
});