const React = require('react');
const ReactDOM = require('react-dom');

const domElement = document.getElementById('react-application')

const templateConst =
<div className="body">
    <div className="header">
        <h1>Titolo</h1>
        <h2>Sotto titolo</h2>
        <p>Abstract</p>

    </div>
</div>;


class ReactClass extends React.Component {

    constructor () {
        super();
        this.state = {
            isHidden: true,
            title: 'Componente Ract con stato'
        };
    };

    handleClick() {

        this.setState({

            isHidden: !this.state.isHidden,

        });

    };

    render() {

        const header = React.createElement('h1',{
            className:'header',
            key: 'header', },
            this.state.title
        );

        const buttonElement = React.createElement('button',{

            className:'bottone',
            onClick: this.handleClick.bind(this),
            key: 'button' },
            'Toggle Header.react'
        );

        if (this.state.isHidden) {

           return React.createElement('article',null,[buttonElement] );

        };

        return React.createElement('article',null,[header,buttonElement] );
    }

};


class ReactClassStateless extends React.Component {

    render() {

        const headerStateless = React.createElement('h3',{key:'prova'}, this.props.titleEl);

        return React.createElement('article',null,[headerStateless] );
    }

};

const ReactComponentElement =  React.createElement( ReactClass,{titleEl:'ma', key:'ReactComponentElement'} );
const ReactComponentStatelessElement =  React.createElement( ReactClassStateless,{titleEl:'Componente senza stato', key:'ReactComponentStatelessElement'} );

const ReactComponent =  ReactDOM.render( [ReactComponentElement, ReactComponentStatelessElement], domElement);