describe('CalCountApp controllers', function() {
     
    describe('calCounterCtrl', function(){
    	var scope, ctrl, $httpBackend, lsService;
    	
    	beforeEach(function() {

    		module('calCounterApp');

			inject(function(_$httpBackend_,_localStorageService_,$controller) {
				lsService = _localStorageService_;
				$httpBackend = _$httpBackend_;
				$httpBackend
				 	.expectGET('/app/stored-food.json')
					.respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

				scope = {};
				ctrl = $controller('calCounterCtrl', {$scope:scope});
			})
		});  

        it('should create "foods eaten" model with 2 foods', function() {
            expect(scope.eaten.length).toBe(2);
        });

    	it('should load "stored-foods" from xhr', function() {
			expect(scope.storedfood).toBeUndefined();
			$httpBackend.flush();
	
			expect(scope.storedfood).toEqual([{name: 'Nexus S'},
			{name: 'Motorola DROID'}]);
		});

        it('should total calories for basic foods to 334', function(){
        	expect(scope.total()).toBe(334);
        });

        it('should set the defaults for the add boxes correctly', function(){
        	expect(scope.foodunit).toBe('-');
        	expect(scope.foodamt).toBe(1);        	
        });        
    });
});

