// maps

const products = [ 
    { name : 'banan' , prix : 15 },
    { name : 'mongue', prix : 35 }, 
    { name : "orange", prix : 10 },
    { name : "ananass", prix : 45},
    { name : "tomate", prix : 8},
    { name : "framboise", prix :45 },
] 

const name = products.map(products => products.name);
// console.log(changeProducts()) ;
console.log(name) ;

const prix = products.map(products => products.prix);
// console.log(changeProducts()) ;
console.log(prix) ;
