module.exports = function(db, {proffyValue, classValue, classScheduleValue}) {
    //inserir dados na tabela proffys
    const insertedProffy = await db.run(`
        INSERT IN TO proffys (
            name,
            avatar,
            whatsapp,
            bio
        ) VALUES (
            ${proffyValue.name},
            ${proffyValue.avatar},
            ${proffyValue.whatsapp},
            ${proffyValue.bio}
        );
    `)
    const proffy_id = insertedProffy.lastID

    //inserir dados na tabela classes
    const insertedClasses = await db.run(`
        INSERT IN TO classes (
            subject,
            cost
        ) VALUES (
            ${proffyValue.subject},
            ${proffyValue.cost}
        );
    `)
    const classes_id = insertedClasses.lastID
}