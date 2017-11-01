import ItemsFilterLink from '../index'
import { shallow, mount } from 'enzyme';
import configureStore from 'redux-mock-store'  
import React from 'react';
import {Provider} from 'react-redux'


describe('ItemsFilterLink - Shallow plus passing the store directly', () => { 
   
    const initialState = {active:false, visibilityFilter:'Test'}
    const mockStore = configureStore()
    let store, container

    beforeEach(() => {
        store = mockStore(initialState)
        container = shallow(<ItemsFilterLink filter='Tests' store={store}>Test</ItemsFilterLink>)
    })

    it('should render connected smart component without crashing', () => {
        expect(container.length).toEqual(1)
    })

    it('should check prop matches with the initialstate', () => {
        expect(container.prop('active')).toEqual(initialState.active)
    })
})