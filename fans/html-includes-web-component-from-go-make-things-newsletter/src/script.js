class HtmlIncludes extends HTMLElement{
  constructor() {
    super();
    this.path = this.getAttribute("path");

    this.innerHTML = `<iframe src=${this.path} onload="this.before(...(this.contentWindow.document.body || this.contentWindow.document).children);this.remove();"></ifram>`;
  }
}

window.customElements.define("include-html", HtmlIncludes);
