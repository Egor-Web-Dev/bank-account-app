class SearchParams {
  static set(key, value) {
    const url = new URL(location.href);
    url.searchParams.set(key, value);
    history.pushState(null, "", url);
  }

  static get(key) {
    return new URL(location.href).searchParams.get(key);
  }
}

export default SearchParams;
