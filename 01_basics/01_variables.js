const accountId = 12345   // no change coz constant
let accountEmail = "test@gmail.com"
var  accountPassword = "123123"  // not used because of scope problem
accountCity = "Jaipur"  // very bad practice
let accountState;

// accountId = 2  // not allowed

accountEmail = "hc@gh.com"
accountPassword = "1234567"
accountCity = "delhi"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])