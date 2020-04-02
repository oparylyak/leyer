'use strict';

import * as angular from 'angular';


 let TaskListOrderComponent = {
     selector:'listFilter',
     templateUrl: 'app/taskList/header/order/task-list-order.tmpl.html',
     bindings:{},
     controller: class TaskListFilterController{

         public orderProp;

         private SearchOrderService;

         constructor(SearchOrderService) {
             this.SearchOrderService = SearchOrderService;

             this.orderProp = SearchOrderService.getOrderProp();
         }

         setOrderProp() {
             this.SearchOrderService.setOrderProp(this.orderProp);
             console.log('-----------setOrder', this.SearchOrderService.getOrderProp());
         }

     }
 };

angular.module('Todo').
component(TaskListOrderComponent.selector,TaskListOrderComponent);
