//all code for get,post,delete and update written here
function handleFormSubmit(event) {
    event.preventDefault();
    const obj1={
      user:event.target.username.value,
      email:event.target.email.value,
      phone:event.target.phone.value
    };
  addData(obj1);    
  }
  function addData(obj1){
    axios.post("https://crudcrud.com/api/6fcbb5299e1342d882d6067d80075f08/appointment",obj1)
        .then((res)=>console.log(res))
        .catch((err)=>console.log(err));
  }
  window.addEventListener("DOMContentLoaded",function(){
    axios.get("https://crudcrud.com/api/6fcbb5299e1342d882d6067d80075f08/appointment")
         .then((res)=>{
           const array=res.data;
           for(var ele of array){
             showUser(ele);
           }
         })
        .catch((err)=>console.log(err));
  })
  function showUser(ele){
    const newUl=document.querySelector("ul");
    const newLi=document.createElement("li");
    newLi.innerHTML="Username: "+ele.user+" "+"*Email: "+ele.email+" "+"*Phone Number: "+ele.phone+" "+`<button onclick='deleteUser("${ele._id}")'>Delete</button>`+" "+`<button class="editbtn" onclick='editUser("${ele._id}","${ele.user}","${ele.email}","${ele.phone}")'>Edit</button>`;
    newLi.id=ele._id;
    newUl.appendChild(newLi);
    /*this way is also correct
    newLi.querySelector('.editbtn').addEventListener("click",function(event){
      editUser(ele.user,ele.email,ele.phone);
    })*/
  }
  function deleteUser(idTo){
    //this also works when we pass event as argument to function
    //const idTo=event.target.parentElement.id;
    axios.delete(`https://crudcrud.com/api/6fcbb5299e1342d882d6067d80075f08/appointment/${idTo}`)
         .then((res)=>{
            deleteFromScreen(idTo);
         })
         .catch((err)=>{
            console.log(err);
         })
  }
  function deleteFromScreen(id){
    const newUl=document.querySelector("ul");
    newUl.removeChild(document.getElementById(id));
  }
  function editUser(id,element1,element2,element3){
    document.getElementById('username').value=element1;
    document.getElementById('email').value=element2;
    document.getElementById('phone').value=element3;
    deleteUser(id);

  }