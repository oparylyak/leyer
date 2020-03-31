'use strict';

import * as angular from 'angular';

angular.module('Todo').
component('listSearch',{
    controller: function(headerData){
        this.setQ = function(){
            headerData.setQuery(this.query);
            console.log('-----set this.query', headerData.getQuery());
        }

    },


    templateUrl: 'app/taskList/header/search/task-list-search-tmpl.html',
});
