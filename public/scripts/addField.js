//Procurar o botão,
document.querySelector("#add-time")

//e quando clicar, executar uma ação que será a ação de duplicar os campos,
.addEventListener('click', cloneField)

//para executar uma ação criamos uma função
function cloneField() {
    //Duplicamos os campos //cloneNode se refere a 
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //Limpar os campos, 
    //selecionar todos(ALL) campos para limpar
    const fields = newFieldContainer.querySelectorAll('input')
    //limpar os campos, para não ficar repetindo os campos, 
    //fields[0].value= ""
    //fields[1].value = ""
    //Usamos o forEach(enquanto, ou para cada),
    //Enquanto existir, ou, para cada campo(field), limpar
    //Passamos o parametro(field), para pegarmos o field do momento
    fields.forEach(function(field){
        //pega o field do momento e limpa ele
        field.value = ""
    })
    //Colocar na página, onde?
    //Colocar no schedule-items e colocar um filho
    document.querySelector('#schedule-items').appendChild(newFieldContainer)

}
