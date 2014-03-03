/** @jsx React.DOM */

var React = require('react');
var Zone = require('./Zone.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            heroes: 1
        };
    },
    render: function() {
        var heroes = function() {
            for(i=0; i<this.state.heroes; i++) {
                return <Zone />;
            }
        }.call(this);
        return (
            <div className="board">
                Board
                <Zone />
                <Zone />
                {heroes}
            </div>
        )
    }
});
