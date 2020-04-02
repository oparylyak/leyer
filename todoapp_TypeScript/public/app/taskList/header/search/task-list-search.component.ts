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
