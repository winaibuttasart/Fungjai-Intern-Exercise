function sortNumber(a, b) {
    return a - b
}

module.exports = {

    findMax(arrFindMax) {
        return arrFindMax.sort(sortNumber)[arrFindMax.length - 1]
    },

    findMin(arrFindMin) {
        return arrFindMin.sort(sortNumber)[0]
    },

    reformatData(data) {
        let dataReturn = {}
        for (let i in data) {
            if (typeof (dataReturn[data[i].role]) == 'undefined') {
                dataReturn[data[i].role] = []
                dataReturn[data[i].role].push({
                    "nickname": data[i].name
                })
            } else {
                dataReturn[data[i].role].push({
                    "nickname": data[i].name
                })
            }
        }
        return dataReturn
    },

    counterTen(numbers) {
        let count = 0,
            end = numbers.length - 1

        numbers = numbers.sort(sortNumber)

        for (let i = 0; i < end; i++) {
            for (let j = end; j > i; j--) {
                let tmp = numbers[i] + numbers[j]
                if (tmp == 10) {
                    count++
                } else if (tmp < 10) {
                    break
                } else {
                    if (numbers[i + 1] + numbers[j] > 10) {
                        end--
                    }
                }
            }
        }
        return count
    }

}