'use strict';

import * as angular from 'angular';
import {Component} from 'angular-ts-decorators';
import {TaskListService} from '../../core/task-list.service'
import {ModifyTaskService} from "../task.component";

@Component({
    selector: "taskEdit",
    templateUrl: 'app/task/edit/task-edit.tmpl.html',
})

export class TaskEditComponent {

    public editedTask;

    private $state;
    private $stateParams;
    private TaskListService;
    private ModifyTaskService;
    private task;

    constructor($state, $stateParams, taskListService:TaskListService, modifyTaskService:ModifyTaskService) {
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.TaskListService = taskListService;
        this.ModifyTaskService = modifyTaskService;

        taskListService.getTasksById($stateParams.taskId)
            .then((task) => {
                console.log(7, "task: ", task);
                if (task) {
                    this.task = task;
                    this.editedTask = angular.copy(task);
                    console.log(8, "EditedTask: ", this.editedTask);

                } else {
                    this.returnToTask();
                }
            })
    }

    returnToTask() {
        this.$state.go('task', {
            taskId: this.$stateParams.taskId
        });
    }

    cancelEditing() {
        this.returnToTask();
    }

    updateTask() {
        console.log(this.task.definition);
        this.task = angular.copy(this.editedTask);
        console.log(this.task.definition);
        this.TaskListService.updateTask(this.editedTask);

        this.setT();

        this.returnToTask()
    }

    setT() {
        this.ModifyTaskService.setTask(this.editedTask);
        console.log(6, 'task from edited', this.editedTask)
    }

}

