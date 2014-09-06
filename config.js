(function() {
	require.config({
		baseUrl : (function() {
	            var baseUrl = window.location.href.split('/');
	            //url = baseUrl[0] + '//' +baseUrl[2] + '/djs/';
	            url = ""
	            return url;
		})(),
		'paths' : {
			'jquery' : 'vendor/jquery',
			'jsrender' : 'vendor/jsrender'
		},
		'shim' : {
			'jsrender' : ['jquery']
		},
		urlArgs: "bust=" +  (new Date()).getTime()
	});
}).call(this);