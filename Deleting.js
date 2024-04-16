//It has same html page as retriving and saving.html
function handleFormSubmit(event) {
    event.preventDefault();
    const obj1={
      user:event.target.username.value,
      email:event.target.email.value,
     phone:event.target.phone.value
    }
  axios.post("https://crudcrud.com/api/e74219d026af4368a0aee7dd64de26ca/appointment",obj1)
       .then((res)=>console.log(res))
       .catch((err)=>console.log(err));
  }
  window.addEventListener("DOMContentLoaded",function(){
    axios.get("https://crudcrud.com/api/e74219d026af4368a0aee7dd64de26ca/appointment")
         .then((res)=>{
           const array=res.data;
           for(let ele of array){
             showUser(ele);
           }
         })
         .catch((err)=>console.log(err));
  })
  function showUser(ele){
    const newUl=document.querySelector('ul');
    const newLi=document.createElement("li");
    newLi.appendChild(document.createTextNode(ele.user+"-"+ele.email+"-"+ele.phone));
    newLi.id=ele._id;
    const deletebtn=document.createElement("button");
    deletebtn.appendChild(document.createTextNode("Delete"));
    deletebtn.id="deletebtn";
    newLi.appendChild(deletebtn);
    const editbtn=document.createElement("button");
    editbtn.appendChild(document.createTextNode("Edit"));
    newLi.appendChild(editbtn);
    newUl.appendChild(newLi);
    
  deletebtn.addEventListener("click",function(event){
    deleteUser(event.target.parentElement.id);
  })
}
  function deleteUser(userid){
    axios.delete(`https://crudcrud.com/api/e74219d026af4368a0aee7dd64de26ca/appointment/${userid}`)
         .then((res)=>{
          deleteFromScreen(userid);
         })
         .catch((err)=>console.log(err));
  }
   function deleteFromScreen(userid){
    const newU=document.querySelector('ul');
    const newL=document.getElementById(userid);
    newU.removeChild(newL);
   }
  