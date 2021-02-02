exports.min = function min(array=[]) {
	return array.length === 0 ? 0: array.reduce( (a,b) => Math.min(a, b));
};

exports.max = function max(array=[]) {
	return array.length === 0 ? 0: array.reduce( (a,b) => Math.max(a,b));

};

exports.avg = function avg(array=[]) {
	return array.length ===0 ? 0: array.reduce((acc, value) => acc+value,0)/array.length;
};
