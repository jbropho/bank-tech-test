function statementPrinter() {

  function formatCashDisplay(amount) {
    if(!amount) return "";
    
    var decimals = countDecimals(parseInt(amount));

    switch(decimals) {
      case 0:
         return amount + ".00";
      case 1:
         return amount + "0";
      default: 
         return amount;
    }
  }

  var countDecimals = function (value) {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0; 
  };

  return {
    formatTransaction: function(transaction) {
       var date = transaction.date;
       var deposit = formatCashDisplay(transaction.deposit);
       var withdraw = formatCashDisplay(transaction.withdraw);
       var balance = formatCashDisplay(transaction.balance);
       var spacer = " || ";
       return date + spacer + deposit + spacer + withdraw + spacer + balance;
    }
  };
}

module.exports = statementPrinter;