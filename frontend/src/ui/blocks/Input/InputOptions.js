class InputOptions {
  #id;
  #type;
  #name;
  #placeholder;

  constructor(id, type, name, placeholder) {
    this.#id = id;
    this.#type = type;
    this.#name = name;
    this.#placeholder = placeholder;
  }

  get id() {
    return this.#id;
  }

  get type() {
    return this.#type;
  }

  get name() {
    return this.#name;
  }

  get placeholder() {
    return this.#placeholder;
  }
}

export default InputOptions;
