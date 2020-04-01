'use strict';

import * as angular from 'angular';

//----start-classify
let TaskListNavBarComponent = {
    selector:'listNavBar',
    templateUrl: 'app/taskList/header/navbar/task-list-navbar-tmpl.html',
    bindings:{}
}

angular
    .module('Todo')
    .component(TaskListNavBarComponent.selector, TaskListNavBarComponent);
//----end-classify

//1 angular.module('Todo').
// component('listNavBar',{
//     templateUrl: 'app/taskList/header/navbar/task-list-navbar-tmpl.html',
//
// });
