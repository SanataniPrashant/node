
const fs = require("fs");


// fs.appendFile("ram.pdf","We are the fghjk",(err)=>{
//        if(err) throw err;
//        console.log("File created");
// })

fs.open("raja.pdf","w",(err,file)=>{
    if(err) throw err;
    console.log("File created");
})

// w for write 
// r for read

// fs.writeFile("rest.pdf","iam reat",(err,file)=>{
//     if(err) throw err;
//     console.log("File created");
// })
// it replaces the existing file if created with same name


// fs.unlink("sanam.docx",(err)=>{
//     if(err) throw err;
//     console.log("File deleated");
// })


// fs.rename("ram.pdf","rama.pdf",(err)=>{
//     if(err) throw err;
//     console.log("File renamed");
// })