import React, { Component } from 'react'
import {connect} from 'react-redux'
import Users from './users'
import faker from 'faker'

class Chat extends Component {
	render() {
		console.log(this.props);
		return (
			<div>
			<button  onClick={()=>this.props.addNewUser(faker.internet.userName())}>add new user</button>
				CHAT
				<Users/>
				<hr/>
				{this.props.users.map(index=>{
					return <div key={index}>{index}</div>
				})}
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return{
		users:state.usersReducer
	}
}
const mapDispatchToProps =(dispatch)=>{
	return{
		addNewUser: (username)=>dispatch({type:'ADD_NEW_USER',username})
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Chat)