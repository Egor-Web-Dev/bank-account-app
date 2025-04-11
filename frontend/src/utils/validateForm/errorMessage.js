const VALIDATION_ERROR_MESSAGE = {
  require: "Заполните поле!",
  noSpace: "Поле не должно содержать пробелов между строк!",
  greaterZero: "Значение должно быть больше нуля",
  minLength: (value) => `Поле должно содержать не менее ${value} символов!`,
  maxLength: (value) => `Поле должно содержать не более ${value} символов!`,
};

export default VALIDATION_ERROR_MESSAGE;
