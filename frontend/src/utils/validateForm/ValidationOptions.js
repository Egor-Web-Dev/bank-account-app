class ValidationOptions {
  constructor({
    isRequired = false,
    noSpace = false,
    minLength = 0,
    maxLength = Infinity,
    greaterZero = false,
  }) {
    this.isRequired = isRequired;
    this.greaterZero = greaterZero;
    this.noSpace = noSpace;
    this.minLength = minLength;
    this.maxLength = maxLength;
  }
}

export default ValidationOptions;
