const Database = require('./db')
const createProffy = require('./createProffy')

Database.then((db) =>{
    //inserir dados
    proffyValue = {
        name: "Priscila CS",
        avatar: "https://avatars0.githubusercontent.com/u/39917483?s=460&u=49c927428406cca3147a5aa57eeaebfa4cf6803c&v=4",
        whatsapp: "889587458", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",         
    }

    classValue = {
        subject: "Matemática",
        cost: "20", 
        //O proffy_id virá pelo banco de dados
    }

    classScheduleValue = [
        //O classSchedule virá pelo banco de dados
        {
            weekday:1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday:0,
            time_from: 720,
            time_to: 1220
        }
    ]
    //createProffy(db, {proffyValue, classValue, classScheduleValue})

    //consultar dados inseridos
})