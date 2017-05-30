module.exports = function (nightmare, array, iteri, callback) {
	var arr = []
	function next(index) {
		if (index < array.length) {
			return iteri(nightmare, array[index])
				.then(val => {
					arr.push(val)
					return next(index + 1)
				})
				.catch(err => {
					callback(err)
				})
		} else {
			callback(null,arr)
		}
	}
	nightmare.then(() => {
		return next(0)
	})
}
