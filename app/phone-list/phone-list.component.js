angular.
    module('phoneList').
    component('phoneList', {
        templateUrl: 'phone-list/phone-list.template.html',
        controller: ['$http', function PhoneListController($http) {
            var self = this;
            self.orderProp = 'age';
            self.name = 'Camilo Forero';
            $http.get('phones/phones.json').then((response) => {
                self.phones = response.data;
            });
        }
    ]
    });