const calculateGpa = (student) => {


    let students = [
        {
            name: "John Doe",
            subjects: ["Math", "English", "Science"],
            grades: [3, 4, 2],
            gpa: 0

        },
        {
            name: "Jane Smith",
            subjects: ["Math", "English", "Art"],
            grades: [4, 4, 4],
            gpa: 0

        },
        {
            name: "Billy Bob",
            subjects: ["English", "Art", "History"],
            grades: [2, 1, 3],
            gpa: 0

        },
        {
            name: "Alice Johnson",
            subjects: ["Math", "History", "Science"],
            grades: [4, 3, 2],
            gpa: 0


        },
        {
            name: "Charlie Brown",
            subjects: ["Math", "Art", "English"],
            grades: [2, 4, 4],
            gpa: 0

        },
        {
            name: "Emily Davis",
            subjects: ["Science", "Math", "Art"],
            grades: [3, 3, 3],
            gpa: 0

        },
        {
            name: "George Thompson",
            subjects: ["English", "History", "Science"],
            grades: [4, 4, 2],
            gpa: 0

        },
        {
            name: "Hannah Wilson",
            subjects: ["History", "Art", "Math"],
            grades: [2, 3, 4],
            gpa: 0

        },
        {
            name: "Ivan Clark",
            subjects: ["Math", "Science", "History"],
            grades: [3, 4, 3],
            gpa: 0

        },
        {
            name: "Jennifer Lopez",
            subjects: ["English", "Art", "Science"],
            grades: [4, 4, 3],
            gpa: 0

        }
    ];

    let total_Subjects = 0;
    const stddata = students.filter((std) => std.name == student);
    // console.log(stddata)
    stddata.forEach((sub) => {
        total_Subjects += sub.subjects.length;
    })

    let sum = 0;

    // console.log(stddata)
    stddata.forEach((g) => {


        g.grades.forEach(s => {

            sum += s
        })
    })
    console.log(sum)

    gpa = sum / total_Subjects;

    // console.log(gpa)



    stddata.map((std) => {
        std.gpa = gpa
    })

    // students.filter((std) => {

    //     if (std.name == student) {

    //         std.gpa = gpa
    //     }
    // })



    return students;





}

console.log(calculateGpa("Jane Smith"));
// console.log(calculateGpa("Jennifer Lopez"));
// console.log(calculateGpa("Ivan Clark"));
