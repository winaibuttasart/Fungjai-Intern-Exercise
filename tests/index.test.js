const expect = require('chai').expect
const resolve = require('path').resolve
const utils = require(resolve('src/utils/exercise'))

describe('Intern Testing', () => {
    it('หาตัวเลขที่มากที่สุด', () => {
        expect(utils.findMax([3, 6, 9, 10, 1, 4, 8, 5, 7, 2])).to.equal(10)
        expect(utils.findMax([30, 60, 90, 100, 10, 40, 80, 50, 70, 20])).to.equal(100)
    })

    it('หาตัวเลขที่น้อยที่สุด', () => {
        expect(utils.findMin([3, 6, 9, 10, 1, 4, 8, 5, 7, 2])).to.equal(1)
        expect(utils.findMin([30, 60, 90, 100, 10, 40, 80, 50, 70, 20])).to.equal(10)
    })

    it('เปลี่ยนรูปแบบข้อมูลให้ตรงตามโจทย์', () => {
        const data = [
            {
                name: 'ball',
                role: 'developer'
            },
            {
                name: 'mint',
                role: 'developer'
            },
            {
                name: 'tongz',
                role: 'developer'
            },
            {
                name: 'gee',
                role: 'designer'
            },
            {
                name: 'pat',
                role: 'designer'
            },
            {
                name: 'mod',
                role: 'ux'
            },
            {
                name: 'mew',
                role: 'content'
            },
            {
                name: 'jack',
                role: 'content'
            }
        ]
        const expectData = {
            content: [
                {
                    nickname: 'mew'
                },
                {
                    nickname: 'jack'
                }
            ],
            developer: [
                {
                    nickname: 'ball'
                },
                {
                    nickname: 'mint'
                },
                {
                    nickname: 'tongz'
                }
            ],
            designer: [
                {
                    nickname: 'gee'
                },
                {
                    nickname: 'pat'
                }
            ],
            ux: [
                {
                    nickname: 'mod'
                }
            ]
        }
        expect(expectData).to.deep.equal(utils.reformatData(data))
    })

    it('หาจำนวนคู่ที่พวกแล้วได้ 10 ว่ามีจำนวนกี่คู่', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        const actual = utils.counterTen(numbers)
        expect(actual).to.equal(4)
    })
})

console.log(expect)
