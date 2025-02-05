// JavaScript Document

$(function($){
 
    // No id #enviar assim que clicar executa a função
    $('#enviar').click(function(){
 
    /* veja que eu criei variáveis para guardar os item
     * e só precisei usar a função val() para
     * retornar o valor dos campo para a várivel
     */
 
        var nome = $('#nome').val();
        var idade = $('#idade').val();
 
    // só parar testar coloco as variáveis em um alert, só para verificarmos
        alert(nome + ' ' + idade);
    });
});