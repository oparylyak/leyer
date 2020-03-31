'use strict';

import * as angular from 'angular';

angular.module('Todo').
component('listFilter',{
    templateUrl: 'app/taskList/header/filter/task-list-filter-tmpl.html',
    controller: function (headerData) {
        this.orderProp = headerData.getOrderProp();
        this.setOrderProp = function () {
             headerData.setOrderProp(this.orderProp);
            console.log('-----------setOrder', headerData.getOrderProp());
        }

    }

});
