function submitVal() {
  let val = document.getElementById("input1").value;
  localStorage.setItem("val", val);
  let li = "<li>" + val + "</li>";
  document.getElementById("list").insertAdjacentHTML("beforeend", li);
  document.getElementById("input1").value = "";
}
