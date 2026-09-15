const fs = require("fs"); 
fs.writeFile("student.txt","Name : john     Roll No : 123   Branch : CSE    semester : 3",(err)=>{
    if (err) throw err
    else
    {
        console.log("File successfully created")
    }
});
// read
fs.readFile("student.txt","utf-8",(err,data)=>{
    if (err) throw err
    else
    {
        console.log("File content is: ");
        console.log(data);
    }
});
//update
fs.appendFile("student.txt","   Subject : FSD   marks : 95   Attendence : 90",(err)=>{
    if (err) throw err
    else
    {
        console.log("File updated successfully");
    }
});

// read again
fs.readFile("student.txt","utf-8",(err,data)=>{
    if (err) throw err
    else
    {
        console.log("File content is: ");
        console.log(data);
    }
});
// 
console.log("successfully done");