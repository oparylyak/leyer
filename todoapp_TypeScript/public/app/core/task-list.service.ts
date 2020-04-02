'use strict';
import * as angular from 'angular';
import * as _ from 'lodash'

export class TaskListService {
    private $http;
    private $q;
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



            // return new Promise((resolve, reject)=>{
            //     if(this.tasks){
            //         console.log("getTasks_isTask", this.tasks);
            //         resolve(this.tasks);
            //     }else{
            //         console.log("getTasks_noTask", this.tasks);
            //         this.$http.get('taskList').then( (response)=> {
            //             console.log("Got Request", response.data);
            //             resolve(this.cacheTasks(response));
            //             console.log(0,"TasksModel.getTasks", this.tasks);
            //         });
            //     }
            //     console.log(0,0,"TasksModel.getTasks", this.tasks);
            // });
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

        // return new Promise((resolve,reject)=>{
        //     if(this.tasks){
        //         resolve(this.findTask(taskId));
        //     }else{
        //         this.getTasks().then(()=>{
        //             resolve(this.findTask(taskId));
        //         });
        //     }
        // });

    };

    createTask(task) {
        task.startDate = Date.now();
        task.endDate = Date.now() + 222222;
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
            // console.log("2delete", task);
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

angular
    .module('Todo')
    .service('TaskListService', TaskListService);

 //1 angular.module('Todo')
 //    .service('TaskListService',['$http','$q', function ($http, $q) {
 //        let model = this;
 //        let tasks;
 //
 //        function extract(result) {
 //            return result.data;
 //        }
 //
 //        function cacheTasks(result) {
 //            tasks = extract(result);
 //            return tasks;
 //        }
 //
 //        function findTask(taskId){
 //            console.log("findTask");
 //            console.log(taskId);
 //            return _.find(tasks, function (task) {
 //                return task._id == taskId;
 //            })
 //        }
 //
 //        model.getTasksById = function(taskId){
 //            console.log("getTaskById");
 //            console.log(taskId);
 //
 //            let deferred = $q.defer();
 //            if(tasks){
 //                deferred.resolve(findTask(taskId));
 //            }else{
 //                model.getTasks().then(function(){
 //                    deferred.resolve(findTask(taskId));
 //                });
 //            }
 //            return deferred.promise;
 //        };
 //
 //        model.getTasks = function () {
 //            let deferred = $q.defer();
 //            if(tasks){
 //                console.log("getTasks_isTask", tasks);
 //                deferred.resolve(tasks);
 //            }else{
 //                console.log("getTasks_noTask", tasks);
 //                $http.get('taskList').then(function (response) {
 //                    console.log("Got Request", response.data);
 //                    deferred.resolve(cacheTasks(response));
 //                    console.log(0,"TasksModel.getTasks", tasks);
 //                });
 //            }
 //            console.log(0,0,"TasksModel.getTasks", tasks);
 //            return deferred.promise;
 //        };
 //
 //        model.createTask = function (task) {
 //            task.startDate = Date.now();
 //            task.endDate = Date.now() + 222222;
 //            task.resolved = false;
 //            $http.post('/createTask',task).then(function (response) {
 //                task = extract(response);
 //                console.log("    -responded",task);
 //                console.log('    --task to push', task);
 //                tasks.push(task);
 //            });
 //        };
 //
 //        model.deleteTask = function (task) {
 //            console.log("1delete", task._id);
 //            $http.delete('/taskList/'+ task._id).then(function (response) {
 //                model.getTasks();
 //            });
 //            _.remove(tasks, function (b) {
 //                // console.log("2delete", task);
 //                return b._id == task._id;
 //            });
 //        }
 //
 //        model.updateTask = function (task) {
 //            console.log('------UPDATE ', task)
 //            let index = _.findIndex(tasks, function (b) {
 //                return b._id == task._id;
 //            });
 //
 //            $http.put('/taskList/' + task._id, task).then(function (response) {
 //            });
 //
 //            tasks[index] = task;
 //        };
 //
 //    }]);
