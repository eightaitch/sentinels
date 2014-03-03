/** @jsx React.DOM */

var React = require('react');

module.exports = React.createClass({
    render: function() {
        console.log(this.props.cards);
        var deck= this.props.cards.length > 0
            ? <span className="card-back">Insula Primalis</span>
            : <span className="empty-deck">Insula Primalis</span>;
        return (
            <div className="deck">
                <div className="card">
                    {deck}
                </div>
            </div>
        )
    }
});
