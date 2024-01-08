function storage(event){
       event.preventDefault();
       const name=event.target.username.value;
       const email=event.target.emailId.value;
       const phonenumber=event.target.phonenumber.value;
       //storing in local storage
       localStorage.setItem('Name',name);
       localStorage.setItem('Email',email);
       localStorage.setItem('PhoneNumber',phonenumber);
}

