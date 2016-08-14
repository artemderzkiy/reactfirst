import React from 'react';

export default ({data,active}) => {
	if (!data || !data[active]) {
		return (
			<div>
			<p>NOTHING FOUND </p>			
			</div>
			)
	}

const user=data[active];

return (
	<div>
	<img src={user.avatar} height="50px"/>
	<p>first name : {user.first_name}</p>
	<p>last name : {user.last_name}</p>
	<p>e-mail : {user.email}</p>
	<p>gender: {user.gender}</p>
	</div>	
	)

}