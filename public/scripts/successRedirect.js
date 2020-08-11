const queryString = document.getElementById("queryString")
const buttonAccess = document.getElementById("button-access")
buttonAccess.addEventListener("click",function(){
    location.href="/study"+queryString.value
})

setTimeout(()=>{
    location.href="/study"+queryString.value
},2000)

