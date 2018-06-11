# Bank Tech Test
## A practice Tech test to build a simple CLI banking app.

## Tech:

Javascript - Jasmine

## Setup:

   ```
   $ git clone https://github.com/jbropho/bank-tech-test
   $ cd bank-tech-test
   $ node inspect src/app.js
   $ c
   $ repl 

   available commands are 
    * account.deposit(amount)
    * account.withdraw(amount)
    * account.getBalance()
    * account.printStatement()
      
## Approach
I decided to split my application into three seperate components, a bank account,
a statement and a statement printer. I wanted to use dependency injection, by inserting my statement and printer objects into my account object. This approach
allows me to expose all of the apps functionality via a single interface, the 
account object. 

## Positives
* Encapsulated state and exposed a series of getter/setter methods for interacting
with application state 
* Seperated concerns into clearly defined components which execute a single responsibility

## If I had more time
* I would refactor my design to incorporate prototypal inheritance. I appreciate the
encapsulation provided by closures, however, this approach does make modifying features more difficult. I would like to adopy a hybrid approach which allows encapsulation and makes the code flexible for change.
* I would like to expand on the CLI interface to allow a better user experience
