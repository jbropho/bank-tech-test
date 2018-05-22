var assert = require('assert');
var accountModule = require('../src/account.js');


describe ('Account', function() {
  var account;
  var printer;
  var transaction;
  var statement = {
    makeDeposit: function() { return true },
    makeWithdrawal: function() { return true }
  };


  beforeEach(function() {
     account = accountModule(statement, printer);
  });

  describe('deposit', function() {
    it('tops up by specified amount', function() {
      transaction = account.deposit(100);
      assert.equal(transaction, 100);
    });

    it('accepts input as a string', function() {
      transaction = account.deposit('55');
      assert.equal(transaction, 55);
    });

    it('can handle inputs to 1 decimal place', function() {
      transaction = account.deposit(101.1);
      assert.equal(transaction, 101.1)
    });

    it('can handle inputs to 2 decimal places', function() {
      transaction = account.deposit(103.12);
      assert.equal(transaction, 103.12)
    });
  });


  describe('withdraw', function() {
    it ('reduces balance by specified amount', function() {
      transaction = account.withdraw(100);
      assert.equal(transaction, -100);
    });

    it('accepts input as a string', function() {
      transaction = account.withdraw('55');
      assert.equal(transaction, -55);
    });

    it('can handle inputs to 1 decimal place', function() {
      transaction = account.withdraw(101.1);
      assert.equal(transaction, -101.1);
    });

    it('can handle inputs to 2 decimal places', function() {
      transaction = account.withdraw(103.12);
      assert.equal(transaction, -103.12);
    });
  });
});