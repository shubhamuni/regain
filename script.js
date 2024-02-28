let database = {
    username: "shubham",
    password: "secretpass"
}
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

function signIn(user, pass){
    if (user === database.username && pass === database.password){
        console.log(newsFeed);
    } else {
        alert("You entered wrong username or password")
    }
}
signIn(userPrompt, passPrompt);