function FormSubmit(event){
    event.preventDefault();
    const amount=event.target.amount.value;
    const description=event.target.description.value;
    const category=event.target.category.value;
  const obj={
    amount,
    description,
    category
  }
  const newObj=JSON.stringify(obj);
  localStorage.setItem(description,newObj);
  show(obj);
}
function show(obj){
   const ele=document.getElementById('list');
   const newElem=document.createElement('li');
   newElem.textContent=obj.amount+"-"+" "+obj.description+"-"+" "+obj.category+" ";
   const del=document.createElement('button');
   del.innerHTML="Delete Expense";
   del.type='button';
   del.onclick=()=>{
    localStorage.removeItem(obj.description);
    ele.removeChild(newElem);
    document.getElementById("amt").value=NaN;
    document.getElementById("desp").value=NaN;
    document.getElementById("cat").value=NaN;
}
  const editB=document.createElement('button');
  editB.innerHTML="Edit Expense";
  editB.type='button';
  editB.onclick=()=>{
    localStorage.removeItem(obj.description);
    ele.removeChild(newElem);
   document.getElementById("amt").value=obj.amount;
   document.getElementById("desp").value=obj.description;
   document.getElementById("cat").value=obj.category;
  }
newElem.appendChild(del);
newElem.appendChild(editB);
ele.appendChild(newElem);
}

