'use strict';

import * as angular from 'angular';
//----start-classify

let TaskNavBarComponent = {
    selector:'taskNavBar',
    templateUrl: 'app/task/header/task-navbar.html',
    bindings:{}
}

angular
    .module('Todo')
    .component(TaskNavBarComponent.selector, TaskNavBarComponent);

//----end-classify

//1 angular.module('Todo')
//     .component('taskNavBar',{
//         templateUrl: 'app/task/header/task-navbar.html',
//     })
// ;
