// https://evdokimovm.github.io/javascript/nodejs/2016/11/11/write-data-to-local-json-file-using-nodejs.html

const fs = require('fs')

// how to push json to json file


function read (name, age){
    // læser om filen eksisterer
    fs.readFile('./users.json', 'utf-8', function (err, data){
        if(err)throw err;

        var arrayOfObjects = JSON.parse(data)
        arrayOfObjects.users.push({
            name : `${name}`,
            age : `${age}`
        })    
        
        console.log(arrayOfObjects)
        // skriver nyt json info
        fs.writeFile('./users.json', JSON.stringify(arrayOfObjects), 'utf-8', function (err){
            if (err) throw err;
            console.log('Indsat!')
        })
    })
}
// output fra users

read("andres","25");

