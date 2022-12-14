(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.AnimationFrame=f()}})(function(){var define,module,exports;return function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s}({1:[function(require,module,exports){/**
 * An even better animation frame.
 *
 * @copyright Oleg Slobodskoi 2015
 * @website https://github.com/kof/animationFrame
 * @license MIT
 */
module.exports=require("./lib/animation-frame")},{"./lib/animation-frame":2}],2:[function(require,module,exports){"use strict";var nativeImpl=require("./native");var now=require("./now");var performance=require("./performance");var root=require("./root");var nativeRequest=nativeImpl.request;var nativeCancel=nativeImpl.cancel;function AnimationFrame(options){if(!(this instanceof AnimationFrame))return new AnimationFrame(options);options||(options={});if(typeof options=="number")options={frameRate:options};options.useNative!=null||(options.useNative=true);this.options=options;this.frameRate=options.frameRate||AnimationFrame.FRAME_RATE;this._frameLength=1e3/this.frameRate;this._isCustomFrameRate=this.frameRate!==AnimationFrame.FRAME_RATE;this._timeoutId=null;this._callbacks={};this._lastTickTime=0;this._tickCounter=0}module.exports=AnimationFrame;AnimationFrame.FRAME_RATE=60;AnimationFrame.shim=function(options){var animationFrame=new AnimationFrame(options);root.requestAnimationFrame=function(callback){return animationFrame.request(callback)};root.cancelAnimationFrame=function(id){return animationFrame.cancel(id)};return animationFrame};AnimationFrame.prototype.request=function(callback){var self=this;++this._tickCounter;if(nativeImpl.supported&&this.options.useNative&&!this._isCustomFrameRate){return nativeRequest(callback)}if(!callback)throw new TypeError("Not enough arguments");if(this._timeoutId==null){var delay=this._frameLength+this._lastTickTime-now();if(delay<0)delay=0;this._timeoutId=setTimeout(function(){self._lastTickTime=now();self._timeoutId=null;++self._tickCounter;var callbacks=self._callbacks;self._callbacks={};for(var id in callbacks){if(callbacks[id]){if(nativeImpl.supported&&self.options.useNative){nativeRequest(callbacks[id])}else{callbacks[id](performance.now())}}}},delay)}this._callbacks[this._tickCounter]=callback;return this._tickCounter};AnimationFrame.prototype.cancel=function(id){if(nativeImpl.supported&&this.options.useNative)nativeCancel(id);delete this._callbacks[id]}},{"./native":3,"./now":4,"./performance":6,"./root":7}],3:[function(require,module,exports){"use strict";var root=require("./root");try{root.top.name;root=root.top}catch(e){}exports.request=root.requestAnimationFrame;exports.cancel=root.cancelAnimationFrame||root.cancelRequestAnimationFrame;exports.supported=false;var vendors=["Webkit","Moz","ms","O"];for(var i=0;i<vendors.length&&!exports.request;i++){exports.request=root[vendors[i]+"RequestAnimationFrame"];exports.cancel=root[vendors[i]+"CancelAnimationFrame"]||root[vendors[i]+"CancelRequestAnimationFrame"]}if(exports.request){exports.request.call(null,function(){exports.supported=true})}},{"./root":7}],4:[function(require,module,exports){"use strict";module.exports=Date.now||function(){return(new Date).getTime()}},{}],5:[function(require,module,exports){"use strict";var now=require("./now");exports.navigationStart=now()},{"./now":4}],6:[function(require,module,exports){"use strict";var now=require("./now");var PerformanceTiming=require("./performance-timing");var root=require("./root");exports.now=function(){if(root.performance&&root.performance.now)return root.performance.now();return now()-PerformanceTiming.navigationStart}},{"./now":4,"./performance-timing":5,"./root":7}],7:[function(require,module,exports){var root;if(typeof window!=="undefined"){root=window}else if(typeof self!=="undefined"){root=self}else{root=this}module.exports=root},{}]},{},[1])(1)});

var w = window,
		d = document,
		e = d.documentElement,
		g = d.getElementsByTagName('body')[0],
		x = w.innerWidth||e.clientWidth||g.clientWidth,
		y = w.innerHeight||e.clientHeight||g.clientHeight;

var animationFrame = new AnimationFrame();

var player = d.getElementById("player"),
		playerBox,
		mouse = {left:0, top:0},
		jumping = false;

var timeDiff, 
		prevTime = 0;

var tick = function(time) {
	timeDiff = 0.001 * (time - prevTime);
	prevTime = time;
	
	x = w.innerWidth||e.clientWidth||g.clientWidth;
	y = w.innerHeight||e.clientHeight||g.clientHeight;
	
	playerBox = player.getBoundingClientRect();
	
	// distance check
	// console.log(Math.abs(playerBox.left - mouse.left))
	if (!jumping && Math.abs(playerBox.left + 100 - mouse.left) < 100) {
		jumping = true;
		
		if (playerBox.left > 0.5 * x) {
			player.style.left = String(playerBox.left - 100 - Math.random()*0.5 * (x-300)) + "px";
		} else {
			player.style.left = String(playerBox.left + 100 + Math.random()*0.5 * (x-300)) + "px";
		}
		
		setTimeout(function(){ jumping = false; }, 350);
	}
	
	// eye movement
	if (mouse.left > playerBox.left) {
		player.classList.remove("left");
		player.classList.add("right");
	} else if (mouse.left <= playerBox.left) {
		player.classList.remove("right");
		player.classList.add("left");
	}
	
	
	// again!
	animationFrame.request(tick);
};

// mouse
document.addEventListener('mousemove', function(e){
	mouse = {left: e.pageX, top:e.pageY};
}, false);

// fire
animationFrame.request(tick);