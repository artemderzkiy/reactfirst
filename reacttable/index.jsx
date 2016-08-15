require("./index.css");
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './src/search';
import Table from './src/table';
import ClickString from './src/clickstring';
import Toolbar from './src/sort';
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
      this.initialData = JSON.parse(users).slice(0,30);
      //console.log(this.initialData);
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
        <div>
        <div className="jumbotron">
        <div className="container">
        
        
        <h1>React Hello!</h1>
        <p>A bit of robots</p>  
        </div>
        </div>
        <Search term={this.state.term} data={this.initialData}  update={this.updateData.bind(this)} /> 
        <div className="row">
        <div className="col-sm-12 col-md-3">
        <ClickString data={this.state.data} active={this.state.active}/>
        </div>
        <div className="col-sm-12 col-md-9"> 
        <Toolbar initialData={this.initialData} data={this.state.data} update={this.updateData.bind(this)}/>      
        <Table data={this.state.data} update={this.updateData.bind(this)} />
        </div>
        </div> 

        </div>
        )
}
}

ReactDOM.render(<Dratuti /> , document.getElementById("app"));

