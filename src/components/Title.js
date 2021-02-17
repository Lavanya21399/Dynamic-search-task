import React, { Component } from 'react'
import ApiFetch from '../components/ApiFetch'

export class Title extends Component {
   constructor(props) {
       super(props)
   
       this.state = {
            data:[]
       }
   }
   
    componentDidMount = async () => {
        let apivalue = await ApiFetch();
        this.setState({ loading: false, data: apivalue })
    }


    render() {
        console.log(this.state.data)
        return (
            <div>   
              <ul>{

            this.state.data.map(datas=>(
            <li>{datas.title}</li> 
            
           

            
             )) }
                  </ul>  

            </div>
        )
    }
}
export default Title
