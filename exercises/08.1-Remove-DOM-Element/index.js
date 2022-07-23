// your code here
// if you check the HTML, you will find that the second LI has the id=secondElement
// you can use that to your advantage as a CSS selector


//var aux = document.querySelector("ul");
//aux.parentNode.removeChild("#secondElement");

let aux2 = document.querySelector("#secondElement");
aux2.parentNode.removeChild(aux2);