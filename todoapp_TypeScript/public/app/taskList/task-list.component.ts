'use strict';

import * as angular from 'angular';
import {Component, Input, OnInit, Inject, Injectable} from 'angular-ts-decorators';
// import {Task} from '../task';
import {TaskListService} from '../core/task-list.service'

@Component({
    selector: 'taskList',
    templateUrl: 'app/taskList/task-list.tmpl.html',
    bindings: {},
})

export class TaskListComponent {
    // @Input() task: Task;

     public tasks;
    // 1 static $inject = ["taskListService", "searchOrderService"];
    //
    // constructor(
    //     private TaskListService:TaskListService,
    //     private SearchOrderService:SearchOrderService
    // ) {
    //     console.log('taskListCtrl START');
    //     this.refresh();
    // }

    private TaskListService;
    private SearchOrderService;

    /*@ngInject*/
    constructor(taskListService:TaskListService, searchOrderService:SearchOrderService) {
        // 'ngInject';
        this.TaskListService = taskListService;
        this.SearchOrderService = searchOrderService;

        console.log('taskListCtrl START');
        this.refresh();
    }


    refresh() {
        this.TaskListService.getTasks()
            .then((result) => {
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
        let search = {
            definition: this.SearchOrderService.getQuery()
        }
        return search;
        // return SearchOrderService.getQuery();
    }

    getO() {
        // console.log('++++get this.order', SearchOrderService.getOrderProp());
        return this.SearchOrderService.getOrderProp();
    }
};

@Injectable('searchOrderService')
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


//-d let TaskListComponent = {
//     selector:'taskList',
//     templateUrl: 'app/taskList/task-list.tmpl.html',
//     bindings:{},
//     controller: class TaskListController {
//
//         public tasks;
//
//         private TaskListService;
//         private  SearchOrderService;
//
//         constructor(TaskListService, SearchOrderService) {
//             this.TaskListService = TaskListService;
//             this.SearchOrderService = SearchOrderService;
//
//             console.log('taskListCtrl START');
//             this.refresh();
//
//         }
//
//         refresh() {
//             this.TaskListService.getTasks()
//                 .then( (result) =>{
//                     this.tasks = result;
//                     console.log('resultList', result);
//                 });
//         }
//
//         deleteTask(task) {
//             this.tasks = this.TaskListService.deleteTask(task);
//             this.refresh();
//         } ;
//
//         getQ() {
//             // console.log('-----get this.query', SearchOrderService.getQuery());
//             let search={
//                 definition: this.SearchOrderService.getQuery()
//             }
//             return search;
//             // return SearchOrderService.getQuery();
//         }
//
//         getO() {
//             // console.log('++++get this.order', SearchOrderService.getOrderProp());
//             return this.SearchOrderService.getOrderProp();
//         }
//     }
//
// };
//
// export class SearchOrderService {
//
//     private modelQuery;
//     private modelOrderProp = "endDate - Date.now()";
//
//     setQuery(query) {
//         return this.modelQuery = query;
//     };
//
//     getQuery() {
//         return this.modelQuery;
//     };
//
//     setOrderProp(orderProp) {
//         return this.modelOrderProp = orderProp;
//     };
//
//     getOrderProp() {
//         return this.modelOrderProp;
//     };
//
// }
//
// angular
//     .module('Todo')
//     .component(TaskListComponent.selector, TaskListComponent)
//     .service('SearchOrderService', SearchOrderService);


