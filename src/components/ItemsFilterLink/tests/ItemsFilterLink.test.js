import ItemsFilterLink from '../index'
import ItemLink from '../../ItemLink/index'
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store'  
import React from 'react';
import {Provider} from 'react-redux'

describe('ItemsFilterLink - Mount plus wrapping in Provider', () => {
    const initialState = {active:false, visibilityFilter:'Tests'}
    const mockStore = configureStore()
    let store, wrapper

    beforeEach(() => {
        store = mockStore(initialState)
        wrapper = mount(<Provider store={store}><ItemsFilterLink filter='Test'>Test</ItemsFilterLink></Provider>)
    })

    it('should render connected smart component without crashing - Mounted', () => {
        expect(wrapper.find(ItemsFilterLink).length).toEqual(1)
    })

    it('should check prop matches with the initialstate - Mounted', () => {
        expect(wrapper.find(ItemLink).prop('active')).toEqual(initialState.active)
    })
})