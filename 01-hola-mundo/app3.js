
console.log('Inicio'); // 1

setTimeout( () => {
    console.log("primer Timeout") // 5
}, 3000 );


setTimeout( () => {
    console.log("segundo") // 2
}, 0 );


setTimeout( () => {
    console.log("tercero") // 3
}, 0 );


console.log("fin") // 4 :: 2