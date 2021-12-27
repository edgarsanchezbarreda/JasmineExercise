describe('helpers functions test',function() {

    it('should not submit if any type is empty', function(){
        billAmt.value = '';
        tipAmt.value = '';
        expect(Object.keys(allPayments).length).toEqual(0);
    })

    it('should calculateTipPercent correctly', function(){
        expect(calculateTipPercent(100, 10)).toEqual(10);
    })
    
    it('should append a td to tr', function(){
        let newTr = document.createElement('tr');
        appendTd(newTr, 'value');
        expect(newTr.children.length).toEqual(1);
    })

    afterEach(function(){
        billAmt.value = '';
        tipAmt.value = '';
    });

});