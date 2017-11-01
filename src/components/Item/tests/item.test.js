import React from 'react';
import { shallow, mount } from 'enzyme';
import  Item  from '../index'


const defaultProps = {
    item: {},
  };
const onToggleMock = jest.fn();
const onDeleteMock = jest.fn();

describe('Item', () => {
    it('should be rendered without crashing', () => {
        shallow(<Item {...defaultProps}  onToggle={onToggleMock}  onDelete={onDeleteMock}/>)
    })

    it('should render item as list item', () => {
      const item = { id: 1, content: 'Test 1', completed: false };
      const renderedItem = shallow(<Item {...defaultProps} item={item} onToggle={onToggleMock} onDelete={onDeleteMock}  />);
      expect(renderedItem.find('li')).toHaveLength(1);
    });

    it('should call onToggle when a todo item is clicked', () =>{
        const item = { id: 1, content: 'Test 1', completed: false };
        const renderedItem = mount(<Item {...defaultProps} item={item} onToggle={onToggleMock} onDelete={onDeleteMock} />);
    
        renderedItem.find('.to-be-done').simulate('click');
        expect(onToggleMock.mock.calls.length).toBe(1);
      })
    
      it('should call onDelete when X of a todo item is clicked', () =>{
        const item = { id: 1, content: 'Test 1', completed: false };
        const renderedItem = mount(<Item {...defaultProps} item={item} onToggle={onToggleMock} onDelete={onDeleteMock} />);
    
        renderedItem.find('.delete-item').simulate('click');
        expect(onDeleteMock.mock.calls.length).toBe(1);
      })

})