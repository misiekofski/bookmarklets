var copyStringToClipboard = (str) => {
  const el = document.createElement("textarea");
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
};

var failedTests = [
  ...document.querySelectorAll("div.test-results-cell span.clickable-text"),
]
  .map((e) => e.innerText)
  .join("\n");
  
copyStringToClipboard(failedTests);
