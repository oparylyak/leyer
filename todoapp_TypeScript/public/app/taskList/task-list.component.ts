'use strict';

import {Component, Injectable} from 'angular-ts-decorators';
import {TaskListService} from '../core/task-list.service'

@Component({
    selector: 'taskList',
    templateUrl: 'app/taskList/task-list.tmpl.html',
    bindings: {},
})

export class TaskListComponent {
    public tasks;
    public checkMark;

    private TaskListService;
    private SearchOrderService;

    constructor(taskListService: TaskListService, searchOrderService: SearchOrderService) {
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

    private Newest = 'Date.now() - startDate';
    private Expired = 'endDate - Date.now()';

    private modelQuery;
    private modelOrderProp = this.Newest;//"endDate - Date.now()";

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


