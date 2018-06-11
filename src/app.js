var bankAccount = require('./account.js');
var accountStatement = require('./accountStatement.js');
var statementPrinter = require('./statementPrinter.js');

var account = bankAccount(accountStatement(), statementPrinter());

debugger;