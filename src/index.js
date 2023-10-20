import { tagsW3 } from "./tags.js";
import { updateProgressBar } from "./progressBar.js";

// Remove the < and > from the tags
const tags = tagsW3.map(tag => tag.replace(/[<|>]/g, ""));

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    updateProgressBar();
    // Find the form element and add a submit event listener
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        // on submit
        event.preventDefault(); // Prevent the default form submission
        submitVal(); // call our submitVal function
    });

    function submitVal() {
        let val = document.getElementById("input1").value;
        // remove all white spaces and non-alphabetical characters except . ! - 
        let regex = /[^a-zA-Z!-.]/g;
        // change input to lower case and apply regex
        let sanitizedVal = val.toLowerCase().replace(regex, "");
        localStorage.setItem("val", sanitizedVal);
        let li = "<li>" + sanitizedVal + "</li>";
        // check if the input value is in the tags array
        let found = tags.some(tag => tag.toLowerCase() === sanitizedVal);
        if (found) {
            document.getElementById("list").insertAdjacentHTML("beforeend", li);
            updateProgressBar();
        }
        document.getElementById("input1").value = "";
    }
});