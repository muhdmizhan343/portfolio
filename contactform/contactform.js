function sendMail(){
  let parms={
      name : document.getElementById("senderName").value,
      email : document.getElementById("senderMail").value,
   
      message : document.getElementById("message").value,

  }
  emailjs.send("service_d34wj3p","template_vxnjjq9", parms)
}


document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    if (!form.checkValidity()) {
      // If the form is invalid, prevent submission
      event.preventDefault();
      event.stopPropagation();
    } else {
      // If the form is valid, call your function
      event.preventDefault(); // Prevent actual form submission
      myCustomFunction();
    }

    // Add Bootstrap's validation styles
    form.classList.add("was-validated");
  });
});

function myCustomFunction() {
  alert("Succesfully sented to mizhan");
  // Your custom JS code here
  sendMail();
}
