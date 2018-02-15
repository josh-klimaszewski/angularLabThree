(function () {
    var taskForm = {
        templateUrl: "partials/taskForm.html",
        controller: function (FormService) {
            var vm = this;
            vm.sendInfo = function(info) {
                FormService.updateInfo(info);
            }
        }
    };
    angular
        .module("app")
        .component("taskForm", taskForm)
})();