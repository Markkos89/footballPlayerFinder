import React from 'react'
import { shallow } from 'enzyme'
import FinderPlayerForm from '../finder'
import { SELECT_OPTIONS } from './../../constants';

const initialValues = {
  playerName: '', // ex: Leonel Messi
  position: '', // ex: Central Midfield
  age: '' // ex: 18
};

const setUp = (props={}) => {
  const component = shallow(<FinderPlayerForm initialValues={ initialValues } 
    onSubmit={ () => {} }  selectOptions={ SELECT_OPTIONS }/>);
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

  it('should not render a level div without params', () => {
    const wrapper = component.find('.level');
    expect(wrapper.length).toBe(0);
  });
  
});