define(function(require, module, exports) {
	require('jquery');
	require('underscore');
	console.log('app start');
	console.log(_.find([1,12,3,5], function(num){
		return num % 3 == 0;
	}));
});