const estudiantes = [
  {
    _id: "123128394",
    firstName: "Luis",
    lastName: "Avila",
    height: 1.70
  },
  {
    _id: "12984182",
    firstName: "Alejandro",
    lastName: "Vertel",
    height: 1.50
  },
  {
    _id: "127439129",
    firstName: "David",
    lastName: "Ocampo",
    height: 1.65
  },
];


function ordenar(obj, param){
    return obj.map( (x) => x[param]).sort();
}

console.log(ordenar(estudiantes, "height"));
