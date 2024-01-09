function storage(event){
       event.preventDefault();
       const name=event.target.username.value;
       const email=event.target.emailId.value;
       const phonenumber=event.target.phonenumber.value;
      /*
       //storing in local storage
       localStorage.setItem('Name',name);
       localStorage.setItem('Email',email);
       localStorage.setItem('PhoneNumber',phonenumber);
       //output of this is -
       Name:xyz
       Email:xyz@gmail.com
       Phone:9876546789
       */
      //also we stored this data as an object in local storage
        //creating object
        const obj={
          Name:name,
          Email:email,
          Phone:phonenumber
          /*also we do this
          const obj={
        name,
        email,
        phonenumber
          }
        //it means 
        name:name,
        email:email,
        phonenumber:phonenumber
        */
        };
        //convert obj to string
        const storedUserDetails=JSON.stringify(obj);
        localStorage.setItem('userDetails',storedUserDetails);
        //also we do
        //localStorage.setItem('userDetails',JSON.stringify(obj));
      
        //convert string to obj
        //const get=JSON.parse(localStorage.getItem("userDetails")));
      /*
      output of this is -
       {Name:"xyz",Email:"xyz@gmail.com",Phone:"9876546789"}
      */


}

