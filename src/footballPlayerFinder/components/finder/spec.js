import React from 'react'
import { shallow } from 'enzyme'
import FinderPlayerForm from '../finder'

const setUp = (props={}) => {
  const component = shallow(<FinderPlayerForm initialValues={ initialValues } 
    onSubmit={ onSubmit }  />);
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
  
});