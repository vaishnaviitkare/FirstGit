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
}