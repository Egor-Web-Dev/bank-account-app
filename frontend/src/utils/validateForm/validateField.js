import FieldValidator from "./FieldValidator";
import ValidationOptions from "./ValidationOptions";

function validateField({ input, option }) {
  const validator = new FieldValidator(input.value.trim());
  const options = new ValidationOptions(option);
  const result = { id: input.id };

  for (const k in options) {
    const message = validator[k](options[k]);

    if (message) {
      result.message = message;
      break;
    }
  }

  return result;
}

export default validateField;
