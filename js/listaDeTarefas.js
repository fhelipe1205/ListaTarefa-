// 1 - Criar objeto de apenas uma tarefa. 

// 2 - Cria uma lista de 5 tarefas

// 3 - Crie uma function para acrescentar uma nova tarefa nessa lista
var familia = {"familia":"alves",
"integrantes":"fhelipe"}

var tarefas = [
    {"nome": "lavar", "status":false},
    {"nome":"passar","status":true},
    {"nome":"limpar a casa","status":true},
    {"nome":"lavar a louça","status":false},
    {"nome": "estudar programaçao","status":true}
]

function acrescentar (){
    var nome = $("#texto").val();
    acrescentarNovo(nome);
}

function acrescentarNovo (nomeTarefa){
    var nova = {
        "nome":nomeTarefa,"status":false
    }
    tarefas.push(nova);
    novaTarefa(nova);
}


function novaTarefa (tarefa){
    console.log(tarefa);
    var html = '<div class = "tarefa">'+
        '<div class = "texto"><label>' + tarefa.nome + '</label></div>'+
        '<div class = "chek"><input type="checkbox"></div>'+
    '</div>'
}