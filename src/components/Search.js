import React, { Component } from 'react'
import ApiFetch  from '../components/ApiFetch'
export default class Searchpage extends Component {
    state = {
        searchValue: '',
        data: []
    }
    componentDidMount = async () => {
        let apivalue = await ApiFetch();
        this.setState({ loading: false, data: apivalue })
    }

    toSearch = (e) => {
        this.setState({ searchValue: e.target.value.toLowerCase().trim() })
    }
     render() {
            let filter = this.state.data.filter((post) => {
            return (post.title).indexOf(this.state.searchValue) !== -1 || (post.body).indexOf(this.state.searchValue) !== -1;
        }
     );

  return (
            <div>
                <input className="input" type="text" value={this.state.searchValue} placeholder="Enter the keyword to search" onChange={this.toSearch}></input>
                <div>
                    {
                        filter.map((post, index) =>
                            <ul className="posts" key={index}>
                                <li className="list" >
                                    <div className="post">
                                        <div className="post-title">
                                            {post.title}
                                        </div>
                                        <div className="post-body">
                                            {post.body}
                                        </div>
                                    </div>
                           </li>      
                           </ul>
                        )
                    }
                </div>
            </div>
        )
    }
}