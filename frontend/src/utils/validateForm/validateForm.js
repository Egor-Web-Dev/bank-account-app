import validateField from "./validateField";
import MESSAGE_STATUS from "../../config/messageStatus";
import showValidationMessages from "./showValidationMessages";
import { deleteSuccessMessages } from "./deleteValidationMessages";

function validateForm(...validationData) {
  const errorInputs = [];
  const validInputs = [];

  for (const d of validationData) {
    const result = validateField(d);

    result.message ? errorInputs.push(result) : validInputs.push(result);
  }

  if (validInputs.length === 0) deleteSuccessMessages();

  if (errorInputs.length > 0) {
    showValidationMessages(errorInputs, MESSAGE_STATUS.error);
    showValidationMessages(validInputs, MESSAGE_STATUS.success);

    return false;
  }

  return true;
}

export default validateForm;
