const validateUsername = function (string) {
  const regex = /\s/g;
  return !regex.test(string);
};
const validatePassword = function (string) {
  const regex =
    /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g;

  return regex.test(string);
};
const validateEmail = function (string) {
  const regex = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/g;
  return regex.test(string);
};
const validatePhone = function (number) {
  const regex = /07\d{8}$/g;
  return regex.test(number);
};

const form = document.getElementById("form");
const button = document.getElementById("button");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = {
    username: event.target.username.value,
    password: event.target.password.value,
    email: event.target.email.value,
    phone: event.target.phone.value,
  };

  if (
    validateUsername(data.username) &&
    validatePassword(data.password) &&
    validateEmail(data.email) &&
    validatePhone(data.phone)
  ) {
    if (!localStorage.getItem(data.username)) {
      alert("user already registered");
    } else {
      alert("good to go");
      sessionStorage.setItem(`${data.username}`, JSON.stringify(data));
    }
  } else {
    alert("check credentials");
  }
});
