// Funciones para el formulario
var num1,num2,operacion,resultado;

num1=prompt('Introduce el Primer Numero');
num2=prompt('Introduce el segundo Numero');

if(!isNaN(num1) && !isNaN(num2)){

		operacion=prompt('Que operacion Quieres Realizar');
		if(operacion=='suma'){
			resultado=parseInt(num1)+parseInt(num2);
			alert('el resultado es '+resultado);
			}else if(operacion=='resta'){
				resultado=parseInt(num1)+parseInt(num2);
				alert('el resultado es: '+resultado);	
				}else if(operacion=='multiplicacion' || operacion=='multiplicaciòn'){ 
					resultado=parseInt(num1)+parseInt(num2);
					alert('el resultado es: '+resultado);
					}else if(operacion=='division' || operacion=='división'){
						resultado=parseInt(num1)+parseInt(num2);
						alert('el resultado es: '+resultado);
					}
		else{
			alert('no Conocer esa operacion');
			}
}
else{
		//alert('no se pueden operar los nuemros');
		if(typeof(num1)=="string" || typeof(num2)=="string"){
			alert('Has Introducido valores Incorrectos!!!');
		}else{
			alert('operacion no valida!!');
		}
}