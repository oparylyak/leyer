'use strict';

import {StateProvider} from '@uirouter/angularjs/lib/stateProvider';
import {Ng1StateDeclaration} from '@uirouter/angularjs/lib/interface';
import { getTypeName, NgModule } from 'angular-ts-decorators';
import {TaskCreateComponent} from "./taskList/create/task-create.component";
import {TaskListComponent} from "./taskList/task-list.component";

export interface UiState extends Ng1StateDeclaration {
    component?: any;
}

const routes: UiState[] = [
    // {name: 'index', url:'', component:TaskListComponent},
    {name: 'taskList', url:'/taskList', component:TaskListComponent},
    {name: 'task', url:'/:taskId', component:'task'},
    {name: 'task.edit', url:'/edit', component:'taskEdit'},
    {name: 'taskList.create', url:'/create', component:TaskCreateComponent},
];

@NgModule({
    id:'TodoRouting',
    imports:[
        'ui.router'
]
})
export class TodoRouting {
    constructor() {
        console.log("Start routing");
    }

     static config($stateProvider: StateProvider){
        'ngIngect';
        routes.forEach(route => $stateProvider.state(getNg1StateDeclaration(route)));
    }
}

function getNg1StateDeclaration(state: UiState) {
    if (state.component && typeof state.component !== 'string') {
        state.component = getTypeName(state.component);
        console.log(9,"State", state.component);
    }
    // else{
    //     console.log(8,"InCorrect State");
    // }
    return state;
}

//1 angular
//     .module("TodoRouting",[
//     "ui.router",
// ])
//      .config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){
//         $urlRouterProvider.otherwise('/taskList');
//         $stateProvider
//             .state('todo', {
//                 url:'/taskList',
//                 abstract: true,
//             })
//             .state('todo.taskList', {
//                 url:'',
//                 component:'taskList',
//             })
//             .state('todo.task',{
//                 url: '/:taskId',
//                 component:'task',
//             })
//             .state('todo.task.edit',{
//                 url:'/edit',
//                 component:'taskEdit',
//             })
//             .state('todo.taskList.create',{
//                 url:'/create',
//                 component:'taskCreate'
//             })
//     }]);

