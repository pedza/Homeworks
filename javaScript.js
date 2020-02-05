let url="https://restcountries.eu/rest/v2/alpha/"

function printNeigbors(data){
    
for (let index = 0; index < data.borders.length; index++) {
    const element = data.borders[index];
    fetch(url+element)
    .then(res=>res.json())
    .then(data=>console.log(data.name))
   
    
}
return ""
}

fetch(url+prompt("enter code"))
.then(res=>res.json())
.then(data=>
    {   console.log(`Country: 
${data.name}`)
        console.log(`Neighbours: ${printNeigbors(data)}`)})

