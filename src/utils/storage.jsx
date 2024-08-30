class storage {
  static set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  static get(key) {
    const item = localStorage.getItem(key);
    if (item) return JSON.parse(item);
    return null;
  }
}

export default storage;
