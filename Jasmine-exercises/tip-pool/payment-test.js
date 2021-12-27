describe('payments tests', function(){

    beforeEach(function(){
        billAmtInput.value = 100;
        tipAmtInput.value = 20;
    });

    it('should return a payment using createCurPayment', function(){
        let defaultPayment = {
            billAmt: '100',
            tipAmt: '20',
            tipPercent: 20,
        }
        expect(createCurPayment()).toEqual(defaultPayment);
    })

    it('should append a table with the correct td values using appendPaymentTable', function(){
        let curPayment = createCurPayment();
        allPayments['payment1'] = curPayment;
        appendPaymentTable(curPayment);

        let currentTDList = document.querySelectorAll('#paymentTable tbody tr td');
        expect(currentTDList.length).toEqual(3);
        expect(currentTDList[0].innerText).toEqual('$100');
        expect(currentTDList[1].innerText).toEqual('$20');
        expect(currentTDList[2].innerText).toEqual('20%');
    })

    afterEach(function(){
        billAmt.value = '';
        tipAmt.value = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
    })











})