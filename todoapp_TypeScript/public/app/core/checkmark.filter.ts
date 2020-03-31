'use strict';
import * as angular from 'angular';

angular.module('Todo')
    .filter('checkmark', function(){
    return function(input){
        return input ? '\u2713' : '\u2718';
    };
});
