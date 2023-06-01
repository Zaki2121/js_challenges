


// let counter = false;

// const testPromises = new Promise((resolve, reject) => {

//     if (counter) {
//         resolve("we are looking ok");
//     } else {
//         reject("we are not looking crazy");
//     }

// })

// testPromises.then((successmessage) => console.log(successmessage)).catch((error) => console.log(error));




// function getPosts(resource) {


//     return new Promise((resolve, reject) => {

//         const request = new XMLHttpRequest();


//         request.addEventListener("readystatechange", () => {

//             if (request.readyState === 4 && request.status === 200) {

//                 const data = JSON.parse(request.responseText);

//                 resolve(data);



//             } else if (request.readyState === 4) {
//                 reject("Something  Won't work as expected")
//             }
//         })

//         request.open('GET', resource)
//         request.send();


//     });



// }


// getPosts("https://jsonplaceholder.typicode.com/posts")
// getPosts("./jsonData.JSON")
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));



// function getPosts(resource) {


//     return new Promise((resolve, reject) => {

//         const request = new XMLHttpRequest();


//         request.addEventListener("readystatechange", () => {

//             if (request.readyState === 4 && request.status === 200) {

//                 const data = JSON.parse(request.responseText);

//                 resolve(data);



//             } else if (request.readyState === 4) {
//                 reject("Something  Won't work as expected")
//             }
//         })

//         request.open('GET', resource)
//         request.send();


//     });



// }
// getPosts("https://jsonplaceholder.typicode.com/posts")


// getPosts("https://jsonplaceholder.typicode.com/posts")
//     .then((data) => {

//         console.log(data)
//         return getPosts('https://jsonplaceholder.typicode.com/comments')
//     }).then(data => {

//         console.log(data)
//         return getPosts('https://jsonplaceholder.typicode.com/albumss')

//     }).then(data => console.log(data))


//     .catch((err) => console.log(err))


// catch(err => console.log(err));

// fetch('https://jsonplaceholder.typicode.com/comments')

//     .then(response => {

//         return response.json();
//     }).then((data) => {
//         console.log(data)

//     }).catch((err) => console.log(err))



// const getData = async () => {



//     const request = await fetch('https://jsonplaceholder.typicode.com/posts')

//     // console.log(request)

//     // let response = await request.json();

//     // return response;
// }
// // getData().then((data) => console.log(data)).catch((err) => console.log(err));
// console.log(getData());

