/*
You were able to store single user's details in the local storage.
 But this is not scalable. Every time you add a new user, 
 the older user gets removed. Try to solve this problem in this task.
 Deliverable-
1. Make sure that you are able to store the details of multiple users in the local storage.
2. Add an unordered list in the html file after the form.
3. Use DOM manipulation to display on screen the users you add as a list item of this unordered list.
*/
//here we store user details as object using email, so that we store multiple user's details as an object using their emails
function handleFormSubmit(event){
    event.preventDefault();
    const username=event.target.username.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
  const obj={
    username,
     email,
     phone
  }
  const newObj=JSON.stringify(obj);
  localStorage.setItem(email,newObj);
  showUserOnScreen(obj);
}
/*
Deliverables:
1. The 'li' that you are appending to the unordered list, make sure that it has a delete button.
2. When you click on that delete button, then that particular user's details should be removed from the screen and from the local storage.
*/
function showUserOnScreen(obj){
    const parentElem=document.getElementById('listOfitems');
    const childElem=document.createElement('li');
    //const text=document.createTextNode(name+' '+'-'+' '+email+' '+'-'+' '+phone);
    //li.appendChild(text);
    childElem.textContent=obj.username+' '+'-'+' '+obj.email+' '+'-'+' '+obj.phone+' ';
    const deleteButton=document.createElement('input');
    deleteButton.type="button";
    deleteButton.value="Delete";
    deleteButton.className='delete';
    deleteButton.style.width='80px';
  childElem.appendChild(deleteButton);
    deleteButton.onclick=()=>{
       localStorage.removeItem(obj.email);
       parentElem.removeChild(childElem);
    }
   parentElem.appendChild(childElem);
}