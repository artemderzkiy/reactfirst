import React from 'react';
import OneString from './onestring';



export default ({ data, update }) => {
  if (!data) { return (<p>Loading...</p>); }

  const users = data.map((user, index) => {
    return (<OneString user={user} index={index} key={`user-${index}`} update={update} />);
  });

  return (
    <table>
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
};