import React, { Component } from 'react';

import Featured from './featured';

const URL = "https://api.myjson.com/bins/11rzz8";
class Home extends Component{

   
    constructor( props ){
        super( props );
        this.state = {
            home: ''
        }
    }

    componentDidMount(){
        fetch( URL, { method: 'GET' }).then( response => { 
            return response.json();
        }).then( json => {
            this.setState({
                home: json.home
            })
        });
    }

    render(){
        return(
            <div>
                <Featured slides={ this.state.home.slider } />
            </div>
        )
    }
}

export default Home;