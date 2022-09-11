const formElement = document.getElementById("form");
const emailElement = document.getElementById("email");
const btnElement = document.getElementById("btn");

formElement.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const validateInputs = () => {
  const emailValue = emailElement.value.trim();

  if (!isEmailValid(emailValue)) {
    setError(emailElement, "Please provide a valid email address");
  } else {
    setSuccess(emailElement);
  }
};

form.addEventListener("submit", function handleSubmit(event) {
  event.preventDefault();

  // 👇️ Send data to server here

  // 👇️ Reset form here
  form.reset();
});
