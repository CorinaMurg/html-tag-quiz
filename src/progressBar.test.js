  // FOR SCREEN READERS
// TEST CASES for updating aria-live region. Note: the values are made up. 
  if (tagsCurrentCount === 6) {
      let ariaMessage = `Your progress: ${tagsCurrentCount} tags added. This is 5%. Great job.`;
      let progressLive = document.getElementById('progress-live');
      progressLive.textContent = ariaMessage;
  } 
  if (tagsCurrentCount === 12) {
      let ariaMessage = `Your progress: ${tagsCurrentCount} tags added. This is 10%. Great job.`;
      let progressLive = document.getElementById('progress-live');
      progressLive.textContent = ariaMessage;
    }
// END OF TEST CASES