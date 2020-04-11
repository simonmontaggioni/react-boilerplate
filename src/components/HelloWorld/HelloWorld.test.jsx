import React from 'react';
import { shallow } from 'enzyme';
import HelloWorld from './HelloWorld';

test('HellowWorld component renders the text Hello World inside it', () => {
  const wrapper = shallow(<HelloWorld />);
  const p = wrapper.find('p');
  expect(p.text()).toBe('Hello World');
});
