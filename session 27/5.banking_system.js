function BankAccount(initialBalance) {
  let balance = initialBalance;
  return {
    deposit: function (amount) {
      if (amount > 0) {
        balance += amount;
        console.log(`Deposited: $${amount}`);
      } else {
        console.log("Invalid deposit amount!");
      }
    },
    withdraw: function (amount) {
      if (amount > 0 && amount <= balance) {
        balance -= amount;
        console.log(`Withdrew: $${amount}`);
      } else {
        console.log("Invalid amount!");
      }
    },
    getBalance: function () {
      return balance;
    },
  };
}

let myAccount = BankAccount(1500);

myAccount.deposit(200);
console.log(myAccount.getBalance());

myAccount.withdraw(789);
console.log(myAccount.getBalance());
