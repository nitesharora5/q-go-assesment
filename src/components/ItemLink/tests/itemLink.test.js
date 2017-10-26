import React from 'react';
import { shallow, mount } from 'enzyme';
import  ItemLink  from '../index';

const defaultProps = {
    active: false,
    children: 'Random text'
  };

  const onFilterChangeMock = jest.fn();

  describe('ItemsLink', () => {
    it('renders without crashing', () => {
      shallow(<ItemLink {...defaultProps}  onFilterChange={onFilterChangeMock} />);
    });

    it('should render span as parent element if active prop is set to true', () =>{
      const active = true
      const renderedItem = mount(<ItemLink {...defaultProps} active={active} onFilterChange={onFilterChangeMock} />);
      expect(renderedItem.find('span').length).toBe(1)
    })

    it('should render button as parent element if active prop is set to false', () =>{
      const active = false
      const renderedItem = mount(<ItemLink {...defaultProps} active={active} onFilterChange={onFilterChangeMock} />);
      expect(renderedItem.find('button').length).toBe(1)
    })

    it('should render button text when children prop is set',() =>{
      const active = false
      const children = 'RandomText'
      const renderedItem = mount(<ItemLink children={children} active={active} onFilterChange={onFilterChangeMock} />);
      expect(renderedItem.find('button').props().children).toBe('RandomText')
    })

    it('should call onFilterChange when a filter button is click', () => { 
      const active = false
      const renderedItem = mount(<ItemLink {...defaultProps} active={active} onFilterChange={onFilterChangeMock} />);
      renderedItem.find('button').simulate('click')
      expect(onFilterChangeMock.mock.calls.length).toBe(1);
    });

});