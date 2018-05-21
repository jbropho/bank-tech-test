var assert = require('assert');
var accountModule = require('../src/account.js');

describe ('Account', function() {
  var account;
  var balance;

  beforeEach(function() {
     account = accountModule();
  });

  describe('deposit', function() {
    it('tops up by specified amount', function() {
      account.deposit(100);
      balance = account.getBalance();
      assert.equal(balance, 100);
    });

    it('accepts input as a string', function() {
      account.deposit('55');
      balance = account.getBalance();
      assert.equal(balance, 55);
    });

    it('can handle inputs to 1 decimal place', function() {
      account.deposit(101.1);
      balance = account.getBalance();
      assert.equal(balance, 101.1)
    });

    it('can handle inputs to 2 decimal places', function() {
      account.deposit(103.12);
      balance = account.getBalance();
      assert.equal(balance, 103.12)
    });
  });


  describe('withdraw', function() {
    it ('reduces balance by specified amount', function() {
      account.withdraw(100);
      balance = account.getBalance();
      assert.equal(balance, -100);
    });

    it('accepts input as a string', function() {
      account.withdraw('55');
      balance = account.getBalance();
      assert.equal(balance, -55);
    });

    it('can handle inputs to 1 decimal place', function() {
      account.withdraw(101.1);
      balance = account.getBalance();
      assert.equal(balance, -101.1);
    });

    it('can handle inputs to 2 decimal places', function() {
      account.withdraw(103.12);
      balance = account.getBalance();
      assert.equal(balance, -103.12);
    });
  });
});