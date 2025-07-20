# Tracker-Blocker
Privacy Shield – Tracker &amp; Ad Blocker Extension

# 🔒 Privacy Shield – Chrome Extension

A lightweight open-source Chrome extension to block known **trackers and ad scripts**. Built using `Manifest V3` and powered by Chrome's `declarativeNetRequest` API.

---

## 🚀 Features

- Blocks known tracking scripts like `tracking.js`, `lux.js`, `adUtilities.js`
- Blocks suspicious XHR/fetch calls like `profile`, `json`, `gpt.js`
- Fully **customizable** via `rules.json`
- No background spying or heavy processing

---

## 📁 Files

| File | Purpose |
|------|---------|
| `manifest.json` | Extension manifest (Manifest V3) |
| `background.js` | Logs when extension is installed |
| `rules.json` | List of trackers/scripts to block |
| `popup.html` | popup when the extension icon is clicked

---

## 🛠 How to Use

1. Clone this repo:
   > Download the Extension---
   > open chrome and go to chrome://extensions/---
   > Enable Developer mode---
   > Then click loaded unpacked and upload all the files you downloaded---
   > now its ready to use---
   > You can customize as your need and add your own rules in rules.json---
   > i have added only few rules in rules.json file---
