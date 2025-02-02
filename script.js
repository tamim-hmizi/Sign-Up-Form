const form = document.querySelector("form");
const pwds = document.querySelectorAll('input[type="password"]');
pwds.forEach((pwd) => pwd.classList.remove("error"));
form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (event.target.elements[4].value != event.target.elements[5].value)
    pwds.forEach((pwd) => pwd.classList.add("error"));
  else pwds.forEach((pwd) => pwd.classList.remove("error"));
});
