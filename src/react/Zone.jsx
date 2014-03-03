/** @jsx React.DOM */

var React = require('react');
var Trash = require('./Trash.jsx');
var Deck = require('./Deck.jsx');
var Hand = require('./Hand.jsx');
var PlayArea = require('./PlayArea.jsx');
var InsulaPrimalis = require('./../../data/environments/InsulaPrimalis.js');
var BuildDeck = require('./../js/BuildDeck.js');

InsulaPrimalisDeck = BuildDeck(InsulaPrimalis);
console.log(InsulaPrimalisDeck);

module.exports = React.createClass({
    render: function() {
        console.log(this.props.type);
        return (
            <div className="zone">
                <Trash />
                <Deck />
                <Hand />
                <PlayArea />
            </div>
        )
    }
});
