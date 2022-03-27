(async () => {
    const src = chrome.extension.getURL('/inject.js');
    const contentScript = await import(src);
    contentScript.init(/* chrome: no need to pass it */);
  })();