(function(angular) {
    'use strict';

    angular
        .module('shopicruit')
        .service('shopicruitService', shopicruitService);

    function shopicruitService($http) {

        return {
            findProducts: findProducts
        };

        /**
         * Private Methods
         */

        function filterProducts(list, archetype) {
            var result = [];

            for (var i = 0; i < list.length; i++) {
                if (list[i].products.product_type == archetype) {
                    list.push(list[i].title)
                }
            }
            return result;
        }

        /**
         * Public Methods
         */

        function findProducts (archetypes) {
            var result = [],
                product = [],
                found = [];

            $http.get('http://ui-form-data.getsandbox.com/shopicruit')
                .then(function (response) {
                    found = response.data
            });

            for (var i = 0; i < archetypes.length; i++) {
                found = filterProducts(product, []);
                result = found.concat(found[i])
            }
            return result;
        }

    }

})(angular);
