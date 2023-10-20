
export function updateProgressBar() {
    let tagsMaxCount = 124;
    let tagsCurrentCount = document.getElementById("list").querySelectorAll("li").length - 1;  // Subtracting 1 because of the "Inputs" list item
    
    let progressPercentage = (tagsCurrentCount / tagsMaxCount) * 100;

    let progressBar = document.getElementById('progress-bar');
    progressBar.value = progressPercentage;

    // FOR SCREEN READERS

    // NOT HAVING SUCCESS WITH ARIA-LABEL. I ASSUMED WHEN THE SCREEN READER SCANS THE PAGE, 
    // IT WOULD READ THE ARIA-LABEL ATTRIBUTE, BUT IT DOES NOT.
    // ARIA-LABEL SIMPLIFIED VERSION
    let ariaLabel = `Your progress: ${tagsCurrentCount} out of ${tagsMaxCount} tags added.`;
    progressBar.setAttribute('aria-label', ariaLabel);

    // ARIA-LABEL DETAILED VERSION: WITH PERCENTAGE ANNOUNCEMENT AT 50% AND 100% COMPLETION
    // let percentageMessage = '';  

    // if (tagsCurrentCount === 62) {
    //     percentageMessage = 'This is 50% completion. ';  
    // } else if (tagsCurrentCount === tagsMaxCount) {
    //     percentageMessage = 'This is 100% completion. ';  
    // }

    // let ariaLabel = `Your progress: ${tagsCurrentCount} out of ${tagsMaxCount} tags added. ${percentageMessage}`;
    // progressBar.setAttribute('aria-label', ariaLabel);
    // END OF ARIA-LABEL


    // MDN DOCS RECOMMEND USING IT, BUT I DID NOT NOTICE ANY DIFFERENCE WHEN SCREEN READER WAS ON
    let ariaValueText = `${tagsCurrentCount}`;
    progressBar.setAttribute('aria-valuetext', ariaValueText);

    // this will announce the current count after each input. TOO MUCH? MAKE IT EVERY 10 INPUTS?
    // OR NOT AT ALL? JUST UPDATE AT 50% AND 100%?
    let ariaMessage = `${tagsCurrentCount} added.`;
    let progressLive = document.getElementById('progress-live');
    progressLive.innerHTML = ariaMessage;

    // TEST CASES for updating aria-live region. Note: the values are made up.
    if (tagsCurrentCount === 5) {
        let ariaMessage = `Your progress: ${tagsCurrentCount} added. This is 5%. Great job.`;
        let progressLive = document.getElementById('progress-live');
        progressLive.innerHTML = ariaMessage;
    } 
    if (tagsCurrentCount === 10) {
        let ariaMessage = `Your progress: ${tagsCurrentCount} added. This is 10%. Great job.`;
        let progressLive = document.getElementById('progress-live');
        progressLive.innerHTML = ariaMessage;
    }
    // END OF TEST CASES

    // Update aria-live region when progress reaches half or full completion
    if (tagsCurrentCount === tagsMaxCount / 2) {
        let ariaMessage = `Your progress: ${tagsCurrentCount} added. This is 50% completion. Way to go. You are halfway there.`;
        let progressLive = document.getElementById('progress-live');
        progressLive.innerHTML = ariaMessage;
    } 
    
    if (tagsCurrentCount === tagsMaxCount) {
        let ariaMessage = `Your progress: ${tagsCurrentCount} added. This is 100% completion. Congratulations. You have completed the challenge.`;
        let progressLive = document.getElementById('progress-live');
        progressLive.innerHTML = ariaMessage;
    }
}

// THE CODE IS NOT DRY. IT SHOULD BE DONE ONCE WE DECIDE WHICH ATTRIBUTES TO USE AND HOW TO USE THEM.
