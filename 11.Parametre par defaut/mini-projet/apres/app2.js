const nom = document.querySelector('#nom');
const prenom = document.querySelector('#prenom');
const age = document.querySelector('#age');
const pays = document.querySelector('#pays');
const form = document.querySelector('#employeeForm');

function Employe({
  nom,
  prenom,
  age,
  pays,
  id = Math.floor(Math.random() * new Date()),
}) {
  this.nom = nom;
  this.prenom = prenom;
  this.age = age;
  this.pays = pays;
  this.id = id;
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const employee = new Employe({
    pays: pays.value,
    nom: nom.value,
    age: parseInt(age.value),
    prenom: prenom.value,
  });
  console.log(employee);
});
