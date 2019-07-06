var calc_imc = document.getElementById('calc_imc');
var personHeight = document.getElementById('personHeight');
var personKg = document.getElementById('personKg');

calc_imc.addEventListener('submit', function(e){
	var IMC = personKg.value / (personHeight.value * personHeight.value);
	var RoundIMC = IMC.toFixed(2);

	if (IMC < 17.00){
		document.getElementById('loadingCalc').innerHTML = 'Resultados';		
		document.getElementById('health').innerHTML = 'Muito abaixo do peso';
		document.getElementById('IMC').innerHTML = 'Indice de massa corporal = '+RoundIMC;
			setTimeout(function(){ 
				document.getElementById('loadingCalc').innerHTML = '';
				document.getElementById('health').innerHTML = 'Mais um calculo? ';		
				document.getElementById('IMC').innerHTML = 'Digite os dados';				
			}, 5000);
	}else if(IMC >= 17.00 && IMC <= 18.49) {
		document.getElementById('loadingCalc').innerHTML = 'Resultados';		
		document.getElementById('health').innerHTML = 'Abaixo do peso';
		document.getElementById('IMC').innerHTML = 'Indice de massa corporal = '+RoundIMC;
			setTimeout(function(){ 
				document.getElementById('loadingCalc').innerHTML = '';
				document.getElementById('health').innerHTML = 'Mais um calculo? ';		
				document.getElementById('IMC').innerHTML = 'Digite os dados';				
			}, 5000);
	}else if(IMC >= 18.50 && IMC <= 24.99){
		document.getElementById('loadingCalc').innerHTML = 'Resultados';		
		document.getElementById('health').innerHTML = 'Peso normal';
		document.getElementById('IMC').innerHTML = 'Indice de massa corporal = '+RoundIMC;
			setTimeout(function(){ 
				document.getElementById('loadingCalc').innerHTML = '';
				document.getElementById('health').innerHTML = 'Mais um calculo? ';		
				document.getElementById('IMC').innerHTML = 'Digite os dados';				
			}, 5000);
	}else if(IMC >= 25.00 && IMC <= 29.99){
		document.getElementById('loadingCalc').innerHTML = 'Resultados';		
		document.getElementById('health').innerHTML = 'Acima do peso';
		document.getElementById('IMC').innerHTML = 'Indice de massa corporal = '+RoundIMC;
			setTimeout(function(){ 
				document.getElementById('loadingCalc').innerHTML = '';
				document.getElementById('health').innerHTML = 'Mais um calculo? ';		
				document.getElementById('IMC').innerHTML = 'Digite os dados';				
			}, 5000);
	}else if(IMC >= 30.00 && IMC <= 34.99){
		document.getElementById('loadingCalc').innerHTML = 'Resultados';		
		document.getElementById('health').innerHTML = 'Obesidade I';
		document.getElementById('IMC').innerHTML = 'Indice de massa corporal = '+RoundIMC;
			setTimeout(function(){ 
				document.getElementById('loadingCalc').innerHTML = '';
				document.getElementById('health').innerHTML = 'Mais um calculo? ';		
				document.getElementById('IMC').innerHTML = 'Digite os dados';				
			}, 5000);
	}else if(IMC >= 35.00 && IMC <= 39.99){
		document.getElementById('loadingCalc').innerHTML = 'Resultados';		
		document.getElementById('health').innerHTML = 'Obesidade II (severa)';
		document.getElementById('IMC').innerHTML = 'Indice de massa corporal = '+RoundIMC;
			setTimeout(function(){ 
				document.getElementById('loadingCalc').innerHTML = '';
				document.getElementById('health').innerHTML = 'Mais um calculo? ';		
				document.getElementById('IMC').innerHTML = 'Digite os dados';				
			}, 5000);
	}else if(IMC > 40){
		document.getElementById('loadingCalc').innerHTML = 'Resultados';		
		document.getElementById('health').innerHTML = 'Obesidade III (mórbida)';
		document.getElementById('IMC').innerHTML = 'Indice de massa corporal = '+RoundIMC;
			setTimeout(function(){ 
				document.getElementById('loadingCalc').innerHTML = '';
				document.getElementById('health').innerHTML = 'Mais um calculo? ';		
				document.getElementById('IMC').innerHTML = 'Digite os dados';				
			}, 5000);
	}else{
		document.getElementById('loadingCalc').innerHTML = '';		
		document.getElementById('health').innerHTML = 'Digite apenas números';		
		document.getElementById('IMC').innerHTML = 'no formato apresentado';		
			setTimeout(function(){
				document.getElementById('loadingCalc').innerHTML = 'Digite novamente';		
				document.getElementById('health').innerHTML = '';		
				document.getElementById('IMC').innerHTML = '';		
			}, 5000);
	}


e.preventDefault();
});