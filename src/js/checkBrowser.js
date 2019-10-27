const checkBrowser = function() {
  var ua = window.navigator.userAgent;
  var msie = ua.indexOf("MSIE ");

  if (msie > 0) // If Internet Explorer, return version number
  {
    document.write(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
  }
  else  // If another browser, return 0
  {
    console.log('otherbrowser');
  }

  return false;
};

export default checkBrowser;