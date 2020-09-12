const Database = require('./database/db')

const {
    subjects,
    weekdays,
    getSubject
 } = require('./utils/format')

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    //pegar as informações do filtrar
    const filters = req.query

    if(!filters.subject || !filters.weekday || !filters.time)

    const query = `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS (
            SELECT CLASS_SCHEDULE.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${filters.time}
            AND class_schedule.time_to > ${filters.time}
        )
    
    `

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
    return res.render("give-classes.html", {subjects, weekdays})
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses
}

