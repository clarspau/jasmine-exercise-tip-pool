describe('Helpers test', function() {
    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 15;
        submitPaymentInfo();
    });


    it('shoud sum up the total tip amount of all payments on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('tipAmt')).toEqual(15);
        
        billAmtInput.value = 200;
        tipAmtInput.value = 30;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipAmt')).toEqual(45);
    });


    it('should sum up the total bill amount of all payments on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('billAmt')).toEqual(100);

        billAmtInput.value = 200;
        tipAmtInput.value = 30;

        submitPaymentInfo();

        expect(sumPaymentTotal('billAmt')).toEqual(300);
    });


    it('should sum up the total tip amount of all payments on sumPaymentTotal()', function() {
        expect(sumPaymentTotal('tipPercent')).toEqual(15);

        billAmtInput.value = 100;
        tipAmtInput.value = 15;

        submitPaymentInfo();

        expect(sumPaymentTotal('tipPercent')).toEqual(30);
    });


    it('should sum up the tip percent of a single tip on calculatetipPercent()', function() {
        expect(calculateTipPercent(100, 25)).toEqual(25);
        expect(calculateTipPercent(50, 5)).toEqual(10);
    });


    it('should create new td from value and append to tr on appendTd(tr, value)', function() {
        let newTr = document.createElement('tr');
        appendTd(newTr, 'test');

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('test');
    });


    it('should delete td and append to tr on appendDeleteBtn(tr, type)', function() {
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });


    it('should delete td and append to tr on appendDeleteBtn(tr, type)', function() {
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);

        expect(newTr.children.length).toEqual(1);
        expect(newTr.firstChild.innerHTML).toEqual('X');
    });


    afterEach(function() {
        tipAmtInput.value = '';
        billAmtInput.value = '';
        paymentTbody.innerHTML = '';
        serverTbody.innerHTML = '';
        summaryTds[0].innerHTML = '';
        summaryTds[1].innerHTML = '';
        summaryTds[2].innerHTML = '';
        allPayments = {};
        paymentId = 0;
    });
})