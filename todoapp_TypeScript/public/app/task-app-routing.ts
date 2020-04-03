'use strict';

import {StateProvider} from '@uirouter/angularjs/lib/stateProvider';
import {Ng1StateDeclaration} from '@uirouter/angularjs/lib/interface';
import { getTypeName, NgModule } from 'angular-ts-decorators';
import {TaskCreateComponent} from "./taskList/create/task-create.component";
import {TaskListComponent} from "./taskList/task-list.component";
import {TaskEditComponent} from "./task/edit/task-edit.component";
import {TaskComponent} from "./task/task.component";

export interface UiState extends Ng1StateDeclaration {
    component?: any;
}

const routes: UiState[] = [
    {name: 'index', url:'', redirectTo:'taskList'},
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
    //     state.component = 'taskList';
    //     console.log(8, 1);
    // }
    return state;
}


