import { tagsW3 } from "./tags.js";
import { updateProgressBar } from "./progressBar.js";

// Remove the < and > from the tags
const tags = tagsW3.map(tag => tag.replace(/[<|>]/g, ""));

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // retrieve the saved tags from localStorage and feed them into the renderAllTags function
    let savedTags = JSON.parse(localStorage.getItem("myTags")) || [];
    renderAllTags(savedTags);

    updateProgressBar();
    // Find the form element and add a submit event listener
    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        // on submit
        event.preventDefault(); // Prevent the default form submission
        submitVal(); // call our submitVal function
    });

    function submitVal() {
        let val = document.getElementById("input").value;
        // remove all white spaces and non-alphabetical characters except . ! - 
        let regex = /[^a-zA-Z!-.]/g;
        // change input to lower case and apply regex
        let sanitizedVal = val.toLowerCase().replace(regex, "");
        let li = "<li>" + sanitizedVal + "</li>";
        // check if the input value is in the tags array
        let found = tags.some(tag => tag.toLowerCase() === sanitizedVal);
        // convert the list to an array
        const getList = JSON.parse(localStorage.getItem("myTags"));
        let checkDuplicate = false;
        // ? checks if the list is not empty first, to make includes() work
        if (getList?.includes(sanitizedVal)) {
        checkDuplicate = true;
        }
        if (found && !checkDuplicate) {
            // add tag to the exisitng array of tags 
            let updatedTags = insertTagAndSort(sanitizedVal, savedTags);
            // save the updated array of tags to localStorage
            localStorage.setItem("myTags", JSON.stringify(updatedTags));
            // render the updated list of tags
            renderAllTags(updatedTags);
            updateProgressBar();
        }
        document.getElementById("input").value = "";
    }
});

// deals with the data aspect of adding a tag and sorting the list
function insertTagAndSort(tag, tagArray) {
    tagArray.push(tag);
    tagArray.sort();
    return tagArray;
}

// deals with the DOM aspect (ie rendering) of the tags. used at the initial render and on each new tag
function renderAllTags(tagsArray) {
    let listElement = document.getElementById('list');
    
    // Clear the current list. Necessary for a correct re-rendering of the updated list
    listElement.innerHTML = ''; 
    
    // lines 66, 69 through 76, and 82 deal with adding a separator between tags that start with different letters
    let previousTagInitial = '';

    tagsArray.forEach(tag => {
        let currentTagInitial = tag[0];
        // if the current tag's initial is different from the previous tag's initial, create a space
        if (previousTagInitial && currentTagInitial !== previousTagInitial) {
            // create a space. this is a div and not an li to not confuse screen readers
            // THIS REPLACES THE PREVIOUS CONCATANATION OF <li> + tag + </li>.  I HAD A HARD TIME GETTING THE SEPARATOR TO WORK
            let separator = document.createElement("div");
            separator.style.height = "16px";
            listElement.appendChild(separator);
        }

        // create the li element and add it to the list.
        let li = document.createElement("li");
        li.textContent = tag;
        listElement.appendChild(li);

        previousTagInitial = currentTagInitial;
    });
}


    