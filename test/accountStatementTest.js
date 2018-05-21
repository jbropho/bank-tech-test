var assert = require('assert');
var accountStatement = require('../src/accountStatement.js');

describe('Account Statement', function() {
  var statement;
  var history;
  var transaction;

  beforeEach(function() {
    statement = accountStatement();
  });

  describe('newDeposit', function() {
    it('adds an a new deposit object to history', function(){
      statement.newDeposit(100, 0);
      transaction = statement.getHistory()[0];
      assert.equal(transaction.deposit, 100);
      assert.equal(transaction.balance, 100);
    });
  });
});