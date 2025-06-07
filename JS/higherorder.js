//callback
function high(n,a){
    for(i=0;i<n;i++)
    {
        a(i*2);
    }
}
high(5,console.log);

//map
let ar=[1,2,3,4,5,8,33,122];
console.log(ar.map(i=>i*2));

//filetr
let b=ar.filter(i=>i%2==0);
console.log(b);



let f=["orange","apple","mango","bananan","watermalon"];
let d="ap"
let c=f.filter(i=>i.includes(d));
console.log(c);

//reduce
let a=[1,2,3,4,5,8,33,12];
console.log(a.reduce((a,b)=>a+b,0));

//foreach
f.forEach((x)=>
console.log(x.toUpperCase())

)





