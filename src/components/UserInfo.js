class UserInfo {
  constructor(profileName, profileJob) {
      this.profileJob = document.querySelector(profileJob);
      this.profileName = document.querySelector(profileName);
  }

  getUserInfo() {
    // returns object with user info
    this.profileName = document.querySelector(profileName).textContent;
    profileJob.textContent = jobInput.value;
  }

  setUserInfo() {
    //takes new user data and adds to page
    //use after successful profile form submission
    
  }
}