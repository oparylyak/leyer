'use strict';

import * as angular from 'angular';

let TaskEditComponent ={
    selector:"taskEdit",
    templateUrl:'app/task/edit/task-edit.tmpl.html',
    bindings:{},
    controller: class TaskEditController {

        public editedTask;

        private $state;
        private $stateParams;
        private TasksModel;
        private modifyTask;
        private task;

        constructor($state, $stateParams, TasksModel, modifyTask) {
            this.$state = $state;
            this.$stateParams = $stateParams;
            this.TasksModel = TasksModel;
            this.modifyTask = modifyTask;

            TasksModel.getTasksById($stateParams.taskId)
                .then((task)=>{
                    if(task){
                        this.task = task;
                        this.editedTask = angular.copy(this.task);

                    } else {
                        this.returnToTask();
                    }
                })
        }

        returnToTask() {
            this.$state.go('todo.task',{
                taskId: this.$stateParams.taskId
            });
        }

        cancelEditing() {
            this.returnToTask();
        }

        updateTask(){
            console.log(this.task.definition);
            this.task = angular.copy(this.editedTask);
            console.log(this.task.definition);
            this.TasksModel.updateTask(this.editedTask);

            this.setT();

            this.returnToTask()
        }

        setT(){
            this.modifyTask.setTask(this.editedTask);
            console.log(6,'task from edited', this.editedTask)
        }

    }
};

angular
    .module('Todo')
    .component(TaskEditComponent.selector,TaskEditComponent);
