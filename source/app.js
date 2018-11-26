const React = require('react');
const ReactDOM = require('react-dom');
const domElement = document.getElementById('react-application');

const Application = require('./components/Application.react')

ReactDOM.render( <Application/>, domElement);