let database = [
    {
        username: "shubham",
        password: "secretpass"
    },
    {
        username: "mahesh",
        password: "oldpass"
    },
    {
        username: "santosh",
        password: "password"
    },
    {
        username: "gaurav",
        password: "secretpass"
    },
    {
        username: "sahil",
        password: "secret"
    },
]
let newsFeed = [
    { 
        username: "Shubham Patil", 
        timeline: "Super excited to be a developer."
    },
    {
        username: "Mahesh S",
        timeline: "Hey there just cool wether outside!!"
    }
]
let userPrompt = prompt("What's your username?")
let passPrompt = prompt("What's your password?")
function isUserValid(username, password){
    for (let i=0; i < database.length; i++){
        if (username === database[i].username && password === database[i].password){
            return true;
            // alert(`Welcome to your profile ${database[i].username}`)
        }
    }
    return false;
}

function signIn(user, pass){
    if (isUserValid(user, pass)){
        console.log(newsFeed)
        alert(`Welcome to your profile ${database[i].username}`)
    }  else {
        alert("You entered wrong username or password")
    }
}
signIn(userPrompt, passPrompt);