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
    const li=document.createElement('li');
    //const text=document.createTextNode(name+' '+'-'+' '+email+' '+'-'+' '+phone);
    //li.appendChild(text);
    li.innerHTML=username+' '+'-'+' '+email+' '+'-'+' '+phone;
    document.getElementById('ul1').appendChild(li);
  const obj={
    username,
     email,
     phone
  }
  const newObj=JSON.stringify(obj);
  localStorage.setItem(email,newObj);
}