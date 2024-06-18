
function handleForm(event){
    event.preventDefault();
    const obj1={
        user:event.target.userName.value,
       seat:event.target.seatNumber.value,
    }
    
    addData(obj1);
    
}
async function checkNumber(){
   const res= await axios.get("https://crudcrud.com/api/4eac7072c1a644edb8ff4a57a397bfb9/MovieBooking")
          const cSeat=document.getElementById('seatNumber').value;
           const array=res.data;
           for(let ele of array){
              if(ele.seat===cSeat){
                alert('Already Booked');
                return false;
              }
           }
           return true;
       
    //const seat=document.getElementById('seatNumber');
    //if(seat===)
}
async function addData(obj1){
    let flag= await checkNumber();
    if(flag){
        console.log(1);
    axios.post("https://crudcrud.com/api/4eac7072c1a644edb8ff4a57a397bfb9/MovieBooking",obj1)
         .then((res)=>{
            getData(res.data._id);
            console.log();
          })
         .catch((err)=>console.log(err));
}
         
}
function getData(id){
    axios.get(`https://crudcrud.com/api/4eac7072c1a644edb8ff4a57a397bfb9/MovieBooking/${id}`)
       .then((res)=>{
            showUser(res.data);
            obtainData();
       })
       .catch((err)=>console.log(err));
}
function obtainData(){
    axios.get("https://crudcrud.com/api/4eac7072c1a644edb8ff4a57a397bfb9/MovieBooking")
       .then((res)=>{
           const array=res.data;
           const total= array.length;
           totalDisplay(total);
       })
       .catch((err)=>console.log(err));

}
window.addEventListener("DOMContentLoaded",function(){
  axios.get("https://crudcrud.com/api/4eac7072c1a644edb8ff4a57a397bfb9/MovieBooking")
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
    newLi.innerHTML=ele.user+" "+ele.seat+`<button id="del" onclick='deleteData("${ele._id}")'>Delete</button>`+`<button id="edit" onclick='editData("${ele._id}","${ele.user}","${ele.seat}")'>Edit</button>`
    newLi.id=ele._id;
    newUl.appendChild(newLi);
}
function deleteData(id){
    axios.delete(`https://crudcrud.com/api/4eac7072c1a644edb8ff4a57a397bfb9/MovieBooking/${id}`)
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
function editData(id,user,seat){
    document.getElementById('userName').value=user;
    document.getElementById('seatNumber').value=seat;
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
