function accountStatement() {
  var history = [];

  function addTransaction(transaction) {
    transaction.date = getFormattedDate();
    history.push(transaction);
  }

  function getFormattedDate() {
    var date = new Date();
    var yyyy = date.getFullYear();
    var mm = date.getMonth().toFixed(2);
    var dd = date.getDate().toFixed(2);
    return dd + '/' + mm + '/' + yyyy; 
  }
  
  return {
     makeDeposit: function(amount, currentBalance) {
       var deposit = {deposit: amount, balance: currentBalance + amount};
       addTransaction(deposit);
     },
     makeWithdrawal: function(amount, currentBalance) {
       var withdraw = {withdraw: amount, balance: currentBalance - amount};
       addTransaction(withdraw);
     },
     getHistory: function() {
       return history;
     }
  };
}

module.exports = accountStatement;