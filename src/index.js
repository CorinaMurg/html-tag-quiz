import { tagsW3 } from "./tags.js";

// Remove the < and > from the tags
const tags = tagsW3.map(tag => tag.replace(/[<|>]/g, ""));

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Find the form element and add a submit event listener
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    // on submit
    event.preventDefault(); // Prevent the default form submission
    submitVal(); // call our submitVal function
  });

  function submitVal() {
    let val = document.getElementById("input1").value;
    localStorage.setItem("val", val);
    let li = "<li>" + val + "</li>";
    // check if the input value is in the tags array
    if (tags.includes(val)) {
      document.getElementById("list").insertAdjacentHTML("beforeend", li);
    }
    document.getElementById("input1").value = "";
  }
});