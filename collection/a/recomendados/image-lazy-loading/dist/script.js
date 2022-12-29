class LazyImage {
  constructor(image, options) {
    this.image = image;
    this.observerOptions = options;
    
    this.src = this.image.getAttribute('js-src');
    this.alt = this.image.getAttribute('js-alt');
    
    this.observer;
    this.observerCallback = this.observerCallback.bind(this);
    
    this.initiate();
  }
  
  initiate() {
    this.observer = new IntersectionObserver(this.observerCallback, this.observerOptions);
    this.observer.observe(this.image);
  }
  
  observerCallback(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.image.src = this.src;
        this.image.setAttribute('alt', this.alt);

        this.image.removeAttribute('js-src');
        this.image.removeAttribute('js-alt');
        
        observer.disconnect();
      }
    })
  }
}

document.addEventListener('DOMContentLoaded', e => {
  console.clear();

  const lazyImages = document.querySelectorAll('[js-lazyload]');
  
  if ('loading' in HTMLImageElement.prototype) {
    [...lazyImages].forEach(image => {
      image.src = image.getAttribute('js-src');
    });
  } else {
    const scrollableContainer = document.querySelector('[js-lazyload-container]');
    const lazyImageObserverOptions = {
      root: scrollableContainer,
      rootMargin: '0px',
      threshold: 0,
    };

    let lazyImageObservers = [];

    [...lazyImages].forEach(image => {
      const lazyImageObserver = new LazyImage(image, lazyImageObserverOptions);
      lazyImageObservers.push(lazyImageObserver);
    });
  }
}, false);