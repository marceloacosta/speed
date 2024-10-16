document.getElementById('setSpeed').addEventListener('click', async () => {
    const speed = parseFloat(document.getElementById('speed').value);
  
    // Send the selected speed to the content script
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPlaybackSpeed,
      args: [speed]
    });
  });
  
  // The function that will run on the page to set the video speed
  function setPlaybackSpeed(speed) {
    const video = document.querySelector('video');
    if (video) {
      video.playbackRate = speed;
      alert(`Playback speed set to ${speed}x`);
    } else {
      alert('No video found on this page.');
    }
  }
  