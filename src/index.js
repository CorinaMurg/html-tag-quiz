import { tagsW3 } from "./tags.js";

// Remove the < and > from the tags
const tags = tagsW3.map((tag) => tag.replace(/[<|>]/g, ""));

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Find the form element and add a submit event listener
  const form = document.querySelector("form");
  form.addEventListener("submit", function (event) {
    // on submit
    event.preventDefault(); // Prevent the default form submission
    submitVal(); // call our submitVal function
  });

  // Progress bar elements
  const progressBar = document.getElementById("progress-bar");
  const progressBarContainer = document.getElementById(
    "progress-bar-container"
  );

  // Number of correct tags
  let correctTags = 0;

  function submitVal() {
    let val = document.getElementById("input1").value;
    // remove all white spaces and non-alphabetical characters except . ! -
    let regex = /[^a-zA-Z!-.]/g;
    // change input to lower case and apply regex
    let sanitizedVal = val.toLowerCase().replace(regex, "");
    localStorage.setItem("val", sanitizedVal);
    let li = "<li>" + sanitizedVal + "</li>";
    // check if the input value is in the tags array
    let found = tags.some((tag) => tag.toLowerCase() === sanitizedVal);
    if (found) {
      document.getElementById("list").insertAdjacentHTML("beforeend", li);
      correctTags++; // Increment the count of correct tags
      updateProgressBar(); // Update the progress bar
    }
    document.getElementById("input1").value = "";
  }

  function updateProgressBar() {
    // Calculate the progress percentage
    const totalTags = tags.length;
    const progress = (correctTags / totalTags) * 100;

    // Update the progress bar width
    progressBar.style.width = progress + "%";

    // Optionally, update the text inside the progress bar
    progressBar.innerText = progress.toFixed(2) + "%";
  }
});
