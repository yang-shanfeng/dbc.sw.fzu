/**
 * 根据id获取联系人
 * @param {String} id 联系人id
 * @param {function} callback 获取成功回调方法
 */
f.data.Contacts.prototype.get = function(id, callback) {
	this.indexedDb.get("contacts", id, callback);
};
/**
 * 保存联系人
 * @param {object} contacts 联系人对象
 * @param {function} callback 保存成功回调方法
 */
f.data.Contacts.prototype.save = function(contacts, callback) {
	this.indexedDb.save("contacts", contacts, callback);
};
/**
 * 修改联系人
 * @param {object} contacts 联系人对象
 * @param {function}} callback 修改成功回调方法
 */
f.data.Contacts.prototype.update = function(contacts, callback) {
	this.indexedDb.update("contacts", contacts, callback);
};
/**
 * 删除联系人
 * @param {string} id 联系人id
 * @param {function} callback 删除成功回调方法
 */
f.data.Contacts.prototype.delete = function(id, callback) {
	this.indexedDb.delete("contacts", id, callback);
};
/**
 * 获取所有联系人
 * @param {function} callback 获取成功回调方法
 */
f.data.Contacts.prototype.list = function(callback) {
	this.indexedDb.list("contacts", callback);
};
/**
 * 搜索联系人
 * @param {string} key
 * @param {function} callback 搜索成功回调方法
 */
f.data.Contacts.prototype.search = function(key, callback) {
	this.indexedDb.listByIndex("contacts", "by_name", IDBKeyRange.only(key), callback);
};