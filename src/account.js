var accountStatement = require('./accountStatement.js');

function bankAccount(statement = accountStatement()) {
  var balance = 0;

  return {
    deposit: function(amount) {
      balance += parseFloat(amount);
    },
    withdraw: function(amount) {
      balance -= amount;
    },
    getBalance: function(amount) {
      return balance;
    },
    statement: statement
  };
}

module.exports = bankAccount;