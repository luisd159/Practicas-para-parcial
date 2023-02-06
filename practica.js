const estudiantes = [
  {
    _id: "123128394",
    firstName: "Luis",
    lastName: "Avila",
    height: 1.7,
    courses: [
      {
        name: "Inglés",
        grade: 4.0,
      },
      {
        name: "Matemáticas",
        grade: 4.2,
      },
      {
        name: "Castellano",
        grade: 3.2,
      },
      {
        name: "Química",
        grade: 5.0,
      },
      {
        name: "Sociales",
        grade: 3.0,
      },
    ],
  },
  {
    _id: "12984182",
    firstName: "Alejandro",
    lastName: "Vertel",
    height: 1.5,
    courses: [
      {
        name: "Inglés",
        grade: 2.5,
      },
      {
        name: "Matemáticas",
        grade: 4.0,
      },
      {
        name: "Castellano",
        grade: 4.7,
      },
      {
        name: "Química",
        grade: 3.2,
      },
      {
        name: "Sociales",
        grade: 2.5,
      },
    ],
  },
  {
    _id: "127439129",
    firstName: "David",
    lastName: "Ocampo",
    height: 1.65,
    courses: [
      {
        name: "Inglés",
        grade: 3.5,
      },
      {
        name: "Matemáticas",
        grade: 3.7,
      },
      {
        name: "Castellano",
        grade: 2.7,
      },
      {
        name: "Química",
        grade: 1.0,
      },
      {
        name: "Sociales",
        grade: 1.5,
      },
    ],
  },
];

function condicional(lista) {
  newlist = [];
  estudiantes.map(function (x) {
    let prom = x.courses.reduce((acum, a) => acum + a.grade, 0) / x.courses.length;
    if (prom < 3.3) {
        newlist.push(x);
    }
  });
  return newlist;
}
console.log(condicional(estudiantes));

function nombres(lista) {
  return lista.map((x) => x.firstName + " " + x.lastName);
}
console.log(nombres(estudiantes));

function id(lista) {
  return lista.map((x) => x._id).sort();
}
console.log(id(estudiantes));
