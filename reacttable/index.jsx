//require("./index.css");
import React from 'react';
import ReactDOM from 'react-dom';
import Search from './src/search';
import {API} from './src/utils/constants';



class Dratuti extends React.Component {
    constructor(props) {
        super(props)

// this.state = {
//     id: '',
//     first_name: "",
//     last_name: "",
//     email: '',
//     gender: "",
//     avatar: ""
//     }
 }


fetchData() {
    let url = '${API}';
    fetch(url, {method:'GET'})
    .then((res)=>res.json())
    
    .catch((error)=> console.log("error SUKA BLYAT" + error))

}

render() {
    return (
        <div>
        <Search fetchData={this.fetchData.bind(this)} />
        <h1>DRATUTI</h1>
        <img src="https://pp.vk.me/c543105/v543105541/21d59/RARcrSvPLZI.jpg"/>
        </div>
        )
}
}
//Dratuti.fetchData();
ReactDOM.render(<Dratuti /> , document.getElementById("app"));

