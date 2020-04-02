'use strict';

import {Component, Injectable} from "angular-ts-decorators";
import {TaskListService} from "../core/task-list.service";

@Component({
    selector: 'task',
    templateUrl: 'app/task/task.tmpl.html',
})

export class TaskComponent {
    public task;

    private $state;
    private $stateParams;
    private TaskListService;
    private ModifyTaskService;

    constructor($state, $stateParams, taskListService:TaskListService, modifyTaskService:ModifyTaskService) {
        this.$state = $state;
        this.$stateParams = $stateParams;
        this.TaskListService = taskListService;
        this.ModifyTaskService = modifyTaskService;

        console.log(1, '-+-+-+-+-+taskCtrl START');

        taskListService.getTasksById($stateParams.taskId)
            .then((task) => {
                if (task) {
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
        this.$state.go('taskList');
    }

    deleteTask(task) {
        this.TaskListService.deleteTask(task);
        this.returnToTaskList();
    }

    checkTask(taskResolved) {
        console.log('resolve task:', this.task._id);
        if (!taskResolved.resolved) {
            taskResolved.resolved = !taskResolved.resolved;
            console.log(4, "resolvedTask", taskResolved);
            this.task = taskResolved;
            this.TaskListService.updateTask(taskResolved);
        } else {
            console.log('task already resolve');
        }
    }

    setT(task) {
        console.log(5, 'set T', task)
        return this.ModifyTaskService.setTask(task);
    }

    getT() {
        return this.ModifyTaskService.getTask();
    }

}

@Injectable('modifyTaskService')
export class ModifyTaskService {
    private modTask;

    setTask(task) {
        return this.modTask = task;
    }

    getTask() {
        return this.modTask;
    }

}


