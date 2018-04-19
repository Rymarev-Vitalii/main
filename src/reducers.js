import { combineReducers } from 'redux'


const userState=['Alex','Petya']
const messagesState = [
	{ 
		text: 'Hello World!',
		datetime: 1486912946322,
		author: '@alex_1989' 
	},
	{ 
		text: 'Hi, Alex', 
		datetime: 1486912996322,
		author: '@chris' 
	},
]

const usersReducer = (state = userState, action) => {
	if( action.type === 'ADD_NEW_USER' ) {
		return state.concat(action.username)
	}
	return state
}

const messagesReducer = (state = messagesState, action) => {
	if( action.type === 'ADD_NEW_MESSAGE' ) {
		return state.concat({
			text: action.text,
			datetime: action.datetime,
			author: action.author
		})
	}
	return state
}

export default combineReducers({
	usersReducer,
	messagesReducer
})