'use strict';

import * as angular from 'angular';

 function CreateTaskCtrl ($state, $stateParams, TasksModel) {
     let createTaskCtrl = this;

     function returnTaskList() {
         $state.go('todo.taskList', {})
     }

     function cancelCreating() {
         returnTaskList();
     }

     function createTask(task) {
         if(task.definition){
             TasksModel.createTask(task);
             returnTaskList();
         }else {
             returnTaskList();
         }
     }

     function resetForm() {
         createTaskCtrl.newTask = {
             definition: '',
             explanation: '',
         }

     }

     createTaskCtrl.createTask = createTask;
     createTaskCtrl.cancelCreating = cancelCreating;

     resetForm();
 }

//1 angular.module('taskList')
angular.module('Todo')
    .component('createTask',{
        controller: CreateTaskCtrl,
        controllerAs:'createTaskCtrl',
        templateUrl:'app/taskList/create/task-create.tmpl.html',
    })
;
