//Declaramos variables
var operandoa;
var operandob;
var operacion;
function init(){
  //variables
  var captura = document.getElementById('captura');
  var resultado = document.getElementById('resultado');
  var reset = document.getElementById('reset');
}
//Eventos de click basico para la captura de números
  uno.onclick = function(e){
	  if (resultado.textContent != '') {
        resetear();
        captura.textContent = captura.textContent  + "1";
     } else
        captura.textContent = captura.textContent  + "1";	    
  }
  dos.onclick = function(e){
	  if (resultado.textContent != '') {
        resetear();
        captura.textContent = captura.textContent  + "2";
     } else
        captura.textContent = captura.textContent  + "2";	    
  }
  tres.onclick = function(e){
	  if (resultado.textContent != '') {
        resetear();
        captura.textContent = captura.textContent  + "3";
     } else
        captura.textContent = captura.textContent  + "3";	    
  }
  cuatro.onclick = function(e){
	  if (resultado.textContent != '') {
        resetear();
        captura.textContent = captura.textContent  + "4";
     } else
        captura.textContent = captura.textContent  + "4";	    
  }
  cinco.onclick = function(e){
	  if (resultado.textContent != '') {
        resetear();
        captura.textContent = captura.textContent  + "5";
     } else
        captura.textContent = captura.textContent  + "5";	    
  }
  seis.onclick = function(e){
	  if (resultado.textContent != '') {
        resetear();
        captura.textContent = captura.textContent  + "6";
     } else
        captura.textContent = captura.textContent  + "6";	    
  }
  siete.onclick = function(e){
	  if (resultado.textContent != '') {
        resetear();
        captura.textContent = captura.textContent  + "7";
     } else
        captura.textContent = captura.textContent  + "7";	    
  }
  ocho.onclick = function(e){
	  if (resultado.textContent != '') {
        resetear();
        captura.textContent = captura.textContent  + "8";
     } else
        captura.textContent = captura.textContent  + "8";	    
  }
  nueve.onclick = function(e){
	  if (resultado.textContent != '') {
        resetear();
        captura.textContent = captura.textContent  + "9";
     } else
        captura.textContent = captura.textContent  + "9";	    
  }
  cero.onclick = function(e){
	  if (resultado.textContent != '') {
        resetear();
        captura.textContent = captura.textContent  + "0";
     } else
        captura.textContent = captura.textContent  + "0";	    
  }
 

  reset.onclick = function(e){
      resetear();
  }
  
  //Eventos de click basico para el calculo de funciones
 
  fnc1.onclick = function(e){
 	  if (captura.textContent != '') {
        captura.textContent = captura.textContent;
	    resultado.textContent = captura.textContent + "/s";
      } else {		
        captura.textContent = '';
        resultado.textContent = ''; 
	  }		
   }
  fnc2.onclick = function(e){ 
 	  if (captura.textContent != '') {
        captura.textContent = captura.textContent;
	    resultado.textContent = captura.textContent + "!/(s^" + captura.textContent + "+1)";
      } else {		
        captura.textContent = '';
        resultado.textContent = ''; 
	  }		
   }
  fnc3.onclick = function(e){ 
  	  if (captura.textContent != '') {
        captura.textContent = captura.textContent;
	    resultado.textContent = "1/(" + captura.textContent + "-a)";
      } else {		
        captura.textContent = '';
        resultado.textContent = ''; 
	  }		
   }
  fnc4.onclick = function(e){ 
 	  if (captura.textContent != '') {
        captura.textContent = captura.textContent;
	    resultado.textContent = captura.textContent + "/(s^2 +" + captura.textContent + "^2)";
      } else {		
        captura.textContent = '';
        resultado.textContent = ''; 
	  }		
   }
  fnc5.onclick = function(e){ 
 	  if (captura.textContent != '') {
        captura.textContent = captura.textContent;
	    resultado.textContent = "s/(s^2+" + captura.textContent +"^2)";
      } else {		
        captura.textContent = '';
        resultado.textContent = ''; 
	  }		
   }
  fnc6.onclick = function(e){ 
 	  if (captura.textContent != '') {
        captura.textContent = captura.textContent;
	    resultado.textContent = captura.textContent + "!/(s-a)^" + captura.textContent + "+1";
      } else {		
        captura.textContent = '';
        resultado.textContent = ''; 
	  }		
   }
  fnc7.onclick = function(e){ 
 	  if (captura.textContent != '') {
        captura.textContent = captura.textContent;
	    resultado.textContent = "b/((s-" + captura.textContent + ")^2+b^2)";
      } else {		
        captura.textContent = '';
        resultado.textContent = ''; 
	  }		
   }
  fnc8.onclick = function(e){ 
 	  if (captura.textContent != '') {
        captura.textContent = captura.textContent;
        resultado.textContent = "(s-" + captura.textContent + ")/(s-" + captura.textContent + ")^2+b^2";
      } else {		
        captura.textContent = '';
        resultado.textContent = ''; 
	  }		
   }

  function limpiar(){
  captura.textContent = "";
  resultado.textContent = "";
  }
  
  
function resetear(){
  captura.textContent = "";
  resultado.textContent = "";
}