(function(angular) {

    'use strict';


    var app = angular.module('demoModule', []);

    app.controller('demoController', ['$scope', function ($scope) {
    	this.demo1 = function(){
    		console.log('???');
    	};
    }]);

})(window.angular);
