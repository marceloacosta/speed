chrome.runtime.onInstalled.addListener(() => {
    console.log("Video Speed Controller extension installed.");
  });
  
  // Optional: Listen for messages (if needed in the future)
  chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === "speedChange") {
      console.log(`Speed changed to ${message.speed}x for tab ${sender.tab.id}`);
    }
    sendResponse({ status: "success" });
  });
  