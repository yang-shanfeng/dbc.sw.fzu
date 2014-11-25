f.service.Contacts = function(contactsData) {
	this.contactsData = contactsData;
};
f.service.Contacts.prototype.get = function(id, callback) {
	f.assert.blank(id, "id is null");
	this.contactsData.get(id, callback);
}
f.service.Contacts.prototype.save(contacts, callback) {
	f.assert.empty(contacts);
	f.assert.blank(contacts.name,"姓名不能为空");
	f.assert.blank(contacts.mobile,"手机不能为空");
	f.assert.blank(contacts.photo,"头像不能为空");
	contacts.createTime=new Date();
	//加密
	var newContacts=null;
	this.contactsData.save(newContacts,callback);
	
};
f.service.Contacts.prototype.delete = function(id, callback) {
	f.assert.blank(id, "id is null");
	this.contactsData.delete(id, callback);
}