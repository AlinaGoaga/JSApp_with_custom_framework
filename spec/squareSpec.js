var square = new Square(2);

describe('constructor', () => {
  it('only accepts numbers', () => {
     expect(function() { new Square("r"); }).toThrowError('some other error');
  })
})

describe('constructor', () => {
  it('does not accept negative values', () => {
     expect(function() { new Square(-19); }).toThrowError('size should be a positive number');
  })
})

describe('area', () => {
  it('calculates the area of a square', () => {
    expect(square.area()).toEqual(5)
  })
})

describe('identity', () => {
  it('returns which square it is', () => {
    var square2 = new Square(4, 'km');
    expect(square2.typeOfSquare()).toContain('side length of 4km')
  })
})
