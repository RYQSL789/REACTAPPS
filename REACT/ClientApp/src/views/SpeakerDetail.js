import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PageLoading from '../utils/PageLoading';
import PageError from '../utils/PageError';
import SpeakerView from '../components/SpeakerView';
import api from '../services/SpeakerService';


export class SpeakerDetail extends Component {

    state = {
        loading: true,
        error: null,
        data: undefined,
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.speakers.read(this.props.match.params.idspeaker);
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };


    render() {

        if (this.state.loading) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error} />;
        }

        const badge = this.state.data;


        return(<h1>sdfsdfsdfsd</h1> )

    }


}