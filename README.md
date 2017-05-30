# night-map

Making it a little easier to loop through an array in nightmare
``` javascript
var arr = ['https://www.google.com/', 'https://www.npmjs.com/', 'https://nodejs.org/en/']
nightMap(nightmare, arr, (nightmare, url) => {
	return nightmare  // Make sure you are returning nightmare
		.goto(url)
		.evaluate(() => window.location.origin)  // I will collect what this returns with a .then()
}, (err,arr) => {
  console.log(arr) // => [ 'https://www.google.com','https://www.npmjs.com','https://nodejs.org' ]
})
```

Here is the actual code if you just want to copy paste
``` javascript
function nightMap(nightmare, array, iteri, callback) {
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
```
