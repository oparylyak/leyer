'use strict';

import * as angular from 'angular';
import {SearchOrderService} from "../../task-list.component";
import {Component} from "angular-ts-decorators";

@Component({
    selector: 'listFilter',
    templateUrl: 'app/taskList/header/order/task-list-order.tmpl.html',
})
export class TaskListOrderComponent {

    public orderProp;

    private SearchOrderService;

    constructor(searchOrderService: SearchOrderService) {
        this.SearchOrderService = searchOrderService;
        this.orderProp = searchOrderService.getOrderProp();
    }

    setOrderProp() {
        this.SearchOrderService.setOrderProp(this.orderProp);
        console.log('-----------setOrder', this.SearchOrderService.getOrderProp());
    }

}

//-d import * as angular from 'angular';
// import {SearchOrderService} from "../../task-list.component";
//
// let TaskListOrderComponent = {
//     selector:'listFilter',
//     templateUrl: 'app/taskList/header/order/task-list-order.tmpl.html',
//     bindings:{},
//     controller: class TaskListFilterController{
//
//         public orderProp;
//
//         private SearchOrderService;
//
//         constructor(searchOrderService:SearchOrderService) {
//             this.SearchOrderService = searchOrderService;
//             this.orderProp = searchOrderService.getOrderProp();
//         }
//
//         setOrderProp() {
//             this.SearchOrderService.setOrderProp(this.orderProp);
//             console.log('-----------setOrder', this.SearchOrderService.getOrderProp());
//         }
//
//     }
// };
//
// angular.module('Todo').
// component(TaskListOrderComponent.selector,TaskListOrderComponent);




