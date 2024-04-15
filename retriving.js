function handleFormSubmit(event) {
    event.preventDefault();
    const obj1={
      user:event.target.username.value,
      email:event.target.email.value,
    phone:event.target.phone.value
    }
  axios.post("https://crudcrud.com/api/a20a6827b271430d8b7ae2070ecaf412/appointment",obj1)
       .then((res)=>console.log(res))
       .catch((err)=>console.log(err));
}
  window.addEventListener("DOMContentLoaded",function(){
    axios.get("https://crudcrud.com/api/a20a6827b271430d8b7ae2070ecaf412/appointment")
         .then((res)=>{
            console.log(res.data);
           for(let i=0;i<res.data.length;i++){
             const use=res.data[i];
              showUser(use);
           }
         })
        .catch((err)=>console.log(err));
  })

  function showUser(obj){
    /*document.getelementById('username').value="";
  document.getelementById('email').value="";
  document.getelementById('phone').value="";*/
    const newLi=document.createElement("li");
    newLi.appendChild(document.createTextNode(obj.user+"-"+obj.email+"-"+obj.phone));
  
  const deleteBtn = document.createElement("button");
    deleteBtn.appendChild(document.createTextNode("Delete"));
    newLi.appendChild(deleteBtn);
  
    const editBtn = document.createElement("button");
    editBtn.appendChild(document.createTextNode("Edit"));
    newLi.appendChild(editBtn);
  
    const userList = document.querySelector("ul");
    userList.appendChild(newLi);
    console.log(userList);
    //console.log(ItemList.childElementCount);
    };
