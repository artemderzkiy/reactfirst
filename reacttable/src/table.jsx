import React from 'react';
import OneString from './onestring';
import Toolbar from './sort';



export default ({ data, update }) => {
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
          <th>Last name
          <Toolbar />
          </th>
          <th>Avatar</th>
           </tr>
      </thead>

      <tbody>
        {users}
      </tbody>
    </table>
    
  );
};