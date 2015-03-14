window.fakeStorage = {
  _data: {},

  setItem: function(id, val) {
    return this._data[id] = String(val);
  },

  getItem: function(id) {
    return this._data.hasOwnProperty(id) ? this._data[id] : undefined;
  },

  removeItem: function(id) {
    return delete this._data[id];
  },

  clear: function() {
    return this._data = {};
  }
};

function LocalStorageManager() {
  var supported = this.localStorageSupported();
  this.storage = supported ? window.localStorage : window.fakeStorage;
}

LocalStorageManager.prototype.localStorageSupported = function() {
  var testKey = "test";
  var storage = window.localStorage;

  try {
    storage.setItem(testKey, "1");
    storage.removeItem(testKey);
    return true;
  } catch (error) {
    return false;
  }
};

LocalStorageManager.prototype.getGrowupLog = function(id) {
  var growupLogJSON = this.storage.getItem(id);
  return growupLogJSON ? JSON.parse(growupLogJSON) : null;
};

LocalStorageManager.prototype.setGrowupLog = function(id, growupLog) {
  this.storage.setItem(id, JSON.stringify(growupLog));
};

LocalStorageManager.prototype.clearGrowupLog = function() {
  this.storage.clear();
};