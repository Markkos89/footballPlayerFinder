import React from 'react'
import { shallow } from 'enzyme'
import { COMPONENT_TITLE } from './../../constants';
import Header from './Header'

const setUp = (props={}) => {
  // const component = shallow(<Header title={ COMPONENT_TITLE } />);
  const component = shallow(<Header {...props} />);
  return component;
}

describe('Header component', () => { 
  let component;
  beforeEach(() => {
    component = setUp({COMPONENT_TITLE});
  });

  it('should render section div without errors', () => {
    const wrapper = component.find('.section');
    expect(wrapper.length).toBe(1);
  });

  it('should render container div without errors', () => {
    const container = component.find('.container');
    expect(container.length).toBe(1);
  });

  it('should render title div without errors', () => {
    const title = component.find('.title');
    expect(title.length).toBe(1);
  });
})