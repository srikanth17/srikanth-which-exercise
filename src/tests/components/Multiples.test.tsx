import React from 'react';
import { shallow } from 'enzyme';
import Multiples from '../../components/Multiples';
import Number from '../../components/Number';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

test('should render Multiples correctly', () => {
  const wrapper = shallow(<Multiples numbers={numbers} />);
  expect(wrapper).toMatchSnapshot();
});

test('renders all Number', () => {
  const wrapper = shallow(<Multiples numbers={numbers} />);
  expect(wrapper.find(Number)).toHaveLength(numbers.length);
});
