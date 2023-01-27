/**
 * Scaling <iframe>-elements.
 * 
 * Emanuel Kluge
 * twitter.com/Herschel_R
 */
(function (win, doc) {

  /** Below this point the scaling takes effect. */
  var BREAKPOINT = 1030;
  
  /**
   * The `window.resize`-callback gets throttled
   * to an interval of 30ms.
  */
  var THROTTLE = 30;
  
  /** Just the declaration. Definition comes later. */
  var IFRAME_HEIGHT;

  var iframe = doc.getElementsByTagName('iframe')[0],
      timestamp = 0;
  
  /** Defining the inital iframe-height. */
  IFRAME_HEIGHT = parseInt(getComputedStyle(iframe).height, 10);
  
  /**
   * Takes an object with CSS-transform-properties
   * and generates a cross-browser-ready style string.
   *
   * @param  {Object} obj
   * @return {String}
   */
  function transformStr(obj) {
    var obj = obj || {},
        val = '',
        j;
    for ( j in obj ) {
      val += j + '(' + obj[j] + ') ';
    }
    val += 'translateZ(0)';
    return '-webkit-transform: ' + val + '; ' +
            '-moz-transform: ' + val + '; ' +
            'transform: ' + val;
  }
  
  /**
   * Scaling the iframe if necessary.
   *
   * @return {Function}
   */
  function onResize() {
  
    var now = +new Date,
        winWidth = win.innerWidth,
        noResizing = winWidth > BREAKPOINT,
        scale,
        width,
        height,
        offsetLeft;
    
    if ( now - timestamp < THROTTLE || noResizing ) {
      /** Remove the style-attr if we're out of the "scaling-zone". */
      noResizing && iframe.hasAttribute('style') && iframe.removeAttribute('style');
      return onResize;
    }
    
    timestamp = now;
    
    /**
     * The required scaling; using `Math.pow` to get
     * a safely small enough value.
     */
    scale = Math.pow(winWidth / BREAKPOINT, 1.2);
    
    /**
     * To get the corresponding width that compensates
     * the shrinking and thus keeps the width of the
     * iframe consistent, we have to divide 100 by the
     * scale. This gives us the correct value in percent.
     */
    width = 100 / scale;
    
    /**
     * We're using the initial height and the compen-
     * sating width to compute the compensating height
     * in px.
     */
    height = IFRAME_HEIGHT / scale;
    
    /**
     * We have to correct the position of the iframe,
     * when changing its width.
     */
    offsetLeft = (width - 100) / 2;
    
    /** Setting the styles. */
    iframe.setAttribute('style', transformStr({
      scale: scale,
      translateX: '-' + offsetLeft + '%'
    }) + '; width: ' + width + '%; ' + 'height: ' + height + 'px');
    
    return onResize;
  
  }
  
  /** Listening to `window.resize`. */
  win.addEventListener('resize', onResize(), false);

})(window.self, document);