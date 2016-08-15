import React from 'react';

export default class Toolbar extends React.Component {
  constructor(props) {
    super(props);
    this.sorted = { last_name: true};
    //console.log(this.props)
  }

  sort(type) {
    const { update, data } = this.props;
    console.log(this.props)
    const isSorted = this.sorted[type];
    let direction = isSorted ? 1 : -1;

    const sorted = [].slice.call(data).sort((a, b) => {
      if (a[type] === b[type]) { return 0; }
      return a[type] > b[type] ? direction : direction * -1;
    });

    this.sorted[type] = !isSorted;

    update({
      data: sorted,
      active: 0
    });
  }

  reset() {
    this.props.update({
      data: this.props.initialData,
      term: '',
      active: 0
    });
  }


  render() {
    return (
      <div className="btntoolbar">
      <button type="button" onClick={() => this.sort('last_name')} className="btn btn-primary"><span className=" glyphicon glyphicon-sort-by-alphabet" aria-hidden="true"></span>  Sort Last Name</button>  
      <button type="button" onClick= {this.reset.bind(this)} className="btn btn-warning"><span className="glyphicon glyphicon-refresh" aria-hidden="true"></span>  Res Sort</button>
      </div>
      );
  }
}