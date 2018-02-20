(function () {
    var taskForm = {
        templateUrl: "partials/taskForm.html",
        controller: function (FormService) {
            var vm = this;
            vm.sendInfo = function(addInfo) {
                if (addInfo) {
                FormService.updateInfo(addInfo);
                
                }
            }
        }
    };
    angular
        .module("app")
        .component("taskForm", taskForm)
})();