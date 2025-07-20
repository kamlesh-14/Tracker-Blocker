// Sample tracker list
const trackers = [
  "*://*.doubleclick.net/*",
  "*://*.google-analytics.com/*",
  "*://*.facebook.net/*",
  "*://*.adsafeprotected.com/*"
];

let blockedCount = 0;

chrome.declarativeNetRequest.onBeforeRequest.addListener(
  (details) => {
    blockedCount++;
    chrome.action.setBadgeText({ text: blockedCount.toString() });
    return { cancel: true };
  },
  { urls: trackers },
  ["blocking"]
);
