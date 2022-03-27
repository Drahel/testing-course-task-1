const {Build} = require('./Tower')

describe("Valid input", () => {

    test('Should return three-storey tower', () => {
        expect(Build(3)).toEqual(["  *  "," *** ","*****"])
    })
    
    test('Should return five-storey tower', () => {
        expect(Build(5)).toEqual(["    *    ","   ***   ","  *****  "," ******* ","*********"])
    })

})

describe("Invalid input value", () => {

    test('Should return input value error(negative number)', () => {
        expect(Build(-4)).toBe("Количество этажей не может быть меньше единицы")
    })

    test('Should return input value error(zero)', () => {
        expect(Build(0)).toBe("Количество этажей не может быть меньше единицы")
    })

    test('Should return input value error(float)', () => {
        expect(Build(2.5)).toBe("Количество этажей не может быть дробным числом")
    })

})

describe("Invalid input type", () => {

    test('Should return input type error(string)', () => {
        expect(Build("Three")).toBe("На вход принимается только число")
    })

    test('Should return input type error(string) v2', () => {
        expect(Build('3')).toBe("На вход принимается только число")
    })

    test('Should return input type error(array)', () => {
        expect(Build(["3"])).toBe("На вход принимается только число")
    })

    test('Should return input type error(null)', () => {
        expect(Build(null)).toBe("На вход принимается только число")
    })

    test('Should return input type error(undefined)', () => {
        expect(Build(undefined)).toBe("На вход принимается только число")
    })

    test('Should return input type error(emptiness)', () => {
        expect(Build()).toBe("На вход принимается только число")
    })

})