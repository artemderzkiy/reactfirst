require("./index.css");
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './src/search';
import Table from './src/table';
import ClickString from './src/clickstring';
import {API} from './src/utils/constants';
import loadProm from './src/utils/loadProm';


class Dratuti extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
           data : null,
           active : 0,
           term : ''
       }
       this.loadData();
   }



   loadData() {
    let url = `${API}`
    loadProm(url)
    .then(users => {
      this.initialData = JSON.parse(users);
      console.log(this.initialData);
      this.setState({
        data: this.initialData
    });
  });
}

 updateData(config) {
    this.setState(config);
  }



render() {
    return (
        <div >
        <ClickString data={this.state.data} active={this.state.active} />
        <Search  />

        <Table data={this.state.data} update={this.updateData.bind(this)} />


        <h1>DRATUTI</h1>
        <img src="https://pp.vk.me/c543105/v543105541/21d59/RARcrSvPLZI.jpg"/>
        </div>
        )
}
}

ReactDOM.render(<Dratuti /> , document.getElementById("app"));

