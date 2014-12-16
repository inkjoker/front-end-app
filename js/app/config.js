requirejs.config({
    baseUrl: "js/app/",
    paths: {
        "jquery": "../vendor/jquery/dist/jquery.min",
        "underscore": "../vendor/underscore/underscore-min"
    },
    shim: {
        'underscore': {
            exports: '_'
        }
    }
});