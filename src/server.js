//Dados
const proffys = [
    {name: "Priscila CS",
    avatar: "https://avatars0.githubusercontent.com/u/39917483?s=460&u=49c927428406cca3147a5aa57eeaebfa4cf6803c&v=4",
    whatsapp: "889587458", 
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject: "Matemática",
    cost: "20", 
    weekday: [0], 
    time_from: [720], 
    time_to: [1220]
    },
    {name: "Diego Fernandes",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp: "889587458", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    subject: "Química",
    cost: "20,00", 
    weekday: [0], 
    time_from: [720], 
    time_to: [1220]
    }
]

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


function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    //pegar as informações do filtrar
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    //se tiver dados,
    const isNotEmpty = Object.keys(data).length != 0
    //se tiver dados,
    if (isNotEmpty) {
        
        data.subject = getSubject(data.subject)

        //adicionar dados a lista de proffys
        proffys.push(data)

        return res.redirect("/study")
    }

    //se não, não adicionar
    return res.render("give-classes.html", { subjects, weekdays })
}

//Servidor
const express = require('express')
const server = express()

//configurar nunjucks (template engine)
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//Inicio e configuração do servidor
server
//configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start do servidor
.listen(5000)
