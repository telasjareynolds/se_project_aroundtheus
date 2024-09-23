export default class UserInfo {
  constructor({ profileName, profileJob }) {
    this.profileJob = document.querySelector(profileJob);
    this.profileName = document.querySelector(profileName);
    this._element = this._element;
  }

  getUserInfo() {
    // returns object with user info
    return {
      name: this.profileName.textContent,
      job: this.profileJob.textContent,
    };
  }

  setUserInfo() {
    //takes new user data and adds to page
    //use after successful profile form submission
    this.profileName.textContent =
      document.querySelector("#profile-name").value;

    this.profileJob.textContent =
      document.querySelector("#profile-title").value;
  }
}
