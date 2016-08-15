import React from 'react';

export default class ClickString extends React.Component {
	constructor(props)
	{
		super(props);
	}
	render()
	{
		let data=this.props.data;
		//console.log(data)
		let active=this.props.active;
		//console.log(active)
		

		if (!data || !data[active]) {
			return (
				<div className="alert alert-danger" role="alert">
				NOTHING FOUND
				</div>
				)
		}
		let user=data[active];
		return (
			<div className="clickstring">
			<div className="panel panel-default">
			<div className="panel-body"> 
			<img src={user.avatar} height="200px" className="img-circle"/>
			</div>
			</div>	    
			<p><b>first name </b> {user.first_name}</p>  
			<p><b>last name </b> {user.last_name}</p>
			<p><b>e-mail </b>{user.email}</p>
			<p><b>gender</b> {user.gender}</p>	
			</div>	
			)
	}
}