let form = document.querySelector("form");
let err_one = document.querySelector(".err-1");
let err_two = document.querySelector(".err-2");
let err_third = document.querySelector(".err-3");
let err_four = document.querySelector(".err-4");

form.addEventListener("submit", (e) => {
  let password = document.querySelector("#password");
  let email = document.querySelector("#Email_Address");
  let fN = document.querySelector("#fN");
  let Sn = document.querySelector("#Sn");

  if (!fN.value) {
    e.preventDefault();
    Message(fN.parentElement, err_one, "Please Put your first Name");
  } else {
    Remove(fN.parentElement, err_one, "");
  }

  //   //

  if (!Sn.value) {
    e.preventDefault();
    Message(Sn.parentElement, err_two, "Please Put your Last Name");
  } else {
    Remove(Sn.parentElement, err_two, "");
  }

  if (!email.value) {
    e.preventDefault();
    Message(email.parentElement, err_third, "Please Put your Email");
  } else {
    Remove(email.parentElement, err_third, "");
  }

  if (!password.value) {
    e.preventDefault();
    Message(password.parentElement, err_four, "Please Put your Password");
  } else {
    Remove(password.parentElement, err_four, "");
  }
});
const Message = (input, display, msg) => {
  let img = input.querySelector("img");
  img.style.display = "block";
  input.querySelector("input").classList.add("show");
  display.textContent = msg;
};

const Remove = (input, display, msg) => {
  let img = input.querySelector("img");
  img.style.display = "none";
  input.querySelector("input").classList.add("green");
  display.textContent = msg;
};
