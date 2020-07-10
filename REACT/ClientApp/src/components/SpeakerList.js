import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { SpeakerItem } from './SpeakerItem';

export class SpeakerList extends Component {
    render() {

        if (this.props.badges.length === 0) {
            return (
                <div>
                    <h3>No dates</h3>
                </div>
            );
        }

        return (
            <div>
                <div>
                    {this.props.badges.map(badge => {
                        return (
                            <div key={badge.id}>
                                <Link className="text-reset text-decoration-none" to={`/speakeredit/${badge.id}`} >
                                    <br />
                                    <SpeakerItem badge={badge} />
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}