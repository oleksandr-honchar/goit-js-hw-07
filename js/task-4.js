const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = form.elements;
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  console.log(formData);
  form.reset();
});

const style = document.createElement("style");
style.textContent = `
body {
    margin: 24px;
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.04em;
    color: #2e2f42;
}

.login-form {
    display: flex;
    flex-direction: column;
}

  input {
    display: flex;
    flex-direction: column;
    width: 360px;
    height: 40px;
    margin-bottom: 8px;
  }

button {
    font-family: inherit;
    width: 86px;
    height: 40px;
    margin-top: 16px;
    font-weight: 500;
    color: #fff;
    border-radius: 8px;
    padding: 8px 16px;
    background-color: #4E75FF;
    cursor: pointer;
    border: none;
}

`;

document.head.append(style);
