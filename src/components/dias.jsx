import React, { Component } from 'react';

export class Dias extends Component {


    render() {
        return (
            <div>{this.props.dias.map((dia, i) => <span key={`dia-${i}`} className="dia">{dia}</span>)}</div>
        )

    }
}