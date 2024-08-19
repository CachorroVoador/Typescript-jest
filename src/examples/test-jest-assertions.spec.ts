describe('Primitive Values', () => {
  it('shoud test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).not.toBeNull();
    expect(number).toHaveProperty('toString');
  });
  it('should split tests', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).not.toBeNull();
    expect(number).toHaveProperty('toString');
  });
});



describe('Objects', () => {
  it('shoud test jest assertions', () => {
    const person = {
      name: 'Nathan', age: 30
    }
    const person2 = {
      ...person
    }

    expect(person2).toEqual(person);
    expect(person).toHaveProperty('age', 30);
  });
});
