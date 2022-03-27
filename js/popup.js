
console.log("popup.js loaded")
chrome.browserAction.setIcon({ path: "icons/favicon.ico" });

function initData() {
  console.log("Checking Storage...")
  if(typeof(Storage) !== "undefined"){
    console.log("Loading Data from Storage")
    if((typeof(window.localStorage.clientSDK) !== "undefined")){
      console.debug("clientSDK = " + window.localStorage.clientSDK);
      document.getElementById('id').value = window.localStorage.clientSDK;
      chrome.tabs.executeScript({code: "window.localStorage.setItem('clientSDK', \""+window.localStorage.clientSDK+"\")"}, function(result) {
      });
    }
  
    
    if((typeof(window.localStorage.targetIdentifier) !== "undefined")){
      console.log("targetIdentifier = " + window.localStorage.targetIdentifier);
      document.getElementById('userKey').value = window.localStorage.targetIdentifier;
      chrome.tabs.executeScript({code: "window.localStorage.setItem('targetIdentifier', \""+window.localStorage.targetIdentifier+"\")"}, function(result) {
      });
    }
  
    
    if((typeof(window.localStorage.flagIdentifier) !== "undefined")){
      console.debug("flagIdentifier = " + window.localStorage.flagIdentifier);
      document.getElementById('flagKey').value = window.localStorage.flagIdentifier;
      chrome.tabs.executeScript({code: "window.localStorage.setItem('flagIdentifier', \""+window.localStorage.flagIdentifier+"\")"}, function() {
      });
    }
    
    if((typeof(window.localStorage.enabled) !== "undefined")){
      console.debug("enabled = " + window.localStorage.enabled);
      document.getElementById('enabled').checked = window.localStorage.enabled;
      chrome.tabs.executeScript({code: "window.localStorage.setItem('enabled', \""+window.localStorage.enabled+"\")"}, function() {
      });
    }
    
    if((typeof(window.localStorage.customCode) !== "undefined")){
      customCode = window.localStorage.customCode;
      document.getElementById('customCode').value = customCode;
      customCode = customCode.replace(/(\")/g, "\\$1")
      console.log("customCode = " + customCode)
      customCode = customCode.replace(/(\n)/g, "\\$1")
      console.log("customCode2 = " + customCode)
      chrome.tabs.executeScript({code: "window.localStorage.setItem('customCode', \""+customCode+"\")"}, function() {
      });
      chrome.tabs.executeScript({code: "console.log(\"The Extension will add this code to the primary one, do it by your own risk, code:"+customCode+"\")"}, function(result) {
      });
    }
    
    

    
  
  }
}




document.addEventListener('DOMContentLoaded', function() {
  // Retrieve extension user settings
initData();
document.getElementById('save').addEventListener('click', saveSettings);


function saveSettings() {
  if(typeof(Storage) !== "undefined"){
    console.log("Saving Settings...")
    // Demo Options
    var cid = document.getElementById('id').value;
    window.localStorage.setItem('clientSDK', cid)

    var targetIdentifier = document.getElementById('userKey').value;
    window.localStorage.setItem('targetIdentifier', targetIdentifier )
    
    
    var flagIdentifier = document.getElementById('flagKey').value;
    window.localStorage.setItem('flagIdentifier', flagIdentifier )

    var enabled = document.getElementById('enabled').checked;
    window.localStorage.setItem('enabled', enabled )


    var customCode = document.getElementById('customCode').value;
    window.localStorage.setItem('customCode', customCode )
    initData();
    console.log("Saved!")

  }else{
    console.log("Local Storage is not enabled, config won't be saved")
  }
}
}, false);