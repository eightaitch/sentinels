/** @jsx React.DOM */

var React = require('react');
var Environment = require('./src/Environment.jsx');
var Heroes = require('./src/Heroes.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="board">
                <Environment />
                <Villain />
                <Heroes />
            </div>
        )
    }
});
