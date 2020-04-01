'use strict';

import * as angular from 'angular';

//----start-classify
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

//----end-classify

//1 function TaskListCtrl(TasksModel, headerData){
//     console.log('taskListCtrl START');
//     let taskListCtrl = this;
//
//     function refresh() {
//     TasksModel.getTasks()
//         .then(function (result) {
//             taskListCtrl.tasks = result;
//             console.log('resultList', result);
//         });
//      }
//
//      refresh();
//
//     taskListCtrl.deleteTask = function(task){
//         taskListCtrl.tasks = TasksModel.deleteTask(task);
//         refresh();
//     } ;
//
//     this.getQ = function(){
//         // console.log('-----get this.query', headerData.getQuery());
//         let search={
//             definition: headerData.getQuery()
//         }
//         return search;
//         // return headerData.getQuery();
//     }
//
//     this.getO = function(){
//         // console.log('++++get this.order', headerData.getOrderProp());
//         return headerData.getOrderProp();
//     }
// };
//
// angular.module('Todo').
//     component('taskList',{
//     controller: TaskListCtrl ,
//     controllerAs: 'taskListCtrl',
//     templateUrl: 'app/taskList/task-list.tmpl.html',
//
// })
//     .service('headerData', function() {
//
//         let modelQuery;
//         let modelOrderProp = "endDate - Date.now()";
//
//         this.setQuery = function (query) {
//             return modelQuery = query;
//         };
//
//         this.getQuery = function () {
//             return modelQuery;
//         };
//
//         this.setOrderProp = function (orderProp) {
//             return modelOrderProp = orderProp;
//         };
//
//         this.getOrderProp = function () {
//             return modelOrderProp;
//         };
//     });
