import React, { Component } from 'react';


export class SpeakerItem extends Component {
    render() {
        return (
            <div className="row">
                <div>.</div>
                <div className="col-md-2">
                    <img className="BadgesListItem__avatar" src={this.props.badge.avatarUrl} alt={`${this.props.badge.firstName} ${this.props.badge.lastName}`} />
                </div>
                <div className="col-md-8">
                    <strong>
                        {this.props.badge.firstName} {this.props.badge.lastName}
                    </strong>
                    <br />@{this.props.badge.twitter}
                    <br />
                    {this.props.badge.jobTitle}
                </div>
            </div>
        );
    }
}
