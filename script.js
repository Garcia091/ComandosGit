document.getElementById('OrdenManzana').style.display="none";
document.getElementById('OrdenManzana2').style.display="none";
document.getElementById('OrdenCocacola').style.display="none";
document.getElementById('OrdenCocacola2').style.display="none";
document.getElementById('OrdenColombiana').style.display="none";
document.getElementById('OrdenColombiana2').style.display="none";
document.getElementById('OrdenSprite').style.display="none";
document.getElementById('OrdenSprite2').style.display="none";
document.getElementById('OrdenFanta').style.display="none";
document.getElementById('OrdenFanta2').style.display="none";
document.getElementById('OrdenPepsi').style.display="none";
document.getElementById('OrdenPepsi2').style.display="none";

var devuelta;
var pago;
const ValorCompraManzana=2300;
const ValorCompraCocacola=2800;
const ValorCompraColombiana=2500;
const ValorCompraSprite=1500;
const ValorCompraFanta=3000;
const ValorCompraPepsi=2900;


function Manzana(){
    document.getElementById('Contenedor').style.display="none"
    document.getElementById('OrdenManzana').style.display="block"
    document.getElementById('ValorCompraManzana').value= ValorCompraManzana;  
}

function CocaCola(){
    document.getElementById('Contenedor').style.display="none"
    document.getElementById('OrdenCocacola').style.display="block"
    document.getElementById('ValorCompraCocacola').value= ValorCompraCocacola;
}


function Colombiana(){
    document.getElementById('Contenedor').style.display="none"
    document.getElementById('OrdenColombiana').style.display="block"
    document.getElementById('ValorCompraColombiana').value= ValorCompraColombiana;
}


function Sprite(){
    document.getElementById('Contenedor').style.display="none"
    document.getElementById('OrdenSprite').style.display="block"
    document.getElementById('ValorCompraSprite').value= ValorCompraSprite;
}


function Fanta(){
    document.getElementById('Contenedor').style.display="none"
    document.getElementById('OrdenFanta').style.display="block"
    document.getElementById('ValorCompraFanta').value= ValorCompraFanta;
}


function Pepsi(){
    document.getElementById('Contenedor').style.display="none"
    document.getElementById('OrdenPepsi').style.display="block"
    document.getElementById('ValorCompraPepsi').value= ValorCompraPepsi;
}


function calcular1(){
    document.getElementById('OrdenManzana').style.display="none"
    document.getElementById('OrdenManzana2').style.display="block"

    pago=parseInt(document.getElementById('Pago').value);
    devuelta= Devuelta(pago);
    document.getElementById('total').value= devuelta;
}

var Devuelta= function(pago){
    devuelta= pago-ValorCompraManzana;
    return devuelta;
}



function calcular2(){
    document.getElementById('COrdenCocacola').style.display="none"
    document.getElementById('OrdenCocacola2').style.display="block"

    document.getElementById('total').value= devuelta;
}

function calcular3(){
    document.getElementById('OrdenColombiana').style.display="none"
    document.getElementById('OrdenColombiana2').style.display="block"
    document.getElementById('total').value= ValorCompraColombiana;
}

function calcular4(){
    document.getElementById('OrdenSprite').style.display="none"
    document.getElementById('OrdenSprite2').style.display="block"
    document.getElementById('total').value= ValorCompraSprite;
}

function calcular5(){
    document.getElementById('OrdenFanta').style.display="none"
    document.getElementById('OrdenFanta2').style.display="block"
    document.getElementById('total').value= ValorCompraFanta;
}

function calcular6(){
    document.getElementById('OrdenPepsi').style.display="none"
    document.getElementById('OrdenPepsi2').style.display="block"
    document.getElementById('total').value= ValorCompraPepsi;
}
