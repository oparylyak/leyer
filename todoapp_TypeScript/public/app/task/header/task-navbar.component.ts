'use strict';

import * as angular from 'angular';

let TaskNavBarComponent = {
    selector:'taskNavBar',
    templateUrl: 'app/task/header/task-navbar.tmpl.html',
    bindings:{}
}

angular
    .module('Todo')
    .component(TaskNavBarComponent.selector, TaskNavBarComponent);
