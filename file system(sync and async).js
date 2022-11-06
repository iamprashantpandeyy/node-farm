const { Console } = require('console');
const fs= require('fs');
// Blocking synchronous way
const textIn = fs.readFileSync('./txt/input.txt' , 'utf-8');
console.log(textIn);

const textOut = `This is all we know about: ${textIn}.\n Created  on ${Date.now()}`;
fs.writeFileSync('./txt/output.txt' , textOut);

console.log('File written!');

const newText = fs.readFileSync('./txt/output.txt' , 'utf-8');
console.log(newText);

// non - Blocking asynchronous way

fs.readFile('./txt/start.txt' , 'utf-8' , (err,data1)=>{
    fs.readFile(`./txt/${data1}.txt` , 'utf-8', (err,data2)=>{
        console.log(data2);

        fs.readFile('./txt/append.txt', 'utf-8', (err,data3)=>{
            console.log(data3);

            fs.writeFile('./txt/final.txt', `1.${data2} \n2.${data3}`, 'utf-8', err=>{
                fs.readFile('./txt/final.txt','utf-8', (err,data4)=>{
                    console.log(data4);
                })
            })

        })

    })
})
console.log('Have patience, will read...')
