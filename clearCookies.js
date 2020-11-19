var cookieArray = document.cookie.split('; ');
for (var i = 0; i < cookieArray.length && cookieArray[i]; i++) {
  for (
    var subDomain = '.' + location.hostname;
    subDomain;
    subDomain = subDomain.replace(/^(?:%5C.|[^%5C.]+)/, '')
  ) {
    for (
      var curPath = location.pathname;
      curPath;
      curPath = curPath.replace(/.$/, '')
    ) {
      document.cookie =
        cookieArray[i] +
        '; domain=' +
        subDomain +
        '; path=' +
        curPath +
        '; expires=' +
        new Date(new Date().getTime() - 1e11).toGMTString();
    }
  }
}
alert('I crumbled ' + i + ' cookies for you!');
if (i) {
  window.location.href =
    window.location.protocol +
    '//' +
    window.location.host +
    window.location.pathname;
}
