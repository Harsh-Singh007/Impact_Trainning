let obj={
    name:"Harsh singh",
    age:21,
    course:"MCA",
    address:"gurgaon,haryana"
}

//json.strignify obj to json
let alljson=JSON.stringify(obj);
console.log(alljson);

//json.parse json to obj
let newobj=JSON.parse(alljson)
console.log(newobj);
 
//convert specific key value into json
let agejson=JSON.stringify(obj,['name','age']);
console.log(agejson);

console.log(JSON.parse(agejson));

//fetch api

async function getdat() {
    let res=await fetch("https://jsonplaceholder.typicode.com/comments");
    let d=await res.json;
    console.log(d);
    
}

getdat();



