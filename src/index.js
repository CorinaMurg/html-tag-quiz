
function submitVal() {
	event.preventDefault();
	var val = document.getElementById("input1").value;
	sessionStorage.setItem("val", val);
	var li = "<li>" + val + "</li>";
	document.getElementById("list").insertAdjacentHTML('beforeend', li);
	document.getElementById("input1").value = "";
}  