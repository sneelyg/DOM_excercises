//alert here
window.onload=()=>{


var alert  =(text) =>{
    var alerta = document.createElement ('h1');
    alerta.innerHTML=text;
    alerta.style.color = 'white';
return alerta;
 }


document.body.appendChild(alert("Hello Worldddd"));
}
