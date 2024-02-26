let b=document.getElementById("parent")
fetch("https://reqres.in/api/users")
.then(function (one){
return one.json()

})

.then(function(two){
console.log(two)
for(let i=0;i<two.data.length;i++){

let c1=document.createElement("img")
    let c2=document.createElement("p")
    let c3=document.createElement("p")
    let c4=document.createElement("p")
    let c5=document.createElement("div")
    c1.setAttribute("src",two.data[i].avatar)
    c2.innerText=two.data[i].first_name
    c3.innerText=two.data[i].last_name
    c4.innerText=two.data[i].email
    c5.append(c1,c2,c3,c4)
    b.append(c5)
}

})
