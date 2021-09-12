

    // get form and modal

    const form = document.getElementById("form");

    const modal = document.getElementById("modal");

    
    //get form inputs

    const firstName = document.getElementById("nom");

    const lastName = document.getElementById("Prénom");

    const telephone = document.getElementById("Téléphone");

    const email = document.getElementById("email");

    const message = document.getElementById("message");

    
    //regular expressions

    var letters = /^[A-Za-z]+$/;
    var numbers = /^[0-9]+$/;
    var letterNumber = /^[\.a-zA-Z0-9,!? ]*$/;
    var emailAdd = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    // variable to store value of input validity 

    let valid;


    // function to validate form inpit data when submit button is clicked
    
    form.onsubmit = function(e) {
        e.preventDefault();      
        valid = true;


    if(!firstName.value.match(letters)){
        firstName.style.border = "1px solid red"
        valid = false;
       }
  

    if(!lastName.value.match(letters)){
        lastName.style.border = "1px solid red"
        valid = false;
    }
  
    
    if(!telephone.value.match(numbers) || telephone.length === 10){
        telephone.style.border = "1px solid red"
        valid = false;
       }

    
    if(!email.value.match(emailAdd)){
        email.style.border = "1px solid red"
        valid = false;
       }

    if(!message.value.match(letterNumber)){
        message.style.border = "1px solid red"
        valid = false;
       }

       


    if (valid) {
        modal.style.display = "flex";
        console.log(firstName.value);
        console.log(lastName.value);
        console.log(telephone.value);
        console.log(email.value);
        console.log(message.value);
        
    }
}



//CLOSE MODAL WHEN CLOSE BUTTON IS CLICKED WORKING

    const CloseBtn = document.getElementById("close-btn")

    CloseBtn.onclick = function() {
        modal.style.display = "none";
      }
    
    





