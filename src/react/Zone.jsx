/** @jsx React.DOM */

var React = require('react');
var Trash = require('./Trash.jsx');
var Deck = require('./Deck.jsx');
var Hand = require('./Hand.jsx');
var PlayArea = require('./PlayArea.jsx');
var InsulaPrimalis = require('./../../data/environments/InsulaPrimalis.js');
var BuildDeck = require('./../js/BuildDeck.js');

var deck = BuildDeck(InsulaPrimalis);

module.exports = React.createClass({
    render: function() {
        var className = 'zone '+this.props.type;
        return (
            <div className={className}>
                <Trash />
                <Deck 
                    cards={this.props.type === 'environment' ? deck : {}}
                />
                <Hand />
                <PlayArea />
            </div>
        )
    }
});
