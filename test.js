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


// const getPlayerInfo = (playername) => {


//     const Players = [


//         // 0
//         {
//             name: "messi",
//             club: "PSG"
//         },

//         // 1
//         {
//             name: "Naymar",
//             club: "PSG"
//         },

//         // 2
//         {
//             name: "Rashford",
//             club: "Man"
//         },

//         // 3
//         {
//             name: "CR7",
//             club: "Nasri"
//         },
//     ]




//     const newPlayer = Players.findIndex((player) => (player.name == playername));



//     Players.splice(newPlayer, 1);

//     // console.log("After  ")



//     console.log(Players);




// }


// getPlayerInfo("CR7")





// const addNewPlayer = ({ name, club }) => {


//     const Players = [


//         // 0
//         {
//             name: "messi",
//             club: "PSG"
//         },

//         // 1
//         {
//             name: "Naymar",
//             club: "PSG"
//         },

//         // 2
//         {
//             name: "Rashford",
//             club: "Man"
//         },

//         // 3
//         {
//             name: "CR7",
//             club: "Nasri"
//         },
//     ]

//     const NewPlayer = { name, club }


//     Players.push(NewPlayer);

//     // const newPlayer = {};

//     return Players;




// }

// console.log(addNewPlayer({ name: "zaki", club: "lfc" }))
// console.log(addNewPlayer({ name: "Ali", club: "barca" }))



// const getPlayerData = (playername) => {


//     const Players = [


//         // 0
//         {
//             name: "messi",
//             club: "PSG"
//         },

//         // 1
//         {
//             name: "Naymar",
//             club: "PSG"
//         },

//         // 2
//         {
//             name: "Rashford",
//             club: "Man"
//         },

//         // 3
//         {
//             name: "CR7",
//             club: "Nasri"
//         },
//     ]




//     const newPlayer = Players.filter((player) => (player.name == playername));


//     return newPlayer;



// }

// console.log(getPlayerData("messi"));


// const UpdatePlayerInfo = (playername) => {


//     const Players = [


//         // 0
//         {
//             name: "messi",
//             club: "PSG"
//         },

//         // 1
//         {
//             name: "Naymar",
//             club: "PSG"
//         },

//         // 2
//         {
//             name: "Rashford",
//             club: "Man"
//         },

//         // 3
//         {
//             name: "CR7",
//             club: "Nasri"
//         },
//     ]


//     const player = Players.findIndex((player) => player.name == playername);


//   const UpdatedPlayers=[...Players,playerName]

//     return newPlayer;



// }


