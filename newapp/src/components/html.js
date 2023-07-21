console.log("hiii")


//DOM  
//D--->document
//o--->Object
//m-->model

// is used is allow to html tage style etc we can do change with help of dom.

// dom methods  
//  getElementbyid
// getElmentbyTag
// getElementbyName
// queryselector
// queryselectorall  


// ----------getElementById--------------
// var GetEle  = document.getElementById('header-title')
// GetEle.textContent = 'computer courses'
// GetEle.style.fontFamily = 'aria'
// GetEle.style.backgroundColor = "yellow"
// console.log(GetEle)   
// ------------getElmentbyclassName---------------

// let GetEle2 = document.getElementsByClassName("list-item");
// GetEle2[1].textContent = 'Animation'
// GetEle2[2].textContent = 'bollyball'
// GetEle2[3].style.fontWeight = 'bold'

// GetEle2[1].style.backgroundColor = 'yellow'
// console.log(GetEle2[1])
// for(let i =0; i < GetEle2.length; i++){
//     GetEle2[i].style.backgroundColor = 'grey'
// }

// ------------getElementBytagName-------------- 

// var li =document.getElementsByTagName('li')
// for( var i=0; i<li.length; i++){
//     li[i].style.backgroundColor='red'
// }

// --------------query selector------------

// var headline = document.querySelector("#tagline");
// headline.style.backgroundColor='yellow' ;

// var items = document.querySelector("li:last-child");
// var items = document.querySelector("li:nth-child(3)");
var items = document.querySelectorAll("list-p");
items.style.backgroundColor = 'yellow';
// console.log(items)

// var input  = document.querySelector('input');
// input.value = 'Enter your Name';   

// var button = 
// document.querySelector('input[type="submit"]');
// button.style.backgroundColor = 'red';
// button.style.color ="yellow"
// button.value="Recieve"
// --odd and even---------

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i =0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'yellow'
// }
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var j=0; j<even.length; j++){
//     even[j].style.backgroundColor = 'red'

// }
// querySelectorAll is work on indexing in this method we can perofm the opertion use of indexingmethod while querySelector always work on first index value

