const subjects = [
    "Artes",
    "Biologia",
    "Ciencias",
    "Educaçao Fisica",
    "Fisica",
    "Geografia",
    "Historia",
    "Matematica",
    "Portugues",
    "Quimica",
]
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sabado",
]
 
function getSubject(subjectNumber){
    // const arrayPosition = subjectNumber - 1
    return subjects[subjectNumber]
}

function convertHoursToMinutes(time){
    const [hours, minutes] = time.split(":")
    return Number((hours * 60) + minutes)
}

module.exports = {
    subjects,
    weekdays,
    getSubject,
    convertHoursToMinutes
}