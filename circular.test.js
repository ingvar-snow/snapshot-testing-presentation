


let obj1 = {};
let obj2 = {
	pointerToObj1: obj1
}
obj1.pointerToObj2 = obj2;


test('trying to break jest', () => {

  expect(obj2).toMatchSnapshot();
  
});



