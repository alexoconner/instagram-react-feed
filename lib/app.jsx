
import React from 'react';
import ReactDOM from 'react-dom';

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

console.log('test app');

//function render() {
ReactDOM.render( <InstagramFeedApp />, document.getElementById( 'App' ) );
//}

// for debbuging
//window.render = render;