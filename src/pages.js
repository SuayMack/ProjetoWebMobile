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
    
}

