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
  });
});