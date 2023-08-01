import { buttons } from './Constant';

describe("Constant", ()=>{
  test('buttons', () => {
    let result = buttons;
    expect(result.length).toEqual(4);
  });

});