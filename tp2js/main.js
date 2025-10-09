// Exercice 1 - Variables et types de données
let age = 25;
let name = "Alice";
let isStudent = true;

console.log("Âge :", age);
console.log("Nom :", name);
console.log("Est étudiant :", isStudent);

// Exercice 2 - Opérateurs
let x = 5, y = 10;

console.log("Addition :", x + y);
console.log("Soustraction :", x - y);
console.log("Multiplication :", x * y);
console.log("Division :", x / y);

console.log("x == y :", x == y);
console.log("x === y :", x === y);
console.log("x > y :", x > y);
console.log("x < y :", x < y);
console.log("x >= y :", x >= y);

// Exercice 3 - Structures de contrôle
if (age >= 18) {
  console.log("Majeur");
} else {
  console.log("Mineur");
}

console.log("Boucle for (1 à 10) :");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let fruits = ["pomme", "banane", "orange"];
let i = 0;
console.log("Boucle while (fruits) :");
while (i < fruits.length) {
  console.log(fruits[i]);
  i++;
}

// Exercice 4 - Fonctions
function addition(a, b) {
  return a + b;
}

console.log("Résultat addition :", addition(3, 7));

let multiply = (a, b) => a * b;
console.log("Résultat multiply :", multiply(4, 5));

let div = document.querySelector("div");
div.textContent = "Nouveau text.";

console.log("Div sélectionné :", div);

let p = document.createElement("p");
div.appendChild(p);

let button2 = document.createElement("button");
button2.textContent = "Cliquez-moi fr";
div.appendChild(button2);

button2.addEventListener("click", () => {
  p.textContent = "Bouton cliqué!";
  div.style.backgroundColor = "lightblue";
  div.style.padding = "10px";
  div.style.borderRadius = "5px";
  div.style.textAlign = "center";
  div.style.marginBottom = "20px";
});

let button = document.querySelector("#monBouton");
 button.addEventListener("click", function() {
 document.querySelector("#maDiv").innerText = "Le texte a changé !";
});