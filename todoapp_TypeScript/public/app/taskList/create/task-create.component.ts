'use strict';

import { StateService } from '@uirouter/core';
import {Component, Input, OnInit} from 'angular-ts-decorators';
import {TaskListService} from '../../core/task-list.service'

@Component({
    selector: "taskCreate", //<task-create>
    templateUrl: 'app/taskList/create/task-create.tmpl.html',
    bindings: {},
})
export class TaskCreateComponent{

    public newTask;

    private $state;
    private $stateParams;
    private TaskListService;

    /*@ngInject*/
    constructor($state:StateService, $stateParams:StateService, taskListService:TaskListService) {
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.TaskListService = taskListService;
        this.newTask = {
            definition: '',
            explanation: ''
        };
    }

    returnTaskList(): void {
        this.$state.go('taskList', {})
    }

    cancelCreating(): void {
        this.returnTaskList();
    }

    createTask(task): void {
        if (task.definition) {
            this.TaskListService.createTask(task);
            this.returnTaskList();
        } else {
            this.returnTaskList();
        }
    }

}

//1 let TaskCreateComponent = {
//     selector:"taskCreate", //<task-create>
//     templateUrl:'app/taskList/create/task-create.tmpl.html',
//     bindings:{},
//     controller: class TaskCreateController {
//
//         public newTask;
//
//         private $state;
//         private $stateParams;
//         private TaskListService;
//
//         constructor($state, $stateParams, TaskListService) {
//             this.$state = $state;
//             this.$stateParams = $stateParams;
//             this.TaskListService = TaskListService;
//             this.newTask = {
//                 definition: '',
//                 explanation: ''
//             };
//         }
//
//         returnTaskList() {
//             this.$state.go('todo.taskList', {})
//         }
//
//         cancelCreating() {
//             this.returnTaskList();
//         }
//
//         createTask(task) {
//             if(task.definition){
//                 this.TaskListService.createTask(task);
//                 this.returnTaskList();
//             }else {
//                 this.returnTaskList();
//             }
//         }
//     }
//
// };
//
// angular
//     .module('Todo')
//     .component(TaskCreateComponent.selector,TaskCreateComponent);


