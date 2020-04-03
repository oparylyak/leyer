'use strict';

import * as _ from 'lodash'
import {IHttpService, IQService} from 'angular';
import {Injectable} from "angular-ts-decorators";

@Injectable('taskListService')
export class TaskListService {
    private $http:IHttpService;
    private $q:IQService;
    private tasks;

    constructor($http,$q) {
        this.$http = $http;
        this.$q = $q;
    };

    extract(result) {
        return result.data;
    };

    cacheTasks(result) {
        this.tasks = this.extract(result);
        return this.tasks;
    };

    findTask(taskId){
        console.log("findTask");
        console.log(taskId);
        return _.find(this.tasks,  (task) =>{
            return task._id === taskId;
        })
    };

    getTasks() {

        let deferred = this.$q.defer();
        if(this.tasks){
            console.log("getTasks_isTask", this.tasks);
            deferred.resolve(this.tasks);
        }else{
            console.log("getTasks_noTask", this.tasks);
            this.$http.get('taskList').then( (response)=> {
                console.log("Got Request", response.data);
                deferred.resolve(this.cacheTasks(response));
                console.log(0,"TasksModel.getTasks", this.tasks);
            });
        }
        console.log(0,0,"TasksModel.getTasks", this.tasks);
        return deferred.promise;
    }

    getTasksById(taskId) {
        console.log("getTaskById");
        console.log(taskId);

        let deferred = this.$q.defer();
                   if(this.tasks){
                       deferred.resolve(this.findTask(taskId));
                   }else{
                       this.getTasks().then(()=>{
                           deferred.resolve(this.findTask(taskId));
                       });
                   }
                   return deferred.promise;

    };

    createTask(task) {
        task.startDate = Date.now() + 3600000 + 60000;//today + one hour + one minute
        task.endDate = Date.now() + (86400000*3);//today + 3-number of days
        task.resolved = false;
        this.$http.post('/createTask',task).then( (response)=> {
            task = this.extract(response);
            console.log("    -responded",task);
            console.log('    --task to push', task);
            this.tasks.push(task);
        });
    };

    deleteTask(task) {
        console.log("1delete", task._id);
        this.$http.delete('/taskList/'+ task._id).then( (response) =>{
            this.getTasks();
        });
        _.remove(this.tasks, function (b) {
            return b._id == task._id;
        });
    };

   updateTask(task) {
        console.log('------UPDATE ', task)
        let index = _.findIndex(this.tasks,  (b) =>{
            return b._id == task._id;
        });

       this.$http.put('/taskList/' + task._id, task).then( (response)=> {
        });

       this.tasks[index] = task;
    };

}


