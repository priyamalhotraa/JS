const user = {
    username: "priya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // this refers to the current context
        console.log(`the price is ${this.price}, please proceed to pay it`);
    }

}

user.welcomeMessage()