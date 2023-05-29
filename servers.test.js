describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  
  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });


  it('should be able to add very long server names', function() {
    serverNameInput.value = '';
    serverNameInput.value = 'Bruce Wayne aka Batman';
    submitServerInfo();

    expect(allServers['server' + serverId].serverName).toEqual('Bruce Wayne aka Batman');
  });


  it('should not add an empty input on submitServerInfo()', function() {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });


  it('should update the #servertable on updateServerTable()', function() {
    submitServerInfo();
    updateServerTable();
    let currentTable = document.querySelectorAll('#serverTable tbody tr td');

    expect(currentTable.length).toEqual(3);
    expect(currentTable[0].innerText).toEqual('Alice');
    expect(currentTable[1].innerText).toEqual('$0.00');
    expect(currentTable[2].innerText).toEqual('X');
  });


// To clean up the dom after running the tests
  afterEach(function() {
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = '';
  });
});
