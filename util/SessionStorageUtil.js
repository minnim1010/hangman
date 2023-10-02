class SessionStorageUtil {
  static set(key, value) {
    sessionStorage.setItem(key, value);
  }

  static getAndRemove(key) {
    let item = sessionStorage.getItem(key);
    if (item !== null) {
      sessionStorage.removeItem(key);
    }
    return item;
  }
}

export {SessionStorageUtil}