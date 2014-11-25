/**
 * 模型：动态信息
 */
f.model.Dynamic=function(){
	this.id;//id
	this.content;//内容
	this.type;//类型
	this.createTime; //创建时间
	this.createBy; //创建人
	this.updateTime; //修改时间
	this.updateBy; //修改人
}

/**
 * 数据：动态信息
 */
f.data.Dynamic = function() {};
/**
 * 根据id获取动态信息
 * @param {String} id 动态信息id
 * @param {function} callback 获取成功回调方法
 */
f.data.Dynamic.prototype.get = function(id, callback) {};
/**
 * 保存动态信息
 * @param {object} Dynamic 动态信息对象
 * @param {function} callback 保存成功回调方法
 */
f.data.Dynamic.prototype.save = function(Dynamic, callback) {};
/**
 * 修改动态信息
 * @param {object} Dynamic 动态信息对象
 * @param {function}} callback 修改成功回调方法
 */
f.data.Dynamic.prototype.update = function(Dynamic, callback) {};
/**
 * 删除动态信息
 * @param {string} id 动态信息id
 * @param {function} callback 删除成功回调方法
 */
f.data.Dynamic.prototype.delete = function(id, callback) {};
/**
 * 获取所有动态信息
 * @param {function} callback 获取成功回调方法
 */
f.data.Dynamic.prototype.list = function(callback) {};
/**
 * 搜索动态信息
 * @param {string} key
 * @param {function} callback 搜索成功回调方法
 */
f.data.Dynamic.prototype.search=function(key,callback){};