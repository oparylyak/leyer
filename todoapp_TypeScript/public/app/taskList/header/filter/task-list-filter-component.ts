'use strict';

import * as angular from 'angular';

//----start-classify

 let TaskListFilterComponent = {
     selector:'listFilter',
     templateUrl: 'app/taskList/header/filter/task-list-filter-tmpl.html',
     bindings:{},
     controller: class TaskListFilterController{

         public orderProp;

         private headerData;

         constructor(headerData) {
             this.headerData = headerData;

             this.orderProp = headerData.getOrderProp();
         }

         setOrderProp() {
             this.headerData.setOrderProp(this.orderProp);
             console.log('-----------setOrder', this.headerData.getOrderProp());
         }

     }
 };

angular.module('Todo').
component(TaskListFilterComponent.selector,TaskListFilterComponent);

//----end-classify

//1 angular.module('Todo').
// component('listFilter',{
//     templateUrl: 'app/taskList/header/filter/task-list-filter-tmpl.html',
//     controller: function (headerData) {
//         this.orderProp = headerData.getOrderProp();
//         this.setOrderProp = function () {
//              headerData.setOrderProp(this.orderProp);
//             console.log('-----------setOrder', headerData.getOrderProp());
//         }
//
//     }
//
// });
