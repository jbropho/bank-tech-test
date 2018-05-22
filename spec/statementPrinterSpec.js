var statementPrinter = require ('../src/statementPrinter.js');
var assert = require('assert');

describe('Statement Printer', function() {
  var history = [ { date: '01/01/2001', balance: 1000, deposit: 100 },
                  { date: '01/01/2012', balance: 1400, deposit: 400 },
                  { date: '01/01/2045', balance: 800, withdraw: 600 }
  ];

  var output;
  var printer = statementPrinter();

  beforeEach(function() {
    output = [];
    spyOn(console, "log").and.callFake(function(arg) {
      output.push(arg);
    });
  });

  describe('printHistory', function() {

    it('outputs in reverse chronological order', function() {
      var firstEntry;
      var secondEntry;

      printer.printHistory(history);

      firstEntry = output[1];
      secondEntry = output[2];

      expect(firstEntry).toMatch(/01\/01\/2045 || 600 || || 800/);
      expect(secondEntry).toMatch(/01\/01\/2012 || || 1400 || 400/);
    });

    it('outputs a header ', function() {
      var header;
      printer.printHistory(history);
      header = output[0];
      
      expect(header).toMatch(/date || credit || debit || balance/);
    });
  });
});