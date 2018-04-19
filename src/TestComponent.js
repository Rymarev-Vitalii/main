import React, { Component } from 'react'
import {Provider} from 'react-redux'
//import { createStore, applyMiddleware } from 'redux'
import { createStore} from 'redux'
import Chat from './chat'
import Reducer from './reducers.js'


const store = createStore(Reducer)
window.store=store

export default class TestComp extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<Chat/>
				</div>
			</Provider>
		)
	}
}
