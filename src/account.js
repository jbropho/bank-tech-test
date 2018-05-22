var accountStatement = require('./accountStatement.js');
var statementPrinter = require('./statementPrinter.js');

function bankAccount(statement, printer) {
  var balance = 0;

  function deposit(amount) {
    statement.makeDeposit(amount, balance);
    balance += amount;
    return balance;
  }

  function withdraw(amount) {
    statement.makeWithdrawal(amount, balance);
    balance -= amount;
    return balance;
  }
  
  function getBalance() {
    return balance;
  }
  
  function printStatement() {
    printer.printHistory(statement.getHistory());
  }

  return {
    deposit: deposit,
    withdraw: withdraw,
    getBalance: getBalance,
    printStatement: printStatement
  };
}

module.exports = bankAccount;
