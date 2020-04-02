'use strict';

import * as angular from 'angular';

let TaskListNavbarComponent = {
    selector:'listNavBar',
    templateUrl: 'app/taskList/header/navbar/task-list-navbar.tmpl.html',
    bindings:{}
}

angular
    .module('Todo')
    .component(TaskListNavbarComponent.selector, TaskListNavbarComponent);
