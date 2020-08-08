// const database = require("./db.js")
// const createProffy = require("./createProffy")


// database.then(async (db)=>{
    
//     proffyValue = {
//         name:"Diego Fernandes",
//         avatar:"https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
//         whatsapp:"16992292090", 
//         bio:"Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma dasminhas explosões."
//     }
//     classValue = {
//         subject:1, 
//         cost:"20"
//     }
//     classScheduleValue = [
//         {
//             weekday:0, 
//             time_from:720, 
//             time_to:6969
//         },
//         {
//             weekday:1, 
//             time_from:720, 
//             time_to:6969
//         },
//         {
//             weekday:0, 
//             time_from:720, 
//             time_to:6969
//         }
//     ]
//     insert data
//     await createProffy(db, {proffyValue, classValue, classScheduleValue})

//     get data
//     const selectedAllProffys = await db.all("SELECT * FROM proffys")  
//     const selectClassesAndProffys = await db.all(`
//         SELECT class.*, proffys.* 
//         FROM proffys 
//         JOIN class ON (class.proffy_id = proffys.id)
//         WHERE class.proffy_id = 1;
//     `)
//     const selectClassesSchedule = await db.all(`
//         SELECT class_schedule.*
//         FROM class_schedule
//         WHERE class_schedule.class_id = 1
//         AND class_schedule.weekday = 0 
//         AND class_schedule.time_from <= "800"
//         AND class_schedule.time_to > "800"
//     `)
//     console.log(selectClassesSchedule)

// })