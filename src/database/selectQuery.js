
function queryPageStudy(){
    return `
        SELECT class.*, proffys.*
        FROM proffys
        JOIN class ON (class.proffy_id = proffys.id)
    `
}

function queryPageStudyCreate(filters, timeToMinutes){
    
    return `
        SELECT class.*, proffys.* 
        FROM proffys 
        JOIN class ON (class.proffy_id = proffys.id)
        WHERE EXISTS(
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = class.id 
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${timeToMinutes}
            AND class_schedule.time_to > ${timeToMinutes}
        )
        AND class.subject = ${filters.subject}
    `
}

module.exports = {
    queryPageStudy,
    queryPageStudyCreate
}