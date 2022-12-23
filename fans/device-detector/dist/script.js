class DeviceDetector {
  constructor(resizeEventListener = false, isDevelopment = false) {
    if (resizeEventListener) {
      this.timeout = 0;
      this.addResizeEventListener();
    }

    if (isDevelopment) this.developmentMode = true;

    this.initValues(true);
  }

  initValues(init, isDevelopment) {
    this.touch = this.isTouch();
    this.pointer = this.isPointer();
    this.hover = this.isHover();
    this.hybrid = this.isHybrid();
    this.device = this.deviceType();
    this.timesRendered = init ? 1 : this.timesRendered + 1;

    if (this.developmentMode) this.logAndUpdateDom();
  }

  isTouch() {
    if (typeof window !== 'undefined') {
      return Boolean(
      'ontouchstart' in window ||
      window.navigator.maxTouchPoints > 0 ||
      window.navigator.msMaxTouchPoints > 0 ||
      window.DocumentTouch && document instanceof DocumentTouch);

    }

    return null;
  }

  isPointer(any) {
    if (typeof window.matchMedia === 'function') {
      if (any) {
        return window.matchMedia('(any-pointer: fine)').matches;
      }

      return (
        window.matchMedia('(pointer: fine)').matches ||
        window.matchMedia('(pointer: coarse)').matches);

    }

    return null;
  }

  isHover(any) {
    if (typeof window.matchMedia === 'function') {
      if (any) {
        return window.matchMedia('(any-hover: hover)').matches;
      }

      return window.matchMedia('(hover: hover)').matches;
    }

    return null;
  }

  isHybrid() {
    return this.touch && (this.isPointer(true) || this.isHover(true));
  }

  deviceType() {
    if (this.hybrid) return 'hybrid';
    return this.touch ? 'mobile' : 'desktop';
  }

  addResizeEventListener() {
    window.addEventListener('resize', () => {
      clearTimeout(this.timeout);
      this.timeout = setTimeout(this.initValues.bind(this), 500);
    });
  }

  logAndUpdateDom() {
    let h1 = document.createElement('h1');
    let pre = document.createElement('pre');
    let notice = `You're using a ${this.device} device`;

    h1.innerHTML = notice;
    pre.innerHTML = JSON.stringify(this, undefined, 2);

    document.body.innerHTML = '';
    document.body.append(h1);
    document.body.append(pre);

    console.table(this);
    console.log(notice);
  }}


//setup for pen
document.addEventListener('DOMContentLoaded', () => {
  new DeviceDetector(true, true);
});