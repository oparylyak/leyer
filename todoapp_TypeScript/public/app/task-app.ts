'use strict';

import * as angular from 'angular';

//import * as $ from 'jquery';
// import {NgModule} from "angular-ts-decorators";
// @NgModule({
//     id: 'Todo',
//     imports:[
//         'ui.router'
//     ],
// })
//
// export class Todo {
//
// }

angular.module("Todo",[
    "ui.router",
])
    .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
        $urlRouterProvider.otherwise('/taskList');
        $stateProvider
            .state('todo', {
                url:'/taskList',
                abstract: true,
            })
            .state('todo.taskList', {
                url:'',
                component:'taskList',
            })
            .state('todo.task',{
                url: '/:taskId',
                component:'task',
            })
            .state('todo.task.edit',{
                url:'/edit',
                component:'taskEdit',
            })
            .state('todo.taskList.create',{
                url:'/create',
                component:'taskCreate'
            })
    }]);

