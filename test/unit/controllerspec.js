describe('CalCountApp controllers', function() {
     
    describe('calCounterCtrl', function(){
    	var scope, ctrl, $httpBackend, lsService;
    	
    	beforeEach(function() {

    		module('calCounterApp');

			inject(function(_$httpBackend_,_localStorageService_,$controller) {
				lsService = _localStorageService_;
				$httpBackend = _$httpBackend_;
				$httpBackend
				 	.expectGET('/public/stored-food.json')
					.respond([{"id": "1","name": "Andy's Cereal","cal": "234","cat": "Grains","amt": "60","unit": "g"}]);

				scope = {};
				ctrl = $controller('calCounterCtrl', {$scope:scope});
			})
		});  

        it('should create "foods eaten" model with 0 foods', function() {
            expect(scope.activeday.eaten.length).toBe(0);
            expect(scope.activeday.total).toBe(0);            
        });

    	it('should load "stored-foods" from xhr', function() {
			expect(scope.storedfood_server.length).toBe(0);//Starts out empty
            expect(scope.storedfood_local.length).toBe(0);//Starts out empty
			$httpBackend.flush();
	
			expect(scope.storedfood_server).toEqual([{"id": "1","name": "Andy's Cereal","cal": "234","cat": "Grains","amt": "60","unit": "g"}]);
            expect(scope.storedfood().length).toBe(1);
		});

        it('should set the defaults for the add boxes correctly', function(){
        	expect(scope.foodunit).toBe('-');
        	expect(scope.foodamt).toBe(1);        	
        });        
    });
});

