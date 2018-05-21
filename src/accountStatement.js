function accountStatement() {
  var history = [];

  function addTransaction(transaction) {
    history.push(transaction);
  }

  return {
     newDeposit: function(amount, currentBalance) {
         var deposit = {deposit: amount, balance: currentBalance + amount};
         addTransaction(deposit);
     },
     getHistory: function() {
       return history;
     }
  };
}

module.exports = accountStatement;