import React from 'react'
import { shallow } from 'enzyme'
import Header from '../header'
import { COMPONENT_TITLE } from './../../constants';
import checkPropTypes from 'check-prop-types';

const setUp = (props={}) => {
  const component = shallow(<Header {...props} />);
  return component;
}

const findByTestAtrr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`);
  return wrapper;
}

describe('Header component', () => { 
  
  describe('Checking PropTypes', () => {
    
    it('should not throw a warning', () => {
      const expectedProps = {
        title: "title"
      }
      const propsErr = checkPropTypes(Header.propTypes, expectedProps, 'props', Header.name);
      expect(propsErr).toBeUndefined();

    });

  });

  describe('Have props', () => {
    let component;
    beforeEach(() => {
      const props = { COMPONENT_TITLE }
      component = setUp(props);
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
  });

  describe('No Have props', () => {
    let component;
    beforeEach(() => {
      component = setUp();
    });
  
    it('should render a title div', () => {
      const title = findByTestAtrr(component, 'title');
      expect(title.length).toBe(1);
      // expect(title.text()).to.equal("");
    });
  });

});