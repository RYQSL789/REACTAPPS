import React, { Component } from 'react';
import Gravatar from '../utils/Gravatar';


export class SpeakerView extends Component {

    render() {

        return (
            <div className="">
                <div className="">
                    <Gravatar className="" email={this.props.email} />
                    <h1>{this.props.firstName} <br /> {this.props.lastName}</h1>
                </div>
                <div className="">
                    <h3>{this.props.jobTitle}</h3>
                    <div>{this.props.email}</div>
                    <div>@{this.props.twitter}</div>
                </div>
                <div className=""></div>
            </div>
        );
    }
}