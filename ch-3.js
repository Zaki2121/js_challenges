let contact = [

    {

        firstName: 'Younis',
        lastName: 'Adan',
        phoneNumber: '09064333333',

    }
]

const addContact = (firstName, lastName, phoneNumber) => {




    let info = { firstName, lastName, phoneNumber }

    contact.push(info);


    // data = contact;

}


// }


const searchContact = (fname, lname) => {


    let data = contact.map((con) => con);



    let phone = 0
    data.forEach((con) => {


        if (con.firstName == fname && con.lastName == lname) {

            phone = con.phoneNumber
        }


    })

    return phone == 0 ? "Not Found" : phone;
}
const deleteContact = (fname, lname) => {
    let contactInfo = contact.findIndex((con) => con.firstName == fname && con.lastName == lname);

    contact.splice(contactInfo, 1);


    return contact;

}

addContact('zaki', "Abdullahi", "0907432605");
addContact('Ali', "Adan", "0907632605");

// console.log(contact);
// console.log(searchContact('zakis', "Abdullahi"));
console.log(searchContact('Ali', "Adan"));
// console.log(searchContact('za', "Abi"));

console.log(deleteContact('zaki', "Abdullahi"));