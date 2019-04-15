import React from 'react'
import { shallow } from 'enzyme'
import { COMPONENT_TITLE } from './../../constants';
import FinderPlayerForm from './FinderPlayerForm'

const setUp = (props={}) => {
  // const component = shallow(<Header title={ COMPONENT_TITLE } />);
  const component = shallow(<FinderPlayerForm {...props} />);
  return component;
}

describe('FinderPlayerForm component', () => { 
  let component;
  beforeEach(() => {
    component = setUp({});
  });

  it('should render a container div without errors', () => {
    const wrapper = component.find('.container');
    expect(wrapper.length).toBe(1);
  });

  it('should render a level div without errors', () => {
    const wrapper = component.find('.level');
    expect(wrapper.length).toBe(1);
  });
  
})