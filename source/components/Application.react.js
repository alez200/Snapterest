const React = require('react');

const Stream = require('./Stream.react');
const Collection = require('./Collection.react');


class Application extends React.Component {

    constructor(){

        super();
        this.state = {
            collectionTweet:{},
        };

    };

    addTweetToCollection( tweet ){

        const collectionTweet = this.state.collectionTweet;

        collectionTweet[tweet.id] = tweet;

        this.setState({

            collectionTweet: collectionTweet,

        });

    };


    removeTweetFromCollection( tweet ){

        const collectionTweet = this.state.collectionTweet;

        delete collectionTweet[tweet.id];

        this.setState({

            collectionTweet: collectionTweet,

        });


    };

    removeAllTweetsFromCollection(){

        this.setState({

            collectionTweet:{},

        });


    };

    render(){

        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-4 text-center">

                        <Stream onAddTweetToCollection={ this.addTweetToCollection.bind(this) }/>

                    </div>

                    <div className="col-md-8">

                        <Collection
                            tweets={this.state.collectionTweet}
                            onRemoveTweetFromCollection={ this.removeTweetFromCollection.bind(this) }
                            onremoveAllTweetsFromCollection ={ this.removeAllTweetsFromCollection.bind(this)} />

                    </div>

                </div>
            </div>
        )

    }

}


module.exports = Application;