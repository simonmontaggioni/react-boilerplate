import React from 'react';
import { shallow } from 'enzyme';
import TestPage from './TestPage';

describe('TestPage component', () => {
  test('should render H1 title', () => {
    const wrapper = shallow(<TestPage />);
    const h1 = wrapper.find('h1');

    expect(h1.exists()).toBeTruthy();
  });
});
