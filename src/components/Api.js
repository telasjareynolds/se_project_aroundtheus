export default class Api {
constructor() {
    this.baseUrl = "https://around-api.en.tripleten-services.com/v1";
    this._headers = {
      "Content-Type": "application/json",
      authorization: "abe8d1d8-efa1-44cc-9410-8e0017a1a66e"
    }
}


getUserInfo(name, about, avatar, id) {
  //Cards should be rendered after the user information is received from the server.
  // Сreate a function in Api.js and return the Promise.all() method. Pass the array of function calls for getting user information and the list of cards to Promise.all() as a parameter.  
  
  return fetch(`${this.baseUrl}/users/me`, {
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: about, 
        avatar: avatar, 
        _id: id
      }),
  })

  .then(res => {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  })
} 

modifyUserProfile({name, about}) {
  return fetch(`${this.baseUrl}/users/me`, {
    method: "PATCH",
    headers: this._headers,
    body: JSON.stringify({
      name: name, 
      about: about
    }),
    })
      .then(res => {
          if (res.ok) {
              return res.json();
            }
            // reject the promise
            return Promise.reject(`Error: ${res.status}`);
          });
}

getInitialCards() {
  return fetch(`${this.baseUrl}/cards`, {
    headers: this._headers
        })
          .then(res => {
              if (res.ok) {
                  return res.json();
                }
                // reject the promise
                return Promise.reject(`Error: ${res.status}`);
              });
          }

deleteCard(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}.
      
      `, {
      method: "DELETE",
      headers: this._headers,
      body: JSON.stringify(cardId),
      })
        .then(res => {
            if (res.ok) {
                return res.json();
              }
              // reject the promise
              return Promise.reject(`Error: ${res.status}`)
            })
          }
          
  // Method to create new cards
  createCards(cardData) {
    return fetch(`${this.baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(cardData),
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      });
  }

  addCardLike(cardId) {
    return fetch(`${this.baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      });
  }

  removeCardLike(_id) {
    return fetch(`${this.baseUrl}/cards/${_id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      });
  }

  changeProfilePic(link) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(link)
    })
      .then(res => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(`Error: ${res.status}`);
      });
  }

}

