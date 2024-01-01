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


const fru=document.getElementsByClassName('fruit');
fru[2].style.backgroundColor='yellow';
for(let i=0;i<fru.length;i++){
  fru[i].style.fontWeight='bold'
}