function createContentWrapper(className) {
  const section = document.createElement("section");
  const container = document.createElement("div");
  const content = document.createElement("div");

  section.classList.add("section", className);
  container.classList.add("container");
  content.classList.add(`${className}__content`, "content", "flex");

  container.append(content);
  section.append(container);

  return { section, content };
}

export default createContentWrapper;
