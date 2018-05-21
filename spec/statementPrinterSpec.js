var statementPrinter = require ('../src/statementPrinter.js');
var assert = require('assert');

describe('Statement Printer', function() {
  var transaction;
  var printer = statementPrinter();
  
  describe('printTransaction', function() {
    it('correctly formats a deposit of 1000', function() {
       transaction = { deposit: 1000, balance: 2000, date: '01/01/2052' };
       output = printer.formatTransaction(transaction);
       assert.equal(output, '01/01/2052 || 1000.00 ||  || 2000.00'); 
    });

    it('correctly formats a withdrawal of 3000', function() {
      transaction = { withdraw: 3000, balance: 1500, date: '01/01/2052' };
      output = printer.formatTransaction(transaction);
      assert.equal(output, '01/01/2052 ||  || 3000.00 || 1500.00');
   });
  });
});