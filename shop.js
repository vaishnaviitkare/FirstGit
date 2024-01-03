//add new element
const form=document.querySelector("form");
const ul=document.querySelector('.fruits');
form.addEventListener('submit',function(event){
  event.preventDefault();
  //grab element inputed in input tag
  const input=document.getElementById('fruit-to-add');
  //create li
  const newLi=document.createElement('li');
  /*
  //add text to li and add button;
  const liText=document.createTextNode(input.value);
  newLi.appendChild(liText);
  newLi.className='fruit';
  //create button 
  const newbtn=document.createElement('button');
  //add text to button;
  const btnText=document.createTextNode('x');
  newbtn.appendChild(btnText);
  newbtn.className='delete-btn';
  newLi.appendChild(newbtn);
//create edit button
const newEdit=document.createElement('button');
  const editText=document.createTextNode('Edit');
  newEdit.appendChild(editText);
  newEdit.className='edit-btn';
  newLi.appendChild(newEdit);*/
  //we also add text and buttons to li using innerHTML
  newLi.innerHTML=input.value+'<button class="delete-btn">x</button>'+'<button class="edit-btn">Edit</button>';
  ul.appendChild(newLi);
});
//functionality of delete button
//here when we click ul anywhere click event is happened
ul.addEventListener('click',function(event){
  //when we click on delete button whose class name is delete-btn remove list
  //event-ul,target-li
  if(event.target.classList.contains('delete-btn')){
    //now event is list
    //here we delete list, on which we clicked
     const fruitToDelete=event.target.parentElement;
    //remove list of ul 
    ul.removeChild(fruitToDelete);
  }
});

