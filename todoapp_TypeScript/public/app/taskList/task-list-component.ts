'use strict';

import * as angular from 'angular';

function TaskListCtrl(TasksModel, headerData){
    console.log('taskListCtrl START');
    let taskListCtrl = this;
    // taskListCtrl.tasks = TasksModel.getTasks();

    function refresh() {
    TasksModel.getTasks()
        .then(function (result) {
            taskListCtrl.tasks = result;
            console.log('resultList', result);
        });
     }

     refresh();

    taskListCtrl.deleteTask = function(task){
        taskListCtrl.tasks = TasksModel.deleteTask(task);
        refresh();
    } ;

    this.getQ = function(){
        // console.log('-----get this.query', headerData.getQuery());
        let search={
            definition: headerData.getQuery()
        }
        return search;
        // return headerData.getQuery();
    }

    this.getO = function(){
        // console.log('++++get this.order', headerData.getOrderProp());
        return headerData.getOrderProp();
    }
};

angular.module('Todo').
    component('taskList',{
    controller: TaskListCtrl ,
    controllerAs: 'taskListCtrl',
    templateUrl: 'app/taskList/task-list.tmpl.html',

})
    .service('headerData', function() {

        let modelQuery;
        let modelOrderProp = "endDate - Date.now()";

        this.setQuery = function (query) {
            return modelQuery = query;
        };

        this.getQuery = function () {
            return modelQuery;
        };

        this.setOrderProp = function (orderProp) {
            return modelOrderProp = orderProp;
        };

        this.getOrderProp = function () {
            return modelOrderProp;
        };
    });
