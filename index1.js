
let name=document.getElementById("name")
let age=document.getElementById("age")
let submit=document.getElementById("sub")
let tab=document.getElementById("head")
let siva=document.getElementById("retrive")
submit.addEventListener("click",function(stop){

stop.preventDefault()

console.log(name.value)
console.log(age.value)



})
siva.addEventListener("click",function(){

   let c1=document.createElement("tr")
let c2=document.createElement("td")
let c3=document.createElement("td")
c2.innerText=name.value
c3.innerText=age.value
c1.append(c2,c3)
tab.append(c1)

})
