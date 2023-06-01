// callback funstions

// function PrintFirst(callback) {


//     setTimeout(() => {

//         console.log('request')

//         callback();


//     }, 3000);
// }

// function PrintSecond() {

//     console.log("Second")
// }



// PrintFirst(PrintSecond);




// function sumnumbers(num1, num2, callback) {

//     let summedNumer;

//     setTimeout(() => {
//         summedNumer = num1 + num2
//         callback(summedNumer);
//     }, 1000);

// }





// function printSummedNumbers(value) {

//     console.log(`summed numbers: ${value}`)

// }



// // printSummedNumbers(sumnumbers(20, 30));
// sumnumbers(20, 50, printSummedNumbers);






// const studentInformation = ({ id, name, age, dob }) => {


//     const today = new Date();

//     let year = today.getFullYear();
//     console.log(year)



//     const studentInfo = {
//         "id": id,
//         name: name,
//         age: function () {

//             return year - age;

//         },

//         dob: function () {


//             return year - dob;

//         },

//     }


//     return `${studentInfo.id}, ${studentInfo.name}, ${studentInfo.age()}, ${studentInfo.dob()}`




// }

// const std_info = studentInformation({ name: "ahmed", id: 1, age: 2000, dob: 23 })
// console.log(std_info);



// const counter = () => {

//     setTimeout(() => {

//         console.log("Fist")

//         setTimeout(() => {

//             console.log("Second")

//             setTimeout(() => {

//                 console.log("Third")

//             }, 3000)

//         }, 2000)

//     }, 1000)
// }

// counter();





function print(value) {

    console.log(value);

}

// print.hi = "test";

// console.dir(print)
// const callback = print;
// callback("Hello")

// function useCallback(callback) {

//     callback("Hello");
// }



// useCallback(print);
// useCallback(print);

// print("Hi");



// function personInfo(person) {
//     console.log(person);
// }

// const person = {
//     id: 1,
//     name: "John",
// }

// personInfo(person.name);


// function useCallback(callback) {

//     callback("Hellso");
// }



// useCallback((value) => { console.log(value) })




