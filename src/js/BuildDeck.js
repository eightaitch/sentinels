module.exports = function(cards) {
    var _ = require('lodash'),
        deck = [];

    _.forEach(cards, function(card) {
        var c = {};
        if (card.front) {
            c.front = card.front;
        }
        if (card.back) {
            c.back = card.back;
        }
        for (i=0; i<card.count; i++) {
            deck.push(c);
        }
    });

    return deck;
}
