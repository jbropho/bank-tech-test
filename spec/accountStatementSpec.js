var assert = require('assert');
var accountStatement = require('../src/accountStatement.js');

describe('Account Statement', function() {
  var statement;
  var history;
  var transaction;

  beforeEach(function() {
    statement = accountStatement();
  });

  describe('makeDeposit', function() {
    it('adds an a new deposit object to history', function(){
      statement.makeDeposit(100, 0);
      transaction = statement.getHistory()[0];
      assert.equal(transaction.deposit, 100);
      assert.equal(transaction.balance, 100);
    });
  });

  describe('makeWithdrawal', function(){
   it('adds a new withdraw obejct to history', function() {
     statement.makeWithdrawal(100, 0);
     transaction = statement.getHistory()[0];
     assert.equal(transaction.withdraw, 100);
     assert.equal(transaction.balance, -100);
   });
  });

  describe('getDate', function() {
    it('returns todays date in format MM/DD/YYYY', function() {

    });
  });
});