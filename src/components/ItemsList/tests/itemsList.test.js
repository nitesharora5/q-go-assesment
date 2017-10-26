import React from 'react';
import { shallow, mount } from 'enzyme';
import { ItemsList } from '../index';

const defaultProps = {
  items: [],
};

const onToggleMock = jest.fn();
const onDeleteMock = jest.fn();

describe('ItemsList', () => {
  it('renders without crashing', () => {
    shallow(<ItemsList {...defaultProps}  onToggle={onToggleMock} onDelete={onDeleteMock}/>);
  });

  it('should display warning message if no items', () => {
    const renderedItem = shallow(<ItemsList {...defaultProps} items={[]} onToggle={onToggleMock} onDelete={onDeleteMock} />);
    expect(renderedItem.find('#items-missing')).toHaveLength(1);
  });

  it('should not display warning message if items are present', () => {
    const items = [{ id: 1, content: 'Test 1', completed: false }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} onToggle={onToggleMock} onDelete={onDeleteMock}  />);
    expect(renderedItem.find('#items-missing')).toHaveLength(0);
  });

  it('should render items as list items', () => {
    const items = [{ id: 1, content: 'Test 1', completed: false }, { id: 2, content: 'Test 2', completed: false }];
    const renderedItem = shallow(<ItemsList {...defaultProps} items={items} onToggle={onToggleMock} onDelete={onDeleteMock}  />);
    expect(renderedItem.find('li')).toHaveLength(2);
  });

  it('should render default item as not done', ()=>{
    const items = [{ id: 1, content: 'Test 1', completed: false }];
    const renderedItem = mount(<ItemsList {...defaultProps} items={items} onToggle={onToggleMock} onDelete={onDeleteMock} />);

    expect(renderedItem.find('.to-be-done').text()).toBe('Test 1 X ');
  })

  it('should call onToggle when a todo item is clicked', () =>{
    const items = [{ id: 1, content: 'Test 1', completed: false }];
    const renderedItem = mount(<ItemsList {...defaultProps} items={items} onToggle={onToggleMock} onDelete={onDeleteMock} />);

    renderedItem.find('.to-be-done').simulate('click');
    expect(onToggleMock.mock.calls.length).toBe(1);
  })

  it('should call onDelete when X of a todo item is clicked', () =>{
    const items = [{ id: 1, content: 'Test 1', completed: false }];
    const renderedItem = mount(<ItemsList {...defaultProps} items={items} onToggle={onToggleMock} onDelete={onDeleteMock} />);

    renderedItem.find('.delete-item').simulate('click');
    expect(onDeleteMock.mock.calls.length).toBe(1);
  })


});
