let database = [
    {
        username: "shubham",
        password: "secretpass"
    }
    {
        username: "mahesh",
        password: "oldpass"
    }
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

function signIn(user, pass){
    if (user === database[0].username && pass === database[0].password){
        console.log(newsFeed);
        alert("Welcome to your profile shubham")
    } else {
        alert("You entered wrong username or password")
    }
}
signIn(userPrompt, passPrompt);