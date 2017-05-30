# night-map

Making it a little easier to loop through an array in nightmare
``` javascript
var nightMap = require('night-map')
var arr = ['https://www.google.com/', 'https://www.npmjs.com/', 'https://nodejs.org/en/']

nightMap(nightmare, arr, (nightmare, url) => {
	return nightmare  // Make sure you are returning nightmare
		.goto(url)
		.evaluate(() => window.location.origin)  // I will collect what this returns with a .then()
}, (err,arr) => {
  console.log(arr) // => [ 'https://www.google.com','https://www.npmjs.com','https://nodejs.org' ]
})
```
