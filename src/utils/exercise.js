function Max(a, b) {
    return a > b ? a : b;
}

function Min(a, b) {
    return a < b ? a : b;
}

module.exports = {

    findMax(arrFindMax) {
        let len = arrFindMax.length;
        let max = arrFindMax[0];
        for (let i = 0; i < len; i++)
            max = Max(max, arrFindMax[i]);
        return max;
    },

    findMin(arrFindMin) {
        let len = arrFindMin.length;
        let min = arrFindMin[0];
        for (let i = 0; i < len; i++)
            min = Min(min, arrFindMin[i]);
        return min;
    },

    reformatData(data) {
        let dataReturn = {}
        let role;
        for (let i in data) {
            role = dataReturn[data[i].role]
            if (typeof (role) == 'undefined') {
                dataReturn[data[i].role] = [];
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
        let count = 0
        for (let i = 0; i < numbers.length; i++) {
            for (let j = i + 1; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] == 10)
                    count++
            }
        }
        return count
    }

}