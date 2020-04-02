'use strict';

import * as angular from 'angular';

let TaskCreateComponent = {
    selector:"taskCreate", //<task-create>
    templateUrl:'app/taskList/create/task-create.tmpl.html',
    bindings:{},
    controller: class TaskCreateController {

        public newTask;

        private $state;
        private $stateParams;
        private TaskListService;

        constructor($state, $stateParams, TaskListService) {
            this.$state = $state;
            this.$stateParams = $stateParams;
            this.TaskListService = TaskListService;
            this.newTask = {
                definition: '',
                explanation: ''
            };
        }

        returnTaskList() {
            this.$state.go('todo.taskList', {})
        }

        cancelCreating() {
            this.returnTaskList();
        }

        createTask(task) {
            if(task.definition){
                this.TaskListService.createTask(task);
                this.returnTaskList();
            }else {
                this.returnTaskList();
            }
        }
    }

};

angular
    .module('Todo')
    .component(TaskCreateComponent.selector,TaskCreateComponent);


