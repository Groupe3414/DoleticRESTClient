(function () {
    'use strict';

    angular
        .module('doleticApp')
        .factory('TaskService', TaskService);

    TaskService.$inject = ['$http', 'SERVER_CONFIG'];

    function TaskService($http, SERVER_CONFIG) {
        var server = SERVER_CONFIG.url;
        var urlBase = '/api/ua/task';
        var taskFactory = {};

        taskFactory.getTask = function (id) {
            return $http.get(server + urlBase + '/' + id);
        };

        taskFactory.getAllTasks = function () {
            return $http.get(server + urlBase + 's');
        };

        taskFactory.getAllTasksByProject = function (id) {
            return $http.get(server + urlBase + 's/project/' + id);
        };

        return taskFactory;
    }

})();