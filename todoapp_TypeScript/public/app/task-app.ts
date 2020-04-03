'use strict';

import {NgModule, platformBrowserDynamic} from 'angular-ts-decorators';
import {TodoRouting} from "./task-app-routing";
import {TaskListComponent} from "./taskList/task-list.component";
import {TaskListService} from "./core/task-list.service";
import {TaskCreateComponent} from "./taskList/create/task-create.component";
import {SearchOrderService} from "./taskList/task-list.component";
import {TaskListNavbarComponent} from "./taskList/header/navbar/task-list-navbar.component";
import {TaskListOrderComponent} from "./taskList/header/order/task-list-order.component";
import {TaskListSearchComponent} from "./taskList/header/search/task-list-search.component";
import {TaskComponent} from "./task/task.component";
import {ModifyTaskService} from "./task/task.component";
import {TaskEditComponent} from "./task/edit/task-edit.component";
import {TaskNavBarComponent} from "./task/header/task-navbar.component";
import {CheckMarkPipe} from "./core/checkmark.filter";


@NgModule({
    id:'Todo',
    imports:[
        TodoRouting
    ],
    declarations:[
        TaskListComponent,
        TaskCreateComponent,
        TaskListNavbarComponent,
        TaskListOrderComponent,
        TaskListSearchComponent,
        TaskComponent,
        TaskEditComponent,
        TaskNavBarComponent,
        CheckMarkPipe
    ],
    providers:[
        TaskListService,
        SearchOrderService,
        ModifyTaskService
    ]
})

export class Todo {
}
// platformBrowserDynamic().bootstrapModule(Todo);



