function accountStatement() {
  var history = [];

  function makeDeposit(amount, currentBalance) {
    var deposit = {deposit: amount, balance: currentBalance + amount};
    _addTransaction(deposit);
  }

  function makeWithdrawal(amount, currentBalance) {
    var withdraw = {withdraw: amount, balance: currentBalance - amount};
    _addTransaction(withdraw);
  }

  function getHistory() {
    return history;
  }

  function _addTransaction(transaction) {
    transaction.date = _getFormattedDate();
    history.push(transaction);
  }

  function _getFormattedDate() {
    var date = new Date();
    var yyyy = date.getFullYear();
    var mm = date.getMonth().toLocaleString('en-US', {minimumIntegerDigits: 2});
    var dd = date.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2});
    return dd + '/' + mm + '/' + yyyy; 
  }
  
  return {
     makeDeposit: makeDeposit,
     makeWithdrawal: makeWithdrawal,
     getHistory: getHistory
  };
}

module.exports = accountStatement;
