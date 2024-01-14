const getFactorial = require("./factorial")


test('getFactorial(3) shoud return 6', () => {

  const actual = getFactorial(3)
  const expected = 6

  expect(actual).toBe(expected)
}
)
