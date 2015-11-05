(function(angular) {
    'use strict';

    angular
        .module('shopicruit')
        .controller('shopicruitController', shopicruitController);

    function shopicruitController(shopicruitService, $filter) {
        var vm = this;

        // Default Binding
        vm.products = [];

        shopicruitService.findProducts(['Lamp', 'Wallet'])
            .then(function (products) {
                vm.products = products;
            });

        vm.totalPrice = shopicruitService.getTotalPrice;
    }

})(angular);
