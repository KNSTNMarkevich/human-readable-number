function toReadable (number) {
    units = [
        'zero',
        'one',
        'two', 
        'three', 
        'four', 
        'five', 
        'six', 
        'seven', 
        'eight', 
        'nine'
    ]
    firstDozen = [
        'ten', 
        'eleven', 
        'twelve', 
        'thirteen', 
        'fourteen', 
        'fifteen', 
        'sixteen', 
        'seventeen', 
        'eighteen', 
        'nineteen'
    ]
    dozens = [
        'ten', 
        'twenty', 
        'thirty', 
        'forty', 
        'fifty', 
        'sixty', 
        'seventy', 
        'eighty', 
        'ninety'
    ]
    hundreds = [
        'one hundred',
        'two hundred', 
        'three hundred', 
        'four hundred', 
        'five hundred', 
        'six hundred', 
        'seven hundred', 
        'eight hundred', 
        'nine hundred'
    ]
    if (number < 10) {
        return units[number]
    }
    if (number >= 10 && number <= 19){
        return firstDozen[number % 10]
    }
    if(number >=20 && number <=99){
        if (number % 10 === 0){
            return dozens[number / 10 - 1]
        }
        return `${dozens[Math.trunc(number / 10) - 1]} ${units[number % 10]}`
    }

    let arr = number.toString().split('')
    let tempHundreds = arr.shift()
    let tempDozens = arr.shift()
    let tempUnits = arr.shift()
    
    if(number >= 100 <=999){
        if (number % 100 === 0){
            return hundreds[number / 100 -1]
        }
        else if (number % 10 === 0 && number % 100 !==0){
            return `${hundreds[tempHundreds -1]} ${dozens[tempDozens -1]}`
        }
        else if (tempDozens == 1 && tempUnits != 0){
            return `${hundreds[tempHundreds -1]} ${firstDozen[tempUnits]}`
        }
        else {
            return `${hundreds[tempHundreds -1]} ${dozens[tempDozens -1]} ${units[tempUnits]}`
        }
    }
}




console.log(toReadable(0))
console.log(toReadable(1))
console.log(toReadable(9))
console.log(toReadable(11))
console.log(toReadable(19))
console.log(toReadable(20))
console.log(toReadable(19))
console.log(toReadable(21))
console.log(toReadable(33))
console.log(toReadable(99))
console.log(toReadable(100))
console.log(toReadable(900))
console.log(toReadable(110))
console.log(toReadable(990))
console.log(toReadable(111))
console.log(toReadable(112))
console.log(toReadable(284))
console.log(toReadable(739))



// let number = 183;
// let arr = number.toString().split('');
// let tempHundreds = arr.shift()
// console.log(arr)
// console.log(tempHundreds)


// let arr = [0,2,3,4,5,1,4,2,3,4,5]
// console.log(arr.indexOf())
