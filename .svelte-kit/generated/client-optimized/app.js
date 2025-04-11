export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10'),
	() => import('./nodes/11'),
	() => import('./nodes/12'),
	() => import('./nodes/13'),
	() => import('./nodes/14'),
	() => import('./nodes/15'),
	() => import('./nodes/16'),
	() => import('./nodes/17'),
	() => import('./nodes/18'),
	() => import('./nodes/19'),
	() => import('./nodes/20'),
	() => import('./nodes/21'),
	() => import('./nodes/22'),
	() => import('./nodes/23'),
	() => import('./nodes/24')
];

export const server_loads = [4];

export const dictionary = {
		"/": [5],
		"/communities": [6,[2]],
		"/contact": [7],
		"/dashboard": [8],
		"/investment-preferences": [9],
		"/investor-profile/question1": [10],
		"/investor-profile/question2": [11],
		"/investor-profile/question3": [12],
		"/investor-profile/question4": [13],
		"/investor-profile/question5": [14],
		"/login": [15],
		"/messages": [16,[3]],
		"/messages/channel/[id]": [17,[3]],
		"/messages/dm/[id]": [18,[3]],
		"/portfolio-dashboard": [19],
		"/projects/[id]": [~20,[4]],
		"/projects/[id]/team": [~21,[4]],
		"/recommended-portfolio": [22],
		"/shop": [~23],
		"/signup": [24]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
	
	reroute: (() => {}),
	transport: {}
};

export const decoders = Object.fromEntries(Object.entries(hooks.transport).map(([k, v]) => [k, v.decode]));

export const hash = false;

export const decode = (type, value) => decoders[type](value);

export { default as root } from '../root.js';