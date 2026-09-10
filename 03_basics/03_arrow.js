const user = {
    username: "priya",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);  // this refers to the current context
        // console.log(`the price is ${this.price}, please proceed to pay it`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// in browser it shows window, because window is the most global object in the browser

function chai(){
    let username = "priya"
    console.log(this.username);
}

chai()