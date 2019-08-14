# unique-array-objects

> Module for deleting repeated objects. The module considers romantic key and values ​​and the visual structure.

## How to start

_Start:_

1. Install the dependency with `npm i --save unique-array-objects`
2. Import the library:
````javascript
/*
* Use as function
*/
import uab from 'unique-array-objects';
var array = [
    {
        id: 1, 
        nome: 'Jhon'
    },
    { 
        id: 2, 
        nome: 'Jhon'
    }, {
        id: 1, 
        nome: 'Jhon'
    },
    { 
        id: 1, 
        nome: 'Jhon',
        altura: 1.71
    }
]
console.log(uab(array)
/**
 * WILL RETURN:
 * 
 * 0 => id: 1, nome: 'Jhon'
 * 1 => id: 2, nome: 'Jhon'
 * 2 => id: 1, nome: 'Jhon', altura: 1.71
 */


/*
* Use as middleware on Node
*/
router.get('/test', require('unique-array-objects/middle'), function (req, res) {
	var array = [{
			id: 1,
			nome: 'Jhon'
		},
		{
			id: 2,
			nome: 'Jhon'
		}, {
			id: 1,
			nome: 'Jhon'
		},
		{
			id: 1,
			nome: 'Jhon',
			altura: 1.71
		}
	]
	res.send(req.uac(array))
})
```