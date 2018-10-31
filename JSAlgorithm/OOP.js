// 'use strict'

function Checking(amount) {
    this.balance = amount;  //属性
    this.deposit = deposit; //方法
    this.withdraw = withdraw; //方法
    this.toString = toString; //方法
}

function deposit(amount) {
    this.balance += amount;
}

function withdraw(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    }
    if (amount >this.balance) {
        console.log("Insufficient funds");
    }
}

function toString() {
    return "余额: " + this.balance;
}

var account = new Checking(500);
account.deposit(1000);  //余额1500
console.log(account.toString()); //余额750
account.withdraw(750);
console.log(account.toString()); //余额不足
account.withdraw(800);
console.log(account.toString());    //余额750
