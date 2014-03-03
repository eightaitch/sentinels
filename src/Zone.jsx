/** @jsx React.DOM */

var React = require('react');
var Trash = require('./Trash.jsx');
var Deck = require('./Deck.jsx');
var Hand = require('./Hand.jsx');
var PlayArea = require('./PlayArea.jsx');

module.exports = React.createClass({
    render: function() {
        return (
            <div className="zone">
                Zone
                <Trash />
                <Deck />
                <Hand />
                <PlayArea />
            </div>
        )
    }
});
