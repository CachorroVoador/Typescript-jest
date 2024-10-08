// describe('Testando alguma coisa', () => {

// it('descrição do teste ', () => {
//   const number = 1;
//   expect(number).toBe(1);
// });
// test('descrição do sim', () => {
//   const nome = 'Eu';
//   expect(nome).toBe('Eu');
// });

// })

// describe('Testando outra coisa', () => {

//   it('descrição do teste ', () => {
//     const number = 1;
//     expect(number).toBe(1);
//   });
//   test('descrição do sim', () => {
//     const nome = 'Eu';
//     expect(nome).toBe('Eu');
//   });

//   })

import { Persistency } from "./persistency";

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());
  it('Should return undefined', () => {
    //System under test
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  })
  it('Should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  })
  it('Should call console.log once', () => {
    const sut = new Persistency();
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  })
})
