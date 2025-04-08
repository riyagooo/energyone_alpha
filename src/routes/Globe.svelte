<script>
	import { onMount } from 'svelte';
	import * as d3 from 'd3';
	import * as topojson from 'topojson';
	import topodata from '$lib/countries-110m.json';

	/*********************************************************
	 *  Versor helper class (from your original code example)
	 *********************************************************/
	class Versor {
		static fromAngles([l, p, g]) {
			l *= Math.PI / 360;
			p *= Math.PI / 360;
			g *= Math.PI / 360;
			const sl = Math.sin(l), cl = Math.cos(l);
			const sp = Math.sin(p), cp = Math.cos(p);
			const sg = Math.sin(g), cg = Math.cos(g);
			return [
				cl * cp * cg + sl * sp * sg,
				sl * cp * cg - cl * sp * sg,
				cl * sp * cg + sl * cp * sg,
				cl * cp * sg - sl * sp * cg
			];
		}

		static toAngles([a, b, c, d]) {
			return [
				Math.atan2(2 * (a * b + c * d), 1 - 2 * (b * b + c * c)) * 180 / Math.PI,
				Math.asin(Math.max(-1, Math.min(1, 2 * (a * c - d * b)))) * 180 / Math.PI,
				Math.atan2(2 * (a * d + b * c), 1 - 2 * (c * c + d * d)) * 180 / Math.PI
			];
		}

		static interpolateAngles(a, b) {
			const i = Versor.interpolate(Versor.fromAngles(a), Versor.fromAngles(b));
			return t => Versor.toAngles(i(t));
		}

		static interpolateLinear([a1, b1, c1, d1], [a2, b2, c2, d2]) {
			a2 -= a1;
			b2 -= b1;
			c2 -= c1;
			d2 -= d1;
			const x = new Array(4);
			return t => {
				const l = Math.hypot(
					x[0] = a1 + a2 * t,
					x[1] = b1 + b2 * t,
					x[2] = c1 + c2 * t,
					x[3] = d1 + d2 * t
				);
				x[0] /= l;
				x[1] /= l;
				x[2] /= l;
				x[3] /= l;
				return x;
			};
		}

		static interpolate([a1, b1, c1, d1], [a2, b2, c2, d2]) {
			let dot = a1 * a2 + b1 * b2 + c1 * c2 + d1 * d2;
			if (dot < 0) {
				a2 = -a2;
				b2 = -b2;
				c2 = -c2;
				d2 = -d2;
				dot = -dot;
			}
			if (dot > 0.9995) {
				return Versor.interpolateLinear([a1, b1, c1, d1], [a2, b2, c2, d2]);
			}
			const theta0 = Math.acos(Math.max(-1, Math.min(1, dot)));
			const x = new Array(4);
			const l = Math.hypot(a2 -= a1 * dot, b2 -= b1 * dot, c2 -= c1 * dot, d2 -= d1 * dot);
			a2 /= l;
			b2 /= l;
			c2 /= l;
			d2 /= l;
			return t => {
				const theta = theta0 * t;
				const s = Math.sin(theta);
				const c = Math.cos(theta);
				x[0] = a1 * c + a2 * s;
				x[1] = b1 * c + b2 * s;
				x[2] = c1 * c + c2 * s;
				x[3] = d1 * c + d2 * s;
				return x;
			};
		}
	}

	/*********************************************************
	 *  Svelte Globe state
	 *********************************************************/
	let width = 600;
	let height = 600;

	// We'll add a slight tilt to the globe's "pitch".
	let tilt = 10;

	// Track the current rotation of the globe (d3-geo style)
	// .rotate([lambda, phi, gamma]) => negative of lon, negative of lat
	let currentRotation = [0, tilt, 0];

	// References for drawing
	let canvas;
	let context;
	let projection;
	let path;

	// Our "globe" background – a simple sphere
	let globe = { type: 'Sphere' };

	// GeoJSON data we’ll fetch:
	let countries; // Country polygons
	let borders;   // Mesh for borders

	/*********************************************************
	 *  onMount: load data, setup canvas, draw globe
	 *********************************************************/
	onMount(async () => {
		await loadData();

		setupCanvas();
		setupProjection();
		initialRender();
		await updateCoordinates();
	});


	/*********************************************************
	 *  Load TopoJSON + convert to GeoJSON
	 *********************************************************/
	async function loadData() {
		// Convert from TopoJSON -> GeoJSON (FeatureCollection)
		// The object name in countries-110m.json is "countries"
		const world = topojson.feature(topodata, topodata.objects.countries);
		countries = world;

		// For nice stroke lines between countries:
		// A mesh of adjacent polygons (ignore interior boundaries within the same country)
		borders = topojson.mesh(topodata, topodata.objects.countries, (a, b) => a !== b);
	}

	/*********************************************************
	 *  Setup the Canvas & context
	 *********************************************************/
	function setupCanvas() {
		canvas = document.getElementById('globeCanvas');

		// Handle high DPI screens
		const dpr = window.devicePixelRatio || 1;
		canvas.width = width * dpr;
		canvas.height = height * dpr;

		context = canvas.getContext('2d');
		context.scale(dpr, dpr);
	}

	/*********************************************************
	 *  Setup the Projection & Path
	 *********************************************************/
	function setupProjection() {
		// Start with a sphere-based fitExtent
		projection = d3.geoOrthographic()
			.fitExtent([[10, 10], [width - 10, height - 10]], globe)
			.rotate(currentRotation);

		path = d3.geoPath(projection, context);
	}

	/*********************************************************
	 *  Initial draw
	 *********************************************************/
	function initialRender() {
		render();
	}

	/*********************************************************
	 *  Main render function
	 *********************************************************/
	function render(arc) {
		// Clear the canvas
		context.clearRect(0, 0, width, height);

		// Draw all land
		if (countries) {
			context.beginPath();
			path(countries);
			context.fillStyle = '#bcd';
			context.fill();
		}

		// Draw borders
		if (borders) {
			context.beginPath();
			path(borders);
			context.strokeStyle = '#000';
			context.lineWidth = 1.5;
			context.stroke();
		}

		// Draw the outline of the sphere
		context.beginPath();
		path(globe);
		context.strokeStyle = '#fff';
		context.lineWidth = 1.5;
		context.stroke();

		// Optionally, draw an arc if provided
		if (arc) {
			context.beginPath();
			path(arc);
			context.strokeStyle = 'indigo';
			context.lineWidth = 2;
			context.stroke();
		}
	}

	/*********************************************************
	 *  Animate rotation to given lat/lon
	 *********************************************************/
	function goToCoordinates(longitude, latitude) {
		// p1, p2 are "geo" coords (lon, lat) – but we must invert or offset for d3.geoOrthographic
		// because d3 rotates by [-lon, -lat, gamma].
		let p1 = [-currentRotation[0], tilt - currentRotation[1]];
		let p2 = [longitude, latitude];

		let r1 = [currentRotation[0], currentRotation[1], currentRotation[2]];
		let r2 = [-p2[0], tilt - p2[1], 0]; // We'll flatten out gamma to 0

		// Great-circle path for visual arc:
		const geoInterpolate = d3.geoInterpolate([p1[0], p1[1]], [p2[0], p2[1]]);
		// Quaternion-based rotation interpolation
		const interpolateRotation = Versor.interpolateAngles(r1, r2);

		// D3 transition
		d3.select({})
			.transition()
			.duration(1250)
			.tween('render', () => t => {
				projection.rotate(interpolateRotation(t));
				// partial arc from p1 => geoInterpolate(t)
				let arcData = {
					type: 'LineString',
					coordinates: [
						[p1[0], p1[1]],
						geoInterpolate(t)
					]
				};
				render(arcData);
			})
			.on('end', () => {
				// Second half: from geoInterpolate => p2
				d3.select({})
					.transition()
					.duration(600)
					.tween('render', () => t => {
						let arcData = {
							type: 'LineString',
							coordinates: [
								geoInterpolate(t),
								[p2[0], p2[1]]
							]
						};
						// Freeze final rotation at each frame
						projection.rotate(interpolateRotation(1));
						render(arcData);
					})
					.on('end', () => {
						// Update currentRotation so future calls start from here
						currentRotation = [r2[0], r2[1], r2[2]];
					});
			});
	}

	async function updateCoordinates() {
		const greenEnergyProjects = [
			{
				country: 'Kenya',
				project: 'Lake Turkana Wind Power Project',
				latitude: 3.6,       // Approx. location near Lake Turkana
				longitude: 36.85
			},
			{
				country: 'Morocco',
				project: 'Ouarzazate Solar Power Station (Noor Complex)',
				latitude: 30.92,     // Approx. location near Ouarzazate
				longitude: -6.91
			},
			{
				country: 'Ethiopia',
				project: 'Grand Ethiopian Renaissance Dam (Hydropower)',
				latitude: 11.214,    // Approx. location on the Blue Nile
				longitude: 35.092
			},
			{
				country: 'Bangladesh',
				project: 'Solar Home System (SHS) Program',
				latitude: 23.8103,   // Approx. location near Dhaka
				longitude: 90.4125
			},
			{
				country: 'Vietnam',
				project: 'Ninh Thuan Wind Farm',
				latitude: 11.708,    // Approx. location in Ninh Thuan Province
				longitude: 108.870
			},
			{
				country: 'Nepal',
				project: 'Solu Khola Hydro Electric Project',
				latitude: 27.532,    // Approx. location in Solu Khola region
				longitude: 86.597
			}
		];
		while (true) {
			for (const project of greenEnergyProjects) {
				const { country, project: projectName, latitude, longitude } = project;
				goToCoordinates(longitude, latitude);
				await new Promise((resolve) => setTimeout(resolve, 3000));
			}
		}

	}

</script>

<style>
    .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;
    }


</style>

<div class="container">
	<canvas
		id="globeCanvas"
		style="width:{width}px; height:{height}px">
	</canvas>


</div>
