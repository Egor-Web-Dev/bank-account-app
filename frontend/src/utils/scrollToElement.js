function scrollToElement(elementId) {
  const el = document.getElementById(elementId);
  el?.scrollIntoView();
}

export default scrollToElement;
