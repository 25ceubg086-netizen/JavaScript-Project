
class Game {
    constructor(str){
        this.name = str;
    }
    onInit = () => {};
    data = [];
    onEnd = () => {};
    isActive = false;
    onReset = () => {};
    run = () => {};
}

let games = [
    "username" : new Game('username'),
    "age" : new Game('age'),
    "password" : new Game('password'),
    "DOB" : new Game('DOB')
];
function init(elem){
    if(elem == null)
        return;
    
    let game = games[elem.id];
    game.onInit();
    game.isActive = true;
    game.run();
    game.onEnd();
    game.isActive = false;
}

/* Global Variables */
let isGamePaused = true;
let currentGame = null;

let next = document.getElementById('next');
let back = document.getElementById('back');
let uName = document.getElementById('username');
let uAge = document.getElementById('age');
let DOB = document.getElementById('DOB');
let password = document.getElementById('password');

for (const elem of [uName, uAge, DOB, password]) {
    elem.addEventListener("click", () => {
        init(elem);
    });
}
const massages = {
    username : [
        "Already Exists."
    ],
    passwd : { 
        rules : [
            "Enter your password.",
            "Enter at least one capital.",
            "Enter at least one small.",
            "Enter at least one number.",
            "Enter at least one symbol.",
            "Password must contain 12 characters."
        ],
        weak : [
            "Password is too weak",
            "A dog has guessed your password easily. Enter strong one.",
            "Your password is too easy to guess. Enter strong one.",
            "A hacker has cracked your password. Please try another one.",
            "Password already used by other user. Please Enter different one."
        ]
    },
    
    age : {
        nagetive : [
            "You are not even born !",
            "That age doesn't Exist",
            "Are You sure, you are from future ?",
            "System is confused due to age being nagetive."
        ],
        low : 
            "Welcome dear kid !",
        high : 
            "Welcome respected sir!",
        def : "Welcome sir !"
    },
    
    xEvents : {
        TimeOut : [
            
        ]
    }
};
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");
