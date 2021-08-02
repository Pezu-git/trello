/* eslint-disable linebreak-style */
/* eslint-disable class-methods-use-this */

export default class StateService {
  getCards() {
    return JSON.parse(localStorage.getItem('cards')) || [];
  }

  saveCards(data) {
    localStorage.setItem('cards', JSON.stringify(data));
  }
}
