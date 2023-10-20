
export function updateProgressBar() {
    let tagsMaxCount = 124;
    let tagsCurrentCount = document.getElementById("list").querySelectorAll("li").length - 1;  // Subtracting 1 because of the "Inputs" list item
    
    let progressPercentage = (tagsCurrentCount / tagsMaxCount) * 100;

    let progressBar = document.getElementById('progress-bar');
    progressBar.value = progressPercentage;

}
