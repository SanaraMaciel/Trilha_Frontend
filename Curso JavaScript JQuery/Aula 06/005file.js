// JavaScript Document
var i = 1;
var valor = 0;
var mensagem = '';
var sorteado ='';

	$(document).ready(function(){

        $('#sorteio').click(function(){
			//remove() retira o elemento selecionado
			$('#resultado h4').remove();
			//alert('voce me clicou');
			
			valor = Math.floor(Math.random()*10);
			mensagem = '<h4>'+valor+'</h4>';
			sorteado = '<li>Sorteio #'+i+' = '+valor+ '</li>';
			//.append()anexa ao elemento selecionado um codigo (normalmente)
			$('#resultado').append(mensagem);
			$('#resultados ul').append(sorteado);
			i++;
			});
			
    });//$(document).ready()
