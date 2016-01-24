
import React from 'react';
import ReactDOM from 'react-dom';
import { EVENTS } from './constants.js';
import InstagramStore from './store.js';

class InstagramFeedApp extends React.Component {
    constructor( props ) {
        super( props )
    }

    render() {
        return (
            <div>
                Instagram Feed App
            </div>
        )
    }
}

function render() {
    ReactDOM.render( <InstagramFeedApp />, document.getElementById( 'App' ) );
}

InstagramStore.on( EVENTS.UPDATE, render );

InstagramStore.fetch();

// for debbuging
window.render = render;