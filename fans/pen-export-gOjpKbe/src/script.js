/* jshint newcap: false */

/* globals Animator, Painters, Snap, dat */

(function () {

	'use strict';

	// animation loop
	var animator = new Animator({});

	// svg sizes
	var size = 160,
		mask = 320;

	/**
	 * fluid wave
	 */
	var wave = new Painters.wave({
		pathLength: mask,
		waveLength: size / 2
	});
	// dynamic values
	wave.scaledWaveHeight = size / 8;
	wave.scaledVelocity = size / 300;
	// add to animation loop
	animator.painters.push(wave);
	// datgui name
	wave.datName = 'Fluid Wave';

	/**
	 * fluid fizz
	 */
	var fizz1 = new Painters.fizz({
		selector: '#flask #bubbles',
		spawnArea: [[-size * 3 / 8, 0], [size * 3 / 8, 0]],
		spawnTime: 100,
		boundArea: [[-size / 2, -size / 2], [size / 2, size / 2]],
		minRadius: size / 100,
		a: [0, -size / 600000]
	});
	// dynamic values
	fizz1.scaledSpawnRate = 0.12;
	fizz1.scaledBoundTime = 600;
	fizz1.scaledMaxRadius = size / 20;
	// add to animation loop
	animator.painters.push(fizz1);
	// datgui name
	fizz1.datName = 'Fluid Fizz';

	/**
	 * mask fizz
	 */
	var fizz2 = new Painters.fizz({
		selector: '#mask #bubbles',
		spawnArea: [[-size * 3 / 8, 0], [size * 3 / 8, 0]],
		spawnTime: 400,
		boundArea: [[-size / 2, -size / 2], [size / 2, size / 2]],
		minRadius: size / 100,
		a: [0, -size / 600000]
	});
	// dynamic values
	fizz2.scaledSpawnRate = 0.03;
	fizz2.scaledBoundTime = 1600;
	fizz2.scaledMaxRadius = size / 10;
	// add to animation loop
	animator.painters.push(fizz2);
	// datgui name
	fizz2.datName = 'Mask Fizz';

	/**
	 * fluid controller
	 */
	var fluid = {
		boil: 0.55,
		fill: 0.5,
		move: function () {
			var k;
			// scale values
			// for boil level
			k = this.boil;
			k = k > 1 ? 1 : k < 0 ? 0 : k;
			// fluid wave
			wave.waveHeight = wave.scaledWaveHeight * k;
			wave.velocity = wave.scaledVelocity * k;
			// fluid fizz
			fizz1.spawnRate = fizz1.scaledSpawnRate * k;
			fizz1.boundTime = fizz1.scaledBoundTime * k;
			fizz1.maxRadius = fizz1.scaledMaxRadius * k;
			// mask fizz
			fizz2.spawnRate = fizz2.scaledSpawnRate * k;
			fizz2.boundTime = fizz2.scaledBoundTime * k;
			fizz2.maxRadius = fizz2.scaledMaxRadius * k;
			// scale values
			// for fill level
			k = (1 - this.fill - 0.5);
			k = k > 0.5 ? 0.5 : k < -0.5 ? -0.5 : k;
			// fluid fizz
			fizz1.spawnArea[0][1] = k * size - wave.waveHeight;
			fizz1.spawnArea[1][1] = k * size + wave.waveHeight;
			// mask fizz
			fizz2.spawnArea[0][1] = size / 2 - wave.waveHeight;
			fizz2.spawnArea[1][1] = size / 2 + wave.waveHeight;
		},
		draw: function () {
			var k = (1 - this.fill - 0.5) * size,
				v = mask / 2;
			Snap('#flask #fluid').attr({
				'd':
				'M' + v + ',' + v +
				' ' + -v + ',' + v +
				' ' + -v + ',' + k +
				' ' + wave.path + 'Z'
			});

		}
	};
	// add to animation loop
	animator.painters.push(fluid);
	// datgui name
	fluid.datName = 'Fluid Controller';

	/**
	 * dat gui
	 */
	(function () {
		var i, key, gui, dir, painter;
		gui = new dat.GUI();
		// create folder for each painter
		for (i = 0; i < animator.painters.length; i ++) {
			painter = animator.painters[i];
			dir = gui.addFolder(painter.datName);
			// create element for each property
			for (key in painter) {
				if (painter.hasOwnProperty(key) &&
					typeof painter[key] !== 'object' &&
					key !== 'datName') {
					dir.add(painter, key);
				}
			}
		}
	}) ();

}) ();