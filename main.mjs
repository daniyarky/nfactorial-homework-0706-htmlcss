import motos from "./export.mjs";  

let userName="Dalida";
let car="Cadillac";

const volume=5.5;

let hasLicense=true;
let hasWings;
let fifthwheel=null;

let basicConfiguration={
    name: "Escalade",
    price: 100000,
    origin: "America",
};



basicConfiguration.feature="Climcontrol";
delete basicConfiguration.feature;

let brand= "Cadillac";
let price= 1200000;
let stdConfiguration={ brand,price};

let park=new Array();
let parking=[];
let suvs=["bentayga","escalade","urus","Q7","GLS"];
suvs.pop;
suvs.push("X5");
suvs.unshift("Cayenne");
suvs.shift;

let ata_suvs=["RangeRover","LandCruiser","LX570"];
suvs=suvs.concat(ata_suvs);
suvs.length
console.log(`Dalida's SUV garage(${suvs})  has ${suvs.length} cars`);

10=="010"
10==="010"
10==="5+5"

let smallRims=null;
let wheel=smallRims ?? "20rims"

let wheels= true ? "20rims":"15rims"
let selectedWheels="20rims"
if (selectedWheels) {
    //20rims
}
//19rims

function countSuvs1(){
    return suvs.length;
}

let countSuvs2=function(){
    return suvs.length;
};

function avail(){
    return "wait please";
}
let countSuvs3 =()=> suvs.length;

let canBuyCar=(car) =>canBuyCar.includes(car);

let cars=["priora","largus","nexia", "vectra","cobalt"];
let cheapest=cars.filter(car=>car==="priora");
let availableCar=cars.map(car=> avail("priora"));
console.log(`${availableCar}`);


function buy(name,price, ...cars){
    return `${name} buys ${cars} for ${price}`;
}

for (let i=0;i<suvs.length;i++){
    console.log(`${suvs[i]}`);
}


const electric=["Smodel","Ymodel"];
const sedan=['kia','camry',...electric];



import{cM as countMotos, cBM as canBuyMoto} from "./export.mjs"




let value=canBuyMoto("suzuki");
console.log(`${value}`);

console.log(`motos available are ${motos}`);

const num=7;
const result=(num%2!=0) ? "odd":"even";
console.log(`Number is ${result}.`);
