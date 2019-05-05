import counters from './counters.json';

export default function(platform) {
	return counters.filter((item) => item.platform === platform)
}