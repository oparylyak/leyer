'use strict';

import * as angular from 'angular';

function EditTaskCtrl ($state, $stateParams, TasksModel, modifyTask){
    let editTaskCtrl = this;

    function returnToTask() {
        $state.go('todo.task',{
            taskId: $stateParams.taskId
        });
    }

    function cancelEditing() {
        returnToTask();
    }

    function updateTask(){
        console.log(editTaskCtrl.task.definition);
        editTaskCtrl.task = angular.copy(editTaskCtrl.editedTask);
        console.log(editTaskCtrl.task.definition);
        TasksModel.updateTask(editTaskCtrl.editedTask);

        editTaskCtrl.setT();

        returnToTask()
    }


    TasksModel.getTasksById($stateParams.taskId)
        .then(function(task){
            if(task){
                editTaskCtrl.task = task;
                editTaskCtrl.editedTask = angular.copy(editTaskCtrl.task);

            } else {
                returnToTask();
            }
        })

    editTaskCtrl.cancelEditing = cancelEditing;
    editTaskCtrl.updateTask = updateTask;

    this.setT = function () {
        modifyTask.setTask(editTaskCtrl.editedTask);
        console.log(6,'task from edited', editTaskCtrl.editedTask)
    }

};

angular.module('Todo')
    .component('taskEdit', {
        templateUrl:'app/task/edit/task-edit.tmpl.html',
        controller: EditTaskCtrl,
        controllerAs: 'editTaskCtrl',
    });

