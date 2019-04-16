import React from 'react'
import { shallow } from 'enzyme'
import Header from '../header'
import { COMPONENT_TITLE } from './../../../constants';

const setUp = (props={}) => {
  const component = shallow(<Header title = { COMPONENT_TITLE } />);
  return component;
}

const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
}

describe('Header component', () => { 
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it('should render section div without errors', () => {
    const wrapper = findByTestAtrr(component, 'section');
    expect(wrapper.length).toBe(1);
  });

  it('should render container div without errors', () => {
    const container = findByTestAtrr(component, 'container');
    expect(container.length).toBe(1);
  });

  it('should render title div without errors', () => {
    const title = findByTestAtrr(component, 'title');
    expect(title.length).toBe(1);
  });
})