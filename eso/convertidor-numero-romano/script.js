// polyfill for repeat() from MDN
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat

if (!String.prototype.repeat) {
  String.prototype.repeat = function(count) {
    'use strict';
    if (this == null) {
      throw new TypeError('can\'t convert ' + this + ' to object');
    }
    var str = '' + this;
    count = +count;
    if (count != count) {
      count = 0;
    }
    if (count < 0) {
      throw new RangeError('repeat count must be non-negative');
    }
    if (count == Infinity) {
      throw new RangeError('repeat count must be less than infinity');
    }
    count = Math.floor(count);
    if (str.length == 0 || count == 0) {
      return '';
    }
    // Ensuring count is a 31-bit integer allows us to heavily optimize the
    // main part. But anyway, most current (August 2014) browsers can't handle
    // strings 1 << 28 chars or longer, so:
    if (str.length * count >= 1 << 28) {
      throw new RangeError('repeat count must not overflow maximum string size');
    }
    var rpt = '';
    for (var i = 0; i < count; i++) {
      rpt += str;
    }
    return rpt;
  }
}

const convertNumber = (function(){
  'use strict';

  const _symbols = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];

  /*
   *
   * @param {number} num - a positive integer
   *
   * @returns {Array} an array that contains each digit of the num
   *
   * @example 34 returns [3, 4]
   */
  const _expand = function(num) {
    const result = num.toString().split('').map(function(e) {
      return parseInt(e);
    });

    if (num % 1 === 0 && num > 0) return result;

    throw new Error('unexpected input: input must be a positive integer');
  }

  /*
   *
   * @param {number} num - an integer greater than -1 and less than 10
   *
   * @returns {Array} an array [a, b] or [b, a] where a and b are integer components of num such that a + b = num
   *
   * @example 3 returns [0, 3]
   * @example 4 returns [1, 5]
   * @example 5 returns [5, 0]
   *
   */
  const _getComponents = function(num) {
   const a = num - 5*Math.floor((num+1)/5);
   const b = 5*Math.floor((num-4)/5) + 5;

   let result;

   if (a < 0) result = [Math.abs(a), b];
   else result = [b, a];

   if (num % 1 === 0 && num >= 0 && num < 10) return result;

   throw new Error('unexpected input: imput must be an integer 0-9');
  }

  /*
  *
  * @param {Array} componentsArray - an two-element array [a, b] where a and b are elements of the set: {0, 1, 2, 3, 5, 10}
  * @param {number} position - an integer greater than -1
  *
  * @returns {String}
  *
  * @example {[0, 3], 0} returns 'III'
  * @example {[1, 5], 0} return 'IV'
  * @example {[1, 5], 1} return 'VX'
  *
  */
  const _componentsToSymbols = function (componentsArray, position) {

    const result = componentsArray.map(function(e) {
      if (e === 0) return '';
      else if (e === 5) return _symbols[position + 1];
      else if (e === 10) return _symbols[position + 2];
      else return _symbols[position].repeat(e);
    }).join('');

    // error checks
    let isArray = Array.isArray(componentsArray);
    let hasLength2 = componentsArray.length === 2;
    let isSubset = function (arr) {
      for (var i = 0; i < arr.length; i++) {
        if ([0, 1, 2, 3, 5, 10].indexOf(arr[i]) === -1) return false;
      }
      return true;
    };
    if (Array.isArray(componentsArray)) {
      if (hasLength2 && isSubset(componentsArray)) {
        if (position % 1 === 0 && position > -1) {
          return result;
        }
        throw new Error('unexpected input: second argument must be an integer greater than -1');
      }
      throw new Error('unexpected input: invalid array');
    }
    throw new Error('unexpected input: first argument must be an array ');
  }

  /*
  *
  * @param {number} num - an integer greater than 0 and less than 4000
  *
  * @returns {String}
  *
  */
  const toRomanNumeral = function (num) {

    if (!(num % 1 === 0 && num > 0 && num < 4000)) {
      throw new Error('unexpected input: must be an integer between 0 and 4000');
    } else {
      return _expand(num).reverse().map(function(e) {
        return _getComponents(e);
      }).map(function(e, i) {
        return _componentsToSymbols(e, i*2);
      }).reverse().join('');
    }
  }

  return {
    toRomanNumeral: toRomanNumeral
  };

}());


const init = function() {
  const textInput = document.querySelector(".text-input");
  const errorElement = document.querySelector(".error-message");
  const resultElement = document.querySelector(".result");

  textInput.addEventListener("input", runConversion);

  function runConversion(event) {
    try {
      errorElement.style.opacity = "0";
      resultElement.innerHTML =
        " " + convertNumber.toRomanNumeral(textInput.value);
    } catch (e) {
      errorElement.style.opacity = "100";
      resultElement.innerHTML = "";
    }
  }
};

init();