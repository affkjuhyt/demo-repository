import { exec } from "child_process";

// const ls = spawn('ls', ['-l']);

// ls.stdout.on('data', (data) => {
//     console.log('List is: ', data);
// })

// ls.on('close', (code) => {
//     if (code === 0) {
//         console.log('Success');
//     } else {
//         console.log('Error')
//     }
// });

exec('npm run start:dev', (error, stdout, stderr) => {
    if (error) {
        console.log('Err')
    }
    console.log('Success');
})

// A

// B

// A sent message B

// A one process ? 
// A -> B -> C

// Web scale 1TB -> Database A -> B

// Nodejs de thuc hien dieu nay
// 1000 request/s -> Server A -> -> giam thoi gian

// Process -> Consume data -> DB
// Server A 

// User -> Server A

// Select * from A

// insert into B

// Threading

// Async vs Sync

// Async -> multi thread

// Thread A -------------                  ---------------------

// Thread B             ------------------

// Share common data
