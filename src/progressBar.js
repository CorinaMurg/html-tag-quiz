import { tagsW3 } from "./tags.js";

export function updateProgressBar() {
    let tagsMaxCount = tagsW3.length;
    let tagsCurrentCount = document.getElementById("list").querySelectorAll("li").length - 1;  // Subtracting 1 because of the "Inputs" list item
    
    let progressPercentage = (tagsCurrentCount / tagsMaxCount) * 100;

    let progressBar = document.getElementById('progress-bar');
    progressBar.value = progressPercentage;

    // FOR SCREEN READERS

    // progress bar label logic
    let progressDescription = document.getElementById('progress-description')
    progressDescription.textContent = `Your progress: ${tagsCurrentCount} out of ${tagsMaxCount} tags added.`;

    // this will announce the current count after each input. 
    let ariaMessage = `${tagsCurrentCount} added.`;
    let progressLive = document.getElementById('progress-live');
    progressLive.textContent = ariaMessage;

    // TEST CASES for updating aria-live region. Note: the values are made up.
    // if (tagsCurrentCount === 5) {
    //     let ariaMessage = `Your progress: ${tagsCurrentCount} added. This is 5%. Great job.`;
    //     let progressLive = document.getElementById('progress-live');
    //     progressLive.textContent = ariaMessage;
    // } 
    // if (tagsCurrentCount === 10) {
    //     let ariaMessage = `Your progress: ${tagsCurrentCount} added. This is 10%. Great job.`;
    //     let progressLive = document.getElementById('progress-live');
    //     progressLive.textContent = ariaMessage;
    // }
    // END OF TEST CASES

    // Update aria-live region when progress reaches half or full completion
    if (tagsCurrentCount === tagsMaxCount / 2) {
        let ariaMessage = `Your progress: ${tagsCurrentCount} added. This is 50% completion. Way to go. You are halfway there.`;
        let progressLive = document.getElementById('progress-live');
        progressLive.textContent = ariaMessage;
    } 
    
    if (tagsCurrentCount === tagsMaxCount) {
        let ariaMessage = `Your progress: ${tagsCurrentCount} added. This is 100% completion. Congratulations. You have completed the challenge.`;
        let progressLive = document.getElementById('progress-live');
        progressLive.textContent = ariaMessage;
    }
}

