exports.install = function() {
	framework.route('/1/', test1);
	framework.route('/2/', test2);
	framework.route('/3/', test3, ['post', 'json']);
};

exports.functions = {
	increment: function(num) {
		return num + 1;
	}
};

function test1() {
	this.plain('1');
}

function test2() {
	/*
	if (TEST)
		console.log('IS TEST');
	*/
	this.plain('2');
}

function test3() {
	// throw error
	var self = this;
	self.json(self.body);
}