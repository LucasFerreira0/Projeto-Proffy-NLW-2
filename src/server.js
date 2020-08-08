const express = require("express")
const nunjucks = require("nunjucks")
const server = express()
const {pageLanding, pageStudy, pageGiveClasses, saveClasses} = require("./pages")

// nunjucks configure
nunjucks.configure("src/views",{
    express:server,
    noCache:true
})

// server configure
server
.use(express.urlencoded({extended:true}))
.use(express.static("public")) //configura diretorio com os arquivos estaticos
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)
