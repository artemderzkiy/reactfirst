import React from "react";

export default class OneString extends React.Component 
{
	render()
	{
		const user=this.props.user;
		const update=this.props.update;
		const index=this.props.index;
		return (
			<tr onClick={()=>update({active:index})}>
			<td>{user.first_name}</td>
			<td>{user.last_name}</td>
			<td><img src={user.avatar} height=" 40px"  alt="wait loading"/></td>
			</tr>
			)
	}
}