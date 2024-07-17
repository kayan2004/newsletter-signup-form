var originalState = document.querySelector(".original_state");
var form = originalState.querySelector("#form");

var submitButton = form.querySelector("#submit-button");

var success = document.querySelector(".success");
var dismissButton = success.querySelector("#dismiss-button");
var email = success.querySelector("#email");
var label = form.querySelector("#email-label");
var span = label.nextElementSibling;
var handleSubmitButton = (e) => {
  var input = form.querySelector("#email-input");
  e.preventDefault();
  if (validateEmail(input)) {
    originalState.classList.add("hidden");
    success.classList.remove("hidden");
    email.textContent = input.value;
  }
};

var handleDismissButton = (e) => {
  success.classList.add("hidden");
  originalState.classList.remove("hidden");
};

var validateEmail = (input) => {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  console.log(regex.test(input.value));
  if (!regex.test(input.value)) {
    span.classList.remove("hidden");
    input.classList.add("error_state");
    return false;
  } else {
    span.classList.add("hidden");
    input.classList.remove("error_state");
  }

  return true;
};

dismissButton.addEventListener("click", handleDismissButton);
submitButton.addEventListener("click", handleSubmitButton);
