function statementPrinter() {
  
  function formatCashDisplay(amount) {
    return amount ? amount.toFixed(2) : "";
  }

  function formatTransaction(transaction) {
    var date = transaction.date;
    var deposit = formatCashDisplay(transaction.deposit);
    var withdraw = formatCashDisplay(transaction.withdraw);
    var balance = formatCashDisplay(transaction.balance);
    var spacer = " || ";
    return `${date} ${spacer} ${deposit} ${spacer} ${withdraw} ${spacer} ${balance}`;
  }

  function displayStatement(statement) {
    console.log('date || credit || debit || balance');
    statement.forEach(item => console.log(item));
  }

  return {
    printHistory: function(history) {
      var formatted = history.map( x => formatTransaction(x)).reverse();
      displayStatement(formatted);
    }
  };
}

module.exports = statementPrinter;
