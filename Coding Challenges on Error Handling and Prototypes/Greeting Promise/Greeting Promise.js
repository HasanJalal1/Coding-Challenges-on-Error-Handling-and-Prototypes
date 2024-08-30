// function greet(name) {
//     return new Promise((resolve, reject) => {
//         if (typeof name === 'string' && name.trim() !== '') {
//             const greeting = `Hello, ${name}!`;
//             resolve(greeting);
//         } else {
//             reject('Invalid name provided');
//         }
//     });
// }

// Example usage
greet('Mithun')
    .then(message => console.log(message))  // "Hello, Mithun!"
    .catch(error => console.error(error));

function greet(name){
    return new Promise((resolve) => {
        const greeting = `Hello, ${name}!`;
        resolve(greeting);
    });
}

greet("Mithun").then((message)=> console.log(message));