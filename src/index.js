import { tagsW3 } from "./tags.js";
import { updateProgressBar } from "./progressBar.js";

// Remove the < and > from the tags
const tags = tagsW3.map(tag => tag.replace(/[<|>]/g, ""));

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    uploadTagsFromLocalStorage(); // list all tags in localStorage
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

        let li = "<li>" + sanitizedVal + "</li>";
        // check if the input value is in the tags array
        let found = tags.some(tag => tag.toLowerCase() === sanitizedVal);
        if (found) {
            document.getElementById("list").insertAdjacentHTML("beforeend", li);
            saveTagToLocalStorage(sanitizedVal); // Save tag to localStorage
            updateProgressBar();
        }
        document.getElementById("input1").value = "";
    }
});

function saveTagToLocalStorage(tag) {
    let savedTags = JSON.parse(localStorage.getItem("myTags")) || [];
    savedTags.push(tag);
    localStorage.setItem("myTags", JSON.stringify(savedTags));
}

function uploadTagsFromLocalStorage() {
    let savedTags = JSON.parse(localStorage.getItem("myTags")) || [];
    savedTags.forEach(tag => {
        let li = "<li>" + tag + "</li>";
        document.getElementById("list").insertAdjacentHTML("beforeend", li);
    });
}

