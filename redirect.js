chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    // Don't redirect again if this url is already a redirect.
    if (details.url.match(/redirect=true/)) {
      return;
    }
    var match = details.url.match(/^(http|https):\/\/(?:www|us).amazon.([\w.]+)(?:\/)([\S\s]*)/);
    return {redirectUrl: match[1] + "://smile.amazon." + match[2] + (match[3] ? '/' + match[3])};
  },
  {urls: ["*://www.amazon.com/*"]},
  ["blocking"]
);
