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
const profileEditModal = document.querySelector('#profile-edit-modal');
const closeEditForm = document.querySelector('#close-edit-btn');

const profileFormElement = profileEditModal.querySelector('.modal__form');

const nameInput = document.querySelector('.modal__heading');
const jobInput = document.querySelector('.modal__description');

const profileName = document.querySelector('#profile_name');
const profileJob = document.querySelector('#profile_job');
/*-----------------------------------------------------------------*/
/*                           Functions                             */
/*-----------------------------------------------------------------*/
function closePopup() {
  profileEditModal.classList.remove('modal_opened');
}

/*-----------------------------------------------------------------*/
/*                         Event Handlers                          */
/*-----------------------------------------------------------------*/
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

/*-----------------------------------------------------------------*/
/*                         Event Listeners                         */
/*-----------------------------------------------------------------*/
buttonEdit.addEventListener('click', function () {
  profileEditModal.classList.add('modal_opened');
});

closeEditForm.addEventListener('click', function () {
  closePopup();
});

profileFormElement.addEventListener('submit', handleProfileFormSubmit);

