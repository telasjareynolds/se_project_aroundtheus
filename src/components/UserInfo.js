export default class UserInfo {
  constructor({ profileName, profileJob }) {
    this.profileJob = document.querySelector(profileJob);
    this.profileName = document.querySelector(profileName);
    this.profileAvatar = document.querySelector("#profile__avatar");
  }

  getUserInfo() {
    // returns object with user info
    return {
      name: this.profileName.textContent,
      about: this.profileJob.textContent,
      avatar: this.profileAvatar.src
    };
  }

  setUserInfo(data) {
    //takes new user data and adds to page
    //use after successful profile form submission
    this.profileName.textContent = data.name;
    this.profileJob.textContent = data.about;
    this.profileAvatar.src = data.avatar;
  }


}
