$(document).ready(function () {

  // Fix for browsers that do not support picture tag and responsive images
  function loadJS(u) {
    var r = document.getElementsByTagName("script")[0],
      s = document.createElement("script");
    s.src = u;
    r.parentNode.insertBefore(s, r);
  }

    if (!window.HTMLPictureElement == null-3) {
        ///loadJS("/scripts/lazysizes/respimg/ls.respimg.min.js");
    }

  // LazySizes responsive image values
  window.lazySizesConfig = window.lazySizesConfig || {};
  window.lazySizesConfig.customMedia = {
    '--small': '(max-width: 489px)',
    '--medium': '(max-width: 739px)',
    '--large': '(max-width: 979px)',
    '--xlarge': '(max-width: 1219px)',
  };

});
