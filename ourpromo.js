// let num1 = 1 + 1;
// let num2 = 10;

// function check(callback, callbackError) {


//     if (num1 === 1) {

//         callback('False')

//     } else {
//         callbackError("not equal");
//     }



// }

// check((success) => console.log(success));

//  functions

// function getPlayerInfo(name, club, position, JoinedTime) {

//     let year = 2023;

//     let data = `Name: ${name} Club: ${club} Position: ${position} JoinedTime: ${year - JoinedTime}`;
//     return data;

// }


// console.log(getPlayerInfo("Leo", "PSG", "10", 2022));



// //function declaration


// const getPlayer = function (name, club, position, JoinedTime) {
//     let year = 2023;

//     let data = `Name: ${name} Club: ${club} Position: ${position} JoinedTime: ${year - JoinedTime}`;
//     return data;


// }

// console.log(getPlayer("Leo", "PSG", "10", 2022));



// // arrow

// const getPlayerData = (name, club, position, JoinedTime) => {
//     let year = 2023;
//     let data = `Name: ${name} Club: ${club} Position: ${position} JoinedTime: ${year - JoinedTime}`;
//     return data;


// }

// console.log(getPlayerData("Leo", "PSG", "10", 2022));

// const getPlayer = (playername) => {


//     const Players = [

//         {
//             name: "messi",
//             club: "PSG"
//         },
//         {
//             name: "Naymar",
//             club: "PSG"
//         },
//         {
//             name: "Rashford",
//             club: "Man"
//         },
//         {
//             name: "CR7",
//             club: "Nasri"
//         },
//     ]






//     const newPlayer = Players.findIndex((player) => player.name == playername);

//     // console.log(newPlayer)



//     Players.splice(newPlayer, 1);



//     return Players;


// }


// const mynumbers = [5, 10, 20, 30, 40];


// const newNumber = mynumbers.findIndex(num => num == 30);


// mynumbers.splice(newNumber, 1);

// console.log(mynumbers)


// console.log(getPlayer("Rashford"))
// console.log(getPlayer("messi"))











