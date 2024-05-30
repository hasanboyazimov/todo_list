const form = document.querySelector("form");
const ul = document.querySelector("#ul");
const errorBox = document.querySelector("#error-box");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (form.input.value.trim() == "") {
    errorBox.textContent = `please, enter your todo`;
  } else {
    const li = document.createElement("li");
    li.textContent = form.input.value;
    li.classList.add("liStyle");
    const icon = document.createElement('i')
    icon.setAttribute("class", "icon fa-solid fa-check")
    ul.appendChild(li);
    const span = document.createElement("span");
    span.classList.add("spancha");
    li.appendChild(span);
    form.input.value = ""
    li.addEventListener("dblclick", () => {
      li.classList.toggle("complated");
      span.classList.toggle("linear")
      span.appendChild(icon)
    });
  }
});

