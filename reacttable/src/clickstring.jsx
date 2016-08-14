import React from 'react';

export default ({data,active}) => {
	if (!data || !data[active]) {return <p>...Loading</p>}

const user=data[active];

return (
	<div>
	<img src={user.avatar}/>
	<h3>{user.first_name}</h3>
	<h3>{user.last_name}</h3>
	<h3>{user.email}</h3>
	<h3>{user.gender}</h3>
	</div>	
	)

}