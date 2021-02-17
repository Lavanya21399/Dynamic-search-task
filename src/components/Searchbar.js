import React, { Component } from 'react'
//import ApiFetch from '../components/ApiFetch'
import DataContainer from '../components/DataContainer'
import Title from '../components/Title'
export class Searchbar extends Component {
    state={
        data:[],
        searchTerm:''
    }
   
    
    editSearchTerm = (e) => {
        this.setState({searchTerm : e.target.data})
    }
    dynamicSearch = () =>{
        return this.state.data.filter(title => title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
    }
    render() {
        return (
            <div>
                <input type = 'text'onChange = {this.editSearchTerm} placeholder = 'search the list'/>
                <br></br>
                <h3>Lists of posts</h3>
                <DataContainer data = {this.dynamicSearch()}/>
                
            </div>
        ); 
        
    }
}

export default Searchbar
