function createWrapper(...classNames) {
  const wrapper = document.createElement("div");

  classNames.forEach((c) => wrapper.classList.add(c));

  return wrapper;
}

export default createWrapper;
