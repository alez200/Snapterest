const React = require('react');
const ReactDOM = require('react-dom');
const Header = require('./Header.react');
const Tweet = require('./Tweet.react');


class StreamTweet extends React.Component {

    constructor(){

        super();

        console.log('[Snapterest]StreamTweet: 1. running  constructor()');

        this.state = {
            numberOfCharactersIsIncreasing: null,
            headerText: null,
        };

    };

    componentWillMount(){
        console.log('[Snapterest]StreamTweet: 2. running  componentWillMount()');

        this.setState({
            numberOfCharactersIsIncreasing: true,
            headerText: 'Latest public photo from twitter',
        });

        window.snapterest = {

            numberOfReceivedTweet: 1,
            numberOfDisplayedTweet: 1,

        }
    };

    componentDidMount(){
        console.log('[Snapterest]StreamTweet: 3. running  componentDidMount()');

        const componentDOMRepresentation=ReactDOM.findDOMNode(this);

        window.snapterest.headerHtml= componentDOMRepresentation.children[0].outerHTML;
        window.snapterest.tweetHtml= componentDOMRepresentation.children[1].outerHTML;;

    };

    UNSAFE_componentWillReceiveProps(nextProps){
        console.log('[Snapterest]StreamTweet: 4. running  componentWillReceiveProps()');

        const currentTweetLength =this.props.tweet.text.length;
        const nextTweetLength = nextProps.tweet.text.length;
        const isNumberOfCharactersInceasing = (nextTweetLength > currentTweetLength);
        let headerText;

        this.setState({
            numberOfCharactersIsIncreasing:isNumberOfCharactersInceasing,
        });

        if ( isNumberOfCharactersInceasing ){
            headerText = 'Number of Characters is increasing';
        } else {
            headerText= 'Latest public photo from twitter';
        };

        this.setState({
            headerText: headerText,
        });

        window.snapterest.numberOfReceivedTweet++;

    };

    shouldComponentUpdate(nextProps, nextState){
        console.log('[Snapterest]StreamTweet: 5. running  shouldComponentUpdate()');

        return(nextProps.tweet.text.length > 1);

    };

    UNSAFE_componentWillUpdate(nextProps){
        console.log('[Snapterest]StreamTweet: 6. running  componentWillUpdate()');

        return(nextProps.tweet.text.length > 1);

    };

    componentDidUpdate(prevProps, prevState){
        console.log('[Snapterest]StreamTweet: 7. running  componentDidUpdate()');

        window.snapterest.numberOfDisplayedTweet++;

    };

    componentWillUnmount(){
        console.log('[Snapterest]StreamTweet: 8. running  componentWillUnmount()');

        delete window.snapterest;
    };

    render() {

        console.log('[Snapterest]StreamTweet: running  render()');

        return (
            <section>
                <Header text={this.state.headerText} />
                <Tweet
                    tweet={this.props.tweet}
                    onImageClick={this.props.onAddTweetToCollection}

                />

            </section>

        );

    };

};

module.exports = StreamTweet;