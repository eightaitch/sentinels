/** @jsx React.DOM */

var React = require('react');
var PlayArea = require('./PlayArea.jsx');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            heroes: 1
        };
    },
    render: function() {
        console.log('Board:render');
        var heroes = '';
        for(i=0; i<this.state.heroes; i++) {
            heroes += <PlayArea />;
        }
        return (
            <div className="board">
                Board
                <PlayArea />
                <PlayArea />
                {heroes}
            </div>
        )
    }
});
