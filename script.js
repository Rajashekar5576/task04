//xml http request
//create an xml http instance(object)
var request = new XMLHttpRequest();
//initiate a new connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//sending the request to server
request.send()
//if server responds, retrive data
request.onload=function(){
    var data = JSON.parse(this.response);

var arr= Object.entries(data)
var res1= arr.filter((x)=> x[1].region=="Asia")
for(i of res1){
console.log(i[1].name)
}

var res2= arr.filter((x)=> x[1].population<200000)
for(i of res2){
    console.log( i[1].name)
}

var res3= arr.reduce((total, x)=> total+=x[1].population,0)
console.log(res3)

var res4= arr.filter((x)=> {
    for(i=0; i<x[1].currencies.length;i++){
        if(x[1].currencies[i].code=="USD")
    return true}})

for(i of res4){
console.log(i[1].name)}

arr.forEach((x)=> {console.log(x[1].name, x[1].capital, x[1].flag)})

}


