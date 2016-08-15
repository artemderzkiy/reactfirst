import React from 'react';


export default class Search extends React.Component {
	constructor(props) 
	{
		super(props);		
	}
	render() 
	{
		let term=this.props.term;
		let data=this.props.data;
		let update=this.props.update;
		const dataSearch = e => {
			const value = e.target.value.toLowerCase();

			const filter = data.filter(user => {
				return user.last_name.toLowerCase().includes(value);
			});

			update({
				data: filter,
				active: 0,
				term: value
			});

		};


		return (
			<div className="searchbar">
			<input
			value={term}
			type="text"
			className="form-control"
			placeholder="Search by last name"
			onChange={dataSearch}
			/>
			</div>
			)
	}
}
// 	

// export default ({ term, data, update }) => {

//   const dataSearch = e => {
//     const value = e.target.value.toLowerCase();

//     const filter = data.filter(user => {
//       return user.last_name.toLowerCase().includes(value);
//     });

//     update({
//       data: filter,
//       active: 0,
//       term: value
//     });

//   };

//   return (
//     <div className="searchbar">
//       <input
//         value={term}
//         type="text"
//         className="form-control"
//         placeholder="Search by last name"
//         onChange={dataSearch}
//       />
//     </div>
//   );
// };