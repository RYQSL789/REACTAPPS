import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './shared/Layout';
import { Home } from './views/Home';
import { FetchData } from './views/FetchData';
import { Counter } from './views/Counter';
import { Speaker } from './views/Speaker';
import { Speakers } from './views/Speakers';
import { SpeakerEdit } from './views/SpeakerEdit';
import { SpeakerDetail } from './views/SpeakerDetail';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/speaker' component={Speaker} />
        <Route exact path='/speakeredit/:idspeaker' component={SpeakerEdit} />
        <Route exact path='/speakerdetail/:idspeaker' component={SpeakerDetail} />
        <Route path='/speakers' component={Speakers} />
      </Layout>
    );
  }
}
