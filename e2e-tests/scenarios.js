//'use strict';

// Angular E2E Testing Guide:
// https://docs.angularjs.org/guide/e2e-testing

describe('PhoneCat Application', function(){

  describe('phoneList', function(){
    
    beforeEach(function(){
      browser.get('index.html');
    });

    it('should filter the phone list as a user types into the search box', function(){
      var phoneList= element.all(by.repeater('phone in $ctrl.phones'));
      var query = element(by.model('$ctrl.query'));

      expect(phoneList.count()).toBe(4);
      
      query.sendKeys('LG');
      expect(phoneList.count()).toBe(3);
    });

  });
});