function handleForm(event){
    event.preventDefault();
    const obj1={
        title:event.target.title.value,
       password:event.target.password.value,
    }
    
    addData(obj1);
    
}
/*This function is used to check the password if it is already present then show alert
async function checkNumber(){
   const res= await axios.get("https://crudcrud.com/api/4eac7072c1a644edb8ff4a57a397bfb9/passwordKeeper")
          const cPass=document.getElementById('password').value;
           const array=res.data;
           for(let ele of array){
              if(ele.password===cPass){
                alert('Already stored this password');
                return false;
              }
           }
           return true;
       
}*/
function addData(obj1){
    //let flag= await checkNumber();
    //if(flag){
       // console.log(1);
    axios.post("https://crudcrud.com/api/fdd6aa872b254bc3b119a2a86bdf1546/passwordKeeper",obj1)
         .then((res)=>{
            getData(res.data._id);
        console.log(res);
           
          })
         .catch((err)=>console.log(err));
}
function getData(id){
    axios.get(`https://crudcrud.com/api/fdd6aa872b254bc3b119a2a86bdf1546/passwordKeeper/${id}`)
       .then((res)=>{
            showUser(res.data);
            obtainData();
       })
       .catch((err)=>console.log(err));
}
function obtainData(){
    axios.get("https://crudcrud.com/api/fdd6aa872b254bc3b119a2a86bdf1546/passwordKeeper")
       .then((res)=>{
           const array=res.data;
           const total= array.length;
           totalDisplay(total);
       })
       .catch((err)=>console.log(err));

}
window.addEventListener("DOMContentLoaded",function(){
  axios.get("https://crudcrud.com/api/fdd6aa872b254bc3b119a2a86bdf1546/passwordKeeper")
       .then((res)=>{
           const array=res.data;
           for(let ele of array){
            showUser(ele);
           }
           const total= array.length;
           totalDisplay(total);
       })
       .catch((err)=>console.log(err));
})
function showUser(ele){
    const newUl=document.querySelector('ul');
    const newLi=document.createElement('li');
    newLi.innerHTML="*Title Name: "+ele.title+" "+" "+" *Password: "+ele.password+" "+`<button id="del" onclick='deleteData("${ele._id}")'>Delete</button>`+" "+`<button id="edit" onclick='editData("${ele._id}","${ele.title}","${ele.password}")'>Edit</button>`
    newLi.id=ele._id;
    newUl.appendChild(newLi);
}
function deleteData(id){
    axios.delete(`https://crudcrud.com/api/fdd6aa872b254bc3b119a2a86bdf1546/passwordKeeper/${id}`)
         .then((res)=>{
            deleteDataFromScreen(id);
            obtainData();
         })
         .catch((err)=>console.log(err));
}
function deleteDataFromScreen(id){
    const newUl=document.querySelector('ul');
    const newLi=document.getElementById(id);
    newUl.removeChild(newLi);
}
function editData(id,title,password){
    document.getElementById('title').value=title;
    document.getElementById('password').value=password;
    deleteData(id);
}
function totalDisplay(total){
    const heading=document.getElementById('label1');
    heading.innerHTML =`Total Bookings: ${total}`
}
const search=document.getElementById('form1');
search.addEventListener('keyup',function(event){
   const value=document.getElementById('searchBar').value.toLowerCase();
   const listOfLi=document.querySelectorAll('li');
   for(let i=0;i<listOfLi.length;i++){
    const check1=listOfLi[i].firstChild.textContent.toLowerCase();
    if(check1.indexOf(value)===-1){
        listOfLi[i].style.display='none';
    }
    else{
        listOfLi[i].style.display='flex';
    }
   }
})
