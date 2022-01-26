// trabajar con innerHTML
const container = document.getElementById("container");
container.innerHTML = "Soy un Div";

const titlesArray = document.getElementsByClassName("title")

titlesArray[0].innerHTML= " Soy un titulo";

// Trabajar con querysSelector y nodos
const subtitle = document.querySelector("#subtitle");//.subtitle
const nodeText = document.createTextNode("Hola Soy un subtitulo");
subtitle.appendChild(nodeText);

//Creacion de elementos html por nodos
let text = "Soy un h3"
const newContainer = document.createElement("span");
const h3 = document.createElement("h3");
const content = document.createTextNode(text);
h3.appendChild(content);
newContainer.appendChild(h3);
document.body.appendChild(newContainer);

// const parragraph = document.querySelector("p");
// parragraph.appendChild( document.createElement("img"))

//agregar estilos por medio de nodos
const title3NodeText = document.createTextNode("Soy un titulo H3");
const title3 = document.querySelector("#title3");
title3.appendChild( title3NodeText );
title3.style.color = "red";

// Terminar 