(function () {
    var taskList = {
        bindings: {
            items: "<"
        },
        templateUrl: "partials/taskList.html",
        controller: function (FormService) {
            var vm = this;
            vm.itemsToDisplay = FormService.returnInfo();
            
            vm.rmInfo = function(item) {
                FormService.removeInfo(item);
            }  
        }
    };
    angular
        .module("app")
        .component("taskList", taskList)
})();