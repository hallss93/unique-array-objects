# unique-array-objects

> Módulo para exclusão de objetos repetidos. O módulo considera key e values idênticos e a estrutura idêntica.

## Como iniciar

_Start:_

1. Instale a dependência com `npm i --save unique-array-objects`
2. Importe a biblioteca:
````javascript
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
 * RETORNARÁ:
 * 
 * 0 => id: 1, nome: 'Jhon'
 * 1 => id: 2, nome: 'Jhon'
 * 2 => id: 1, nome: 'Jhon', altura: 1.71
 */
        ```