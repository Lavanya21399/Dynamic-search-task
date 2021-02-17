import React, { Component } from 'react'
import Title from '../components/Title'
export class DataContainer extends Component {
    render() {
        return (
            <div>

                {this.props.data.map(title => <title Title = {title}/>)}
                
            </div>
        )
    }
}

export default DataContainer
