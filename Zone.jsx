/** @jsx React.DOM */

var React = require('react');

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
