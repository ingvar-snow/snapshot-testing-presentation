


import getCounters from './counters.js';

test('getting counters for mobile platform', () => {

  expect(getCounters('mobile')).toEqual([
  	{"id": "22222222", "platform": "mobile", "type": "yandex-metrika"},
  	{"id": "33333333", "platform": "mobile", "type": "yandex-metrika"}
  ]);
});



