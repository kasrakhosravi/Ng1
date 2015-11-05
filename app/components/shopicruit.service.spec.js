'use strict';

describe('Shopicruit Service', function() {
    var httpBackend;

    beforeEach(module('shopicruit'));

    beforeEach(inject(function ($httpBackend) {
        httpBackend = $httpBackend;
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it('should return data', function() {
        httpBackend.expectGET('http://ui-form-data.getsandbox.com/shopicruit-test').respond(result);
        httpBackend.flush();
        expect(result).toEqual(['Hi']);
    });
});
