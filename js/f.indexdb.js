f.data.IndexedBb = function(db) {
	this.db = db;
}
f.data.IndexedBb.prototype.getReadObjectStore = function(tableName) {
	var tx = this.db.transaction(tableName, "readonly");
	return tx.objectStore(tableName);
};
f.data.IndexedBb.prototype.getWriteObjectStore = function(tableName) {
	var tx = this.db.transaction(tableName, "readwrite");
	return tx.objectStore(tableName);
};
f.data.IndexedBb.prototype.onerror = function(e) {
	f.throwError({
		type: f.message.TOAST,
		message: e.result.error.message
	});
};

f.data.IndexedBb.prototype.get = function(tableName, callback) {
	var request = this.getReadObjectStore(tableName).get(id);
	request.onsuccess = function() {
		if (callback) {
			callback.call(request.result);
		}
	};
	request.onerror = this.onerror;
};
f.data.IndexedBb.prototype.save = function(tableName, object, callback) {
	this.update(tableName, object, callback);
};
f.data.IndexedBb.prototype.update = function(tableName, object, callback) {
	var request = this.getWriteObjectStore(tableName).put(object);
	request.onsuccess = function() {
		if (callback) {
			callback.call();
		}
	};
	request.onerror = this.onerror;
};
f.data.IndexedBb.prototype.delete = function(tableName, id, callback) {
	var request = this.getWriteObjectStore(tableName).delete(id);
	request.onsuccess = function() {
		if (callback) {
			callback.call();
		}
	};
	request.onerror = this.onerror;
};
f.data.IndexedBb.prototype.list = function(tableName, callback) {
	var request = this.getReadObjectStore(tableName).openCursor();
	var results = [];
	request.onsuccess = function() {
		var cursor = request.result;
		if (cursor) {;
			result.push(cursor.value);
			cursor.continue();
		} else if (callback) {
			callback.call(results);
		}
	}
};

f.data.IndexedBb.prototype.getByIndex = function(tableName, indexName, indexValue, callback) {
	var request = this.getReadObjectStore(tableName).index(indexName).get(indexValue);
	request.onsuccess = function() {
		if (callback) {
			callback.call(request.result);
		}
	};
	request.onerror = this.onerror;
};

f.data.IndexedBb.prototype.listByIndex = function(tableName, indexName, range, callback) {
	var request = this.getReadObjectStore(tableName).index(indexName).openCursor(range);
	var results = [];
	request.onsuccess = function() {
		var cursor = request.result;
		if (cursor) {;
			result.push(cursor.value);
			cursor.continue();
		} else if (callback) {
			callback.call(results);
		}
	}
	request.onerror = this.onerror;
};