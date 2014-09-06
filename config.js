require.config({
	baseUrl : (function() {
            var baseUrl = window.location.href.split('/');
            //url = baseUrl[0] + '//' +baseUrl[2] + '/djs/';
            url = "file:///C:/WebServers/home/knife.loc/html/js"
            return url;
	})(),
	'paths' : {
		'jquery' : 'vendor/jquery',
		'validate' : 'vendor/jquery.validate',
		'message' : 'vendor/messages_ru',
		'customSelect' : 'vendor/jquery.customSelect',
		'perfect-scrollbar' : 'vendor/perfect-scrollbar',
		'bxslider' : 'vendor/bxSlider/jquery.bxslider',
		'popup' : 'vendor/jquery.magnific-popup',
		'jsrender' : 'vendor/jsrender'
	},
	'shim' : {
		'validate' : ['jquery'],
		'message' : ['validate'],
		'bxslider' : ['jquery'],
		'perfect-scrollbar' : ['jquery'],
		'popup' : ['jquery'],
		'customSelect' : ['jquery'],
		'jsrender' : ['jquery']
	},
	urlArgs: "bust=" +  (new Date()).getTime()
});

var dimenArray = dimenArray || [];

require(['main'], function(){
	require(dimenArray);
})