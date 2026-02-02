chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const tab = tabs[0];
    const url = new URL(tab.url);
  
    // Cookies
    chrome.cookies.getAll({ domain: url.hostname }, (cookies) => {
      document.getElementById("cookies").textContent = cookies.length;
    });
  
    // Execute script inside page
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: () => {
        return {
          local: localStorage.length,
          session: sessionStorage.length,
          resources: performance.getEntriesByType("resource").map(r => r.name)
        };
      }
    }, (results) => {
      if (!results || !results[0]) return;
  
      const data = results[0].result;
      document.getElementById("local").textContent = data.local;
      document.getElementById("session").textContent = data.session;
  
      const pageDomain = url.hostname;
      const thirdParty = data.resources.filter(r => {
        try {
          return new URL(r).hostname !== pageDomain;
        } catch {
          return false;
        }
      });
  
      document.getElementById("thirdparty").textContent = thirdParty.length;
    });
  });
  