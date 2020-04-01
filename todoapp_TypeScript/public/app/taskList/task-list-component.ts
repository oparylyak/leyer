'use strict';

import * as angular from 'angular';

let TaskListComponent = {
    selector:'taskList',
    templateUrl: 'app/taskList/task-list.tmpl.html',
    bindings:{},
    controller: class TaskListController {

        public tasks;

        private TasksModel;
        private  headerData;

        constructor(TasksModel, headerData) {
            this.TasksModel = TasksModel;
            this.headerData = headerData;

            console.log('taskListCtrl START');
            this.refresh();

        }

        refresh() {
            this.TasksModel.getTasks()
                .then( (result) =>{
                    this.tasks = result;
                    console.log('resultList', result);
                });
        }

        deleteTask(task) {
            this.tasks = this.TasksModel.deleteTask(task);
            this.refresh();
        } ;

        getQ() {
            // console.log('-----get this.query', headerData.getQuery());
            let search={
                definition: this.headerData.getQuery()
            }
            return search;
            // return headerData.getQuery();
        }

        getO() {
            // console.log('++++get this.order', headerData.getOrderProp());
            return this.headerData.getOrderProp();
        }
    }

};

angular
    .module('Todo')
    .component(TaskListComponent.selector, TaskListComponent)
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
