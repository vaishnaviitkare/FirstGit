/*
//getElementById
const mainHeading=document.getElementById('main-heading');
mainHeading.textContent='Fruit World';
mainHeading.style.color='orange';
const head=document.getElementById('header');
head.style.backgroundColor='green';
head.style.borderBottom='3px solid orange';
const basket=document.getElementById('basket-heading');
basket.style.color='green';
const thanks=document.getElementById('thanks');
thanks.innerHTML='<p>Please visit us again</p>';
//getElementsByClassName
const fru=document.getElementsByClassName('fruit');
fru[2].style.backgroundColor='yellow';
for(let i=0;i<fru.length;i++){
  fru[i].style.fontWeight='bold'
}
//getElementsByTagName
const list=document.getElementsByTagName('li');
list[4].style.color='blue';
for(let i=0;i<list.length;i++){
  list[i].style.fontStyle='italic';
}*/
//query selector and query selectorAll
const basket=document.querySelector('#basket-heading');
basket.style.color='brown';
basket.style.marginLeft='30px';
const fruits=document.querySelectorAll('.fruits');
for(let i=0;i<fruits.length;i++){
fruits[i].style.backgroundColor='grey';
fruits[i].style.borderRadius='5px';
fruits[i].style.padding='30px';
fruits[i].style.listStyleType='none';
fruits[i].style.margin='30px';
fruits[i].style.width='50%';
  }

const fruit=document.querySelectorAll('.fruit');
for(let i=0;i<fruit.length;i++){
  fruit[i].style.backgroundColor='white';
  fruit[i].style.padding='10px';
  fruit[i].style.margin='10px';
  fruit[i].style.borderRadius='5px';
 }
const even=document.querySelectorAll('.fruit:nth-child(even)');
for(let i=0;i<even.length;i++){
even[i].style.backgroundColor='brown';
even[i].style.color='white';
}
