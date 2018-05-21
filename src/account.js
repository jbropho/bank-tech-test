function bankAccount() {
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
    }
  };
}


module.exports = bankAccount;