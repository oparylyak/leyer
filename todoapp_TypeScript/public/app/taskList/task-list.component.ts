'use strict';

import * as angular from 'angular';

let TaskListComponent = {
    selector:'taskList',
    templateUrl: 'app/taskList/task-list.tmpl.html',
    bindings:{},
    controller: class TaskListController {

        public tasks;

        private TaskListService;
        private  SearchOrderService;

        constructor(TaskListService, SearchOrderService) {
            this.TaskListService = TaskListService;
            this.SearchOrderService = SearchOrderService;

            console.log('taskListCtrl START');
            this.refresh();

        }

        refresh() {
            this.TaskListService.getTasks()
                .then( (result) =>{
                    this.tasks = result;
                    console.log('resultList', result);
                });
        }

        deleteTask(task) {
            this.tasks = this.TaskListService.deleteTask(task);
            this.refresh();
        } ;

        getQ() {
            // console.log('-----get this.query', SearchOrderService.getQuery());
            let search={
                definition: this.SearchOrderService.getQuery()
            }
            return search;
            // return SearchOrderService.getQuery();
        }

        getO() {
            // console.log('++++get this.order', SearchOrderService.getOrderProp());
            return this.SearchOrderService.getOrderProp();
        }
    }

};

export class SearchOrderService {

    private modelQuery;
    private modelOrderProp = "endDate - Date.now()";

    setQuery(query) {
        return this.modelQuery = query;
    };

    getQuery() {
        return this.modelQuery;
    };

    setOrderProp(orderProp) {
        return this.modelOrderProp = orderProp;
    };

    getOrderProp() {
        return this.modelOrderProp;
    };

}

angular
    .module('Todo')
    .component(TaskListComponent.selector, TaskListComponent)
    .service('SearchOrderService', SearchOrderService);

//1 angular
//     .module('Todo')
//     .component(TaskListComponent.selector, TaskListComponent)
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
