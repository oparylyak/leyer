'use strict';

import * as angular from 'angular';

let TaskComponent = {
    selector:'task',
    templateUrl: 'app/task/task.tmpl.html',
    bindings:{},
    controller: class TaskController {

        public task;
        // // public taskResolved;

        private $state;
        private $stateParams;
        private TasksModel;
        private modifyTask;
        // private task;

        constructor($state, $stateParams, TasksModel, modifyTask) {
            this.$state = $state;
            this.$stateParams = $stateParams;
            this.TasksModel = TasksModel;
            this.modifyTask = modifyTask;

            console.log(1, '-+-+-+-+-+taskCtrl START');

            TasksModel.getTasksById($stateParams.taskId)
                .then((task)=>{
                    if(task){
                        this.task = task;
                        this.setT(task);
                    } else {
                        console.log(3, 'No Task detected')
                        this.returnToTaskList();
                    }
                })
        }

        returnToTaskList() {
            console.log("get back from Task");
            console.log(this.$stateParams.taskId);
            this.$state.go('todo.taskList');
        }

        deleteTask(task){
            this.TasksModel.deleteTask(task);
            this.returnToTaskList();
        }

        checkTask(taskResolved){
            console.log('resolve task:', this.task._id);
            if (!taskResolved.resolved){
                taskResolved.resolved = !taskResolved.resolved;
                console.log(4, "resolvedTask", taskResolved);
                this.task = taskResolved;
                this.TasksModel.updateTask(taskResolved);
            } else {
                console.log('task already resolve');
            }
        }

        setT(task) {
            console.log(5,'set T', task)
            return this.modifyTask.setTask(task);
        }

        getT() {
            return this.modifyTask.getTask();
        }

    }
};

angular
    .module('Todo')
    .component(TaskComponent.selector,TaskComponent)
    .service('modifyTask', function () {
        let modTask;

        this.setTask = function (task) {
            return modTask = task;
        }

        this.getTask = function () {
            return modTask;
        }
    });
