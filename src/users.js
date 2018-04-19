import React, { Component } from 'react'
import {connect} from 'react-redux'

class Users extends Component {
	render() {
		console.log('here',this.props.users);
		return (
			<div>
				lol
			</div>
		)
	}
}
const mapStateToProps = (state)=>{
	return{
		users:state
	}
}
export default connect(mapStateToProps)(Users)