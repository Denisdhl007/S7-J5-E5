// // // # Exercice d'observation :
// // // >*En utilisant querySelector et querySelectorAll, prend le temps d'observer les résultats*

// // // >*Cherche des methodes pour résoudre les énoncés suivants :*

// // // ### 1. Stock tous les h2 dans une variable du nom de 'elements', attention voici les contraintes :
// // // - Tu dois utiliser un querySelectorAll
// // // - Tu dois cibler la div et plus précicément son id "liste-competences"

// var elements = document.querySelectorAll('#liste-competences h2');
// for (var i = 0; i < elements.length; i++) {
//   console.log(elements[i]);
// }

// // // ### 2. Insert dans les bons H2 les pourcentages de ton objet, voici les contraintes :
// // // - Utilise une boucle "for in" pour parcourir ton objet

// // Test 1
// let h2Element = document.querySelector("#liste-competences h2");
// h2Element.innerHTML += ": Mon niveau de compétence est de 70%";


// // Test 2
// let competences = {
//     HTML: '71%',
//     CSS: '95%',
//     JS : '50%',
//     React: '18%',
//     Laravel: '100%'
//   };

//   let h2 = document.querySelectorAll("#competences h2");
//   let i = 0;
//   for (let comp in competences) {
//     h2[i].innerHTML += " " + competences[comp];
//     i++;
//   }

/**/

// // // ### 3. Change le style des h2 selons certaines conditions :
// // // - Si le pourcentage est inférieur à 50 alors le h2 a un background rouge
// // // - Si le pourcentage est supérieur à 50 alors le background est vert et l'écriture blanche
// // // - Si //     //  égale à 50 alors il n'y a pas de background
// // // - Si //     // est égale à 100 alors le bakcground est gold et l'écriture est noir


const h2s = document.querySelectorAll("#liste-competences h2");
const pourcentages = {
  HTML: '71%',
  CSS: '95%',
  JS : '50%',
  React: '18%',
  Laravel: '100%'
};

for (let h2 of h2s) {
  let pourcentage = h2.textContent.slice(-1);
  
  if (pourcentage < 50) {
    h2.style.backgroundColor = "red";
  } else if (pourcentage > 50) {
    h2.style.backgroundColor = "green";
    h2.style.color = "white";
  } else if (pourcentage == 50) {
    h2.style.backgroundColor = "transparent";
  } else if (pourcentage == 100) {
    h2.style.backgroundColor = "gold";
    h2.style.color = "black";
  }
}


// let competences = {
//     HTML: '71%',
//     CSS: '95%',
//     JS : '50%',
//     React: '18%',
//     Laravel: '100%'
// };

// let elements = document.querySelector("div#liste-competences").querySelectorAll("h2");
// console.log(elements);

// elements.forEach(element =>{
//     for(const property in competences){
//         if(element.innerText == property){
//             element.innerText += ` : ${competences[property]}`;

//             switch(true){
//                 case competences[property] == '100%':
//                     element.style.background = "gold";
//                     element.style.color = "black";
//                     break;

//                 case competences[property] < "50%":
//                     element.style.background = "red";
//                     break;
//                 case competences[property] > '50%':
//                     element.style.background = "green";
//                     element.style.color = "white";
//                     break;

//                  case competences[property] == '50%':
//                     element.style.background = "none";
//                     break;

//             }
//         }
//     }
// })
