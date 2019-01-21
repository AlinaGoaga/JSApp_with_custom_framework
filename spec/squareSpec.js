var square = new Square(2);

describe('area', () => {
  it('calculates the area of a square', () => {
    expect(square.area()).toEqual(4)
  })
})

describe('constructor', () => {
  it('only accepts numbers', () => {
     expect(function() { new Square("r"); }).toThrowError('argument is not a number');
  })
})

describe('constructor', () => {
  it('does not accept negative values', () => {
     expect(function() { new Square(-19); }).toThrowError('size should be a positive number');
  })
})
