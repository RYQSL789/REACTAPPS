import React from 'react';
import gui from '../services/Guid';

// Aprende más del Gravatar en: http://gravatar.com
function Gravatar(props) {
    const hash = gui(32);
    const url = 'https://www.gravatar.com/avatar/' + hash + '?d=identicon';
    console.log(url);
    return (
        <img src={url} alt="Avatar" />
    );
}

export default Gravatar;