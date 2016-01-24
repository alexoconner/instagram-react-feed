
import EventEmitter from 'events';
import { EVENTS } from './constants.js';

class InstagramStore extends EventEmitter {
    constructor(props) {
        super();

        this.twitterApiURL = props.url;
        this.feed = {}
    }

    fetch() {
        fetch(
            this.twitterApiURL, {
                mode: 'no-cors'
            })
            .then( res => {
                if ( res.status !== 0 ) {
                    throw new Error( 'Fetch api/twitter feed error' );
                }
                return res;
            })
            .then( res => res.json() )
            .then( json => {
                this.feed = json.items;

                this.emit( EVENTS.UPDATE, this.feed )
            })
            .catch( err => {
                console.error( err )
            });

        console.log(this.feed);

        return this.feed;

    }
}

//var props = {
//    url: 'http://whateverorigin.org/get?url=' + encodeURIComponent('https://www.instagram.com/alexanderskrabl/media')
//};
var props = {
    url: 'https://www.instagram.com/alexanderskrabl/media'
};

export default new InstagramStore(props);