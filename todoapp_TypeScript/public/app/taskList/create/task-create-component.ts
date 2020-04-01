'use strict';

import * as angular from 'angular';

//----start-classify

let TaskCreateComponent = {
    selector:"taskCreate", //<task-create>
    templateUrl:'app/taskList/create/task-create.tmpl.html',
    bindings:{},
    controller: class TaskCreateController {

        public newTask;

        private $state;
        private $stateParams;
        private TasksModel;

        constructor($state, $stateParams, TasksModel) {
            this.$state = $state;
            this.$stateParams = $stateParams;
            this.TasksModel = TasksModel;
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
                this.TasksModel.createTask(task);
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

//----end-classify

//1  function CreateTaskCtrl ($state, $stateParams, TasksModel) {
//      let createTaskCtrl = this;
//
//      function returnTaskList() {
//          $state.go('todo.taskList', {})
//      }
//
//      function cancelCreating() {
//          returnTaskList();
//      }
//
//      function createTask(task) {
//          if(task.definition){
//              TasksModel.createTask(task);
//              returnTaskList();
//          }else {
//              returnTaskList();
//          }
//      }
//
//      function resetForm() {
//          createTaskCtrl.newTask = {
//              definition: '',
//              explanation: '',
//          }
//
//      }
//
//      createTaskCtrl.createTask = createTask;
//      createTaskCtrl.cancelCreating = cancelCreating;
//
//      resetForm();
//  }
//
// angular.module('Todo')
//     .component('taskCreate',{
//         controller: CreateTaskCtrl,
//         controllerAs:'createTaskCtrl',
//         templateUrl:'app/taskList/create/task-create.tmpl.html',
//     })
// ;
