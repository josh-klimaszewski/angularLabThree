(function () {
    function FormService() {
        var items = [];
        return {
            updateInfo: updateInfo,
            removeInfo: removeInfo,
            returnInfo: returnInfo
        }
        function updateInfo(item) {
            items.push(item);
            document.getElementById('addInput').value = "";
        }
        function returnInfo() {
            return items;
        }
        function removeInfo(item) {
            var array = items;
            var index = array.indexOf(item);
            array.splice(index, 1);
        }
    }
    angular
        .module("app")
        .factory("FormService", FormService);
})();