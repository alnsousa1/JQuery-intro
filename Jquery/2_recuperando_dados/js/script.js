$(document).ready(function(){
    $('#lista').css('color', 'red');
    $('.element').html('Meu texto via jquery')
    $('a').click(function(){
        alert('Olá Mundo')
    });
});

function pegarvalor(){
var nome = document.querySelector('.nome').value;
var sobrenome = document.querySelector('.sobrenome').value;

alert('Seja bem vindo ' + nome + ' ' + sobrenome);
console.log(nome + sobrenome);
}