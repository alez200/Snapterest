const React = require('react');
const SnapkiteStreamClient = require('snapkite-stream-client');
const StreamTweet = require('./StreamTweet.react');
const Header = require('./Header.react');



class Stream extends React.Component {

    constructor(){

        super();
        this.state = {
            tweet:null,
        };

    };

    componentDidMount(){
        SnapkiteStreamClient.initializeStream(this.handleNewTweet.bind(this));
    };

    componentWillUnmount(){
        SnapkiteStreamClient.destroyStream();
    };


    handleNewTweet(tweet){

        this.setState({

            tweet:tweet,

        });

    }

    render() {

        const tweet = this.state.tweet;

        if (tweet) {
            return(
                <StreamTweet
                    tweet={tweet}
                    onAddTweetToCollection={this.props.onAddTweetToCollection}
                />
            );

        }

        return (
           <Header text="waiting for public photos from Twitter" />
        );

    };

};

module.exports = Stream;