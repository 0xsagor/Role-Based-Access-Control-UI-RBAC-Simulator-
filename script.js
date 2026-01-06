let role = "guest";

function setRole() {
  role = document.getElementById("role").value;
  render();
}

function render() {
  document.querySelectorAll(".panel").forEach(p => p.style.display = "none");

  if (role === "user" || role === "admin") {
    document.querySelector(".user").style.display = "block";
  }

  if (role === "admin") {
    document.querySelector(".admin").style.display = "block";
  }
}

render();
