'use strict';

import * as angular from 'angular';

let TaskListNavBarComponent = {
    selector:'listNavBar',
    templateUrl: 'app/taskList/header/navbar/task-list-navbar-tmpl.html',
    bindings:{}
}

angular
    .module('Todo')
    .component(TaskListNavBarComponent.selector, TaskListNavBarComponent);
