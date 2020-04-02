import 'angular';
import 'angular-ui-router';
import '@uirouter/core/';
import 'lodash';

//main
import './task-app';
import './task-app-routing.ts';

//core
import './core/task-list.service';
import './core/checkmark.filter'

//taskList
import "./taskList/task-list.component";
import "./taskList/create/task-create.component";
import "./taskList/header/search/task-list-search.component";
import "./taskList/header/navbar/task-list-navbar.component";
import "./taskList/header/order/task-list-order.component";

//task
import "./task/task.component";
import "./task/header/task-navbar.component";
import "./task/edit/task-edit.component";









