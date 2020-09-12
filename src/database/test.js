const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) =>{
    //inserir dados
    proffyValue = {
        name: "Priscila CS",
        avatar: "https://avatars0.githubusercontent.com/u/39917483?s=460&u=49c927428406cca3147a5aa57eeaebfa4cf6803c&v=4",
        whatsapp: "889587458", 
        bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",         
    }

    classValue = {
        subject: 1,
        cost: "20", 
        //O proffy_id virá pelo banco de dados
    }

    classScheduleValues = [
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

    //await createProffy(db, { proffyValue, classValue, classScheduleValues })

    //Consultar dados inseridos

    //Todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    //consultar as classes de um determinado professor
    //e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    //O horário que o professor trabalha, por exemplo, é das 08h - 18h
    //O horário do time_from (8h) precisa ser menor ou igual ao horário solicitado
    //O time_to precisa ser acima
    const selectClassesSchedules = await db.all(`
        SELECT CLASS_SCHEDULE.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "450"
        AND class_schedule.time_to > "1400"
    `)
    console.log(selectClassesSchedules)
})