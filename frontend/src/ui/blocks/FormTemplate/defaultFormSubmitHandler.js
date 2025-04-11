import createCircleLoader from "../CircleLoader/createCircleLoader";

function defaultFormSubmitHandler(handlerSubmit) {
  return async (e) => {
    e.preventDefault();

    const loader = createCircleLoader();
    const submitBtn = e.currentTarget.querySelector("button[type=submit]");

    submitBtn.disabled = true;
    submitBtn.append(loader);

    await handlerSubmit(e);

    submitBtn.disabled = false;
    loader.remove();
  };
}

export default defaultFormSubmitHandler;
