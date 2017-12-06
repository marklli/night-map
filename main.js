module.exports = function(Nightmare){
	Nightmare.action('map', function (iteri, arr, done) {
		// Thanks to @rosshinkley 's code for the Promise.resolve([]) and way of passing the results around
		// https://github.com/rosshinkley/nightmare-examples/blob/master/docs/common-pitfalls/async-operations-loops.md
		arr.reduce((acm, elm, index) =>
			acm.then(results =>
				iteri(elm).then(result => {
					results.push({ index, result });
					return results;
				})), Promise.resolve([])).then(results => {
			this.evaluate_now(function (results) {
				return results
			}, done, results)
		})
	})
	return Nightmare
}
