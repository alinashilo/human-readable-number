module.exports = function toReadable (number) {
    const numbers = {
        0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
        10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen',
        18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty', 40: 'forty', 50: 'fifty', 60: 'sixty',
        70: 'seventy', 80: 'eighty', 90: 'ninety'
    }
    let readableNumber, hundreds, tens, units
    console.log(String(number))

    if (numbers[number]) {
        readableNumber = numbers[number];
    } else
        switch(String(number).length) {
            case 2:
                tens = Math.floor(number / 10) * 10
                units = - (tens - number)
                readableNumber = `${numbers[String(tens)]} ${numbers[String(units)]}`
                break;
            case 3:
                hundreds = Math.floor(number / 100) * 100
                tens = - (hundreds - number)
                if (number === hundreds) {
                    readableNumber = `${numbers[String(hundreds / 100)]} hundred`
                } else if (numbers[tens]) {
                    readableNumber = `${numbers[String(hundreds / 100)]} hundred ${numbers[String(tens)]}`
                } else {
                    tens = Math.floor(tens / 10) * 10
                    units = - (hundreds + tens - number)
                    readableNumber = `${numbers[String(hundreds / 100)]} hundred ${numbers[String(tens)]} ${numbers[String(units)]}`
                }
                break;
        }

    console.log(readableNumber)
    return readableNumber
}
