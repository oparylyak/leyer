'use strict';

import * as angular from 'angular';

let TaskListSearchComponent = {
    selector:'listSearch',
    templateUrl: 'app/taskList/header/search/task-list-search.tmpl.html',
    bindings:{},
    controller: class TaskListSearchController {

        public query;

        private SearchOrderService;

        constructor(SearchOrderService) {
            this.SearchOrderService = SearchOrderService;
        }

       setQ (){
            this.SearchOrderService.setQuery(this.query);
            console.log('-----set this.query: ', this.SearchOrderService.getQuery());
        }

    }
};

angular
    .module('Todo')
    .component(TaskListSearchComponent.selector, TaskListSearchComponent);
