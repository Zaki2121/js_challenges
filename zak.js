


// function makeRequest(location) {

//     return new Promise((resolve, reject) => {


//         if (location == 'Google') {


//             resolve("Hi  Google")
//         } else {
//             reject(`we couldn't  want to look  ${location}`)
//         }

//     })


// }

// function processResponse(response) {
//     return new Promise((resolve, reject) => {

//         console.log("Processing response")


//         resolve("extra information" + response)

//     });
// }

// makeRequest('Youtube').then(response => {
//     console.log(response)

//     return processResponse(response);
// }).then((processResponse) => {
//     console.log("Processing response")

//     console.log(processResponse)

// }).catch((err) => console.error(err))