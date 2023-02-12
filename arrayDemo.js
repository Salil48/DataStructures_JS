let origDogs=["BullDog","Beagle","Labordor"];
let cats=new Array("Americal Curl","Bengal");
let brids=new Array("Falcons","Ducks","Flamingoes");

let sliceDogs=origDogs.slice(0,2);//Returns a copy of a section of an array
let copyDogs=[...origDogs];//Returns the copy of array
let dogs=origDogs.slice(0);

let addFirst=dogs.unshift("Golden Retrieveer");//Inserts new elements at the start of an array
let shiftDog=dogs.shift();//Removes the first element from an array

dogs.splice(2,1,"Pug","Boxer"); //Removes elements from an array and if necessary,inserts new elements in their place

let pushDog=dogs.push("Golder Retriever");//Appends new elements to the end of an array
let popDog=dogs.pop();//Removes the last element from an array
dogs[dogs.length]="Poodle";


console.log(dogs);