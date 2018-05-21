var accountStatement = require('./accountStatement.js');

function bankAccount(statement = accountStatement()) {
  var balance = 0;

  function makeDeposit(amount) {
    statement.makeDeposit(amount, balance);
    balance += amount;
  }

  function makeWithdrawal(amount) {
    statement.makeWithdrawal(amount, balance);
    balance -= amount;
  }
   
  return {
    deposit: function(amount) {
      makeDeposit(amount);
    },
    withdraw: function(amount) {
      makeWithdrawal(amount);
    },
    getBalance: function(amount) {
      return balance;
    },
    statement: statement
  };
}

module.exports = bankAccount;