import { tagsObject } from "./parseTagsData.js";

export function updateProgressBar() {
  let tagsMaxCount = Object.keys(tagsObject).length;
  let tagsCurrentCount = document.getElementById("list").querySelectorAll("li:not([aria-hidden='true'])").length;
  
  let progressPercentage = (tagsCurrentCount / tagsMaxCount) * 100;

  let progressBar = document.getElementById('progress-bar');
  progressBar.value = progressPercentage;

  // progress bar label logic
  let progressDescription = document.getElementById('progress-description')
  progressDescription.textContent = `Your progress: ${tagsCurrentCount} out of ${tagsMaxCount} tags added.`;

  // this will announce the current count after each input. 
  let ariaMessage = `${tagsCurrentCount} added.`;
  let progressLive = document.getElementById('progress-live');
  progressLive.textContent = ariaMessage;

  // Update aria-live region when progress reaches half or full completion
  if (tagsCurrentCount === tagsMaxCount / 2) {
    let ariaMessage = `Your progress: ${tagsCurrentCount} tags added. This is 50% completion. Way to go. You are halfway there.`;
    let progressLive = document.getElementById('progress-live');
    progressLive.textContent = ariaMessage;
  } 
  
  if (tagsCurrentCount === tagsMaxCount) {
    let ariaMessage = `Your progress: ${tagsCurrentCount} tags added. This is 100% completion. Congratulations. You have completed the challenge.`;
    let progressLive = document.getElementById('progress-live');
    progressLive.textContent = ariaMessage;
  }
}