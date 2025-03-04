// maps

const products = [ 
    { name : 'banan' , prix : 15 },
    { name : 'mongue', prix : 35 }, 
    { name : "orange", prix : 10 },
] 

const name = products.map(products => products.name);
// console.log(changeProducts()) ;
console.log(name) ;

const prix = products.map(products => products.prix);
// console.log(changeProducts()) ;
console.log(prix) ;
