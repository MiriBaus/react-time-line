import React, { Component } from 'react';

export class Mes extends Component{


    render(){
        return(
                <div className="card text-white bg-primary mb-3">
                    <div className="card-header"><h3>{this.props.mes}</h3></div>
                </div>
        )
        
    }
}