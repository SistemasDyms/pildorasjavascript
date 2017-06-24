// Funciones para el formulario
var num1,num2,operacion;

num1=prompt('Introduce el Primer Numero');
num1=parseInt(num1);
num2=prompt('Introduce el segundo Numero');
num2=parseInt(num2);
operacion=prompt('Que operacion Quieres Realizar');

if(operacion=='suma'){
	var resultado=num1+num2;
	alert('el resultado es '+resultado);
	}else if(operacion=='resta'){
		var resultado=num1-num2;
		alert('el resultado es: '+resultado);	
		}else if(operacion=='multiplicacion' !! operacion=='multiplicaciòn'){//USAR CON O SIN  ACENTO USANDO EL OPERADOR O
			var resultado=num1*num2;
			alert('el resultado es: '+resultado);
			}else if(operacion=='division' !! operacion=='división'){
				var resultado=num1/num2;
				alert('el resultado es: '+resultado);
			}


//Continua el video 13---------->