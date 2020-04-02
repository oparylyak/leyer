'use strict';

import * as angular from 'angular';
import {Component} from "angular-ts-decorators";

@Component({
    selector:'listNavBar',
    templateUrl: 'app/taskList/header/navbar/task-list-navbar.tmpl.html',
    bindings:{}
})

export class TaskListNavbarComponent{};

//-d let TaskListNavbarComponent = {
//     selector:'listNavBar',
//     templateUrl: 'app/taskList/header/navbar/task-list-navbar.tmpl.html',
//     bindings:{}
// }
//
// angular
//     .module('Todo')
//     .component(TaskListNavbarComponent.selector, TaskListNavbarComponent);
