"use strict";
class App {
    constructor() {
        this.xmlns = "http://www.w3.org/2000/svg";
        this.xlinkns = "http://www.w3.org/1999/xlink";
        this.select = e => document.querySelector(e);
        this.selectAll = e => document.querySelectorAll(e);
        this.mainTl = new TimelineMax();
        this.mainSVG = this.select('.mainSVG');
        this.ring = this.select('.ring');
        this.whole = this.select('.whole');
        this.dot = this.select('#dot');
        this.follower = this.select('#follower');
        this.particle = this.select('.particle');
        this.pContainer = this.select('#pContainer');
        this.particlePool = [];
        this.numParticles = 275;
        this.particleCount = 0;
        this.colorArray = ["#451A60", "#25245F", '#26247D', '#303894', '#1F45B9', '#2F5AA0', '#3276CD', '#3B94E6', '#41C2F4', '#50F7FE', '#7DFFFE', '#EABEFC', '#64A8AF'];
        this.createParticles = () => {
            let i = this.numParticles, p;
            while (--i > -1) {
                p = this.particle.cloneNode(true);
                this.pContainer.appendChild(p);
                TweenMax.set(p, {
                    alpha: 0,
                    fill: this.colorArray[i % this.colorArray.length]
                });
                this.particlePool.push(p);
                this.completeParticle(p);
            }
        };
        this.playParticle = () => {
            let p = this.particlePool[this.particleCount];
            let curr = { x: this.dot._gsTransform.x, y: this.dot._gsTransform.y };
            let rad = Math.atan2(curr.y - 300, curr.x - 400);
            let deg = Math.round(rad * (180 / Math.PI));
            TweenMax.set(p, {
                x: this.randomBetween(curr.x, curr.x - (strokeWidth / 10)),
                y: this.randomBetween(curr.y, curr.y + (strokeWidth / 10)),
                alpha: 1,
                transformOrigin: '50% 50%'
            });
            let tl = new TimelineMax();
            tl.to(p, this.randomBetween(3, 6), {
                physics2D: {
                    velocity: this.randomBetween(5, 56),
                    angle: (deg % 2) ? deg : deg - 180,
                    gravity: this.randomBetween(-3, 3)
                },
                onUpdate: this.onUpdate,
                scale: this.randomBetween(10, 33) / 10,
                onComplete: this.completeParticle,
                onCompleteParams: [p],
                ease: Expo.easeInOut,
                alpha: 0
            });
            this.particleCount++;
            this.particleCount = (this.particleCount >= this.numParticles) ? 0 : this.particleCount;
        };
        this.completeParticle = (p) => {
            TweenMax.set(p, {
                x: -10,
                y: -10,
                //alpha:1,
                scale: this.randomBetween(5, 20) / 10
            });
        };
        this.randomBetween = (min, max) => {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
        const strokeWidth = 12;
        TweenMax.set(this.ring, {
            strokeWidth: strokeWidth,
            svgOrigin: '400 300'
        });
        TweenMax.set(this.whole, {
            svgOrigin: '400 300'
        });
        TweenMax.to('#rectGrad', 2, {
            opacity: 0,
            repeat: -1,
            yoyo: true
        });
        const tl = new TimelineMax({ repeat: -1, yoyo: false, onUpdate: this.playParticle, onUpdateScope: this });
        let orbitPath = MorphSVGPlugin.pathDataToBezier(this.ring, {
            offsetX: 0,
            offsetY: 0
        });
        tl.to(this.dot, 2.6, {
            bezier: {
                type: "cubic",
                values: orbitPath,
                autoRotate: false
            },
            ease: Linear.easeNone
        });
        this.createParticles();
    }
}
TweenMax.set('svg', {
    visibility: 'visible'
});
let app = new App();