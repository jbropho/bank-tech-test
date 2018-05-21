function accountStatement() {
  var history = [];

  function addTransaction(transaction) {
    history.push(transaction);
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