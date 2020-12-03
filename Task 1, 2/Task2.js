//Callback - function as an argument in other function is called callback function.

var userLoggedIn = true;

function userCheck(userLoggedIn,callback){
    if(userLoggedIn){
        console.log("User logged In");
    }else{
        callback(userLoggedIn);
    }

}
//Callback
const bool = userCheck(true);
console.log(bool);





//Promise - It is an object which indicates success and failure of a task.


var promise = new Promise((resolve,reject) => {
    //Wait for 1 sec
    setTimeout( () => {
        //Promise is resolved
        if(userLoggedIn){
            resolve();
        }else{
            // Reject
            reject();
        }
    },1000);
});

promise.then( () => {
    console.log("User logged In");
});