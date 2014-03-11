describe('CalCountApp controllers', function() {
    beforeEach(module('calcounterApp'));
     
    describe('DayEatenCtrl', function(){
        it('should create "foods eaten" model with 2 foods', inject(function($controller) {
            var scope = {},
            ctrl = $controller('DayEatenCtrl', { $scope: scope });
             
            expect(scope.eaten.length).toBe(2);
            })
        );
    });
});