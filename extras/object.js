// differnce between let and var
        // let is block scope and var is function scope
        // var can be redeclared and updated but let can only be updated not redeclared
        let student={
            name:"abc",
            roll:345,
            cgpa:9.7,
            isPass:true
        };
        console.log(student);
        console.log(student.name);  // accessing the value of name property
        student.name="xyz";  // updating the value of name property
        console.log(student.name);

// types of scopes
// global scope
// local scope
// lexical scope
// nested scope