//string methods:
const str="bonjour";
console.log(str.length);
console.log(str.charAt(0));
const str2="tout le monde";
console.log(str.concat(' ',str2));
console.log(str.includes("jour"));
console.log(str.indexOf("jour"));
console.log(str.lastIndexOf("o"));
console.log(str.slice(0,3));
const str3="Bonjour les amis";
console.log(str3.split(""));
str1="BONJOUR";
console.log(str1.toLowerCase());
const str4="baby";
console.log(str4.toUpperCase());
const strWithSpaces=" baba ";
console.log(strWithSpaces.trim());
console.log(str.replace("jour","soir"));
console.log(str.startsWith("bon"));
console.log(str.endsWith("jour"));
const name="Jean";
const greeting=`Bonjour,${name}!`;
console.log(greeting);
// Array methods 
const arr=[1,2,3,4];
 console.log(arr.length);
 console.log(arr.push(7,2));
const LastElement=(arr.pop());
 console.log(LastElement);
 console.log(arr);
const FirstElement=arr.shift();
console.log(FirstElement);
 console.log(arr);
arr.unshift(0);
 console.log(arr);
arr.splice(1,2,1.5,6);
 console.log(arr);
 const newArr=arr.slice(0,2);
console.log(newArr);
 arr.forEach(element=>console.log(element));
const arr1=[1,2,3,4];
const sum=arr1.reduce((acc,curr)=>acc+curr,0);
console.log(sum);
const prod=arr1.reduce((acc,curr)=>acc*curr);
console.log(prod);
console.log(arr1.indexOf(2));
console.log(arr1.indexOf(5));
console.log(arr1.includes(2));
console.log(arr1.includes(5));
let squared=arr1.map(x=>x*x);
console.log(squared);
let double=arr1.map(x=>2*x);
console.log(double);
let even= arr1.filter(x =>x % 2 === 0);
console.log(even);
let odd= arr1.filter(x=> x<= 4 );
console.log(odd);
let arr2=[1,5,6,7,2,3];
console.log(arr2.sort());
console.log(arr2.reverse());
let arr3=[1,2,4,5];
console.log(arr3.reverse());
let tab1=[1,2,3,4];
let tab2=[5,6,7,8];
let tab3= tab1.concat(tab2);
console.log(tab3);
console.log(tab3.join('-'));
let a=[1,2,3];
console.log(a.join('-'));
 let b=[14,10,30,50,2];
 let found=b.find(x=> x>=40);
 console.log(found); 
 let index= b.findIndex(x => x > 10);
 console.log(index);
console.log(b.some(x => x > 2 ));
console.log(b.every(x => x % 2 === 0));
let c= [1,[2,[3,[4]]]];
let flatened= c.flat(2);
console.log(flatened);
let d ='1250';
let cd= Array.from(d);
console.log(cd);
// numbers methods
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.NaN);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.EPSILON);
console.log(Number.isInteger(4));
console.log(Number.isInteger(4.6));
console.log(Number.isInteger(Infinity));
console.log(Number.isFinite(4));
console.log(Number.isFinite(4.5));
console.log(Number.isFinite(Infinity));
console.log(Number.isNaN(4));
console.log(Number.isNaN(NaN));
console.log(Number.isNaN(Infinity));
console.log(Number.isNaN(undefined));
console.log(Number.isNaN(true));
console.log(Number.isSafeInteger(4));
console.log(Number.isSafeInteger(Infinity));
console.log(Number.isSafeInteger(2000));
let num=255;
console.log(num.toString());
console.log(num.toString(2));
console.log(num.toString(4));
let Num=12345;
console.log(Num.toExponential(2));
let N=12345.6789;
console.log(N.toPrecision(5));
console.log(N.toPrecision(12));
console.log(N.toPrecision(7));
let B= new Number(1235.6);
console.log(B.valueOf());
console.log(Math.abs(-12));
console.log(Math.round(3.125));
console.log(Math.floor(3.125));
console.log(Math.ceil(3.12));
console.log(Math.max(1,25,69,98));
console.log(Math.min(-1,2,56,96));
console.log(Math.pow(15,4));
console.log(Math.sqrt(96));
console.log(Math.sqrt(-4));
console.log(Math.random());
console.log(Math.sin(Math.PI / 3));
console.log(Math.cos(Math.PI));
console.log(Math.tan(Math.PI / 2));
