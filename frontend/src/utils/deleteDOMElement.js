function deleteDOMElement(element, delay) {
  setTimeout(() => {
    element?.remove();
  }, delay);
}

export default deleteDOMElement;
