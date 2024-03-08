/**
 * Represents a currency
 */
export default class Currency {
    constructor(code, name) {
        this.code = code;
        this.name = name;
    }

    get code() {
        return this._code;
    }

    set code(newCode) {
        this.code = newCode;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
    }

    displayFullCurrency() {
        return `${this._name} ${this.code}`
    }
}