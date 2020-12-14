// Алгортитм с использованием сортировки сортировки
function getIntersection(arr1, arr2) {
    
    if(arr1.length < 1 || arr1.length < 1) return    
    let result = []

    arr1 = arr1.sort((a,b)=>{return a-b})
    arr2 = arr2.sort((a,b)=>{return a-b})
    
    console.log(`Отсортированный массив arr1: ${arr1}`)
    console.log(`Отсортированный массив arr1: ${arr2}`)

    if(arr1[0]<arr2[0]){ // если элемент первого множества меньше элемента второго множества, поменять массивы местами
        let tmpArr = arr1
        arr1 = arr2
        arr2 = tmpArr
    }

    for (var i = 0; i < arr1.length - 1; i++) {
        for (let value of arr2) {
            if(value > arr1[i]) break
            if(value === arr1[i] && result.indexOf(value)===-1) {
                result.push(value)
            }
        }
    }

	return result
}

let arr1 = [1, 5, 23, 8, 3, 2, 3, 6]
let arr2 = [1, 3, 4, 5, 7, 8, 23]

let intersection = getIntersection(arr1, arr2)

console.log(`Найденное пересечение: ${intersection}`)
