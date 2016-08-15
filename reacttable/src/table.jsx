import React from 'react';
import OneString from './onestring';


export default class Table extends React.Component {
  constructor(props) 
  {
    super(props);  
  }

  render(){
   let data=this.props.data;
   let update=this.props.update;
   if (!data) { return (<p>Loading!! WAIT!!</p>); }
   const users = data.map((user, index) => {
    return (
      <OneString user={user} index={index} key={`user-${index}`} update={update} />
      );
  });

   return (
     
    <table className="table table-hover">
    <thead>
    <tr>
    <th>First name</th>
    <th>Last name</th>
    <th>Avatar</th>
    </tr>
    </thead>

    <tbody>
    {users}
    </tbody>
    </table>
    
    );

 }
}
