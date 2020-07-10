import React, { Component } from 'react';
import { SpeakerView } from '../components/SpeakerView';
import { SpeakerForm } from '../components/SpeakerForm';
import api from '../services/SpeakerService';
import PageLoading from '../utils/PageLoading';

export class Speaker extends Component {

    state = {
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
            form: {
                firstName: '',
                lastName: '',
                email: '',
                jobTitle: '',
                twitter: '',
                avatarUrl: '',
            },
        },
    };

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };


    handleSubmit = async e => {
        e.preventDefault();
        this.setState({ loading: true, error: null });

        try {
            await api.speakers.create(this.state.form);
            this.setState({ loading: false });
            this.props.history.push('/speakers');
        } catch (error) {
            this.setState({ loading: false, error: error });
        }
    };


    render() {

        if (this.state.loading === true) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return `Error: ${this.state.error.message}`;
        }


        return (


            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <SpeakerView
                                firstName={this.state.form.firstName || "Fisrt Name"}
                                lastName={this.state.form.lastName || "Last Name"}
                                twitter={this.state.form.twitter || "Twitter"}
                                jobTitle={this.state.form.jobTitle || "Job Title"}
                                email={this.state.form.email || "Email"}
                            />
                        </div>

                        <div className="col-6">
                            <h1>New Attendant</h1>
                            <SpeakerForm
                                onChange={this.handleChange}
                                formValues={this.state.form}
                                onSubmit={this.handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}