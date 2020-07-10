import React, { Component } from 'react';
import { SpeakerList } from '../components/SpeakerList';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import api from '../services/SpeakerService';
import PageLoading from '../utils/PageLoading';
import MiniLoader from '../utils/MiniLoader';


export class Speakers extends Component {


    state = {
        loading: true,
        error: null,
        data: undefined,
    };

    componentDidMount() {
        this.fetchData();
        this.intervalId = setInterval(this.fetchData, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.speakers.list();
            this.setState({ loading: false, data: data });
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };

    render() {

        if (this.state.loading === true && !this.state.data) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return `Error: ${this.state.error.message}`;
        }



        return (
            <div className="row">
                <div className="col-md-12  text-right">
                    <NavLink tag={Link} className="col-md-2 btn btn-primary" to="/Speaker">New speaker</NavLink>
                    <br />
                </div>
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SpeakerList badges={this.state.data} />
                    {this.state.loading && <MiniLoader />}
                </div>
                <div className="col-md-3"></div>
            </div>
        );
    }




   
}