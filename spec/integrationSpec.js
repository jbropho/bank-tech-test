var assert = require('assert');
var accountModule = require('../src/account.js');
var statementPrinter = require ('../src/statementPrinter.js');
var accountStatement = require('../src/accountStatement.js');

describe('Banking app', function() {
  var printer;
  var statement;
  var account;

  beforeEach(function() {
    printer = statementPrinter();
    statement = accountStatement();
    account = accountModule(statement, printer);
  });

  it('calculates the correct balance', function() {
    account.deposit(100);
    account.withdraw(20);
    account.deposit(52);
    expect(account.getBalance()).toBe(132);
  });
});