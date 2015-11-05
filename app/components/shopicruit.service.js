(function(angular) {
    'use strict';

    angular
        .module('shopicruit')
        .factory('shopicruitService', shopicruitService);

    function shopicruitService($http) {

        return {
            findProducts: findProducts,
            getTotalPrice: getTotalPrice
        };

        /**
         * Private Methods
         */
        function fetchProducts() {
            return $http.get('http://ui-form-data.getsandbox.com/shopicruit').then(function (response) {
                return response
            })
        }

        function filterProducts(list, archetype) {
            var result = [];

            for (var i = 0; i < list.length; i++) {
                if (list[i].product_type == archetype) {
                    result.push(list[i])
                }
            }
            return result;
        }

        function totalVariantPrice(filtered) {
            var sum = 0;

            for (var i = 0; i < filtered.variants.length; i++) {
                sum += parseFloat(filtered.variants[i].price);
            }
            return sum;
        }

        /**
         * Public Methods
         */
        function findProducts(archetypes) {
            return fetchProducts().then(function (response) {
                var result = [],
                    fres = [];

                for (var i = 0; i < archetypes.length; i++) {
                    fres = filterProducts(response.data.products, archetypes[i]);
                    result = result.concat(fres);
                }

                return result;
            });
        }

        function getTotalPrice(list) {
            var sum = 0;

            for (var i = 0; i < list.length; i++) {
                sum += parseFloat(totalVariantPrice(list[i]));
            }
            return sum;
        }

    }

})(angular);
