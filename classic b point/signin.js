function signin() {
  let name = document.getElementById("username").value.trim();
  let pass = document.getElementById("password").value.trim();
  let msg = document.getElementById("message");
  let remember = document.getElementById("rememberMe").checked;

  if (name === "" || pass === "") {
    msg.style.color = "yellow";
    msg.innerText = "Please enter all details!";
  } else {
    msg.style.color = "lightgreen";
    msg.innerText = "Sign In Successful 🍔";
     
    

    if (remember) {
      console.log("User chose to be remembered.");
    }
  }
}

// Toggle password visibility
document.getElementById("togglePassword").addEventListener("change", function () {
  let passField = document.getElementById("password");
  if (this.checked) {
    passField.type = "text";
  } else {
    passField.type = "password";
  }
});

// Clear fields and message on Cancel button click
function clearFields() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  document.getElementById("rememberMe").checked = false;
  document.getElementById("togglePassword").checked = false;
  document.getElementById("password").type = "password"; // reset to password type
  document.getElementById("message").innerText = "";
}

