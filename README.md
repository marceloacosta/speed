# **Video Speed Controller Chrome Extension**

This Chrome extension allows users to easily adjust the playback speed of videos on any webpage through a popup interface. It works with popular platforms like YouTube and Vimeo, and any video element detected on the page.

## **Features**
- Change video playback speed through a simple popup UI.
- Supports any HTML5 video element on a webpage.
- Speed can be set from **0.1x** to **10x**.
- Works seamlessly across most websites.

## **Project Structure**
```
video-speed-controller/
│
├── manifest.json       # Extension metadata and permissions
├── popup.html          # HTML for the popup interface
├── popup.js            # Logic for handling user input and applying video speed
├── content.js          # Optional content script (can be expanded later)
├── background.js       # Background service worker for logging and coordination
└── icon.png            # (Optional) Icon for the Chrome extension
```

## **How to Install**

1. **Download the project files** or clone this repository:
   ```bash
   git clone <your-repo-url>
   ```

2. **Open Google Chrome** and go to:
   ```
   chrome://extensions/
   ```

3. **Enable Developer Mode** by toggling the switch in the top-right corner.

4. **Click** on **"Load Unpacked"** and select the folder where this project is located.

5. The extension should now appear in your toolbar.

---

## **How to Use**

1. **Go to a webpage** with a video (e.g., YouTube).

2. **Click** on the extension icon in the toolbar to open the popup.

3. **Enter a speed** value (e.g., 2.0 for 2x speed) in the input field.

4. **Click "Apply Speed"**, and the video on the page will adjust accordingly.

---

## **Files Overview**

### 1. `manifest.json`
- Defines the extension’s metadata, permissions, and entry points (popup, background).

### 2. `popup.html`
- Contains the user interface for the popup window where users input the playback speed.

### 3. `popup.js`
- Handles the interaction between the popup UI and the webpage to set the video speed.

### 4. `content.js` (Optional)
- Placeholder for additional content script logic (if needed for future enhancements).

### 5. `background.js`
- Background service worker that manages logging and keeps the extension running smoothly.

---

## **Permissions**

This extension requests the following permissions:
- **`activeTab`**: Allows the extension to interact with the currently open tab.
- **`scripting`**: Enables the execution of scripts on the active tab to modify video playback.

---

## **Known Issues & Limitations**
- The extension works only on pages with HTML5 video elements.
- Some websites (e.g., DRM-protected platforms like Netflix) may block script-based playback changes.
- If no video is detected, an alert will notify the user.

---

## **Future Enhancements**
- Add hotkeys for increasing or decreasing speed without using the popup.
- Support for multiple videos on the same page.
- Include a reset button to return to normal speed.

---

## **Contributing**
Feel free to submit issues or pull requests for improvements or bug fixes.

---

## **License**
This project is licensed under the MIT License. See `LICENSE` for more details.

