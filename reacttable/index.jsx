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
              <Search term={this.state.term} data={this.initialData}  update={this.updateData.bind(this)} /> 
            <div className="row">
                <div className="col-sm-3 col-md-3">
                    <ClickString data={this.state.data} active={this.state.active}/>
                </div>
                <div className="col-sm-9 col-md-9">       
                    <Table data={this.state.data} update={this.updateData.bind(this)} />
                </div>
            </div> 

        </div>
        )
}
}

ReactDOM.render(<Dratuti /> , document.getElementById("app"));

