// Перебор методом грубой силы
function getCrossing(arr1, arr2) {
	let result = []
	
	for (let value of arr1) {
		if (inArray(value, arr2)) {
			if(!inArray(value, result)) result.push(value)
		}
	}
	
	return result
}

function inArray(value, arr){
	return arr.indexOf(value) !== -1
}


let arr1 = [1, 3, 2, 3, 6]
let arr2 = [2, 3, 4, 5, 7, 8]

console.log(getCrossing(arr1,arr2))