import React from 'react';
import { shallow } from 'enzyme';
import Number from '../../components/Number';

const handleSelectedSpy = jest.fn();

test('should render Number correctly', () => {
  const wrapper = shallow(
    <Number isActive={false} number={10} handleSelected={handleSelectedSpy} />
  );
  expect(wrapper).toMatchSnapshot();
});

test('should select a number', () => {
  const wrapper = shallow(
    <Number isActive={false} number={10} handleSelected={handleSelectedSpy} />
  );
  wrapper.find('input').simulate('change', { target: { checked: true } });
  expect(handleSelectedSpy).toBeCalled();
});
