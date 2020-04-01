'use strict';

import * as angular from 'angular';

//----start-classify
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
//----end-classify



//1 function EditTaskCtrl ($state, $stateParams, TasksModel, modifyTask){
//     let editTaskCtrl = this;
//
//     function returnToTask() {
//         $state.go('todo.task',{
//             taskId: $stateParams.taskId
//         });
//     }
//
//     function cancelEditing() {
//         returnToTask();
//     }
//
//     function updateTask(){
//         console.log(editTaskCtrl.task.definition);
//         editTaskCtrl.task = angular.copy(editTaskCtrl.editedTask);
//         console.log(editTaskCtrl.task.definition);
//         TasksModel.updateTask(editTaskCtrl.editedTask);
//
//         editTaskCtrl.setT();
//
//         returnToTask()
//     }
//
//
//     TasksModel.getTasksById($stateParams.taskId)
//         .then(function(task){
//             if(task){
//                 editTaskCtrl.task = task;
//                 editTaskCtrl.editedTask = angular.copy(editTaskCtrl.task);
//
//             } else {
//                 returnToTask();
//             }
//         })
//
//     editTaskCtrl.cancelEditing = cancelEditing;
//     editTaskCtrl.updateTask = updateTask;
//
//     this.setT = function () {
//         modifyTask.setTask(editTaskCtrl.editedTask);
//         console.log(6,'task from edited', editTaskCtrl.editedTask)
//     }
//
// };
//
// angular.module('Todo')
//     .component('taskEdit', {
//         templateUrl:'app/task/edit/task-edit.tmpl.html',
//         controller: EditTaskCtrl,
//         controllerAs: 'editTaskCtrl',
//     });
//
