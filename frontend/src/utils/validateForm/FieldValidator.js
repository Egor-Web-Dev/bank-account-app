import VALIDATION_ERROR_MESSAGE from "./errorMessage";

class FieldValidator {
  #value;

  constructor(value) {
    this.#value = value;
  }

  noSpace(verificationValue) {
    if (verificationValue && this.#value.split(" ").length > 1) {
      return VALIDATION_ERROR_MESSAGE.noSpace;
    }
  }

  isRequired(verificationValue) {
    if (verificationValue && this.#value.length === 0) {
      return VALIDATION_ERROR_MESSAGE.require;
    }
  }

  minLength(verificationValue) {
    if (this.#value.length < verificationValue) {
      return VALIDATION_ERROR_MESSAGE.minLength(verificationValue);
    }
  }

  maxLength(verificationValue) {
    if (this.#value.length > verificationValue) {
      return VALIDATION_ERROR_MESSAGE.maxLength(verificationValue);
    }
  }

  greaterZero(verificationValue) {
    if (
      verificationValue &&
      (Number(this.#value) <= 0 || this.#value.startsWith("0"))
    ) {
      return VALIDATION_ERROR_MESSAGE.greaterZero;
    }
  }
}

export default FieldValidator;
