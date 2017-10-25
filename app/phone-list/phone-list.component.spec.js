describe('phoneList', function(){


    beforeEach(module('phoneList'));

    describe('PhoneListController', function(){
        var $httpBackend, ctrl;

        beforeEach(inject(function($componentController, _$httpBackend_){
            $httpBackend = _$httpBackend_;
            $httpBackend.expectGET('phones/phones.json').respond([{name:'Iphone'}, {name:'Nexus S'}]);
            ctrl = $componentController('phoneList');
        }));

        it('should create a phones model with 20 phones', function(){
            expect(ctrl.phones.length).toBe(20);
        });
        
        it('should get the default order by equal to age', function(){
            expect(ctrl.orderProp).toBe('age');
        });
    });
});

// describe('PhoneListController', function(){
//     beforeEach(module('phonecatApp'));

//     it('should create a phones model with 2 phones', inject(function($controller){
//         var scope = {}
//         var ctrl = $controller('PhoneListController', {$scope: scope});

//         expect(scope.phones.length).toBe(2);
//         expect(scope.name).toBe('Camilo Forero');
//     }));

// });