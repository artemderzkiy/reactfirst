import React from 'react';

export default class Search extends React.Component {
	render() {
		return (
			<div>
			
			<label>Find name</label>
			<input type="search" ref="name" placeholder="Type name"/>
			
			</div>
			)
	}


// handleForm(e) {
// 		e.preventDefault();
// 		let name = this.refs.name.value;
// 		this.props.fetchData(name);
// 		this.refs.name.value = '';
// 	}

 }


 
