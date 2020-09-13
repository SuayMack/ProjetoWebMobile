const subjects = [  
    "Artes",  
    "Biologia",    
    "Ciências",
    "Educação física",
    "Física",
   "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
] 

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]
//Funcionalidades
//Função para transformar o numero das matérias no nome delas
function getSubject(subjectNumber) {
    //variáevl position é igual ao número que for passado -1,
    //para pegar o valor do index
    const position = +subjectNumber-1
    return subjects[position]
}

//Função converter horas em pages.js
function convertHoursToMinutes(time) {
    const [hour, minutes] = time.split(":")
    return Number((hour * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}
