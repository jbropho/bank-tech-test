function accountStatement() {
  var history = [];

  function addTransaction(transaction) {
    transaction.date = (formatDate(getDate()));
    history.push(transaction);
  }
  
  function getDate() {
    return new Date();
  }

  function formatDate(date) {
    var yyyy = date.getFullYear();
    var mm = date.getMonth().toLocaleString('en-US', {minimumIntegerDigits: 2});
    var dd = date.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2});
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