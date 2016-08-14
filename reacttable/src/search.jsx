import React from 'react';

export default ({ term, data, update }) => {

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
  );
};