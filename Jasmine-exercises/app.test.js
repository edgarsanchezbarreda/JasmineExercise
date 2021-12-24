describe('sum function test', function(){
    it('should be added', function(){
        expect(sum(1,5)).toEqual(6);
        expect(sum(2,4)).toEqual(6);
    });
    
    it('should be subtracted', function(){
        expect(sum(10,2)).toEqual(8);
        expect(sum(5,2)).toEqual(3);
    });
})

afterEach(function(){
    console.log('hello');
})
beforeEach(function(){
    console.log('hello');
})

afterAll(function(){
    console.log('after all');
})
beforeAll(function(){
    console.log('before all');
})