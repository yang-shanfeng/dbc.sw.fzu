/**
 * 模型：联系人
 */
f.model.Contacts = function {
	this.id; //id
	this.name; //姓名
	this.sex; //性别
	this.mobile; //手机
	this.qq; //qq
	this.weixin; //微信
	this.weibo; //微博
	this.email; //邮箱
	this.photo; //头像
	this.workCity; //工作城市
	this.createTime; //创建时间
	this.createBy; //创建人
	this.updateTime; //修改时间
	this.updateBy; //修改人
};

/**
 * 数据：联系人
 */
f.data.Contacts = function() {};
/**
 * 根据id获取联系人
 * @param {String} id 联系人id
 * @param {function} callback 获取成功回调方法
 */
f.data.Contacts.prototype.get = function(id, callback) {};
/**
 * 保存联系人
 * @param {object} contacts 联系人对象
 * @param {function} callback 保存成功回调方法
 */
f.data.Contacts.prototype.save = function(contacts, callback) {};
/**
 * 修改联系人
 * @param {object} contacts 联系人对象
 * @param {function}} callback 修改成功回调方法
 */
f.data.Contacts.prototype.update = function(contacts, callback) {};
/**
 * 删除联系人
 * @param {string} id 联系人id
 * @param {function} callback 删除成功回调方法
 */
f.data.Contacts.prototype.delete = function(id, callback) {};
/**
 * 获取所有联系人
 * @param {function} callback 获取成功回调方法
 */
f.data.Contacts.prototype.list = function(callback) {};
/**
 * 搜索联系人
 * @param {string} key
 * @param {function} callback 搜索成功回调方法
 */
f.data.Contacts.prototype.search=function(key,callback){};
