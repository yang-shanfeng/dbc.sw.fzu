f = {
	AUTHOR: '小芳',
	APP_ID: 'dbc.sw.fuz',
	VERSION: '0.1',
	model: {},
	data: {},
	service: {},
	controller: {},
	view: {},
	assert: {},
	message: {
		TOAST: 'toast',
		ALERT: 'info',
		ERROR: 'error',
		ALERT_TITLE: '提示信息'
	}
};
f.$ = function(id) {
	return document.getElementById(id);
};
f.$v = function(id) {
	var el = f.$(id);
	el ? null : el.value;
};
f.empty = function() {};
f.isEmpty = function(value) {
	if (value == null || value == undefined) {
		return true;
	} else {
		return false;
	}
};
f.isBlank = function(value) {
	if (f.isEmpty(value)) {
		return true;
	} else {
		if (value.trim() == '') {
			return true;
		} else {
			return false;
		}
	}
}
f.isCnChar = function(value) {
	return /[\u4E00-\u9FA5]/.test(value);
};
f.isMail = function(value) {};
f.alert = function(message) {
	mui.alert(message, f.ALERT_TITLE);
};
f.clone = function(s, t) {
	for (var k in s) {
		t[k] = s[k];
	}
};
f.assert.empty = function(value, message) {
	if (f.isEmpty(value)) {
		throw new Error(JSON.stringify({
			type: f.message.TOAST,
			message: message
		}));
	}
};
f.assert.blank = function(value, message) {
	if (f.isBlank(value)) {
		throw new Error(JSON.stringify({
			type: f.message.TOAST,
			message: message
		}));
	}
};
f.throwError=function(o){
	throw new Error(JSON.stringify(o));
}
f.doError = function(ex) {
	var result = JSON.parse(ex.message);
	if (result.type == f.message.TOAST) {
		mui.toast(result.message);
	} else if (result.type == f.message.ALERT) {
		mui.alert(result.message, f.message.ALERT_TITLE);
	}
}