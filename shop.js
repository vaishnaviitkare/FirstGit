// Add input element inside form, before button, to take fruit description
const inputDescrip=document.createElement('input');
inputDescrip.id='description';
inputDescrip.name='description';
inputDescrip.type='text';
inputDescrip.placeholder='fruit description...';
    //we add input tag in the form before the button
const forms=document.querySelector('form');
forms.insertBefore(inputDescrip,forms.lastElementChild);

//add new element
const ul=document.querySelector('.fruits');
forms.addEventListener('submit',function(event){
  event.preventDefault();
  //grab element inputed in input tag
  const input=document.getElementById('fruit-to-add');
  //create li
  const newLi=document.createElement('li');
  //add text to li and add button;
  const liText=document.createTextNode(input.value);
  newLi.appendChild(liText);
  newLi.className='fruit';

// Show the fruit description in italics on the next line
  //create <p> tag 
  const description=document.createElement('p');
  //set description as its text
 const descriptionText=document.createTextNode(inputDescrip.value);
 description.style.fontStyle='italic';
 description.appendChild(descriptionText);
 newLi.appendChild(description);

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
  newLi.appendChild(newEdit);
  //we also add text and buttons to li using innerHTML
 // newLi.innerHTML=input.value+'<button class="delete-btn">x</button>'+'<button class="edit-btn">Edit</button>';
 ul.appendChild(newLi);
});
//functionality of delete button
//here when we click ul anywhere click event is happened
ul.addEventListener('click',function(event){
  //when we click on delete button whose class name is delete-btn remove list
  if(event.target.classList.contains('delete-btn')){
    //here we delete list, on which we clicked
     const fruitToDelete=event.target.parentElement;
    //remove list of ul 
    ul.removeChild(fruitToDelete);
  }
});

// Create a filter that shows only those fruits whose either name or description or both matches the entered text
const filter=document.getElementById('filter');
filter.addEventListener('keyup',function(event){
//we grab characters we inputted in search box
const charInputted=event.target.value.toLowerCase();
//check this char with fruit name and description
   //get all list
const allList=document.querySelectorAll('.fruits li');
for(let i=0;i<allList.length;i++){
   // take fruit name 
 const fruitName=allList[i].firstChild.textContent.toLowerCase();
   //take description
 const descriptionInput=allList[i].firstElementChild.firstChild.textContent.toLowerCase();
 if((fruitName.indexOf(charInputted)===-1) && (descriptionInput.indexOf(charInputted)==-1)){
  allList[i].style.display="none";
 }
 else{
  allList[i].style.display="flex";
 }

}

});

/* code that run on sharpner site
const newInputElement = document.createElement('input');
newInputElement.type = 'text';
newInputElement.placeholder = 'Fruit Description . . .';
newInputElement.id = 'description';
newInputElement.name = 'description';
const form = document.querySelector('form');
const button = document.querySelector('button');
form.insertBefore (newInputElement, button);

// Show the fruit description in italics on the next line
const fruits = document.querySelector('.fruits');

form.addEventListener('submit', function(event){
  event.preventDefault();

  const newInput = document.getElementById('fruit-to-add');
  const newInput2 = document.getElementById('description');

  const p_Tag = document.createElement('p');
  const p_TagText = document.createTextNode(newInput2.value);
  p_Tag.style = "font-style: italic";
  p_Tag.appendChild(p_TagText);

  const newLi = document.createElement('li');
  const newLiText = document.createTextNode(newInput.value);
   newLi.appendChild(newLiText);
   newLi.appendChild(p_Tag);
   newLi.className = 'fruit';

  const newDelete = document.createElement('button');
  const newDeleteText = document.createTextNode('x');
  newDelete.appendChild(newDeleteText);
  newDelete.className = 'delete-btn';
  newLi.appendChild(newDelete);
  fruits.appendChild(newLi);
  })

  fruits.addEventListener('click', function(event){
      if(event.target.classList.contains('delete-btn')){
        const fruitToDelete = event.target.parentElement;
        fruits.removeChild(fruitToDelete);
        }
    })
// Create a filter that shows only those fruits whose either name or description or both matches the entered text
document.getElementById('filter').addEventListener('keyup', function (event) {
    const searchTerm = event.target.value.toLowerCase();
    const listItems = document.querySelectorAll('.fruits li');
	for(let i=0; i<listItems.length; i++){
const currentFruitText =  listItems[i].firstChild.textContent.toLowerCase();
const currentFruitDescription = listItems[i].firstElementChild.firstChild.textContent.toLowerCase();   
	if((currentFruitText.indexOf(searchTerm) === -1) && (currentFruitDescription.includes(searchTerm) === false)){
		listItems[i].style.display = 'none';
	}else{
		listItems[i].style.display = 'flex';
		 }
	}
});
*/

