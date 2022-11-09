console.clear();

/*
//// Common
// Enter key: collapses primary pane if not collapsed, 
//            restors primary pane to previous position
//            if collapsed
// Home key:  moves the seperator to the position that gives
//            the primary pane to its smallest allowed size: 
//            could completely collapse the primary pane
// End key:   moves the seperator to the position that gives
//            the primary pane to its largest allowed size:
//            could completely collapse the secondary pane
// F6 key:    cycle focus through winow panes


/// If direction='vertical'
// left key: moves seperator towards left
// right key: moves seperator towards right

  /// If direction='horizontal'
// up key: moves seperator towards top
// down key: moves seperator towards bottom

/// If type='variable'

/// If type='fixed'
*/
class Separator {
  static generateId() {
    return `selector-${(Math.random()*0xFFFFFF<<0).toString(16)}`;
  }
  static convertToRem(pixelValue) {
    const fontSize = 1 / parseFloat(window.getComputedStyle(document.body).getPropertyValue('font-size'));
    const newValue = pixelValue * fontSize;
    
    return newValue;
  }
  constructor(selector, label = '') {
    this._primaryPane = document.querySelector(`[${selector}=primary]`);
    this._secondaryPane = document.querySelector(`[${selector}=secondary]`);
    this._divider = document.querySelector(`[${selector}=divider]`);
    this._control = document.querySelector(`[${selector}=control]`);
    
    if (document.querySelector(`[${selector}=label]`)) {
      let label = document.querySelector(`[${selector}=label]`);
      let id = Separator.generateId();
      
      label.id = id;
      
      this._control.setAttribute('aria-labelledby', id);
    } else {
      if (label.length) {
        this._control.setAttribute('aria-labelledby', label);
      } else {
        console.error(`A label needs to be either provided or set`);
      }
    }
    
    this._mousePressed = false;
    
    this._handleDividerMouseDown = this._handleDividerMouseDown.bind(this);
    this._handleDividerMouseUp = this._handleDividerMouseUp.bind(this);
    this._handleDividerMouseMove = this._handleDividerMouseMove.bind(this);
    
    this._addEvents();
  }
  
  removeEvents() {
    this._divider.removeEventListener('mousedown', this._handleDividerMouseDown, false);
  }
  
  _addEvents() {
    this._divider.addEventListener('mousedown', this._handleDividerMouseDown, false);
    document.addEventListener('mouseup', this._handleDividerMouseUp, false);
  }
  
  _handleDividerMouseDown(e) {
    e.preventDefault();

    this._mousePressed = true;
    document.addEventListener('mousemove', this._handleDividerMouseMove, false);
  }
  
  _handleDividerMouseMove(e) {
    const newPosition = `${Separator.convertToRem(e.pageX)}rem`;
    document.documentElement.style.setProperty('--aside-size', newPosition);
  }
  
  _handleDividerMouseUp(e) {
    if (this._mousePressed) {
      e.preventDefault();
      
      this._mousePressed = false;
      document.removeEventListener('mousemove', this._handleDividerMouseMove, false);
    }
  }
}

class HorizontalSeparator extends Separator {
  constructor(selector) {
    super(selector);
  }
}

class VerticalSeparator extends Separator {
  constructor(selector) {
    super(selector)
  }
}

document.addEventListener('DOMContentLoaded', e => {
  const verticalSeparator = new VerticalSeparator('js-separator');
}, false);