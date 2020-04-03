'use strict';
import * as angular from 'angular';
import {Pipe} from "angular-ts-decorators";

@Pipe({name:'checkMark'})

export class CheckMarkPipe {
    public transform(input:boolean){
        return input ? '\u2713' : '\u2718';
    };
}

// export class CheckMarkPipe implements PipeTransform {
//     public transform(input:boolean){
//         return input ? '\u2713' : '\u2718';
//     };
// }

//-d angular.module('Todo')
//     .filter('checkmark', function(){
//     return function(input){
//         return input ? '\u2713' : '\u2718';
//     };
// });
