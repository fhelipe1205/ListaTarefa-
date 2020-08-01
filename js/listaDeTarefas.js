// 1 - Criar objeto de apenas uma tarefa. 

// 2 - Cria uma lista de 5 tarefas

// 3 - Crie uma function para acrescentar uma nova tarefa nessa lista
var familia = {"familia":"alves",
"integrantes":"fhelipe"}

var tarefa = {
    "nome": "estudar",
    "status": false
} 
var tarefas = [
    {"nome": "lavar", "status":false},
    {"nome":"passar","status":true},
    {"nome":"limpar a casa","status":true},
    {"nome":"lavar a louça","status":false},
    {"nome": "estudar programaçao","status":true}
]
function acrescentar (nomeTarefa){
    var novaTarefa = {
        "nome":nomeTarefa,"status":false
    }
    tarefas.push(novaTarefa);
}