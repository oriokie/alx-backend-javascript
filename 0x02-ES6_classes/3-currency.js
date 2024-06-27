// Implementing a class named Currency
export default class Currency {
  /**
   * Creates a new currency.
   * @param {string} code - The code of the currency
   * @param {string} name - The name of the currency
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(value) {
    this._code = value;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  /**
   * Method that returns the Full currency.
   * Returns a string with the format: name (code)
   * @returns {String}
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
