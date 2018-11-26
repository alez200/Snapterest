const React = require('react');
const Header = require('./Header.react');
const Button = require('./Button.react');
const CollectionRenameForm = require('./CollectionRenameForm.react');
const CollectionExportForm = require('./CollectionExportForm.react');


class CollectionControls extends React.Component {

    constructor(){
        super();
        this.state = {
            name:'new',
            isEditingName: false
        };

    };

    getHeaderText() {

        const numberOfTweetInCollection= this.props.numberOfTweetsInCollection;
        let text = numberOfTweetInCollection;

        if ( numberOfTweetInCollection === 1 ){
            text = text + ' tweet in your ';
        } else {
            text = text + ' tweet in yours ';
        }

        return(
            <span> {text} <strong>{this.state.name}</strong> collection </span>
        )

    };

    toggleEditCollectionName(){


    }

    render() {

    };
};

module.exports = CollectionControls;