class HashMap {
  constructor () {
    this.keys = new Array(17)
    this.values = new Array(17)
  }

  hash (key) {
    let hash = 0
    let seed = 131
    for (let i = 0; i < key.length; i++) {
      hash = hash  * seed + key.charCodeAt(i)
    }
    return hash
  }

  set (key, val) {
    let pos = this.hash(key)
    if (this.keys[pos] === key) {
      this.values[pos] =val
    } else {
      this.keys[pos] = key
      this.values[pos] = val
    }
  }

  get (key) {
    let pos = this.hash(key)
    if (this.keys[pos] === key) {
      return this.values[pos]
    }
  }
}