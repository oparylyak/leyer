'use strict';

import {SearchOrderService} from "../../task-list.component";
import {Component} from "angular-ts-decorators";

@Component({
    selector: 'listSearch',
    templateUrl: 'app/taskList/header/search/task-list-search.tmpl.html',
})
export class TaskListSearchComponent {

    public query;

    private SearchOrderService;

    constructor(searchOrderService: SearchOrderService) {
        this.SearchOrderService = searchOrderService;
    }

    setQ() {
        this.SearchOrderService.setQuery(this.query);
        console.log('-----set this.query: ', this.SearchOrderService.getQuery());
    }

}


//-d import * as angular from 'angular';
// import {SearchOrderService} from "../../task-list.component";
//
// let TaskListSearchComponent = {
//     selector:'listSearch',
//     templateUrl: 'app/taskList/header/search/task-list-search.tmpl.html',
//     bindings:{},
//     controller: class TaskListSearchController {
//
//         public query;
//
//         private SearchOrderService;
//
//         /*@ngInject*/
//         constructor(searchOrderService:SearchOrderService) {
//             this.SearchOrderService = searchOrderService;
//         }
//
//        setQ (){
//             this.SearchOrderService.setQuery(this.query);
//             console.log('-----set this.query: ', this.SearchOrderService.getQuery());
//         }
//
//     }
// };
//
// angular
//     .module('Todo')
//     .component(TaskListSearchComponent.selector, TaskListSearchComponent);
