const React = require('react');
const ReactDOMServer = require('react-dom/server');
const CollectionControls = require('./CollectionControls.react');
const TweetList = require('./TweetList.react');
const Header = require('./Header.react');


class Collection extends React.Component {

    createHtmlMarkupStringOfTweetList(){
        const htmlString =  ReactDOMServer.renderToStaticMarkup(
            <TweetList tweets={this.props.tweets} />
        );

        const htmlMarkup = {
            html: htmlString,
        };

        return JSON.stringify(htmlMarkup);
    };

    getListOfTweetIds(){
        return Object.keys(this.props.tweets);
    };

    getNumberOfTweetsInCollection(){

        return this.getListOfTweetIds().length;
    };

    render() {

        let numberOfTweetsInCollection = this.getNumberOfTweetsInCollection();

        if ( numberOfTweetsInCollection > 0 ){

            const tweets = this.props.tweets;
            const htmlMarkup = this.createHtmlMarkupStringOfTweetList();
            const removeAllTweetsFromCollection = this.props.onremoveAllTweetsFromCollection;
            const handleRemoveTweetFromCollection = this.props.onRemoveTweetFromCollection;
            return (
                <div>
                    <CollectionControls
                        numberOfTweetsInCollection={this.getNumberOfTweetsInCollection()}
                        htmlMarkup={htmlMarkup}
                        onRemoveAllTweetsFromCollection={removeAllTweetsFromCollection}

                    />
                    <TweetList
                        tweets={tweets}
                        onRemoveTweetFromCollection={handleRemoveTweetFromCollection}
                    />
                </div>
            );
        };

        return (
            <Header text="Your Collection is empty"/>
        );

    };


};

module.exports = Collection;