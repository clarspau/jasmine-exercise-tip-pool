describe('Payments test', function() {
    beforeEach(function() {
        billAmtInput.value = 100;
        tipAmtInput.value = 15;
    });


it('should add a new payment when PaymentInfo() was submitted', function() {
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(1);
    expect(allPayments['payment1'].billAmt).toEqual('100');
    expect(allPayments['payment1'].tipAmt).toEqual('15');
    expect(allPayments['payment1'].tipPercent).toEqual(15);
});


it('should not add a new payment if the input is empty', function() {
    billAmtInput.value = '';
    submitPaymentInfo();

    expect(Object.keys(allPayments).length).toEqual(0);
});


it('should update the payment on #paymentTable', function() {
    let curPayment = createCurPayment();
    allPayments['payment1'] = curPayment;
    appendPaymentTable(curPayment);
    let curTdList = document.querySelectorAll('#paymentTable tbody tr td');

    expect(curTdList.length).toEqual(4);
    expect(curTdList[0].innerText).toEqual('$100');
    expect(curTdList[1].innerText).toEqual('$15');
    expect(curTdList[2].innerText).toEqual('15%');
    expect(curTdList[3].innerText).toEqual('X');
});


it('should create a new payment with createCurPayment()', function() {
    let expectedPayment = {
        billAmt: '100',
        tipAmt: '15',
        tipPercent: 15
    }

    expect(createCurPayment()).toEqual(expectedPayment);
});


it('should not create payment if the input on createCurPayment() is empty', function() {
    billAmtInput.value = '',
    tipAmtInput.value = '',
    curPayment = createCurPayment();

    expect(curPayment).toEqual(undefined);
});

afterEach(function() {
    billAmtInput.value = '';
    paymentTbody.innerHTML = '';
    tipAmtInput.value = '';
    summaryTds[0].innerHTML = '';
    summaryTds[1].innerHTML = '';
    summaryTds[2].innerHTML = '';
    paymentId = 0;
    allPayments = {};
});
});