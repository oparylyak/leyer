'use strict';

import * as angular from 'angular';

let TaskListSearchComponent = {
    selector:'listSearch',
    templateUrl: 'app/taskList/header/search/task-list-search-tmpl.html',
    bindings:{},
    controller: class TaskListSearchController {

        public query;

        private headerData;

        constructor(headerData) {
            this.headerData = headerData;
        }

       setQ (){
            this.headerData.setQuery(this.query);
            console.log('-----set this.query: ', this.headerData.getQuery());
        }

    }
};

angular
    .module('Todo')
    .component(TaskListSearchComponent.selector, TaskListSearchComponent);
