let a={
    name:"harsh",
    id:19,
    msg(){
     console.log(`hello ..${this.name}`);
     
    }

}
a.msg();
//object key
console.log(Object.keys(a));

//object entries
console.log(Object.entries(a));

let b={
    
   
    course:"mca",
    marks:[88,79,82,81],
   
}
  
//assign

let c=Object.assign({},a,b);
console.log(c);


//freeze
Object.freeze(a);
a.name="harsh singh";
a.id="21";
console.log(a);

