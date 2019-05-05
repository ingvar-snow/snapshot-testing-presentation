


import getCounters from './counters.js';

test('getting counters for mobile platform', () => {

  expect(getCounters('mobile')).toMatchSnapshot();
  
});



