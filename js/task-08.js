const formLogin = document.querySelector(".login-form");


formLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    elements: { email, password }
  } = event.currentTarget;
         if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  console.log(`Login: ${email.value}, Password: ${password.value}`);
  console.log({ email: email.value, password: password.value });
  event.currentTarget.reset();



});



