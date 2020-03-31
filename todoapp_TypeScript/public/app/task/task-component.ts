'use strict';

import * as angular from 'angular';

function TaskCtrl($state, $stateParams, TasksModel, modifyTask) {
    console.log(1, '-+-+-+-+-+taskCtrl START');
    let taskCtrl = this;
    // let task;

    function returnToTaskList() {
        console.log("get back from Task");
        console.log($stateParams.taskId);
        $state.go('todo.taskList');
    }

    function deleteTask(task){
        TasksModel.deleteTask(task);
        returnToTaskList();
    }

    function checkTask(taskResolved){
        console.log('resolve task:', taskCtrl.task._id);
        if (!taskResolved.resolved){
            taskResolved.resolved = !taskResolved.resolved;
             console.log(4, "resolvedTask", taskResolved);
             taskCtrl.task = taskResolved;
             TasksModel.updateTask(taskResolved);
        } else {
            console.log('task already resolve');
        }
    }

    TasksModel.getTasks()
        .then(function (result) {
            taskCtrl.tasks = result;
            console.log('resultList', result);
        });

    TasksModel.getTasksById($stateParams.taskId)
        .then(function(task){
            if(task){
                taskCtrl.task = task;
                taskCtrl.setT(task);
            } else {
                console.log(3, 'No Task detected')
                returnToTaskList();
            }
        })


    this.setT = function (task) {
        console.log(5,'set T', task)
        return modifyTask.setTask(task);
    }

    this.getT = function () {
        return modifyTask.getTask();
    }

    taskCtrl.deleteTask = deleteTask;
    taskCtrl.checkTask = checkTask;

};

angular.module('Todo')
    .component('task',{
        controller: TaskCtrl ,
        controllerAs: 'taskCtrl',
        templateUrl: 'app/task/task.tmpl.html',
    })
    .service('modifyTask', function () {
        let modTask;

        this.setTask = function (task) {
            return modTask = task;
        }

        this.getTask = function () {
            return modTask;
        }

    })
;
