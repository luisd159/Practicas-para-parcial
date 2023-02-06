function cuadrado(lista){
    return lista.map((x) => x*x);
}
console.log(cuadrado([1, 2, 3, 4, 5]));

function oddSum(lista){
    return lista.filter(num => num%2 == 1).reduce((acum , a)=>acum +a ,0);

}
console.log(oddSum([1, 2, 3, 4, 5]));

function factorial(numero){
    let factorial = 1;
    for (let index = 1; index <= numero ; index++) {
        factorial = factorial * index;
    }
    return factorial;
}
console.log(factorial(4));

function promedio(lista){
    const prom = lista.reduce((acum, a) => acum + a, 0) / lista.length ;
    return prom;
}
console.log(promedio([1, 2, 3, 4, 5]))

function voltear(palabra){
    let newpal = "";
    for (let index = palabra.length -1; index >= 0; index--) {
        newpal = newpal+ palabra[index];
    }
    return newpal;
}

function palindroma(palabra){
    if(voltear(palabra)==palabra){
        return true;
    }else{
        return false;
    }
}
console.log(palindroma("aerea"));

function palabrainvert(txt){
    return txt.split(" ").map( (x) =>  voltear(x)).join(" ");
}
console.log(palabrainvert("esto es un ejemplo"));