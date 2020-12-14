// Поиск пересечений двух массивов с использованием дополнительного ассоциативного массива
function getIntersection(arr1, arr2) {
    
    if(arr1.length < 1 || arr1.length < 1) return

    let result = []

    const arrAssociative = {}
    for(let value of arr1) { // в асоциативный массив занести все элементы первого массива (в качестве ключей - они же сами)
        arrAssociative[value] = value
    }

    for(let value of arr2) { // искать каждый элемент второго массива в ассоциативном массиве по ключу (значение в качестве ключа)
        if(arrAssociative[value]!==undefined) result.push(value)
    }

	return result
}

let arr1 = [1, 5, 23, 8, 3, 2, 3, 6]
let arr2 = [1, 3, 4, 5, 7, 8, 23]

console.log(`Массив arr1: ${arr1}`)
console.log(`Массив arr2: ${arr2}`)

let intersection = getIntersection(arr1, arr2)

console.log(`Найденное пересечение: ${intersection}`)
