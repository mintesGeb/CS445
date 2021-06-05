type Obj = {
  [key: string]: string;
};

class MyStorage {
  private storage: Obj = {};

  getItem(key: string) {
    return this.storage[key];
  }
  setItem(key: string, value: string) {
    this.storage[key] = value;
  }
  getStorage() {
    return this.storage;
  }
}
class ImmutableStorage extends MyStorage {
  constructor() {
    super();
    Object.freeze(this.storage);
  }
  setItem(key: string, value: string) {
    let copy = { ...this.storage };
    copy[key] = value;
    return copy;
  }
}
