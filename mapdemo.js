let keyString ='a string';
let keyobj={};
let keyFunc=function(){}

let myMap=new Map();
myMap.set(keyString,"Value associated with 'a string'");
myMap.set(keyobj,"Value assocated with keyobj");
myMap.set(keyFunc,"Value assocated with keyFunc");

let size=myMap.size;
let valstr=myMap.get(keyString);
//console.log(size);

for(let [key,value] of myMap)
console.log("Loop1: "+key+"="+value);

for(let [key,value] of myMap.entries())
console.log("Loop2: "+key+"="+value);

for(let key of myMap.keys())
console.log("Loop3: "+key);

for(let value of myMap.values())
console.log("Loop4: "+value);