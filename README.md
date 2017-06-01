# night-map

Making it a lot easier to loop through an array in nightmare
``` javascript
// Include Like this
var Nightmare = require('nightmare')
require('night-map')(Nightmare)
var nightmare = Nightmare({show: true})

// Or like this, if your into one-liners like me ;)
var nightmare = require('night-map')(require('nightmare'))({show: true})

var urls = ['https://www.google.com/', 'https://www.npmjs.com/', 'https://nodejs.org/en/']

nightmare
	// Pass a function that returns a nightmare thing
	// I will call this function on every single element in the array
	.map(function (url) {		
		return nightmare		
			.goto(url)	
			.title()			
		// I use .then() to collect what ever .title() spits out
	}, urls) // pass array as second parameter in typical nightmare fashion			
	.then(results => {
		console.log(results)	// => [ 'Google', 'npm', 'Node.js' ]
		return nightmare.end()
	})
```
